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

<!-- Background canvas (required for the animation) -->
<canvas id="network-canvas" aria-hidden="true"></canvas>

<style>
/* remove blog-style bits if theme injects them */
.page__related, .post-navigation, .page-navigation, .pagination, .page__meta { display:none !important; }

/* -------------- Background + stacking -------------- */
:root{
  --accent:#dc3545;              /* “medical red” */
  --glass-bg: rgba(255,255,255,.68);
  --glass-brd: rgba(255,255,255,.35);
}
body{
  /* subtle gradient so it’s not plain */
  background:
    radial-gradient(1200px 600px at 10% -10%, rgba(220,53,69,.10), transparent 60%),
    radial-gradient(1000px 600px at 120% 10%, rgba(13,110,253,.10), transparent 60%),
    linear-gradient(180deg, #fcf5f6 0%, #f9f7fb 100%);
}
#network-canvas{
  position: fixed; inset: 0;
  width: 100vw; height: 100vh;
  z-index: 0; display:block;
  pointer-events:none;           /* don’t block clicks */
}
.contact-layer{ position: relative; z-index: 1; } /* content sits above canvas */

/* -------------- Page layout (single column) -------------- */
.contact-wrap{
  max-width: 720px;              /* good laptop width */
  margin: 0 auto;
  padding: 0.75rem 1rem 2rem;
}
.contact-container{
  display: grid;
  grid-template-columns: 1fr;    /* ALWAYS 1 column (desktop + mobile) */
  gap: 1rem;
}

/* -------------- Cards -------------- */
.contact-card{
  background: var(--glass-bg);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--glass-brd);
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0,0,0,.05);
  padding: 1.25rem 1.25rem;
}
.contact-card h2{ margin: 0 0 0.75rem; }

/* -------------- Form -------------- */
.form-group{ margin-bottom: 1rem; }
.form-group label{ display:block; margin:0 0 .4rem; font-weight:600; color:#333; }
.form-group input, .form-group textarea{
  width:100%; padding:12px 14px; font-size:15px;
  border:1px solid #e1e5e9; border-radius:10px; background:#fff;
  transition: border-color .2s, box-shadow .2s;
  box-sizing:border-box;
}
.form-group textarea{ min-height: 150px; resize: vertical; }
.form-group input:focus, .form-group textarea:focus{
  outline:0; border-color:#0d6efd; box-shadow:0 0 0 3px rgba(13,110,253,.12);
}
.btn-send{
  background: var(--accent); color:#fff; border:0; cursor:pointer;
  padding:12px 22px; border-radius:999px; font-weight:700;
}
.btn-send:hover{ filter: brightness(.95); }

/* -------------- Info list -------------- */
.contact-item{
  display:flex; align-items:flex-start; gap:.9rem;
  padding: .9rem 1rem; border-radius:12px;
  background:#fff; border:1px solid rgba(0,0,0,.06);
  box-shadow: 0 2px 8px rgba(0,0,0,.04);
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

/* -------------- Map -------------- */
#map{
  height: 350px;
  width: 100%;
  border-radius: 14px;
  margin-top: .5rem;
  border:1px solid rgba(0,0,0,.08);
}

/* spacing tweaks */
.masthead { margin-bottom: .5rem; }
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
/* ---------- Animated network background ---------- */
(function(){
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canvas = document.getElementById('network-canvas');
  if (!canvas || reduce) return;

  const ctx = canvas.getContext('2d');
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  let W, H, particles;

  function resize(){
    W = canvas.width = Math.floor(window.innerWidth * DPR);
    H = canvas.height = Math.floor(window.innerHeight * DPR);
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    particles = particles || [];
    if (particles.length === 0) init();
  }

  function init(){
    const count = Math.round((W*H) / (14000 * DPR)); // density scales with screen
    particles = Array.from({length: count}, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35 * DPR,
      vy: (Math.random() - 0.5) * 0.35 * DPR,
      r: 1 + Math.random() * 2 * DPR
    }));
  }

  function step(){
    ctx.clearRect(0,0,W,H);

    // lines
    for (let i=0;i<particles.length;i++){
      for (let j=i+1;j<particles.length;j++){
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d2 = dx*dx + dy*dy;
        const max = 120 * DPR, max2 = max*max;
        if (d2 < max2){
          ctx.strokeStyle = `rgba(220,53,69,${0.22*(1 - d2/max2)})`;
          ctx.lineWidth = 0.6 * DPR;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }

    // particles
    ctx.fillStyle = 'rgba(220,53,69,0.7)';
    for (const p of particles){
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fill();
    }

    requestAnimationFrame(step);
  }

  window.addEventListener('resize', resize);
  resize(); step();
})();

/* ---------- Leaflet map ---------- */
var map = L.map('map').setView([12.9249, 79.1382], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([12.9249, 79.1382]).addTo(map);
marker.bindPopup('<b>Christian Medical College</b><br>QIRAIL Lab<br>Vellore, Tamil Nadu').openPopup();
L.circle([12.9249, 79.1382], { color:'#dc3545', fillColor:'#dc3545', fillOpacity:0.10, radius:300 }).addTo(map);
</script>
