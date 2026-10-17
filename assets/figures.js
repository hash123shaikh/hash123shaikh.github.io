(function(){
  document.documentElement.classList.add('js');
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var story=document.getElementById('story');
  if(story){
    var tabs=[].slice.call(story.querySelectorAll('[role=tab]')),panels=[].slice.call(story.querySelectorAll('[role=tabpanel]')),
        prog=story.querySelector('.prog'),pp=story.querySelector('.pp'),cur=0,timer=null,playing=!reduce,DUR=9000;
    prog.style.setProperty('--dur',DUR/1000+'s');
    function show(i){cur=i;tabs.forEach(function(t,k){t.setAttribute('aria-selected',k===i);t.tabIndex=k===i?0:-1;});
      panels.forEach(function(p,k){p.hidden=k!==i;});restart();}
    function restart(){clearTimeout(timer);prog.classList.remove('run');void prog.offsetWidth;
      if(playing){prog.classList.add('run');timer=setTimeout(function(){show((cur+1)%panels.length);},DUR);}}
    function setPlay(v){playing=v;pp.textContent=v?'Pause':'Play';pp.setAttribute('aria-label',v?'Pause the tour':'Play the tour');restart();}
    tabs.forEach(function(t,k){t.addEventListener('click',function(){playing=false;pp.textContent='Play';show(k);});
      t.addEventListener('keydown',function(e){var n=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(n){e.preventDefault();var j=(k+n+tabs.length)%tabs.length;playing=false;pp.textContent='Play';show(j);tabs[j].focus();}});});
    pp.addEventListener('click',function(){setPlay(!playing);});
    if(reduce){pp.textContent='Play';}
    show(0);
  }
  [].slice.call(document.querySelectorAll('[data-count]')).forEach(function(el){
    var to=parseFloat(el.dataset.count),dec=parseInt(el.dataset.dec||'0',10),suf=el.dataset.suffix||'';
    function fmt(v){return v.toLocaleString('en-US',{minimumFractionDigits:dec,maximumFractionDigits:dec})+suf;}
    if(reduce){el.textContent=fmt(to);return;}
    var t0=null;function tick(ts){if(t0===null)t0=ts;var p=Math.min((ts-t0)/1600,1),e=1-Math.pow(1-p,3);el.textContent=fmt(to*e);if(p<1)requestAnimationFrame(tick);}
    el.textContent=fmt(0);requestAnimationFrame(tick);});
})();
