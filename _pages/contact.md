---
layout: single
title: ""
permalink: /contact/
author_profile: false
classes: wide
toc: false
show_date: false
read_time: false
related: false
share: false
---

<!-- Vanta background container -->
<div id="vanta-bg" aria-hidden="true"></div>

<!-- Custom Cursor -->
<div id="custom-cursor">
  <div id="cursor-dot"></div>
  <div id="cursor-ring"></div>
</div>

<style>
/* Hide unwanted elements from Minimal Mistakes on this page */
.page__related, .post-navigation, .page-navigation, .pagination, .page__meta,
footer.site-footer, .page__footer, .page__footer-follow {
  display: none !important;
}

/* Vanta background layer */
#vanta-bg{
  position: fixed;
  inset: 0;
  z-index: -1; /* behind content */
}

/* Fallback gradient if WebGL / scripts are blocked */
body.vanta-fallback {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

/* Custom cursor */
#custom-cursor {
  position: fixed;
  top: 0; left: 0;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
}
#cursor-dot {
  width: 8px; height: 8px;
  background: #dc3545;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
}
#cursor-ring {
  width: 40px; height: 40px;
  border: 2px solid #dc3545;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  opacity: 0.6;
}
/* Hide custom cursor on touch devices */
@media (pointer: coarse) { #custom-cursor { display: none; } }

/* Page layout */
.contact-shell {
  padding: 2rem 1rem 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contact-wrap { width: 100%; max-width: 980px; margin: 0 auto; }
h1 {
  text-align: center; margin: 0 0 2rem;
  font-size: 2.5rem; font-weight: 700; color: #333;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}
@media (max-width: 900px){
  .contact-grid { grid-template-columns: 1fr; }
}

/* Cards */
.contact-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  padding: 2rem;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}
.contact-card::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(220, 53, 69, 0.1), transparent);
  transition: left 0.6s ease;
}
.contact-card:hover::before { left: 100%; }
.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}
.contact-card h2 {
  margin: 0 0 1.25rem;
  font-size: 1.5rem; color: #333; font-weight: 700;
}

/* Form */
.form-group { margin-bottom: 1.1rem; }
.form-group label {
  display: block; margin: 0 0 0.45rem;
  font-weight: 600; color: #333;
}
.form-group input, .form-group textarea {
  width: 100%; padding: 12px 16px; font-size: 15px;
  background: rgba(255,255,255,0.9);
  border: 2px solid rgba(220,53,69,0.2);
  border-radius: 12px; transition: all 0.3s ease; box-sizing: border-box;
}
.form-group textarea { min-height: 120px; resize: vertical; }
.form-group input:focus, .form-group textarea:focus {
  outline: 0; border-color: #dc3545;
  box-shadow: 0 0 0 4px rgba(220,53,69,0.1);
  transform: translateY(-1px);
}
.btn-send {
  background: linear-gradient(135deg, #dc3545, #c82333);
  color: #fff; border: 0; cursor: pointer;
  padding: 14px 28px; border-radius: 50px;
  font-weight: 700; font-size: 16px; transition: all 0.3s ease;
  position: relative; overflow: hidden;
}
.btn-send:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(220,53,69,0.3); }
.btn-send:active { transform: translateY(0); }

