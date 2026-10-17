(function(){
  var el=document.getElementById('map');
  if(!el||!window.L){if(el)el.innerHTML='<p class="meta" style="padding:1rem">The map could not load. Use the links below.</p>';return;}
  var pos=[12.9249,79.1353];
  var m=L.map(el,{scrollWheelZoom:false}).setView(pos,15);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(m);
  L.circleMarker(pos,{radius:9,color:'#B3262E',weight:3,fillColor:'#B3262E',fillOpacity:.85}).addTo(m)
   .bindPopup('<strong>QIRAIL</strong><br>Dept. of Radiation Oncology<br>Christian Medical College, Vellore').openPopup();
})();
