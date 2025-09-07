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

<!-- Vanta GLOBE background container -->
<div id="vanta-bg" aria-hidden="true"></div>

<style>
/* ========= Quick knobs (edit these values) ========= */
:root{
  --container-max: 1100px;   /* page content max width */
  --grid-gap: 1.75rem;       /* space between cards */
  --body-size: 16px;         /* base text size */
  --h1-size: 2.6rem;         /* page title size */
  --h2-size: 1.35rem;        /* card section titles */
}

/* Hide unwanted Minimal Mistakes bits on this page */
.page__related, .post-navigation, .page-navigation, .pagination, .page__meta,
footer.site-footer, .page__footer, .page__footer-follow { display: none !important; }

/* Vanta background layer behind everything */
#vanta-bg { position: fixed; inset: 0; z-index: -1; }

/* Fallback if WebGL blocked or user prefers reduced motion */
body.vanta-fallback {
  background: radial-gradient(1200px 800px at 20% -10%, rgba(63,166,255,0.07), transparent 60%),
              radial-gradient(900px 600px at 110% 10%, rgba(255,255,255,0.04), transparent 60%),
              #240101;
}

/* Base text scale */
html { font-size: var(--body-size); }

/* Page layout */
.contact-shell {
  padding: 2rem 1rem 1.5rem;
  min-height: 100vh;
  display: flex; flex-direction: column; justify-content: center;
}
.contact-wrap { width: 100%; max-width: var(--container-max); margin: 0 auto; }
h1 {
  text-align: center; margin: 0 0 2rem;
  font-size: var(--h1-size); font-weight: 800; color: #f8f9fa;
  text-shadow: 0 2px 8px rgba(0,0,0,0.35);
}

/* Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--grid-gap);
}
@media (max-width: 900px){
  .contact-grid { grid-template-columns: 1fr; }
}

/* Make these cards span a full row each */
.map-container, .clustrmaps-container { grid-column: 1 / -1; }

/* Cards */
.contact-card {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 20px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.18);
  padding: 2.25rem;
  transition: transform .35s ease, box-shadow .35s ease;
  position: relative; overflow: hidden;
}
.contact-card::before {
  content:""; position:absolute; top:0; left:-100%; width:100%; height:100%;
  background: linear-gradient(90deg, transparent, rgba(63,166,255,0.12), transparent);
  transition:left .6s ease;
}
.contact-card:hover { transform: translateY(-4px); box-shadow: 0 18px 56px rgba(0,0,0,0.22); }
.contact-card:hover::before { left: 100%; }
.contact-card h2 {
  margin: 0 0 1.1rem;
  font-size: var(--h2-size);
  color: #222; font-weight: 800;
}

/* Form */
.form-group { margin-bottom: 1.1rem; }
.form-group label { display:block; margin:0 0 .45rem; font-weight:700; color:#222; }
.form-group input, .form-group textarea {
  width:100%; padding:12px 16px; font-size:15px; background: rgba(255,255,255,0.96);
  border:2px solid rgba(63,166,255,0.25); border-radius:12px; transition: all .25s ease; box-sizing: border-box;
}
.form-group textarea { min-height: 120px; resize: vertical; }
.form-group input:focus, .form-group textarea:focus {
  outline:0; border-color:#3fa6ff; box-shadow: 0 0 0 4px rgba(63,166,255,0.15); transform: translateY(-1px);
}
.btn-send {
  background: linear-gradient(135deg, #3fa6ff, #1e73c9);
  color:#fff; border:0; cursor:pointer; padding:14px 28px; border-radius: 999px; font-weight:800; font-size:16px;
  transition: transform .2s ease, box-shadow .2s ease;
}
.btn-send:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(63,166,255,.35); }
.btn-send:active { transform: translateY(0); }

/* Info items */
.contact-item {
  display:flex; align-items:flex-start; gap:1rem; padding:1rem; border-radius:12px;
  background: rgba(255,255,255,0.9); border:1px solid rgba(63,166,255,0.15);
  box-shadow: 0 6px 22px rgba(0,0,0,0.08); margin-bottom:1rem; transition: transform .25s ease, background .25s ease;
}
.contact-item:hover { transform: translateX(8px); background: rgba(255,255,255,0.97); }
.contact-item i { width:28px; text-align:center; font-size:1.5rem; margin-top:.2rem; }
.contact-item .icon-phone { color:#28a745; }
.contact-item .icon-location { color:#6f42c1; }
.contact-item .icon-directions { color:#fd7e14; }
.contact-item .icon-time { color:#17a2b8; }
.contact-item-content h4 { margin:0 0 .25rem; font-size:1.05rem; font-weight:800; }
.contact-item-content p { margin:0; color:#5f6770; line-height:1.55; }
.contact-item a { color:#1e73c9; text-decoration:none; font-weight:700; }
.contact-item a:hover { text-decoration: underline; }

/* Map block */
.map-container .map-title { margin: 0 0 .5rem; font-weight: 900; }
#map {
  height: 340px;           /* slightly taller for prominence */
  width: 100%;
  border-radius:16px; border:1px solid rgba(63,166,255,0.2);
  transition: box-shadow .25s ease;
}
#map:hover { box-shadow: 0 10px 28px rgba(0,0,0,0.12); }

/* Visitor Map sizing & styling */
.clustrmaps-embed { position: relative; width: 100%; }
.clustrmaps-embed::before { content: ""; display: block; padding-top: 56.25%; } /* 16:9 */
.clustrmaps-container iframe {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  border: 0 !important;
  border-radius: 12px !important;
  box-shadow: 0 4px 16px rgba(0,0,0,.06);
}

/* Motion accessibility */
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

      <!-- Full-row: Map -->
      <div class="contact-card map-container">
        <h2 class="map-title">Location</h2>
        <div id="map"></div>
      </div>

      <!-- Full-row: Visitor Map -->
      <div class="contact-card clustrmaps-container">
        <h2>Visitor Map</h2>
        <div class="clustrmaps-embed">
          <script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=AmqL4hhrl_2HnAUjIPqeXXIoXhOre-e2zwJSQYLuIW0&cl=ffffff&w=a"></script>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Leaflet CSS/JS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" defer></script>

<!-- three.js r134 + Vanta GLOBE -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js" defer></script>

<script>
(function () {
  function initMap(){
    if (!window.L) return;
    const map = L.map('map').setView([12.9249, 79.1382], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    const marker = L.marker([12.9249, 79.1382]).addTo(map);
    marker.bindPopup('<b>Christian Medical College</b><br>QIRAIL Lab<br>Vellore, Tamil Nadu').openPopup();
    L.circle([12.9249, 79.1382], { color:'#3fa6ff', fillColor:'#3fa6ff', fillOpacity:0.10, radius:300 }).addTo(map);
  }

  function startVanta(){
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !window.VANTA || !window.THREE) {
      document.body.classList.add('vanta-fallback');
      return;
    }
    // Keep a reference for cleanup on navigation
    window.__vanta = VANTA.GLOBE({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x3fa6ff,
      color2: 0xffffff,
      size: 1.30,
      backgroundColor: 0x240101
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
