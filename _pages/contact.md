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
:root {
  --card-bg: #fff;
  --card-border: rgba(0,0,0,.08);
}

/* Page container so the section always fits neatly */
.contact-wrap {
  max-width: 1100px;
  margin: 0 auto;
  padding: .5rem 0 2rem;
}

/* Your original grid, but with overflow-safe tracks */
.contact-container {
  display: grid;
  grid-template-columns: minmax(0,1fr) minmax(0,1fr);
  gap: 2rem;
  margin: 1.25rem 0;
}
@media (max-width: 980px) { .contact-container { grid-template-columns: 1fr; } }

/* Cards */
.contact-form {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--card-border);
  box-shadow: 0 2px 10px rgba(0,0,0,.03);
}
.contact-info { padding: 0; }

/* Inputs */
.form-group { margin-bottom: 1rem; }
.form-group label {
  display:block; margin-bottom:.45rem; font-weight:600; color:#333;
}
.form-group input, .form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e1e5e9;
  border-radius: 10px;
  font-size: 16px;
  transition: border-color .2s ease;
  box-sizing: border-box;
  background: #fff;
}
.form-group textarea { min-height: 160px; resize: vertical; }
.form-group input:focus, .form-group textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0,123,255,.12);
}

/* Button */
.btn-send {
  background: #dc3545; color: white;
  padding: 12px 24px; border: none; border-radius: 999px;
  font-size: 16px; font-weight: 700; cursor: pointer;
}
.btn-send:hover { background: #c82333; }

/* Info cards */
.contact-item {
  display: flex; align-items: flex-start; gap: 1rem;
  margin: 0; padding: 1rem;
  background: var(--card-bg);
  border-radius: 14px;
  border: 1px solid var(--card-border);
  box-shadow: 0 2px 6px rgba(0,0,0,.04);
}
.contact-item + .contact-item { margin-top: 1rem; }
.contact-item i { font-size: 1.25rem; width: 28px; text-align: center; margin-top:.2rem; }
.contact-item .icon-phone { color: #28a745; }
.contact-item .icon-location { color: #6f42c1; }
.contact-item .icon-directions { color: #fd7e14; }
.contact-item .icon-time { color: #17a2b8; }
.contact-item .icon-calendar { color: #dc3545; }
.contact-item .icon-twitter { color: #1da1f2; }
.contact-item-content h4 { margin: 0 0 .25rem; font-size: 1.05rem; }
.contact-item-content p { margin: 0; color: #6c757d; font-size: .97rem; }
.contact-item a { color: #dc3545; font-weight: 500; text-decoration: none;
  overflow-wrap:anywhere; word-break: break-word; }
.contact-item a:hover { text-decoration: underline; }

/* Leaflet map (fixed height works best for Leaflet) */
#map {
  height: 360px;
  width: 100%;
  border-radius: 14px;
  margin-top: 1.5rem;
  border: 1px solid var(--card-border);
}

/* Safety: hide blog-like bits if theme still injects them */
.page__meta, .page__related, .post-navigation { display:none !important; }
</style>

<div class="contact-wrap">

  <h1>Contact</h1>

  <div class="contact-container">
    <div class="contact-form">
      <h2>Get in Touch</h2>
      <form action="https://formspree.io/f/mdklyaqp" method="POST">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="your.email@example.com" required>
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" placeholder="Your message here..." required></textarea>
        </div>

        <button type="submit" class="btn-send">Send</button>
      </form>
    </div>

    <div class="contact-info">
      <h2>Contact Information</h2>

      <div class="contact-item">
        <i class="fas fa-phone icon-phone"></i>
        <div class="contact-item-content">
          <h4>Phone</h4>
          <p><a href="tel:+91-7906049358">+91-7906049358</a></p>
        </div>
      </div>

      <div class="contact-item">
        <i class="fas fa-map-marker-alt icon-location"></i>
        <div class="contact-item-content">
          <h4>Address</h4>
          <p>Quantitative Imaging Research and Artificial Intelligence Lab (QIRAIL)<br>
          Christian Medical College, Vellore 632004<br>
          Tamil Nadu, India</p>
        </div>
      </div>

      <div class="contact-item">
        <i class="fas fa-route icon-directions"></i>
        <div class="contact-item-content">
          <h4>Directions</h4>
          <p>Enter through Main Gate and follow signs to QIRAIL Lab</p>
        </div>
      </div>

      <div class="contact-item">
        <i class="fas fa-clock icon-time"></i>
        <div class="contact-item-content">
          <h4>Office Hours</h4>
          <p>Weekdays from 9:00 am to 5:00 pm</p>
        </div>
      </div>

      <div class="contact-item">
        <i class="fas fa-calendar icon-calendar"></i>
        <div class="contact-item-content">
          <h4>Meetings</h4>
          <p><a href="mailto:hasanshaikh3198@gmail.com?subject=Meeting Request">Book an appointment</a></p>
        </div>
      </div>

      <div class="contact-item">
        <i class="fab fa-twitter icon-twitter"></i>
        <div class="contact-item-content">
          <h4>Social Media</h4>
          <p><a href="https://www.linkedin.com/in/hasann-shaikh/" target="_blank">Connect on LinkedIn</a></p>
        </div>
      </div>
    </div>
  </div>

  <!-- Map -->
  <div id="map"></div>
</div>

<!-- Leaflet CSS and JS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<script>
// Initialize the map
var map = L.map('map').setView([12.9249, 79.1382], 15); // CMC Vellore

// Tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Marker + popup
var marker = L.marker([12.9249, 79.1382]).addTo(map);
marker.bindPopup('<b>Christian Medical College, Vellore</b><br>QIRAIL Lab<br>Vellore, Tamil Nadu 632004').openPopup();

// Area circle
L.circle([12.9249, 79.1382], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.1,
  radius: 500
}).addTo(map);
</script>

