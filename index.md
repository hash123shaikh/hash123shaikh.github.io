---
layout: single
title: ""
permalink: /
author_profile: true
classes: wide
---

<style>
.important-text { color: #007bff; font-weight: 600; }
.collaboration-text { color: #dc3545; font-weight: 600; }
.highlight-box { 
  background: #f8f9fa; 
  border-left: 4px solid #dc3545; 
  padding: 1rem; 
  margin: 1rem 0; 
  border-radius: 4px; 
}
.page__content {
  font-size: 0.9rem;
  line-height: 1.5;
}
.page__content h2 {
  font-size: 1.4rem;
}
.page__content h3 {
  font-size: 1.2rem;
}
</style>

I'm **Hasan Shaikh**, a <span class="important-text">Project Assistant</span> at the <span class="important-text">Quantitative Imaging Research and Artificial Intelligence Lab (QIRAIL)</span>, <span class="important-text">Christian Medical College (CMC) Vellore</span>. I develop machine learning models for cancer outcome prediction and automated tumor segmentation in head & neck oncology.

My work addresses a persistent challenge in radiation oncology: building clinically deployable AI systems in resource-constrained environments. Where advanced imaging isn't routinely available, CT-based radiomics and deep learning approaches offer a methodologically sound pathway to precision oncology—one that doesn't depend on infrastructure most hospitals cannot afford.

---

## Research Focus

My current research centers on three interconnected problems:

**Radiomics-Based Prognostication**  
Developing predictive models for locoregional recurrence in head & neck cancer using CT-derived quantitative features. Working with 163 patients, I'm benchmarking eight metaheuristic feature selection algorithms (PSO, GA, GWO, etc.) across multiple classifiers to identify robust prognostic biomarkers. The goal: determine which combinations of imaging features and optimization methods yield clinically actionable risk stratification.

**CT-Only Automated Segmentation**  
Building 3D nnU-Net models for tumor delineation without MRI dependency. Our multi-institutional dataset (167 cases: 137 MAASTRO public, 30 CMC private) demonstrates that pure CT-based approaches can achieve Dice scores of 0.62-0.65—clinically acceptable performance in settings where MRI access is limited or cost-prohibitive.

**Large-Scale Clinical Data Infrastructure**  
Contributing to CHAVI (India's first national oncology imaging biobank) and a DBT/Wellcome Trust-funded prospective study encompassing ~1700 patients. This involves implementing FAIR-compliant data pipelines, ensuring quality control across institutions, and building infrastructure that enables reproducible multi-center research.

The underlying question: How do we build AI systems that work reliably where they're needed most—not just where they're easiest to deploy?

---

## Technical Approach

I prioritize reproducibility and clinical translatability:

- **End-to-end radiomics workflows**: DICOM retrieval (Orthanc), semi-automated segmentation (Citric), PyRadiomics feature extraction, integrated with version-controlled ML pipelines
- **Rigorous validation protocols**: Multi-institutional testing, sensitivity analysis for scanning protocol variations, independent cohort validation
- **Scalable infrastructure**: AWS S3 automation, longitudinal database management, deployment-ready architectures

My prior work in quantitative finance—designing volatility-based trading strategies that improved ROI by 52%—reinforced critical principles that transfer directly to clinical ML: the importance of robust backtesting, ensemble methods, and managing uncertainty under real-world constraints.

---

## Background

From Lucknow (B.Tech., AKTU) to Aligarh (M.Tech., AMU, CGPA 8.80/10) to Vellore, my trajectory reflects a consistent focus: building tools that function where the clinical need is greatest. At QIRAIL, I'm part of a team demonstrating that rigorous cancer research doesn't require unlimited budgets—it requires methodological discipline, creative problem-solving, and willingness to address hard problems with finite resources.

[Research Projects](/portfolio/){: .btn .btn--primary} [Publications](/publications/){: .btn .btn--info} [Download CV](/files/CV_Hasan_Shaikh.pdf){: .btn .btn--success} [Contact Me](/contact/){: .btn .btn--warning}

---

## Education

### M.Tech. Computer Engineering
**Aligarh Muslim University (AMU)**, Aligarh, India | *Nov 2021 – Nov 2023*  
**CGPA:** <span class="important-text">8.80/10.00</span>

**Thesis:** "Multimodal Data Analytics for Predicting the Survival of Cancer Patients"  
**Advisor:** Prof. Rashid Ali, Aligarh Muslim University

### B.Tech. Computer Science and Engineering  
**Dr. A.P.J. Abdul Kalam Technical University (AKTU)**, Lucknow, India | *Aug 2017 – Jul 2021*  
**CGPA:** <span class="important-text">8.04/10.00</span>

**Thesis:** "Detection of Breast Cancer"  
**Supervisor:** Mr. Vijay Katta

---

## Work Experience

### Project Assistant | QIRAIL, CMC Vellore
*Aug 2024 – Present* | Tamil Nadu, India

Working on <span class="important-text">radiomics-based risk stratification</span> for head & neck cancer, <span class="important-text">3D nnU-Net automated segmentation</span>, and contributing to <span class="important-text">CHAVI (India's first national oncology imaging biobank)</span>. Developing machine learning models for locoregional recurrence prediction and building end-to-end radiomics pipelines.

### Research Analyst | STARlab Capital
*Dec 2023 – June 2024* | Lucknow, India

Designed and deployed <span class="important-text">volatility-based trading strategies</span> using OptionNet Explorer, Mesosim, and OptiTrade tools. Enhanced the ARUT strategy, increasing ROI by <span class="important-text">52.38%</span> through optimization and real-time feedback systems.

---

## Technical Skills

**Programming Languages:** Python, R, MATLAB, SQL, JavaScript  
**Machine Learning:** scikit-learn, XGBoost, PyTorch, TensorFlow, Keras  
**Medical Imaging:** PyRadiomics, SimpleITK, MONAI, 3D Slicer  
**Data Management:** PostgreSQL, MongoDB, DICOM, HL7 FHIR  
**Web Development:** FastAPI, React, Node.js, Docker  
**Research Tools:** Git, Jupyter, LaTeX, R Markdown

---

<div class="highlight-box">
<h3><span class="collaboration-text">Seeking PhD Opportunities</span></h3>
<p>Actively seeking <span class="collaboration-text">PhD positions in Medical AI, Computer Vision, or Biomedical Engineering</span> for Fall 2025/Spring 2026. Research interests: clinical AI translation, medical imaging, radiomics, and automated segmentation.</p>
</div>

## <span class="collaboration-text">Open for Collaborations</span>

I'm interested in collaborations addressing methodological rigor in medical AI, multi-institutional validation studies, and clinical deployment of radiomics models. If your work intersects with quantitative imaging, oncology outcomes research, or healthcare AI in resource-limited settings, I'd welcome a discussion.

**Contact:** hasanshaikh3198@gmail.com | **GitHub:** [hash123shaikh](https://github.com/hash123shaikh)
