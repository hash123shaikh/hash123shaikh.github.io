/* One animated background per page, each drawn from radiotherapy or cancer research. */
(function(){
var cv=document.getElementById('scene'); if(!cv)return;
var ctx=cv.getContext('2d'),scene=document.body.dataset.scene,W=0,H=0,dpr=1;
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var C={};
function col(){var s=getComputedStyle(document.documentElement);
  C.iso=s.getPropertyValue('--blue').trim();C.red=s.getPropertyValue('--red').trim();C.muted=s.getPropertyValue('--muted').trim();C.ink=s.getPropertyValue('--ink').trim();}
function size(){dpr=Math.min(window.devicePixelRatio||1,2);W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;cv.style.width=W+'px';cv.style.height=H+'px';ctx.setTransform(dpr,0,0,dpr,0,0);col();init();}
function rnd(a,b){return a+Math.random()*(b-a)}
function alpha(c,a){ctx.globalAlpha=a;ctx.strokeStyle=c;ctx.fillStyle=c}
var S={}; // per-scene state
var cx=function(){return W>900?W*0.76:W*0.5}, cy=function(){return W>900?H*0.42:H*0.78};

/* home: breathing isodose contours + beams converging on the tumour */
function home(t){
  var x=cx(),y=cy(),k=Math.min(W,H)/900+0.35;
  for(var i=8;i>=1;i--){
    var r=i*34*k,n=90;ctx.beginPath();
    for(var j=0;j<=n;j++){var a=j/n*6.2832,
      w=1+0.12*Math.cos(a-0.6+t*0.2)+0.09*Math.cos(2*a-1.9-t*0.15*i/4)+0.05*Math.cos(3*a+t*0.1);
      var px=x+Math.cos(a)*r*w*1.12*(1+0.015*Math.sin(t+i)),py=y+Math.sin(a)*r*w*0.92*(1+0.015*Math.sin(t+i));
      j?ctx.lineTo(px,py):ctx.moveTo(px,py);}
    ctx.closePath();
    if(i===1){alpha(C.red,0.55+0.2*Math.sin(t*1.6));ctx.fill();}
    else{alpha(C.iso,0.5-i*0.03);ctx.lineWidth=i%2?1.8:1.1;ctx.stroke();}
  }
  for(var b=0;b<3;b++){var ang=t*0.12+b*2.094,L=Math.max(W,H);
    ctx.save();ctx.translate(x,y);ctx.rotate(ang);var g=ctx.createLinearGradient(0,0,L,0);
    ctx.globalAlpha=0.16;ctx.fillStyle=C.red;ctx.beginPath();ctx.moveTo(L,-34*k);ctx.lineTo(0,-5);ctx.lineTo(0,5);ctx.lineTo(L,34*k);ctx.closePath();ctx.fill();ctx.restore();}
}
/* projects: cells drift, a beam sweeps, hit cells shrink and die, survivors divide */
function cellsInit(){S.cells=[];var n=Math.round(W*H/16000);for(var i=0;i<n;i++)S.cells.push(newCell(true));S.sweep=-100;}
function newCell(any){return{x:rnd(0,W),y:rnd(0,H),r:rnd(9,20),vx:rnd(-.12,.12),vy:rnd(-.1,.1),hit:0,s:1,ph:rnd(0,6)}}
function cells(t,dt){
  S.sweep+=dt*90; if(S.sweep>W+400)S.sweep=-300;
  var bx=S.sweep;
  ctx.globalAlpha=0.12;ctx.fillStyle=C.red;ctx.fillRect(bx-22,0,44,H);
  S.cells.forEach(function(c,i){
    c.x+=c.vx*dt*60;c.y+=c.vy*dt*60;
    if(c.x<-30)c.x=W+30;if(c.x>W+30)c.x=-30;if(c.y<-30)c.y=H+30;if(c.y>H+30)c.y=-30;
    if(Math.abs(c.x-bx)<22&&!c.hit&&Math.random()<0.6)c.hit=1;
    if(c.hit){c.s-=dt*0.35;if(c.s<=0){c=S.cells[i]=newCell();c.s=0.05;}}
    else if(c.s<1)c.s=Math.min(1,c.s+dt*0.4);
    var r=Math.max(0.1,c.r*c.s*(1+0.04*Math.sin(t*1.5+c.ph)));
    ctx.beginPath();ctx.arc(c.x,c.y,Math.max(r,0.1),0,6.2832);
    alpha(c.hit?C.red:C.iso,c.hit?0.55:0.4);ctx.lineWidth=1.4;ctx.stroke();
    ctx.beginPath();ctx.arc(c.x+r*0.15,c.y,r*0.38,0,6.2832);alpha(c.hit?C.red:C.iso,c.hit?0.4:0.28);ctx.fill();
  });
}
/* publications: scrolling DNA double helix */
function dna(t){
  var strands=W>900?[[0.78,H*0.5,0.5]]:[[0.5,H*0.5,0.4]];
  var xs=W>900?[W*0.935,W*0.975]:[W*0.5];
  xs.forEach(function(x0,si){
    var amp=(W>900?30:46)-si*6,step=14,ph=t*0.7+si*2;
    for(var y=-20;y<H+20;y+=step){
      var a=y*0.022+ph, x1=x0+Math.sin(a)*amp, x2=x0-Math.sin(a)*amp, d1=Math.cos(a), op=0.25+0.2*Math.abs(d1);
      ctx.beginPath();ctx.moveTo(x1,y);ctx.lineTo(x2,y);alpha(C.muted,0.18);ctx.lineWidth=1;ctx.stroke();
      ctx.beginPath();ctx.arc(x1,y,3+d1*1.5,0,6.2832);alpha(C.iso,op+0.15);ctx.fill();
      ctx.beginPath();ctx.arc(x2,y,3-d1*1.5,0,6.2832);alpha(C.red,op);ctx.fill();
    }
  });
}
/* talks: linac gantry circling the isocentre, beam trails from past angles */
function linac(t){
  var x=cx(),y=cy(),R=Math.min(W,H)*(W>900?0.34:0.28);
  ctx.beginPath();ctx.arc(x,y,R,0,6.2832);alpha(C.muted,0.22);ctx.lineWidth=1.2;ctx.stroke();
  for(var k=0;k<5;k++){ // trails
    var a=t*0.35-k*0.5;var hx=x+Math.cos(a)*R,hy=y+Math.sin(a)*R;
    ctx.beginPath();ctx.moveTo(hx,hy);ctx.lineTo(x,y);alpha(C.red,0.32-k*0.06);ctx.lineWidth=2.2-k*0.3;ctx.stroke();}
  var a0=t*0.35,hx0=x+Math.cos(a0)*R,hy0=y+Math.sin(a0)*R;
  ctx.save();ctx.translate(hx0,hy0);ctx.rotate(a0);ctx.globalAlpha=0.5;ctx.fillStyle=C.iso;ctx.fillRect(-8,-18,22,36);ctx.restore();
  ctx.beginPath();ctx.arc(x,y,14+3*Math.sin(t*2),0,6.2832);alpha(C.red,0.55);ctx.fill();
  ctx.beginPath();ctx.moveTo(x-30,y);ctx.lineTo(x+30,y);ctx.moveTo(x,y-30);ctx.lineTo(x,y+30);alpha(C.ink,0.25);ctx.lineWidth=1;ctx.stroke();
}
/* experience: Kaplan-Meier survival curves drawn step by step, with censor ticks */
function kmInit(){
  function curve(drop){var pts=[[0,1]],s=1,x=0;while(x<1){x+=rnd(.02,.06);s=Math.max(.15,s-rnd(.01,.045)*drop);pts.push([x,s]);}return pts;}
  S.a=curve(1.25);S.b=curve(0.65);S.cens=[];for(var i=0;i<14;i++)S.cens.push([rnd(.05,.95),i%2]);
}
function km(t){
  var ox=W>900?W*0.56:W*0.1,ow=W>900?W*0.38:W*0.8,oy=H*0.5,oh=H*0.38,prog=((t*0.07)%1.4);
  ctx.beginPath();ctx.moveTo(ox,oy);ctx.lineTo(ox,oy+oh);ctx.lineTo(ox+ow,oy+oh);alpha(C.muted,0.3);ctx.lineWidth=1.2;ctx.stroke();
  function draw(pts,c,o){
    ctx.beginPath();var lx=ox,ly=oy;ctx.moveTo(lx,ly);
    for(var i=1;i<pts.length;i++){if(pts[i][0]>prog)break;var X=ox+pts[i][0]*ow,Y=oy+(1-pts[i][1])*oh;ctx.lineTo(X,ly);ctx.lineTo(X,Y);ly=Y;lx=X;}
    ctx.lineTo(ox+Math.min(prog,1)*ow,ly);alpha(c,o);ctx.lineWidth=2.2;ctx.stroke();
  }
  draw(S.a,C.red,0.4);draw(S.b,C.iso,0.45);
  S.cens.forEach(function(c){if(c[0]>prog)return;var pts=c[1]?S.a:S.b,s=1;for(var i=0;i<pts.length;i++){if(pts[i][0]>c[0])break;s=pts[i][1];}
    var X=ox+c[0]*ow,Y=oy+(1-s)*oh;ctx.beginPath();ctx.moveTo(X,Y-5);ctx.lineTo(X,Y+5);alpha(c[1]?C.red:C.iso,0.5);ctx.lineWidth=1.4;ctx.stroke();});
}
/* contact: dose ripples expanding from a crosshair, like a pulse from the isocentre */
function pulse(t){
  var x=cx(),y=cy(),R=Math.min(W,H)*0.6;
  for(var i=0;i<5;i++){var f=((t*0.12+i/5)%1);ctx.beginPath();ctx.arc(x,y,f*R,0,6.2832);alpha(C.iso,0.5*(1-f));ctx.lineWidth=1.6;ctx.stroke();}
  ctx.beginPath();ctx.arc(x,y,9+2*Math.sin(t*2.4),0,6.2832);alpha(C.red,0.7);ctx.fill();
  ctx.beginPath();ctx.moveTo(x-40,y);ctx.lineTo(x+40,y);ctx.moveTo(x,y-40);ctx.lineTo(x,y+40);alpha(C.ink,0.25);ctx.lineWidth=1;ctx.stroke();
}
var F={home:home,cells:cells,dna:dna,linac:linac,km:km,pulse:pulse};
function init(){if(scene==='cells')cellsInit();if(scene==='km')kmInit();}
var last=0,t=0,raf=0;
function frame(ts){var dt=Math.min((ts-last)/1000||0.016,0.05);last=ts;t+=dt;
  ctx.clearRect(0,0,W,H);ctx.lineCap='round';(F[scene]||home)(t,dt);ctx.globalAlpha=1;
  if(!reduce)raf=requestAnimationFrame(frame);}
function start(){cancelAnimationFrame(raf);last=performance.now();raf=requestAnimationFrame(frame);}
addEventListener('resize',function(){size();if(reduce)frame(performance.now());});
document.addEventListener('visibilitychange',function(){if(!reduce){document.hidden?cancelAnimationFrame(raf):start();}});
matchMedia('(prefers-color-scheme: dark)').addEventListener&&matchMedia('(prefers-color-scheme: dark)').addEventListener('change',function(){col();});
size();
if(reduce){t=scene==='km'?9:scene==='cells'?4:2;if(scene==='cells'){S.sweep=W*0.5}frame(performance.now());}else start();
})();
