/* One animated background per page, each drawn from radiotherapy or cancer research. */
(function(){
var cv=document.getElementById('scene'); if(!cv)return;
var ctx=cv.getContext('2d'),scene=document.body.dataset.scene,W=0,H=0,dpr=1;
var tc=document.createElement('canvas'),tx=tc.getContext('2d'); // persistent trail layer
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
var C={},S={},T=0;
function col(){var s=getComputedStyle(document.documentElement);
  C.blue=s.getPropertyValue('--blue').trim();C.red=s.getPropertyValue('--red').trim();C.muted=s.getPropertyValue('--muted').trim();C.ink=s.getPropertyValue('--ink').trim();}
function rnd(a,b){return a+Math.random()*(b-a)}
function A(c,a,w){ctx.globalAlpha=a;ctx.strokeStyle=c;ctx.fillStyle=c;if(w)ctx.lineWidth=w}
function TA(c,a,w){tx.globalAlpha=a;tx.strokeStyle=c;tx.fillStyle=c;if(w)tx.lineWidth=w}
var wide=function(){return W>980};
var X=function(){return wide()?W*0.78:W*0.5}, Y=function(){return wide()?H*0.5:H*0.62};
var K=function(){return Math.max(0.6,Math.min(W,H)/820)};
function fade(a){tx.globalCompositeOperation='destination-out';tx.globalAlpha=a;tx.fillStyle='#000';tx.fillRect(0,0,W,H);tx.globalCompositeOperation='source-over';}

/* ---------- home: VMAT arc painting a dose cloud around the tumour ---------- */
function homeInit(){S.a=0;}
function home(dt){
  var x=X(),y=Y(),k=K(),R=Math.max(W,H)*0.55;
  S.a+=dt*0.55;
  fade(0.028);
  for(var b=0;b<2;b++){var a=S.a+b*Math.PI;
    var sx=x+Math.cos(a)*R,sy=y+Math.sin(a)*R;
    TA(C.red,0.42,2.4);tx.beginPath();tx.moveTo(sx,sy);tx.lineTo(x,y);tx.stroke();
    TA(C.red,0.18,9);tx.beginPath();tx.moveTo(x+Math.cos(a)*R*0.5,y+Math.sin(a)*R*0.5);tx.lineTo(x,y);tx.stroke();}
  ctx.clearRect(0,0,W,H);ctx.drawImage(tc,0,0,W,H);
  // isodose contours, breathing
  var t=T;
  for(var i=9;i>=1;i--){
    var r=i*30*k,n=96;ctx.beginPath();
    for(var j=0;j<=n;j++){var q=j/n*6.2832,
      w=1+0.13*Math.cos(q-0.6+t*0.25)+0.1*Math.cos(2*q-1.9-t*0.2)+0.05*Math.cos(3*q+t*0.13*i/5);
      var px=x+Math.cos(q)*r*w*1.14*(1+0.02*Math.sin(t*1.3+i)),py=y+Math.sin(q)*r*w*0.94*(1+0.02*Math.sin(t*1.3+i));
      j?ctx.lineTo(px,py):ctx.moveTo(px,py);}
    ctx.closePath();
    if(i===1){A(C.red,0.7+0.2*Math.sin(t*1.8));ctx.fill();}
    else{A(C.blue,0.72-i*0.04,i%3?1.5:2.4);ctx.stroke();}
  }
  // gantry heads
  for(var h=0;h<2;h++){var ga=S.a+h*Math.PI,gx=x+Math.cos(ga)*R*0.93,gy=y+Math.sin(ga)*R*0.93;
    ctx.save();ctx.translate(gx,gy);ctx.rotate(ga+Math.PI/2);A(C.blue,0.5);ctx.fillRect(-14*k-4,-10,28*k+8,20);ctx.restore();}
}

/* ---------- projects: tumour spheroid grows, radiation kills cells, survivors regrow ---------- */
function cellsInit(){S.c=[{x:X(),y:Y(),r:11*K(),dy:0,age:0,hit:0,s:1,vx:0,vy:0}];S.p=[];S.pulse=-1;S.next=5;S.cool=0;}
function cells(dt){
  var k=K(),R=11*k,x0=X(),y0=Y(),c=S.c;
  S.cool+=dt;
  if(S.cool>S.next){S.pulse=0;S.cool=0;S.next=9;}
  if(S.pulse>=0){S.pulse+=dt*320*k;var ring=S.pulse;
    c.forEach(function(q){if(!q.hit&&!q.safe){var d=Math.hypot(q.x-x0,q.y-y0);if(d<ring&&d>ring-30*k&&Math.random()<0.55)q.hit=1;}});
    if(ring>R*30)S.pulse=-1;}
  // division
  var cap=170;
  if(c.length<cap&&Math.random()<dt*(c.length<8?3:1.1*Math.min(c.length,26))){
    var live=c.filter(function(q){return !q.hit});
    if(live.length){var q=live[(Math.random()*live.length)|0],a=rnd(0,6.2832);
      c.push({x:q.x+Math.cos(a)*R*1.5,y:q.y+Math.sin(a)*R*1.5,r:R*0.5,s:1,hit:0,vx:0,vy:0});}}
  // relaxation
  for(var i=0;i<c.length;i++){var p=c[i];
    p.vx+=(x0-p.x)*0.0006;p.vy+=(y0-p.y)*0.0006;
    for(var j=i+1;j<c.length;j++){var o=c[j],dx=o.x-p.x,dy=o.y-p.y,d=Math.hypot(dx,dy)||1,m=(p.r+o.r)*0.92;
      if(d<m){var f=(m-d)*0.06;p.vx-=dx/d*f;p.vy-=dy/d*f;o.vx+=dx/d*f;o.vy+=dy/d*f;}}}
  for(var n=c.length-1;n>=0;n--){var q=c[n];
    q.x+=q.vx;q.y+=q.vy;q.vx*=0.82;q.vy*=0.82;
    if(q.r<R)q.r=Math.min(R,q.r+dt*5*k);
    if(q.hit){q.s-=dt*0.9;if(q.s<=0){for(var e=0;e<7;e++)S.p.push({x:q.x,y:q.y,vx:rnd(-2,2)*k,vy:rnd(-2,2)*k,l:1});c.splice(n,1);}}}
  ctx.clearRect(0,0,W,H);
  if(S.pulse>=0){A(C.red,0.5*(1-S.pulse/(R*30)),3);ctx.beginPath();ctx.arc(x0,y0,S.pulse,0,6.2832);ctx.stroke();}
  c.forEach(function(q){var r=q.r*(q.hit?q.s:1);
    ctx.beginPath();ctx.arc(q.x,q.y,Math.max(r,0.1),0,6.2832);
    A(q.hit?C.red:C.blue,q.hit?0.35:0.14);ctx.fill();A(q.hit?C.red:C.blue,0.8,1.6);ctx.stroke();
    ctx.beginPath();ctx.arc(q.x+r*0.12,q.y-r*0.05,Math.max(r*0.38,0.1),0,6.2832);A(q.hit?C.red:C.blue,q.hit?0.7:0.5);ctx.fill();});
  S.p=S.p.filter(function(p){p.l-=dt*1.2;p.x+=p.vx;p.y+=p.vy;if(p.l>0){ctx.beginPath();ctx.arc(p.x,p.y,2.2,0,6.2832);A(C.red,p.l*0.8);ctx.fill();}return p.l>0;});
}

/* ---------- publications: DNA double helix with radiation-induced breaks and repair ---------- */
function dnaInit(){S.br=[];S.nb=1;}
function dna(dt){
  var x0=wide()?W*0.86:W*0.5,amp=wide()?70:55,step=15;
  S.nb-=dt;if(S.nb<=0){S.br.push({y:rnd(H*0.1,H*0.9),t:0});S.nb=rnd(1.6,3.2);}
  S.br.forEach(function(b){b.t+=dt});S.br=S.br.filter(function(b){return b.t<4});
  ctx.clearRect(0,0,W,H);
  var ph=T*0.8,pts1=[],pts2=[];
  for(var y=-20;y<H+20;y+=step){
    var a=y*0.024+ph,s=Math.sin(a),c=Math.cos(a),x1=x0+s*amp,x2=x0-s*amp,broken=false,jit=0;
    S.br.forEach(function(b){var d=Math.abs(b.y-y);if(d<40){var open=b.t<0.25?b.t/0.25:(b.t<3?1:Math.max(0,(4-b.t)));jit=Math.max(jit,(1-d/40)*open);}});
    var base=((y/step)|0)%2?0:1;
    if(jit<0.35){ctx.beginPath();ctx.moveTo(x1,y);ctx.lineTo(x2,y);A(C.muted,0.55,2);ctx.stroke();
      // base pair colouring
      ctx.beginPath();ctx.moveTo(x1,y);ctx.lineTo((x1+x2)/2,y);A(base?C.blue:C.red,0.85,3);ctx.stroke();}
    var o=jit*14;
    pts1.push([x1+o*(c>0?1:-1),y,c]);pts2.push([x2-o*(c>0?1:-1),y,-c]);
  }
  [pts1,pts2].forEach(function(P,i){
    ctx.beginPath();P.forEach(function(p,j){j?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]);});A(i?C.red:C.blue,0.85,4);ctx.stroke();
    P.forEach(function(p){ctx.beginPath();ctx.arc(p[0],p[1],4.5+p[2]*2,0,6.2832);A(i?C.red:C.blue,0.9);ctx.fill();});});
  S.br.forEach(function(b){
    if(b.t<1.2){var r=b.t*70;ctx.beginPath();ctx.arc(x0,b.y,r,0,6.2832);A(C.red,0.6*(1-b.t/1.2),3);ctx.stroke();}
    // incoming photon
    if(b.t<0.35){var f=b.t/0.35;ctx.beginPath();ctx.moveTo(W,b.y-60);ctx.lineTo(x0+amp*(1-f)*0+ (W-x0)*(1-f),b.y-60+60*f);A(C.red,0.7,2.5);ctx.stroke();}
    if(b.t>3){ctx.beginPath();ctx.arc(x0,b.y,26*(4-b.t),0,6.2832);A(C.blue,0.5*(4-b.t),3);ctx.stroke();}
  });
}

