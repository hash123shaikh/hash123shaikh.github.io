---
layout: single
title: "Contact"
permalink: /contact/
author_profile: false
classes: wide
---

<style>
.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.contact-form {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.contact-info {
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #007bff;
}

.form-group textarea {
  height: 120px;
  resize: vertical;
}

.btn-send {
  background: #dc3545;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-send:hover {
  background: #c82333;
}

.contact-item {
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.contact-item i {
  font-size: 1.5rem;
  margin-right: 1rem;
  width: 40px;
  text-align: center;
}

.contact-item .icon-phone { color: #28a745; }
.contact-item .icon-location { color: #6f42c1; }
.contact-item .icon-directions { color: #fd7e14; }
.contact-item .icon-time { color: #17a2b8; }
.contact-item .icon-calendar { color: #dc3545; }
.contact-item .icon-twitter { color: #1da1f2; }

.contact-item-content h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
}

.contact-item-content p {
  margin: 0;
  color: #6c757d;
  font-size: 0.95rem;
}

.contact-item a {
  color: #dc3545;
  text-decoration: none;
  font-weight: 500;
}

.contact-item a:hover {
  text-decoration: underline;
}

#map {
  height: 300px;
  width: 100%;
  border-radius: 8px;
  margin-top: 2rem;
  border: 2px solid #e1e5e9;
}
</style>

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
        <p><a href="tel:+919968982501">+91 99689 82501</a></p>
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

<!-- Map Container -->
<div id="map"></div>

<!-- Leaflet CSS and JS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<script>
// Initialize the map
var map = L.map('map').setView([12.9249, 79.1382], 15); // CMC Vellore coordinates

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker for CMC Vellore
var marker = L.marker([12.9249, 79.1382]).addTo(map);
marker.bindPopup('<b>Christian Medical College, Vellore</b><br>QIRAIL Lab<br>Vellore, Tamil Nadu 632004').openPopup();

// Add a circle to show the general area
var circle = L.circle([12.9249, 79.1382], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.1,
    radius: 500
}).addTo(map);
</script>

---

**For collaboration/mentoring requests, please include a 1-2 paragraph summary and any deadlines.**

**Email:** [hasanshaikh3198@gmail.com](mailto:hasanshaikh3198@gmail.com)  
**Work Email:** [hasan.shaikh.inst@cmcvellore.ac.in](mailto:hasan.shaikh.inst@cmcvellore.ac.in)  
**LinkedIn:** [https://www.linkedin.com/in/hasann-shaikh/](https://www.linkedin.com/in/hasann-shaikh/)  
**GitHub:** [https://github.com/hash123shaikh](https://github.com/hash123shaikh)  
**Google Scholar:** [https://scholar.google.com/citations?user=9jjwZ8cAAAAJ](https://scholar.google.com/citations?user=9jjwZ8cAAAAJ)
