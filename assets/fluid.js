/* Fluid "dose" simulation (WebGL2, Navier-Stokes). Move the pointer to deliver dose;
   colours follow the standard radiotherapy dose colour-wash, blue (low) to red (high).
   Beams also arrive on their own and converge on a small tumour so the page is alive without input. */
(function(){
var cv=document.getElementById('fluid');if(!cv)return;
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var gl=cv.getContext('webgl2',{alpha:true,premultipliedAlpha:true,antialias:false,depth:false,stencil:false});
if(!gl||!(gl.getExtension('EXT_color_buffer_float')||gl.getExtension('EXT_color_buffer_half_float')))return;

var P={SIM:128,DYE:512,DEN:1.5,VEL:0.25,PRES:0.8,ITER:18,CURL:22,RAD:0.3,FORCE:5200};
var VS='#version 300 es\nprecision highp float;in vec2 aPosition;out vec2 vUv,vL,vR,vT,vB;uniform vec2 texelSize;void main(){vUv=aPosition*.5+.5;vL=vUv-vec2(texelSize.x,0.);vR=vUv+vec2(texelSize.x,0.);vT=vUv+vec2(0.,texelSize.y);vB=vUv-vec2(0.,texelSize.y);gl_Position=vec4(aPosition,0.,1.);}';
var H='#version 300 es\nprecision highp float;precision highp sampler2D;in vec2 vUv,vL,vR,vT,vB;out vec4 o;';
var FS={
splat:H+'uniform sampler2D uTarget;uniform float aspect;uniform vec3 color;uniform vec2 point;uniform float radius;void main(){vec2 p=vUv-point;p.x*=aspect;vec3 s=exp(-dot(p,p)/radius)*color;o=vec4(texture(uTarget,vUv).xyz+s,1.);}',
advect:H+'uniform sampler2D uVelocity,uSource;uniform vec2 texelSize;uniform float dt,dissipation;void main(){vec2 c=vUv-dt*texture(uVelocity,vUv).xy*texelSize;o=texture(uSource,c)/(1.+dissipation*dt);}',
div:H+'uniform sampler2D uVelocity;void main(){float L=texture(uVelocity,vL).x,R=texture(uVelocity,vR).x,T=texture(uVelocity,vT).y,B=texture(uVelocity,vB).y;vec2 C=texture(uVelocity,vUv).xy;if(vL.x<0.)L=-C.x;if(vR.x>1.)R=-C.x;if(vT.y>1.)T=-C.y;if(vB.y<0.)B=-C.y;o=vec4(.5*(R-L+T-B),0.,0.,1.);}',
curl:H+'uniform sampler2D uVelocity;void main(){float L=texture(uVelocity,vL).y,R=texture(uVelocity,vR).y,T=texture(uVelocity,vT).x,B=texture(uVelocity,vB).x;o=vec4(.5*(R-L-T+B),0.,0.,1.);}',
vort:H+'uniform sampler2D uVelocity,uCurl;uniform float curl,dt;void main(){float L=texture(uCurl,vL).x,R=texture(uCurl,vR).x,T=texture(uCurl,vT).x,B=texture(uCurl,vB).x,C=texture(uCurl,vUv).x;vec2 f=.5*vec2(abs(T)-abs(B),abs(R)-abs(L));f/=length(f)+.0001;f*=curl*C;f.y*=-1.;vec2 v=texture(uVelocity,vUv).xy+f*dt;o=vec4(clamp(v,-1000.,1000.),0.,1.);}',
pres:H+'uniform sampler2D uPressure,uDivergence;void main(){float L=texture(uPressure,vL).x,R=texture(uPressure,vR).x,T=texture(uPressure,vT).x,B=texture(uPressure,vB).x;float d=texture(uDivergence,vUv).x;o=vec4((L+R+B+T-d)*.25,0.,0.,1.);}',
grad:H+'uniform sampler2D uPressure,uVelocity;void main(){float L=texture(uPressure,vL).x,R=texture(uPressure,vR).x,T=texture(uPressure,vT).x,B=texture(uPressure,vB).x;vec2 v=texture(uVelocity,vUv).xy-vec2(R-L,T-B);o=vec4(v,0.,1.);}',
clear:H+'uniform sampler2D uTexture;uniform float value;void main(){o=value*texture(uTexture,vUv);}',
show:H+'uniform sampler2D uTexture;void main(){vec3 c=texture(uTexture,vUv).rgb;float a=clamp(max(c.r,max(c.g,c.b))*1.5,0.,1.);float m=max(max(c.r,max(c.g,c.b)),.0001);o=vec4(c/m*a*.64,a*.64);}'
};
function sh(t,s){var x=gl.createShader(t);gl.shaderSource(x,s);gl.compileShader(x);if(!gl.getShaderParameter(x,gl.COMPILE_STATUS)){console.warn(gl.getShaderInfoLog(x));return null;}return x;}
var vs=sh(gl.VERTEX_SHADER,VS);if(!vs)return;
function prog(f){var p=gl.createProgram(),fs=sh(gl.FRAGMENT_SHADER,f);if(!fs)return null;gl.attachShader(p,vs);gl.attachShader(p,fs);gl.bindAttribLocation(p,0,'aPosition');gl.linkProgram(p);
  if(!gl.getProgramParameter(p,gl.LINK_STATUS)){console.warn(gl.getProgramInfoLog(p));return null;}
  var u={},n=gl.getProgramParameter(p,gl.ACTIVE_UNIFORMS);for(var i=0;i<n;i++){var nm=gl.getActiveUniform(p,i).name;u[nm]=gl.getUniformLocation(p,nm);}return {p:p,u:u};}
var PR={};for(var k in FS){PR[k]=prog(FS[k]);if(!PR[k])return;}
var buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),gl.STATIC_DRAW);
var ib=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,ib);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),gl.STATIC_DRAW);
gl.vertexAttribPointer(0,2,gl.FLOAT,false,0,0);gl.enableVertexAttribArray(0);
function blit(t){if(t){gl.viewport(0,0,t.w,t.h);gl.bindFramebuffer(gl.FRAMEBUFFER,t.fbo);}else{gl.viewport(0,0,gl.drawingBufferWidth,gl.drawingBufferHeight);gl.bindFramebuffer(gl.FRAMEBUFFER,null);}gl.drawElements(gl.TRIANGLES,6,gl.UNSIGNED_SHORT,0);}
function fbo(w,h){var tex=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,tex);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
  gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA16F,w,h,0,gl.RGBA,gl.HALF_FLOAT,null);
  var f=gl.createFramebuffer();gl.bindFramebuffer(gl.FRAMEBUFFER,f);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,tex,0);
  gl.viewport(0,0,w,h);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);
  return {tex:tex,fbo:f,w:w,h:h,tx:1/w,ty:1/h,bind:function(i){gl.activeTexture(gl.TEXTURE0+i);gl.bindTexture(gl.TEXTURE_2D,tex);return i;}};}