/* ---------- talks: linac gantry circling a patient, leaves shaping the beam ---------- */
function linac(dt){
  var x=X(),y=Y(),k=K(),R=Math.min(W,H)*(wide()?0.46:0.34),a=T*0.35,t=T;
  ctx.clearRect(0,0,W,H);
  // couch + patient cross-section
  A(C.muted,0.5,2);ctx.beginPath();ctx.moveTo(x-190*k,y+118*k);ctx.lineTo(x+190*k,y+118*k);ctx.stroke();
  ctx.beginPath();ctx.ellipse(x,y,150*k,104*k,0,0,6.2832);A(C.muted,0.12);ctx.fill();A(C.muted,0.75,2);ctx.stroke();
  ctx.beginPath();ctx.ellipse(x,y+10*k,34*k,40*k,0,0,6.2832);A(C.ink,0.14);ctx.fill();
  // spinal cord and tumour
  ctx.beginPath();ctx.arc(x,y+50*k,9*k,0,6.2832);A(C.muted,0.6);ctx.fill();
  ctx.beginPath();ctx.ellipse(x-36*k,y-18*k,22*k+2*Math.sin(t*2),18*k,0.5,0,6.2832);A(C.red,0.7);ctx.fill();
  // gantry ring
  ctx.beginPath();ctx.arc(x,y,R,0,6.2832);A(C.muted,0.4,2);ctx.stroke();
  for(var m=0;m<36;m++){var ma=m/36*6.2832;ctx.beginPath();ctx.moveTo(x+Math.cos(ma)*R,y+Math.sin(ma)*R);ctx.lineTo(x+Math.cos(ma)*(R+(m%3?6:12)),y+Math.sin(ma)*(R+(m%3?6:12)));A(C.muted,0.4,1.4);ctx.stroke();}
  // source + beam in local frame (+y points at the isocentre)
  var sx=x+Math.cos(a)*R,sy=y+Math.sin(a)*R;
  ctx.save();ctx.translate(sx,sy);ctx.rotate(a-Math.PI/2);
  var half=0,n=9;for(var i=0;i<n;i++)half+=26+18*Math.sin(t*1.6+i*0.7);half=half/n*k;
  var grd=ctx.createLinearGradient(0,0,0,R);grd.addColorStop(0,'rgba(255,255,255,0)');
  ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(-half,R);ctx.lineTo(half,R);ctx.closePath();A(C.red,0.2);ctx.fill();
  A(C.red,0.7,1.8);ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(-half,R);ctx.moveTo(0,0);ctx.lineTo(half,R);ctx.stroke();
  // head and leaf banks
  A(C.blue,0.75);ctx.fillRect(-48*k,-26*k,96*k,26*k);
  for(var l=-6;l<=6;l++){var ap=(26+18*Math.sin(t*1.6+(l+6)*0.7))*k*0.55,ly=(l+6)*6.4*k+8*k;
    A(C.ink,0.65);ctx.fillRect(-90*k,ly,90*k-ap,5.4*k);ctx.fillRect(ap,ly,90*k-ap,5.4*k);}
  ctx.restore();
  ctx.beginPath();ctx.moveTo(x-26,y);ctx.lineTo(x+26,y);ctx.moveTo(x,y-26);ctx.lineTo(x,y+26);A(C.ink,0.4,1);ctx.stroke();
}

