---
title: "Research Projects"
layout: single
permalink: /portfolio/
author_profile: true
classes: wide
---

### Radiomics-Based Recurrence Prediction in Head & Neck Cancer

Developing robust machine learning pipelines for predicting locoregional recurrence in head and neck cancer patients using CT-based radiomics features. Focus on feature stability, model calibration, and uncertainty quantification.

**Key Contributions:**
- Implemented 3D feature extraction pipeline using PyRadiomics
- Developed cross-validation framework with temporal splits
- Achieved AUC of 0.78 for one-year recurrence prediction
- Published preliminary results at CMC Research Day 2024

**Technologies:** Python, PyRadiomics, scikit-learn, XGBoost, SHAP

---

### Automated Tumor Segmentation Using Deep Learning

Implementing and validating 3D nnU-Net and MedSAM for automated segmentation of head and neck tumors and organs-at-risk, with emphasis on quality assurance and clinical workflow integration.

**Key Contributions:**
- Fine-tuned nnU-Net architecture for HNC segmentation
- Developed quality assurance metrics for automated segmentation
- Created validation framework using expert annotations
- Integrated segmentation pipeline with DICOM workflow

**Technologies:** Python, nnU-Net, PyTorch, MONAI, Orthanc

---

### Clinical Decision Support Dashboard

Building lightweight web application for clinicians to access AI-powered predictions and explanations at point-of-care, ensuring trustworthy and interpretable AI deployment.

**Key Contributions:**
- Designed FastAPI backend for model serving
- Created React frontend for clinician interface
- Implemented SHAP-based model explanations
- Ensured HIPAA-compliant data handling

**Technologies:** FastAPI, React, PostgreSQL, Docker, SHAP

---

### Data Curation and Anonymization Pipeline

Designed and implemented comprehensive DICOM data curation pipeline for multi-institutional research, ensuring GDPR/HIPAA compliance and research reproducibility.

**Key Contributions:**
- Automated DICOM anonymization using RSNA CTP
- Implemented quality control checks
- Created metadata extraction and validation tools
- Established data governance protocols

**Technologies:** Python, DICOM, Orthanc, XNAT, Docker

---