function dbl(w,h){var a=fbo(w,h),b=fbo(w,h);return {get r(){return a},get w(){return b},swap:function(){var t=a;a=b;b=t;},tx:1/w,ty:1/h};}
var W,H,asp,vel,dye,prs,dv,cu;
function res(r){var a=W/H;return a>1?{w:Math.round(r*a),h:r}:{w:r,h:Math.round(r/a)};}
function build(){W=innerWidth;H=innerHeight;asp=W/H;cv.width=W;cv.height=H;var s=res(P.SIM),d=res(P.DYE);
  vel=dbl(s.w,s.h);dye=dbl(d.w,d.h);prs=dbl(s.w,s.h);dv=fbo(s.w,s.h);cu=fbo(s.w,s.h);}
function use(n){gl.useProgram(PR[n].p);return PR[n].u;}
function splat(x,y,dx,dy,c,rm){var u=use('splat');
  gl.uniform1i(u.uTarget,vel.r.bind(0));gl.uniform1f(u.aspect,asp);gl.uniform2f(u.point,x,y);gl.uniform3f(u.color,dx,dy,0);
  gl.uniform1f(u.radius,(asp>1?P.RAD*asp:P.RAD)/100*(rm||1));
  blit(vel.w);vel.swap();
  gl.uniform1i(u.uTarget,dye.r.bind(0));gl.uniform3f(u.color,c[0],c[1],c[2]);blit(dye.w);dye.swap();}
