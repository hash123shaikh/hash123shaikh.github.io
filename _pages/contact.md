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

<style>
/* Hide page navigation and unwanted elements */
.page__related, .post-navigation, .page-navigation, 
.pagination, .page__meta, .page__footer-follow { 
  display: none !important; 
}

/* Container adjustments for better fit */
.contact-wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
}

/* Responsive grid that fits better */
.contact-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  margin: 1rem 0;
}

@media (max-width: 1024px) { 
  .contact-container { 
    grid-template-columns: 1fr; 
    gap: 1.5rem;
  } 
}

/* Compact form styling */
.contact-form {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(0,0,0,.08);
  box-shadow: 0 2px 8px rgba(0,0,0,.04);
}

.contact-form h2 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  color: #333;
}

/* More compact form elements */
.form-group { 
  margin-bottom: 1rem; 
}

.form-group label {
  display: block; 
  margin-bottom: 0.4rem; 
  font-weight: 600; 
  color: #333;
  font-size: 0.95rem;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  font-size: 15px;
  transition: border-color .2s ease;
  box-sizing: border-box;
  background: #fff;
}

.form-group textarea { 
  min-height: 100px; 
  resize: vertical; 
}

.form-group input:focus, .form-group textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0,123,255,.1);
}

.btn-send {
  background: #dc3545; 
  color: white;
  padding: 10px 20px; 
  border: none; 
  border-radius: 6px;
  font-size: 15px; 
  font-weight: 600; 
  cursor: pointer;
  transition: background-color .2s ease;
}

.btn-send:hover { 
  background: #c82333; 
}

/* Compact contact info */
.contact-info h2 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  color: #333;
}

.contact-item {
  display: flex; 
  align-items: flex-start; 
  gap: 0.8rem;
  margin-bottom: 0.8rem; 
  padding: 0.8rem;
  background: #fff;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,.06);
  box-shadow: 0 1px 3px rgba(0,0,0,.03);
}

.contact-item i { 
  font-size: 1.1rem; 
  width: 24px; 
  text-align: center; 
  margin-top: 0.1rem; 
}

.contact-item .icon-phone { color: #28a745; }
.contact-item .icon-location { color: #6f42c1; }
.contact-item .icon-directions { color: #fd7e14; }
.contact-item .icon-time { color: #17a2b8; }
.contact-item .icon-calendar { color: #dc3545; }
.contact-item .icon-twitter { color: #1da1f2; }

.contact-item-content h4 { 
  margin: 0 0 0.2rem; 
  font-size: 1rem; 
  font-weight: 600;
}

.contact-item-content p { 
  margin: 0; 
  color: #6c757d; 
  font-size: 0.9rem; 
  line-height: 1.4;
}

.contact-item a { 
  color: #dc3545; 
  font-weight: 500; 
  text-decoration: none;
}

.contact-item a:hover { 
  text-decoration: underline; 
}

/* Responsive map - smaller on mobile, larger on desktop */
#map {
  height: 250px;
  width: 100%;
  border-radius: 10px;
  margin-top: 1rem;
  border: 1px solid rgba(0,0,0,.08);
}

@media (min-width: 768px) {
  #map { 
    height: 300px; 
    margin-top: 1.5rem; 
  }
}

@media (max-width: 767px) {
  .contact-wrap { 
    padding: 0.5rem; 
  }
  .contact-form, .contact-info { 
    padding: 1rem; 
  }
  .contact-container { 
    gap: 1rem; 
    margin: 0.5rem 0;
  }
}

/* Ensure full width usage and remove excess spacing */
.page__content {
  max-width: none !important;
}

/* Fix any remaining spacing issues */
.page {
  min-height: auto !important;
}

.masthead {
  margin-bottom: 1rem;
}
</style>

<div class="contact-wrap">
  <h1 style="text-align: center; margin-bottom: 1.5rem; color: #333;">Contact</h1>

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

        <button type="submit" class="btn-send">Send Message</button>
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
          <p>QIRAIL Lab, Christian Medical College<br>Vellore 632004, Tamil Nadu, India</p>
        </div>
      </div>

      <div class="contact-item">
        <i class="fas fa-route icon-directions"></i>
        <div class="contact-item-content">
          <h4>Directions</h4>
          <p>Main Gate → Follow QIRAIL Lab signs</p>
        </div>
      </div>

      <div class="contact-item">
        <i class="fas fa-clock icon-time"></i>
        <div class="contact-item-content">
          <h4>Office Hours</h4>
          <p>Weekdays: 9:00 AM - 5:00 PM</p>
        </div>
      </div>

      <div class="contact-item">
        <i class="fas fa-calendar icon-calendar"></i>
        <div class="contact-item-content">
          <h4>Appointments</h4>
          <p><a href="mailto:hasanshaikh3198@gmail.com?subject=Meeting Request">Schedule Meeting</a></p>
        </div>
      </div>
    </div>
  </div>

  <!-- Compact Map -->
  <div id="map"></div>
</div>

<!-- Leaflet CSS and JS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<script>
// Initialize map
var map = L.map('map').setView([12.9249, 79.1382], 15);

// Add tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add marker
var marker = L.marker([12.9249, 79.1382]).addTo(map);
marker.bindPopup('<b>Christian Medical College</b><br>QIRAIL Lab<br>Vellore, Tamil Nadu').openPopup();

// Add area circle
L.circle([12.9249, 79.1382], {
  color: '#dc3545',
  fillColor: '#dc3545',
  fillOpacity: 0.1,
  radius: 300
}).addTo(map);
</script>