/* Info items */
.contact-item {
  display: flex; align-items: flex-start; gap: 1rem;
  padding: 1rem; border-radius: 12px;
  background: rgba(255,255,255,0.88);
  border: 1px solid rgba(220,53,69,0.1);
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  margin-bottom: 1rem; transition: all 0.3s ease;
}
.contact-item:hover {
  transform: translateX(8px);
  background: rgba(255,255,255,0.96);
  box-shadow: 0 6px 24px rgba(0,0,0,0.1);
}
.contact-item i { width: 28px; text-align: center; font-size: 1.2rem; margin-top: 0.2rem; }
.contact-item .icon-phone { color: #28a745; }
.contact-item .icon-location { color: #6f42c1; }
.contact-item .icon-directions { color: #fd7e14; }
.contact-item .icon-time { color: #17a2b8; }
.contact-item-content h4 { margin: 0 0 0.3rem; font-size: 1.05rem; font-weight: 700; }
.contact-item-content p { margin: 0; color: #6c757d; line-height: 1.5; }
.contact-item a { color: #dc3545; text-decoration: none; font-weight: 600; }
.contact-item a:hover { text-decoration: underline; }

/* Map block */
.map-container .map-title { margin: 0 0 .5rem; font-weight: 800; }
#map {
  height: 300px; width: 100%;
  border-radius: 16px; border: 1px solid rgba(220,53,69,0.2);
  transition: box-shadow 0.3s ease;
}
#map:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.1); }

/* Reduce motion accessibility */
@media (prefers-reduced-motion: reduce){
  * { animation: none !important; transition: none !important; }
}
</style>

<!-- Font Awesome for icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" referrerpolicy="no-referrer">

<div class="contact-shell">
  <div class="contact-wrap">
    <h1>Contact</h1>

    <div class="contact-grid">
      <!-- Left: Contact Form -->
      <div class="contact-card contact-form">
        <h2>Get in Touch</h2>
        <form action="https://formspree.io/f/mdklyaqp" method="POST">
          <div class="form-group">
            <label for="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@institution.edu" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="How can I help?" required></textarea>
          </div>
          <button class="btn-send" type="submit">Send Message</button>
        </form>
      </div>

      <!-- Right: Contact Information -->
      <div class="contact-card contact-info">
        <h2>Contact Information</h2>

        <div class="contact-item">
          <i class="fas fa-phone icon-phone"></i>
          <div class="contact-item-content">
            <h4>Phone</h4>
            <p><a href="tel:+917906049358">+91 79060 49358</a></p>
          </div>
        </div>

        <div class="contact-item">
          <i class="fas fa-map-marker-alt icon-location"></i>
          <div class="contact-item-content">
            <h4>Address</h4>
            <p>
              Quantitative Imaging Research &amp; Artificial Intelligence Lab (QIRAIL)<br>
              Christian Medical College, Vellore 632004, Tamil Nadu, India
            </p>
          </div>
        </div>

        <div class="contact-item">
          <i class="fas fa-route icon-directions"></i>
          <div class="contact-item-content">
            <h4>Directions</h4>
            <p>Main Gate → follow signs for QIRAIL Lab</p>
          </div>
        </div>

        <div class="contact-item">
          <i class="fas fa-clock icon-time"></i>
          <div class="contact-item-content">
            <h4>Office Hours</h4>
            <p>Weekdays: 9:00 AM – 5:00 PM</p>
          </div>
        </div>
      </div>

      <!-- Bottom Left: Map -->
      <div class="contact-card map-container">
        <h2 class="map-title">Location</h2>
        <div id="map"></div>
      </div>

      <!-- Bottom Right: Visitor Map -->
      <div class="contact-card clustrmaps-container">
        <h2>Visitor Map</h2>
        <script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=AmqL4hhrl_2HnAUjIPqeXXIoXhOre-e2zwJSQYLuIW0&cl=ffffff&w=a"></script>
      </div>
    </div>
  </div>
</div>

<!-- Leaflet CSS/JS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" defer></script>

<!-- three.js r134 + Vanta CELLS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.cells.min.js" defer></script>

<script>
/* Custom Cursor */
(function(){
  const cursor = document.getElementById('custom-cursor');
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;

  const pos = { x: 0, y: 0 };
  const ringPos = { x: 0, y: 0 };

  document.addEventListener('mousemove', (e) => {
    pos.x = e.clientX; pos.y = e.clientY;
    dot.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
  });

  (function animateRing(){
    ringPos.x += (pos.x - ringPos.x) * 0.15;
    ringPos.y += (pos.y - ringPos.y) * 0.15;
    ring.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px)`;
    requestAnimationFrame(animateRing);
  })();

  const hoverables = ['button','a','input','textarea','.contact-item'];
  document.querySelectorAll(hoverables.join(',')).forEach(el=>{
    el.addEventListener('mouseenter', ()=>{ ring.style.transform += ' scale(1.5)'; ring.style.opacity='1'; });
    el.addEventListener('mouseleave', ()=>{
      ring.style.transform = ring.style.transform.replace(' scale(1.5)','');
      ring.style.opacity='0.6';
    });
  });
})();

/* Map + Vanta init */
(function () {
  function initMap(){
    if (!window.L) return;
    const map = L.map('map').setView([12.9249, 79.1382], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    const marker = L.marker([12.9249, 79.1382]).addTo(map);
    marker.bindPopup('<b>Christian Medical College</b><br>QIRAIL Lab<br>Vellore, Tamil Nadu').openPopup();
    L.circle([12.9249, 79.1382], { color:'#dc3545', fillColor:'#dc3545', fillOpacity:0.1, radius:300 }).addTo(map);
  }

  function startVanta(){
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !window.VANTA || !window.THREE) {
      document.body.classList.add('vanta-fallback');
      return;
    }
    // Keep a reference for cleanup
    window.__vanta = VANTA.CELLS({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundAlpha: 0.0,     // transparent so cards pop
      color1: 0x6a008c,         // your purple
      color2: 0xf28935,         // your orange
      size: 1.00,
      speed: 3.00
    });
  }

  window.addEventListener('load', function(){
    initMap();
    startVanta();
  });

  window.addEventListener('beforeunload', function(){
    if (window.__vanta && __vanta.destroy) __vanta.destroy();
  });
})();
</script>
