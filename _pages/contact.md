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

<!-- Particle Background Canvas -->
<canvas id="particles-canvas"></canvas>

<!-- Custom Cursor -->
<div id="custom-cursor">
  <div id="cursor-dot"></div>
  <div id="cursor-ring"></div>
</div>

<style>
/* Hide unwanted elements */
.page__related, .post-navigation, .page-navigation, .pagination, .page__meta,
footer.site-footer, .page__footer, .page__footer-follow { 
  display: none !important; 
}

/* Particle background */
#particles-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

/* Custom cursor */
#custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
}

#cursor-dot {
  width: 8px;
  height: 8px;
  background: #dc3545;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
}

#cursor-ring {
  width: 40px;
  height: 40px;
  border: 2px solid #dc3545;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  opacity: 0.6;
}

/* Hide custom cursor on mobile */
@media (pointer: coarse) {
  #custom-cursor { display: none; }
}

/* Container */
.contact-shell { 
  padding: 2rem 1rem 1rem; 
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-wrap { 
  width: 100%; 
  max-width: 700px; 
  margin: 0 auto; 
}

h1 { 
  text-align: center; 
  margin: 0 0 2rem; 
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Enhanced cards with animations */
.contact-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 1.5rem;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(220, 53, 69, 0.1), transparent);
  transition: left 0.6s ease;
}

.contact-card:hover::before {
  left: 100%;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.contact-card h2 {
  margin: 0 0 1.5rem;
  font-size: 1.6rem;
  color: #333;
  font-weight: 600;
}

/* Form styling */
.form-group { 
  margin-bottom: 1.2rem; 
}

.form-group label { 
  display: block; 
  margin: 0 0 0.5rem; 
  font-weight: 600; 
  color: #333; 
}

.form-group input, .form-group textarea {
  width: 100%; 
  padding: 12px 16px; 
  font-size: 15px; 
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(220, 53, 69, 0.2); 
  border-radius: 12px; 
  transition: all 0.3s ease; 
  box-sizing: border-box;
}

.form-group textarea { 
  min-height: 120px; 
  resize: vertical; 
}

.form-group input:focus, .form-group textarea:focus { 
  outline: 0; 
  border-color: #dc3545; 
  box-shadow: 0 0 0 4px rgba(220, 53, 69, 0.1);
  transform: translateY(-1px);
}

.btn-send { 
  background: linear-gradient(135deg, #dc3545, #c82333);
  color: #fff; 
  border: 0; 
  cursor: pointer; 
  padding: 14px 28px; 
  border-radius: 50px; 
  font-weight: 700;
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-send:hover { 
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(220, 53, 69, 0.3);
}

.btn-send:active {
  transform: translateY(0);
}

/* Contact items */
.contact-item {
  display: flex; 
  align-items: flex-start; 
  gap: 1rem;
  padding: 1rem; 
  border-radius: 12px; 
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(220, 53, 69, 0.1); 
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateX(8px);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
}

.contact-item i { 
  width: 28px; 
  text-align: center; 
  font-size: 1.2rem; 
  margin-top: 0.2rem; 
}

.contact-item .icon-phone { color: #28a745; }
.contact-item .icon-location { color: #6f42c1; }
.contact-item .icon-directions { color: #fd7e14; }
.contact-item .icon-time { color: #17a2b8; }

.contact-item-content h4 { 
  margin: 0 0 0.3rem; 
  font-size: 1.1rem;
  font-weight: 600;
}

.contact-item-content p { 
  margin: 0; 
  color: #6c757d; 
  line-height: 1.5;
}

.contact-item a {
  color: #dc3545;
  text-decoration: none;
  font-weight: 500;
}

.contact-item a:hover {
  text-decoration: underline;
}

/* Map */
#map { 
  height: 300px; 
  width: 100%; 
  border-radius: 16px; 
  border: 1px solid rgba(220, 53, 69, 0.2);
  margin-top: 1rem;
  transition: all 0.3s ease;
}

#map:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

/* Responsive */
@media (max-width: 768px) {
  .contact-shell { padding: 1rem; }
  .contact-card { padding: 1.5rem; }
  h1 { font-size: 2rem; }
  #map { height: 250px; }
}
</style>

<div class="contact-shell">
  <div class="contact-wrap">
    <h1>Contact</h1>

    <!-- Contact Form -->
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
          <textarea id="message" name="message" placeholder="How can I help?" required></textarea>
        </div>
        <button class="btn-send" type="submit">Send Message</button>
      </form>
    </div>

    <!-- Contact Information -->
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

      <div id="map"></div>
    </div>
  </div>
</div>

<!-- Leaflet CSS/JS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<script>
// Particle System
class ParticleSystem {
  constructor() {
    this.canvas = document.getElementById('particles-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 60;
    
    this.resize();
    this.createParticles();
    this.animate();
    
    window.addEventListener('resize', () => this.resize());
  }
  
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  createParticles() {
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }
  
  drawParticle(particle) {
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = `rgba(220, 53, 69, ${particle.opacity})`;
    this.ctx.fill();
  }
  
  drawConnections() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = `rgba(220, 53, 69, ${0.15 * (1 - distance / 120)})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }
  }
  
  updateParticles() {
    this.particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
    });
  }
  
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.drawConnections();
    this.particles.forEach(particle => this.drawParticle(particle));
    this.updateParticles();
    
    requestAnimationFrame(() => this.animate());
  }
}

// Custom Cursor
class CustomCursor {
  constructor() {
    this.cursor = document.getElementById('custom-cursor');
    this.dot = document.getElementById('cursor-dot');
    this.ring = document.getElementById('cursor-ring');
    
    if (!this.cursor) return;
    
    this.cursorPos = { x: 0, y: 0 };
    this.ringPos = { x: 0, y: 0 };
    
    this.init();
  }
  
  init() {
    document.addEventListener('mousemove', (e) => {
      this.cursorPos.x = e.clientX;
      this.cursorPos.y = e.clientY;
      
      this.dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
    
    // Smooth ring follow
    const updateRing = () => {
      this.ringPos.x += (this.cursorPos.x - this.ringPos.x) * 0.15;
      this.ringPos.y += (this.cursorPos.y - this.ringPos.y) * 0.15;
      
      this.ring.style.transform = `translate(${this.ringPos.x}px, ${this.ringPos.y}px)`;
      
      requestAnimationFrame(updateRing);
    };
    updateRing();
    
    // Hover effects
    const hoverElements = document.querySelectorAll('button, a, input, textarea, .contact-item');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.ring.style.transform += ' scale(1.5)';
        this.ring.style.opacity = '1';
      });
      
      el.addEventListener('mouseleave', () => {
        this.ring.style.transform = this.ring.style.transform.replace(' scale(1.5)', '');
        this.ring.style.opacity = '0.6';
      });
    });
  }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  // Initialize particle system
  new ParticleSystem();
  
  // Initialize custom cursor (only on desktop)
  if (window.matchMedia('(pointer: fine)').matches) {
    new CustomCursor();
  }
  
  // Initialize map
  const map = L.map('map').setView([12.9249, 79.1382], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  
  const marker = L.marker([12.9249, 79.1382]).addTo(map);
  marker.bindPopup('<b>Christian Medical College</b><br>QIRAIL Lab<br>Vellore, Tamil Nadu').openPopup();
  
  L.circle([12.9249, 79.1382], { 
    color: '#dc3545', 
    fillColor: '#dc3545', 
    fillOpacity: 0.1, 
    radius: 300 
  }).addTo(map);
});
</script>