/* ---------- experience: radiomics, a CT-like field is scanned and the tumour contour is extracted ---------- */
function segInit(){S.g=14;}
function field(x,y,t,cx,cy,sc){
  var dx=(x-cx)/sc,dy=(y-cy)/sc,r=Math.hypot(dx,dy),a=Math.atan2(dy,dx);
  var edge=1+0.22*Math.sin(3*a+t*0.7)+0.12*Math.sin(5*a-t*0.9);
  var tum=Math.exp(-Math.pow(r/(0.55*edge),2.2));
  var tex=0.16*Math.sin(x*0.045+t*0.6)*Math.cos(y*0.05-t*0.4)+0.1*Math.sin((x+y)*0.09-t);
  return tum*0.85+0.22+tex;
}
function seg(dt){
  var g=S.g,t=T,cx=X(),cy=Y(),sc=Math.min(W,H)*0.32;
  var cols=Math.ceil(W/g)+1,rows=Math.ceil(H/g)+1,F=[],i,j;
  for(j=0;j<rows;j++){F[j]=[];for(i=0;i<cols;i++)F[j][i]=field(i*g,j*g,t,cx,cy,sc);}
  ctx.clearRect(0,0,W,H);
  var scan=((t*0.12)%1.2)*W;
  for(j=0;j<rows;j++)for(i=0;i<cols;i++){var v=F[j][i],s=g*(0.18+0.55*Math.min(v,1)),inT=v>0.62;
    A(inT?C.red:C.blue,inT?0.55:0.32);ctx.fillRect(i*g-s/2,j*g-s/2,s,s);}
  // marching squares at level 0.62
  var L=0.62;ctx.beginPath();
  function lerp(a,b){return (L-a)/(b-a)}
  for(j=0;j<rows-1;j++)for(i=0;i<cols-1;i++){
    var a=F[j][i],b=F[j][i+1],c=F[j+1][i+1],d=F[j+1][i],idx=(a>L?8:0)|(b>L?4:0)|(c>L?2:0)|(d>L?1:0);
    if(idx===0||idx===15)continue;var x0=i*g,y0=j*g,
      top=[x0+lerp(a,b)*g,y0],right=[x0+g,y0+lerp(b,c)*g],bot=[x0+lerp(d,c)*g,y0+g],left=[x0,y0+lerp(a,d)*g];
    var segs={1:[left,bot],2:[bot,right],3:[left,right],4:[top,right],5:[top,left,bot,right],6:[top,bot],7:[top,left],8:[top,left],9:[top,bot],10:[top,right,left,bot],11:[top,right],12:[left,right],13:[bot,right],14:[left,bot]}[idx];
    for(var q=0;q<segs.length;q+=2){ctx.moveTo(segs[q][0],segs[q][1]);ctx.lineTo(segs[q+1][0],segs[q+1][1]);}
  }
  A(C.red,0.95,3.2);ctx.stroke();
  A(C.ink,0.35,1.5);ctx.beginPath();ctx.moveTo(scan,0);ctx.lineTo(scan,H);ctx.stroke();
}

