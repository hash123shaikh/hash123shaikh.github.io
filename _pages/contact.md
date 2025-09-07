---
layout: single
title: "Contact"
permalink: /contact/
author_profile: false
classes: wide
toc: false
show_date: false
read_time: false
related: false
share: false
---

<style>
/* Hide any blog-style bits if the theme injects them */
.page__related, .post-navigation, .page-navigation, .pagination, .page__meta { display:none !important; }

/* Trim bottom white space that Minimal Mistakes adds */
.page__content { margin-bottom: 0 !important; padding-bottom: 0 !important; }
.page { padding-bottom: 0 !important; }
.page__footer { margin-top: 0 !important; }

/* Background (subtle, professional) */
body{
  background:
    radial-gradient(1200px 600px at -10% -10%, rgba(220,53,69,.06), transparent 60%),
    radial-gradient(900px 600px at 110% 10%, rgba(13,110,253,.06), transparent 60%),
    linear-gradient(180deg, #fcf7f8 0%, #f8f9fb 100%);
}

/* --- Centered single-column layout --- */
.contact-shell{
  min-height: 80svh;                     /* centers nicely on laptops */
  display: grid;
  place-items: start center;
  padding: 2rem 1rem 1.5rem;
}
.contact-wrap{
  width: 100%;
  max-width: 720px;                      /* clean laptop width */
  margin: 0 auto;
}

/* Cards (glass-lite) */
.contact-card{
  background: rgba(255,255,255,.82);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(0,0,0,.06);
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0,0,0,.05);
  padding: 1.25rem 1.25rem;
}
.contact-card + .contact-card{ margin-top: 1rem; }
h1{ text-align:center; margin: .25rem 0 1rem; }

/* Form */
.form-group{ margin-bottom: 1rem; }
.form-group label{ display:block; margin:0 0 .4rem; font-weight:600; color:#333; }
.form-group input, .form-group textarea{
  width:100%; padding:12px 14px; font-size:15px;
  border:1px solid #e1e5e9; border-radius:10px; background:#fff;
  transition: border-color .2s, box-shadow .2s; box-sizing:border-box;
}
.form-group textarea{ min-height:150px; resize:vertical; }
.form-group input:focus, .form-group textarea:focus{
  outline:0; border-color:#0d6efd; box-shadow:0 0 0 3px rgba(13,110,253,.12);
}
.btn-send{
  background:#dc3545; color:#fff; border:0; cursor:pointer;
  padding:12px 22px; border-radius:999px; font-weight:700;
}
.btn-send:hover{ filter:brightness(.95); }

/* Map card */
#map{
  height: 320px;
  width: 100%;
  border-radius: 14px;
  border:1px solid rgba(0,0,0,.08);
}
</style>

<div class="contact-shell">
  <div class="contact-wrap">
    <h1>Contact</h1>

    <!-- Form only (no duplicate emails/links here) -->
    <div class="contact-card" data-blobity-hoverable data-blobity-radius="24">
      <h2>Get in Touch</h2>
      <form action="https://formspree.io/f/mdklyaqp" method="POST">
        <div class="form-group">
          <label for="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required data-blobity-input>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@institution.edu" required data-blobity-input>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" placeholder="How can I help?" data-blobity-input></textarea>
        </div>
        <button class="btn-send" type="submit" data-blobity>Send Message</button>
      </form>
    </div>

    <!-- Optional: compact map only (kept for directions) -->
    <div class="contact-card">
      <div id="map"></div>
    </div>
  </div>
</div>

<!-- Leaflet CSS/JS (for the map) -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<!-- Blobity (cursor blob) -->
<script src="https://unpkg.com/blobity@1.0.4/dist/blobity.min.js"></script>
<script>
/* Init Blobity — subtle professional cursor blob */
(function(){
  if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return; // skip on touch
  new Blobity({
    color: '#dc3545',
    dotColor: 'rgba(0,0,0,0.35)',
    focusableElements: '[data-blobity],[data-blobity-hoverable],[data-blobity-input],a,button',
    radius: 18,
    magnetic: true,
    opacity: 0.18,
    zIndex: 1000,
    invert: false,
  });
})();
</script>

<script>
/* Leaflet map */
var map = L.map('map').setView([12.9249, 79.1382], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([12.9249, 79.1382]).addTo(map);
marker.bindPopup('<b>Christian Medical College</b><br>QIRAIL Lab<br>Vellore, Tamil Nadu').openPopup();
L.circle([12.9249, 79.1382], { color:'#dc3545', fillColor:'#dc3545', fillOpacity:0.10, radius:300 }).addTo(map);
</script>
