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

<!-- Font Awesome for icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-1P8eJcT1rGvJ8oRrO5o4w7y5f8nWm7hHqA0H2q4xw8+8C5nXx8s7nKQ7q8xNvB4J4Ew0m3C1kYwOq9qYb3w6AA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<style>
/* Hide blog-like inserts */
.page__related, .post-navigation, .page-navigation, .pagination, .page__meta { display:none !important; }
/* Remove the FOLLOW footer just on this page */
footer.site-footer, .page__footer, .page__footer-follow { display:none !important; height:0 !important; overflow:hidden !important; }

/* Background */
body{
  background:
    radial-gradient(1200px 600px at -10% -10%, rgba(220,53,69,.06), transparent 60%),
    radial-gradient(900px 600px at 110% 10%, rgba(13,110,253,.06), transparent 60%),
    linear-gradient(180deg, #fcf7f8 0%, #f8f9fb 100%);
}

/* Centered single column */
.contact-shell{ display:grid; place-items:start center; padding:1.5rem 1rem 1rem; }
.contact-wrap{ width:100%; max-width:720px; margin:0 auto; }
h1{ text-align:center; margin:.25rem 0 1rem; }

/* Cards */
.contact-card{
  background: rgba(255,255,255,.86);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  border:1px solid rgba(0,0,0,.06);
  border-radius:16px; box-shadow:0 6px 18px rgba(0,0,0,.05);
  padding:1.25rem 1.25rem;
}
.contact-card + .contact-card{ margin-top:1rem; }

/* Form */
.form-group{ margin-bottom:1rem; }
.form-group label{ display:block; margin:0 0 .4rem; font-weight:600; color:#333; }
.form-group input, .form-group textarea{
  width:100%; padding:12px 14px; font-size:15px; background:#fff;
  border:1px solid #e1e5e9; border-radius:10px; transition:border-color .2s, box-shadow .2s; box-sizing:border-box;
}
.form-group textarea{ min-height:150px; resize:vertical; }
.form-group input:focus, .form-group textarea:focus{ outline:0; border-color:#0d6efd; box-shadow:0 0 0 3px rgba(13,110,253,.12); }
.btn-send{ background:#dc3545; color:#fff; border:0; cursor:pointer; padding:12px 22px; border-radius:999px; font-weight:700; }
.btn-send:hover{ filter:brightness(.95); }

/* Info list */
.contact-item{
  display:flex; align-items:flex-start; gap:.9rem;
  padding:.9rem 1rem; border-radius:12px; background:#fff;
  border:1px solid rgba(0,0,0,.06); box-shadow:0 2px 8px rgba(0,0,0,.04);
}
.contact-item + .contact-item{ margin-top:.75rem; }
.contact-item i{ width:26px; text-align:center; font-size:1.15rem; margin-top:.2rem; }
.contact-item .icon-phone{ color:#28a745; }
.contact-item .icon-location{ color:#6f42c1; }
.contact-item .icon-directions{ color:#fd7e14; }
.contact-item .icon-time{ color:#17a2b8; }
.contact-item-content h4{ margin:0 0 .2rem; font-size:1rem; }
.contact-item-content p{ margin:0; color:#5f6b76; }

/* Map */
#map{ height:320px; width:100%; border-radius:14px; border:1px solid rgba(0,0,0,.08); }
</style>

<div class="contact-shell">
  <div class="contact-wrap">
    <h1>Contact</h1>

    <!-- Form -->
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

    <!-- Contact info -->
    <div class="contact-card" data-blobity-hoverable>
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
            Quantitative Imaging Research & Artificial Intelligence Lab (QIRAIL)<br>
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

      <div id="map" style="margin-top:.5rem;"></div>
    </div>
  </div>
</div>

<!-- Leaflet CSS/JS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<!-- Blobity CDN -->
<script src="https://cdn.blobity.dev/by.js"></script>

<script>
/* Initialize everything after the page fully loads (avoids timing issues on GH Pages) */
window.addEventListener('load', function () {
  // Leaflet map
  var map = L.map('map').setView([12.9249, 79.1382], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  var marker = L.marker([12.9249, 79.1382]).addTo(map);
  marker.bindPopup('<b>Christian Medical College</b><br>QIRAIL Lab<br>Vellore, Tamil Nadu').openPopup();
  L.circle([12.9249, 79.1382], { color:'#dc3545', fillColor:'#dc3545', fillOpacity:0.10, radius:300 }).addTo(map);

  // Blobity (skip on touch devices)
  if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;
  if (!window.Blobity) return; // CDN failed

  new Blobity({
    licenseKey: 'opensource', // OSS usage
    color: '#dc3545',
    dotColor: 'rgba(0,0,0,0.35)',
    focusableElements: '[data-blobity],[data-blobity-hoverable],[data-blobity-input],a,button',
    radius: 18,
    magnetic: true,
    opacity: 0.18,
    zIndex: 9999
  });
});
</script>