/* ---------- contact: particle beams converge on the target ---------- */
function pulseInit(){S.p=[];S.r=[];}
function pulse(dt){
  var x=X(),y=Y(),k=K();
  fade(0.09);
  if(S.p.length<110&&Math.random()<0.8){var a=rnd(0,6.2832),d=Math.max(W,H)*0.75;S.p.push({x:x+Math.cos(a)*d,y:y+Math.sin(a)*d,v:rnd(260,520)*k*1.4});}
  S.p=S.p.filter(function(p){var dx=x-p.x,dy=y-p.y,d=Math.hypot(dx,dy);
    if(d<14*k){S.r.push({r:8*k,l:1});return false;}
    var nx=p.x+dx/d*p.v*dt,ny=p.y+dy/d*p.v*dt;
    TA(C.red,0.5,1.8);tx.beginPath();tx.moveTo(p.x,p.y);tx.lineTo(nx,ny);tx.stroke();
    p.x=nx;p.y=ny;return true;});
  ctx.clearRect(0,0,W,H);ctx.drawImage(tc,0,0,W,H);
  S.r=S.r.filter(function(r){r.r+=dt*140*k;r.l-=dt*0.9;if(r.l>0){ctx.beginPath();ctx.arc(x,y,r.r,0,6.2832);A(C.blue,r.l*0.5,2);ctx.stroke();}return r.l>0;});
  ctx.beginPath();ctx.arc(x,y,16*k+3*Math.sin(T*3),0,6.2832);A(C.red,0.8);ctx.fill();
  ctx.beginPath();ctx.arc(x,y,36*k,0,6.2832);A(C.red,0.5,2);ctx.stroke();
  ctx.beginPath();ctx.moveTo(x-60*k,y);ctx.lineTo(x+60*k,y);ctx.moveTo(x,y-60*k);ctx.lineTo(x,y+60*k);A(C.ink,0.45,1.4);ctx.stroke();
}

