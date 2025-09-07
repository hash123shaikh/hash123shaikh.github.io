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

<!-- Liquid / Metaball Background -->
<canvas id="liquid-canvas" aria-hidden="true"></canvas>

<style>
/* Hide any blog-style bits if the theme injects them */
.page__related, .post-navigation, .page-navigation, .pagination, .page__meta { display:none !important; }

/* --------- Background + stacking --------- */
:root{
  --accent:#dc3545;                 /* medical red */
  --accent2:#6f42c1;                /* violet */
  --glass-bg: rgba(255,255,255,.68);
  --glass-brd: rgba(255,255,255,.35);
}
body{
  /* soft gradient so the page isn't plain */
  background:
    radial-gradient(1200px 600px at 10% -10%, rgba(220,53,69,.08), transparent 60%),
    radial-gradient(1000px 600px at 120% 10%, rgba(111,66,193,.08), transparent 60%),
    linear-gradient(180deg, #fcf5f6 0%, #f9f7fb 100%);
}
#liquid-canvas{
  position: fixed; inset: 0;
  width: 100vw; height: 100vh;
  z-index: 0;
  display:block;
  pointer-events:none;
  /* gooey look */
  filter: blur(16px) contrast(1.25) saturate(1.15) brightness(1.03);
}
.contact-layer{ position: relative; z-index: 1; } /* content above canvas */

/* --------- Single-column layout --------- */
.contact-wrap{
  max-width: 720px;
  margin: 0 auto;
  padding: .75rem 1rem 2rem;
}
.contact-container{
  display: grid;
  grid-template-columns: 1fr;   /* always one column on laptop/desktop */
  gap: 1rem;
}

/* --------- Cards --------- */
.contact-card{
  background: var(--glass-bg);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--glass-brd);
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0,0,0,.05);
  padding: 1.25rem 1.25rem;
}
.contact-card h2{ margin: 0 0 .75rem; }

