<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hasan Shaikh - Medical AI Researcher</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: #0a0e17;
            color: #e4e6eb;
            overflow-x: hidden;
        }

        /* Animated gradient background */
        .bg-gradient {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            background: linear-gradient(135deg, #0a0e17 0%, #1a1f35 50%, #0a0e17 100%);
            animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        /* Particle canvas */
        #particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        /* Main content */
        .content {
            position: relative;
            z-index: 10;
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 4rem;
            padding: 2rem 0;
        }

        .hero-text {
            flex: 1;
            animation: fadeInLeft 1s ease;
        }

        @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
        }

        .hero-text h1 {
            font-size: 4.5rem;
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #00d4ff 0%, #7b2ff7 50%, #f3a03d 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero-text .tagline {
            font-size: 1.5rem;
            color: #00d4ff;
            font-weight: 600;
            margin-bottom: 1.5rem;
            text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        }

        .hero-text p {
            font-size: 1.2rem;
            line-height: 1.8;
            color: #b8bcc8;
            margin-bottom: 2rem;
        }

        .highlight {
            color: #00d4ff;
            font-weight: 600;
            text-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
        }

        .highlight-purple {
            color: #b794f6;
            font-weight: 600;
        }

        .highlight-orange {
            color: #f3a03d;
            font-weight: 600;
        }

        /* Profile Image */
        .hero-image {
            flex: 0 0 450px;
            animation: fadeInRight 1s ease;
        }

        @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
        }

        .profile-container {
            position: relative;
            width: 450px;
            height: 450px;
        }

        .profile-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 480px;
            height: 480px;
            background: radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
            50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.8; }
        }

        .profile-img {
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            overflow: hidden;
            border: 4px solid rgba(0, 212, 255, 0.5);
            box-shadow: 0 0 60px rgba(0, 212, 255, 0.4),
                        inset 0 0 60px rgba(0, 212, 255, 0.1);
        }

        .profile-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* Glass Cards */
        .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            padding: 3rem;
            margin: 3rem 0;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
        }

        .glass-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 48px rgba(0, 212, 255, 0.2);
            border-color: rgba(0, 212, 255, 0.3);
        }

        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 2rem;
            background: linear-gradient(135deg, #00d4ff 0%, #b794f6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .glass-card p {
            font-size: 1.15rem;
            line-height: 1.9;
            color: #b8bcc8;
            margin-bottom: 1.5rem;
        }

        /* Timeline for Journey */
        .timeline-item {
            position: relative;
            padding-left: 3rem;
            margin-bottom: 2.5rem;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 8px;
            width: 16px;
            height: 16px;
            background: #00d4ff;
            border-radius: 50%;
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
        }

        .timeline-item::after {
            content: '';
            position: absolute;
            left: 7px;
            top: 24px;
            width: 2px;
            height: calc(100% + 10px);
            background: linear-gradient(180deg, rgba(0, 212, 255, 0.5) 0%, transparent 100%);
        }

        .timeline-item:last-child::after {
            display: none;
        }

        .timeline-location {
            font-size: 1.3rem;
            color: #00d4ff;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        /* Tech Stack Grid */
        .tech-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
        }

        .tech-item {
            background: rgba(0, 212, 255, 0.05);
            border: 1px solid rgba(0, 212, 255, 0.2);
            border-radius: 12px;
            padding: 1.5rem;
            text-align: center;
            transition: all 0.3s ease;
        }

        .tech-item:hover {
            background: rgba(0, 212, 255, 0.1);
            transform: translateY(-3px);
            box-shadow: 0 8px 24px rgba(0, 212, 255, 0.2);
        }

        .tech-item span {
            font-size: 1.1rem;
            font-weight: 600;
            color: #00d4ff;
        }

        /* Stats */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
        }

        .stat-item {
            text-align: center;
            padding: 2rem;
            background: rgba(0, 212, 255, 0.05);
            border-radius: 16px;
            border: 1px solid rgba(0, 212, 255, 0.2);
        }

        .stat-number {
            font-size: 3rem;
            font-weight: 800;
            color: #00d4ff;
            text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        }

        .stat-label {
            font-size: 1rem;
            color: #b8bcc8;
            margin-top: 0.5rem;
        }

        /* CTA Buttons */
        .cta-buttons {
            display: flex;
            gap: 1.5rem;
            flex-wrap: wrap;
            margin-top: 2.5rem;
        }

        .btn {
            padding: 1rem 2.5rem;
            font-size: 1.1rem;
            font-weight: 600;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }

        .btn-primary {
            background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);
            color: #0a0e17;
            box-shadow: 0 4px 24px rgba(0, 212, 255, 0.4);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 32px rgba(0, 212, 255, 0.6);
        }

        .btn-secondary {
            background: rgba(255, 255, 255, 0.05);
            color: #00d4ff;
            border: 2px solid rgba(0, 212, 255, 0.5);
        }

        .btn-secondary:hover {
            background: rgba(0, 212, 255, 0.1);
            border-color: #00d4ff;
        }

        /* Responsive */
        @media (max-width: 1024px) {
            .hero {
                flex-direction: column;
                text-align: center;
            }

            .hero-text h1 {
                font-size: 3rem;
            }

            .profile-container {
                width: 350px;
                height: 350px;
            }
        }

        @media (max-width: 768px) {
            .content {
                padding: 0 1rem;
            }

            .hero-text h1 {
                font-size: 2.5rem;
            }

            .hero-text .tagline {
                font-size: 1.2rem;
            }

            .profile-container {
                width: 280px;
                height: 280px;
            }

            .glass-card {
                padding: 2rem;
            }

            .section-title {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <div class="bg-gradient"></div>
    <canvas id="particles"></canvas>

    <div class="content">
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-text">
                <h1>Hasan Shaikh</h1>
                <div class="tagline">Clinical Data Scientist • Medical AI Researcher</div>
                <p>
                    Building <span class="highlight">intelligent systems</span> that transform 
                    <span class="highlight-purple">cancer care</span> through 
                    <span class="highlight-orange">CT-based radiomics</span> and 
                    <span class="highlight">deep learning</span>.
                </p>
                <p>
                    At <span class="highlight">QIRAIL, CMC Vellore</span>, pioneering AI solutions 
                    that scale from tertiary care centers to community hospitals.
                </p>
                <div class="cta-buttons">
                    <a href="#" class="btn btn-primary">View Projects</a>
                    <a href="#" class="btn btn-secondary">Publications</a>
                    <a href="#" class="btn btn-secondary">Download CV</a>
                </div>
            </div>

            <div class="hero-image">
                <div class="profile-container">
                    <div class="profile-glow"></div>
                    <div class="profile-img">
                        <img src="https://via.placeholder.com/450" alt="Hasan Shaikh">
                    </div>
                </div>
            </div>
        </section>

        <!-- About -->
        <section class="glass-card">
            <h2 class="section-title">The Vision</h2>
            <p>
                <span class="highlight">How do we build intelligent systems that scale effectively and serve patients wherever they are?</span>
            </p>
            <p>
                In India, over <span class="highlight-orange">1 million people</span> receive cancer diagnoses annually. 
                My mission: democratize precision oncology through AI-powered medical imaging analysis that works 
                for everyone, regardless of healthcare setting.
            </p>
            
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number">52%</div>
                    <div class="stat-label">ROI Improvement</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">8.8/10</div>
                    <div class="stat-label">Master's CGPA</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">1M+</div>
                    <div class="stat-label">Cancer Cases (India)</div>
                </div>
            </div>
        </section>

        <!-- The Journey -->
        <section class="glass-card">
            <h2 class="section-title">The Journey</h2>
            
            <div class="timeline-item">
                <div class="timeline-location">Agra → Aligarh → Vellore</div>
                <p>
                    A path guided by building <span class="highlight">AI systems that address real clinical needs</span>. 
                    From multimodal survival prediction models at AMU to advancing cancer research at CMC Vellore.
                </p>
            </div>

            <div class="timeline-item">
                <div class="timeline-location">Aligarh Muslim University</div>
                <p>
                    Master's in AI <span class="highlight-orange">(CGPA 8.80/10)</span> - Developed 
                    <span class="highlight-purple">multimodal survival prediction models</span>, discovering that 
                    meaningful research emerges from understanding both technical possibilities and clinical realities.
                </p>
            </div>

            <div class="timeline-item">
                <div class="timeline-location">STARlab Capital</div>
                <p>
                    Quantitative finance experience designing <span class="highlight">volatility-based trading strategies</span>. 
                    Improved ROI by <span class="highlight-orange">52%</span> through rigorous backtesting, risk optimization, 
                    and robust validation—principles that translate directly to clinical ML.
                </p>
            </div>

            <div class="timeline-item">
                <div class="timeline-location">QIRAIL, CMC Vellore</div>
                <p>
                    Advancing cancer research through <span class="highlight">methodological rigor</span>, 
                    <span class="highlight-purple">creative problem-solving</span>, and innovative approaches to 
                    resource optimization. Demonstrating what's possible when technical excellence meets clinical insight.
                </p>
            </div>
        </section>

        <!-- What I Build -->
        <section class="glass-card">
            <h2 class="section-title">What I Build</h2>
            <p>
                Developing <span class="highlight">machine learning models</span> for cancer outcome prediction 
                and <span class="highlight-purple">automated tumor segmentation</span>, with emphasis on clinical 
                deployability and real-world performance.
            </p>
            <p>
                From <span class="highlight-orange">radiomics-based prognostication</span> to 
                <span class="highlight">3D deep learning for automated segmentation</span> and large-scale 
                imaging infrastructure enabling reproducible multi-institutional research.
            </p>

            <div class="tech-grid">
                <div class="tech-item"><span>PyRadiomics</span></div>
                <div class="tech-item"><span>PyTorch</span></div>
                <div class="tech-item"><span>nnU-Net</span></div>
                <div class="tech-item"><span>AWS S3</span></div>
                <div class="tech-item"><span>FAIR Data</span></div>
                <div class="tech-item"><span>DICOM Processing</span></div>
            </div>

            <p style="margin-top: 2rem;">
                The goal: creating tools that <span class="highlight">physicians trust</span> and 
                <span class="highlight-purple">patients benefit from</span>, regardless of healthcare setting.
            </p>
        </section>

        <!-- Looking Forward -->
        <section class="glass-card">
            <h2 class="section-title">Looking Forward</h2>
            <p>
                Actively seeking <span class="highlight-orange">PhD positions in Medical AI, Computer Vision, 
                or Biomedical Engineering</span> for <span class="highlight">Fall 2025/Spring 2026</span>.
            </p>
            <p>
                Interested in programs valuing <span class="highlight">translational research</span>, 
                <span class="highlight-purple">methodological rigor</span>, and 
                <span class="highlight">real-world clinical impact</span>.
            </p>
            <p>
                Open to collaborations on <span class="highlight-orange">multi-institutional validation studies</span>, 
                <span class="highlight">clinical deployment of radiomics models</span>, and advancing 
                healthcare AI accessibility.
            </p>

            <div class="cta-buttons">
                <a href="#" class="btn btn-primary">Let's Connect</a>
                <a href="#" class="btn btn-secondary">LinkedIn</a>
                <a href="#" class="btn btn-secondary">GitHub</a>
                <a href="#" class="btn btn-secondary">Google Scholar</a>
            </div>
        </section>
    </div>

    <script>
        // Particle animation
        const canvas = document.getElementById('particles');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 80;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.fillStyle = 'rgba(0, 212, 255, 0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * (1 - distance / 150)})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animate);
        }

        animate();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    </script>
</body>
</html>