var SC={home:[home,homeInit],cells:[cells,cellsInit],dna:[dna,dnaInit],linac:[linac,function(){}],seg:[seg,segInit],pulse:[pulse,pulseInit]};
var key={km:'seg'}[scene]||scene;
function size(){dpr=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;
  [cv,tc].forEach(function(c){c.width=W*dpr;c.height=H*dpr;});cv.style.width=W+'px';cv.style.height=H+'px';
  ctx.setTransform(dpr,0,0,dpr,0,0);tx.setTransform(dpr,0,0,dpr,0,0);ctx.lineCap='round';tx.lineCap='round';col();(SC[key]||SC.home)[1]();}
var last=0,raf=0;
function step(dt){T+=dt;(SC[key]||SC.home)[0](dt);ctx.globalAlpha=1;}
function frame(ts){var dt=Math.min((ts-last)/1000||0.016,0.05);last=ts;step(dt);raf=requestAnimationFrame(frame);}
function start(){cancelAnimationFrame(raf);last=performance.now();raf=requestAnimationFrame(frame);}
function still(){var n={home:260,cells:520,dna:160,linac:40,seg:60,pulse:140}[key]||100;for(var i=0;i<n;i++)step(0.04);}
addEventListener('resize',function(){size();if(reduce)still();});
addEventListener('themechange',function(){col();if(reduce)step(0);});
document.addEventListener('visibilitychange',function(){if(!reduce){document.hidden?cancelAnimationFrame(raf):start();}});
size();
if(reduce)still();else start();
})();
