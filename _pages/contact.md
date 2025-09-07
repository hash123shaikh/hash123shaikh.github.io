---
title: "Contact"
permalink: /contact/
layout: single
classes: wide        # keeps it within site width but wider than default
toc: false
author_profile: false
share: false
comments: false
related: false
# IMPORTANT: ensure this file lives in _pages/, not _posts/, and do NOT set a date
---

<style>
/* --- Contact page layout --- */
.contact-wrap {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0.5rem 0 2.5rem;
}
.contact-grid {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 2rem;
  align-items: start;
}
@media (max-width: 980px) {
  .contact-grid { grid-template-columns: 1fr; }
}

/* Cards */
.contact-card {
  background: #fff;
  border: 1px solid rgba(0,0,0,.06);
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,.03);
}

/* Form */
.contact-form h3 { margin: 0 0 .75rem; }
.form-row { margin-bottom: 1rem; }
.form-row label { display:block; font-weight:600; margin-bottom:.35rem; }
.form-row input, .form-row textarea {
  width: 100%;
  border: 1px solid rgba(0,0,0,.12);
  border-radius: 10px;
  padding: .75rem .9rem;
  font: inherit;
  background: #fafafa;
}
.form-row textarea { min-height: 160px; resize: vertical; }
.contact-submit {
  display:inline-block;
  border: 0;
  border-radius: 999px;
  padding: .7rem 1.25rem;
  font-weight:700;
  background: #e63946; /* theme accent */
  color: #fff;
  cursor: pointer;
}

/* Right column list */
.info-stack .contact-card + .contact-card { margin-top: 1rem; }
.info-title { font-size: 1.05rem; font-weight: 800; margin: 0 0 .35rem; }

/* Map */
.map-wrap {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,.06);
}
.map-wrap iframe { width:100%; height:100%; border:0; }

/* Link list at bottom */
.contact-links { margin-top: 1.25rem; }
.contact-links a { word-break: break-word; }
</style>

<div class="contact-wrap">

  <h1>Contact</h1>

  <div class="contact-grid">

    <!-- Left: form -->
    <div class="contact-card contact-form">
      <h3>Get in Touch</h3>
      <!-- If you use Formspree or similar, replace the action URL -->
      <form action="https://formspree.io/f/mdklyaqp" method="POST">
        <div class="form-row">
          <label for="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your full name" required>
        </div>
        <div class="form-row">
          <label for="email">Email</label>
          <input id="email" name="_replyto" type="email" placeholder="you@institution.edu" required>
        </div>
        <div class="form-row">
          <label for="msg">Message</label>
          <textarea id="msg" name="message" placeholder="How can I help? Please include context and deadlines." required></textarea>
        </div>
        <button class="contact-submit" type="submit">Send</button>
      </form>
    </div>

    <!-- Right: info stack -->
    <div class="info-stack">

      <div class="contact-card">
        <div class="info-title">Phone</div>
        <p>+91 79060 49358</p>
      </div>

      <div class="contact-card">
        <div class="info-title">Address</div>
        <p>
          Quantitative Imaging Research & Artificial Intelligence Lab (QIRAIL)<br>
          Dept. of Radiation Oncology – Unit 2<br>
          Christian Medical College, Vellore 632004<br>
          Tamil Nadu, India
        </p>
      </div>

      <div class="contact-card">
        <div class="info-title">Office Hours</div>
        <p>Weekdays: 9:00 am – 5:00 pm IST</p>
      </div>

    </div>
  </div>

  <!-- Map -->
  <div class="map-wrap" style="margin-top:1.5rem;">
    <!-- swap with your preferred embed; this one is responsive -->
    <iframe
      src="https://www.openstreetmap.org/export/embed.html?bbox=79.118%2C12.904%2C79.166%2C12.969&layer=mapnik&marker=12.920%2C79.135"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>

  <!-- Direct links -->
  <div class="contact-card contact-links">
    <div class="info-title">Direct Contacts</div>
    <p><strong>Email:</strong> <a href="mailto:hasanshaikh3198@gmail.com">hasanshaikh3198@gmail.com</a></p>
    <p><strong>Work:</strong> <a href="mailto:hasan.shaikh.inst@cmcvellore.ac.in">hasan.shaikh.inst@cmcvellore.ac.in</a></p>
    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/hasann-shaikh/">linkedin.com/in/hasann-shaikh/</a></p>
    <p><strong>GitHub:</strong> <a href="https://github.com/hash123shaikh">github.com/hash123shaikh</a></p>
    <p><strong>Google Scholar:</strong> <a href="https://scholar.google.com/citations?user=9jjwZ8cAAAAJ">scholar.google.com/citations?user=9jjwZ8cAAAAJ</a></p>
  </div>

</div>