/* --------- Form --------- */
.form-group{ margin-bottom: 1rem; }
.form-group label{ display:block; margin:0 0 .4rem; font-weight:600; color:#333; }
.form-group input, .form-group textarea{
  width:100%; padding:12px 14px; font-size:15px;
  border:1px solid #e1e5e9; border-radius:10px; background:#fff;
  transition:border-color .2s, box-shadow .2s; box-sizing:border-box;
}
.form-group textarea{ min-height:150px; resize:vertical; }
.form-group input:focus, .form-group textarea:focus{
  outline:0; border-color:#0d6efd; box-shadow:0 0 0 3px rgba(13,110,253,.12);
}
.btn-send{
  background: var(--accent); color:#fff; border:0; cursor:pointer;
  padding:12px 22px; border-radius:999px; font-weight:700;
}
.btn-send:hover{ filter:brightness(.95); }

/* --------- Info list --------- */
.contact-item{
  display:flex; align-items:flex-start; gap:.9rem;
  padding:.9rem 1rem; border-radius:12px;
  background:#fff; border:1px solid rgba(0,0,0,.06);
  box-shadow:0 2px 8px rgba(0,0,0,.04);
}
.contact-item + .contact-item{ margin-top:.75rem; }
.contact-item i{ width:26px; text-align:center; font-size:1.15rem; margin-top:.2rem; }
.contact-item .icon-phone{ color:#28a745; }
.contact-item .icon-location{ color:#6f42c1; }
.contact-item .icon-directions{ color:#fd7e14; }
.contact-item .icon-time{ color:#17a2b8; }
.contact-item .icon-calendar{ color:var(--accent); }
.contact-item-content h4{ margin:0 0 .2rem; font-size:1rem; }
.contact-item-content p{ margin:0; color:#5f6b76; }

/* --------- Map --------- */
#map{
  height: 350px;
  width: 100%;
  border-radius: 14px;
  margin-top: .5rem;
  border:1px solid rgba(0,0,0,.08);
}

/* small spacing tweak */
.masthead{ margin-bottom:.5rem; }
</style>

<div class="contact-layer">
  <div class="contact-wrap">
    <h1 style="text-align:center;margin:.25rem 0 1rem;">Contact</h1>

    <div class="contact-container">
      <!-- Form -->
      <div class="contact-card">
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
            <textarea id="message" name="message" placeholder="How can I help?"></textarea>
          </div>
          <button class="btn-send" type="submit">Send Message</button>
        </form>
      </div>

      <!-- Info -->
      <div class="contact-card">
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
            <p>QIRAIL Lab, Christian Medical College<br>Vellore 632004, Tamil Nadu, India</p>
          </div>
        </div>

        <div class="contact-item">
          <i class="fas fa-route icon-directions"></i>
          <div class="contact-item-content">
            <h4>Directions</h4>
            <p>Main Gate → follow QIRAIL Lab signs</p>
          </div>
        </div>

        <div class="contact-item">
          <i class="fas fa-clock icon-time"></i>
          <div class="contact-item-content">
            <h4>Office Hours</h4>
            <p>Weekdays: 9:00 AM – 5:00 PM</p>
          </div>
        </div>

        <div class="contact-item">
          <i class="fas fa-calendar icon-calendar"></i>
          <div class="contact-item-content">
            <h4>Appointments</h4>
            <p><a href="mailto:hasanshaikh3198@gmail.com?subject=Meeting Request">Schedule a meeting</a></p>
          </div>
        </div>

        <!-- Map -->
        <div id="map"></div>
      </div>
    </div>
  </div>
</div>

<!-- Leaflet CSS/JS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<script>
/* ========== Liquid / Metaball animation (Canvas 2D) ========== */
(function(){
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canvas = document.getElementById('liquid-canvas');
  if (!canvas || reduce) return;

  const ctx = canvas.getContext('2d');
  let W, H, DPR;
  let blobs = [];

  function resize(){
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.width  = Math.floor(window.innerWidth  * DPR);
    H = canvas.height = Math.floor(window.innerHeight * DPR);
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';

    // Rebuild blob set based on area (keeps perf reasonable)
    const target = Math.max(10, Math.min(18, Math.round((W*H)/(110000*DPR))));
    blobs = Array.from({length: target}, () => makeBlob());
  }

  function makeBlob(){
    // radius scales with viewport; velocity gentle for calm motion
    const r = (Math.random()*60 + 60) * DPR;
    const speed = (Math.random()*0.25 + 0.08) * DPR;
    const angle = Math.random()*Math.PI*2;
    // alternate colors for depth
    const hue = Math.random() < 0.5 ? 'rgba(220,53,69,' : 'rgba(111,66,193,';
    return {
      x: Math.random()*W, y: Math.random()*H,
      vx: Math.cos(angle)*speed, vy: Math.sin(angle)*speed,
      r, hue
    };
  }

  function draw(){
    ctx.clearRect(0,0,W,H);

    // Additive blending gives the gooey merge
    ctx.globalCompositeOperation = 'lighter';

    for (const b of blobs){
      // radial falloff for soft edges
      const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      g.addColorStop(0.0, `${b.hue}0.85)`);
      g.addColorStop(0.5, `${b.hue}0.35)`);
      g.addColorStop(1.0, `${b.hue}0.00)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI*2);
      ctx.fill();

      // movement + bounce
      b.x += b.vx; b.y += b.vy;
      if (b.x < -b.r) { b.x = -b.r; b.vx *= -1; }
      if (b.x > W+b.r){ b.x = W+b.r; b.vx *= -1; }
      if (b.y < -b.r) { b.y = -b.r; b.vy *= -1; }
      if (b.y > H+b.r){ b.y = H+b.r; b.vy *= -1; }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize(); draw();
})();

/* ========== Leaflet map ========== */
var map = L.map('map').setView([12.9249, 79.1382], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([12.9249, 79.1382]).addTo(map);
marker.bindPopup('<b>Christian Medical College</b><br>QIRAIL Lab<br>Vellore, Tamil Nadu').openPopup();
L.circle([12.9249, 79.1382], { color:'#dc3545', fillColor:'#dc3545', fillOpacity:0.10, radius:300 }).addTo(map);
</script>
