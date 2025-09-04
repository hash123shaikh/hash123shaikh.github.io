---
title: "Automated Segmentation of Head & Neck Cancer from CT Images Using 3D Convolutional Neural Networks"
collection: publications
category: conferences
permalink: /publication/aihc-2025-hnc-ct-segmentation
date: March 13-15, 2025
venue: "2nd National Symposium on Health Data & AI, hosted by the Biomedical Informatics Unit of CMC Vellore"
excerpt: "Self-configuring 3D nnU-Net for CT-based HNC segmentation; evaluation across public, private, and combined datasets."
paperurl: 'http://academicpages.github.io/files/Poster_Hasan_FINAL_12-03-2025.pdf'
citation: "Prabhanjans P., Nabeel P. A., Aparna V. K., Kuchipudi R. B., Thomas H. M. T., Krishna S., Shaikh H., Varghese A. J., Pavamani S., Rajan J. (2025). AIHC 2025. Under submission."
---

**Abstract.** Accurate tumor segmentation is essential for radiotherapy planning, but manual delineation is time-consuming and variable. We develop a fully automated CT-based segmentation pipeline using the self-configuring **3D nnU-Net** framework.

**Motivation.** CT is the most widely available modality; robust CT-only segmentation is clinically valuable where PET/CT is limited.

**Results.**
- **Public dataset (n=136):** DSC **0.76**, HD95 **12.67 mm**
- **Private dataset (n=30):** DSC **0.63**, HD95 **20.05 mm**
- **Combined:** DSC **0.72**, HD95 **15.74 mm**

The gap between public and private cohorts highlights domain differences; careful preprocessing and training strategies mitigate variability and improve generalization.
