(function(){
  document.documentElement.classList.add('js');
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  // pipeline: light up one stage at a time
  var flow=document.getElementById('flow');
  if(flow){var li=[].slice.call(flow.children),i=0;
    function on(n){li.forEach(function(x,k){x.classList.toggle('on',k===n)});}
    if(reduce){li.forEach(function(x){x.classList.add('on')});}
    else{on(0);setInterval(function(){i=(i+1)%li.length;on(i);},2600);}}
  // count-up numbers
  [].slice.call(document.querySelectorAll('[data-count]')).forEach(function(el){
    var to=parseFloat(el.dataset.count),dec=parseInt(el.dataset.dec||'0',10),suf=el.dataset.suffix||'';
    function fmt(v){return v.toLocaleString('en-US',{minimumFractionDigits:dec,maximumFractionDigits:dec})+suf;}
    if(reduce){el.textContent=fmt(to);return;}
    var t0=null;function tick(ts){if(t0===null)t0=ts;var p=Math.min((ts-t0)/1600,1),e=1-Math.pow(1-p,3);el.textContent=fmt(to*e);if(p<1)requestAnimationFrame(tick);}
    el.textContent=fmt(0);requestAnimationFrame(tick);});
})();
