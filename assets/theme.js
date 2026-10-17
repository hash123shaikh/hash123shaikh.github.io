(function(){
  var r=document.documentElement,k='theme';
  try{var s=localStorage.getItem(k);if(s)r.setAttribute('data-theme',s);}catch(e){}
  document.addEventListener('DOMContentLoaded',function(){
    var b=document.querySelector('.mode');if(!b)return;
    b.addEventListener('click',function(){
      var dark=r.getAttribute('data-theme')?r.getAttribute('data-theme')==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
      var n=dark?'light':'dark';r.setAttribute('data-theme',n);
      try{localStorage.setItem(k,n);}catch(e){}
      window.dispatchEvent(new Event('themechange'));
    });
  });
})();