function setTexel(u,t){if(u.texelSize)gl.uniform2f(u.texelSize,t.tx,t.ty);}
function step(dt){var u;
  u=use('curl');setTexel(u,vel);gl.uniform1i(u.uVelocity,vel.r.bind(0));blit(cu);
  u=use('vort');setTexel(u,vel);gl.uniform1i(u.uVelocity,vel.r.bind(0));gl.uniform1i(u.uCurl,cu.bind(1));gl.uniform1f(u.curl,P.CURL);gl.uniform1f(u.dt,dt);blit(vel.w);vel.swap();
  u=use('div');setTexel(u,vel);gl.uniform1i(u.uVelocity,vel.r.bind(0));blit(dv);
  u=use('clear');gl.uniform1i(u.uTexture,prs.r.bind(0));gl.uniform1f(u.value,P.PRES);blit(prs.w);prs.swap();
  u=use('pres');setTexel(u,vel);gl.uniform1i(u.uDivergence,dv.bind(0));
  for(var i=0;i<P.ITER;i++){gl.uniform1i(u.uPressure,prs.r.bind(1));blit(prs.w);prs.swap();}
  u=use('grad');setTexel(u,vel);gl.uniform1i(u.uPressure,prs.r.bind(0));gl.uniform1i(u.uVelocity,vel.r.bind(1));blit(vel.w);vel.swap();
  u=use('advect');setTexel(u,vel);gl.uniform1i(u.uVelocity,vel.r.bind(0));gl.uniform1i(u.uSource,vel.r.bind(1));gl.uniform1f(u.dt,dt);gl.uniform1f(u.dissipation,P.VEL);blit(vel.w);vel.swap();
  gl.uniform1i(u.uVelocity,vel.r.bind(0));gl.uniform1i(u.uSource,dye.r.bind(1));gl.uniform1f(u.dissipation,P.DEN);blit(dye.w);dye.swap();
  u=use('show');gl.uniform1i(u.uTexture,dye.r.bind(0));gl.clearColor(0,0,0,0);blit(null);}

/* dose colour-wash: blue, cyan, green, yellow, orange, red */
var STOPS=[[0.17,0.36,1],[0.07,0.71,0.9],[0.11,0.75,0.38],[0.95,0.82,0.1],[1,0.54,0.12],[0.89,0.12,0.17]];
function pal(v){v=Math.max(0,Math.min(1,v))*(STOPS.length-1);var i=Math.min(STOPS.length-2,Math.floor(v)),f=v-i,a=STOPS[i],b=STOPS[i+1];return [a[0]+(b[0]-a[0])*f,a[1]+(b[1]-a[1])*f,a[2]+(b[2]-a[2])*f];}
var dose=0.1,px=-1,py=-1,marker=document.querySelector('.dosebar i');
function move(cx,cy){var x=cx/W,y=1-cy/H;
  if(px>=0){var dx=x-px,dy=y-py,m=Math.hypot(dx*asp,dy);if(m>0){dose=Math.min(1,dose+m*1.3);
    var c=pal(dose);splat(x,y,dx*P.FORCE,dy*P.FORCE,[c[0]*0.55,c[1]*0.55,c[2]*0.55]);}}
  px=x;py=y;}
addEventListener('pointermove',function(e){move(e.clientX,e.clientY)},{passive:true});
addEventListener('touchmove',function(e){var t=e.touches[0];if(t)move(t.clientX,t.clientY)},{passive:true});
addEventListener('pointerleave',function(){px=-1});
addEventListener('resize',function(){clearTimeout(build.t);build.t=setTimeout(build,200)});

/* autonomous treatment: beams converge on a small tumour */
var wide=function(){return innerWidth>980},nb=0.2,nt=0.1,ang=Math.random()*6.28,raf=0,last=0;
function auto(dt){
  var fx=wide()?0.78:0.5,fy=wide()?0.5:0.38;
  nb-=dt;nt-=dt;
  if(nb<=0){nb=1.1;ang+=2.4;var c=pal(0.1+Math.random()*0.15),sx=Math.max(.03,Math.min(.97,fx+Math.cos(ang)*0.55/asp*1.2)),sy=Math.max(.03,Math.min(.97,fy+Math.sin(ang)*0.5));
    var vx=(fx-sx),vy=(fy-sy),l=Math.hypot(vx,vy)||1;splat(sx,sy,vx/l*P.FORCE*0.45,vy/l*P.FORCE*0.45,[c[0]*0.55,c[1]*0.55,c[2]*0.55],0.6);}
  if(nt<=0){nt=0.8;var r=pal(0.7+Math.random()*0.3);splat(fx+(Math.random()-.5)*0.02,fy+(Math.random()-.5)*0.03,(Math.random()-.5)*400,(Math.random()-.5)*400,[r[0]*0.3,r[1]*0.3,r[2]*0.3],0.3);}
}
function frame(ts){var dt=Math.min((ts-last)/1000||0.016,0.033);last=ts;
  dose=Math.max(0.05,dose-dt*0.2);if(marker)marker.style.setProperty('--p',(dose*100).toFixed(0)+'%');
  auto(dt);step(dt);raf=requestAnimationFrame(frame);}
build();
document.addEventListener('visibilitychange',function(){if(document.hidden)cancelAnimationFrame(raf);else{last=performance.now();raf=requestAnimationFrame(frame);}});
last=performance.now();raf=requestAnimationFrame(frame);
})();
