---
title: "Metaheuristic-Driven Machine Learning Pipelines for Radiomics-Based Prediction of Locoregional Recurrence in Head & Neck Cancer"
collection: publications
category: conferences
permalink: /publication/aihc-2025-radiomics-metaheuristics-lrr
date: December 10-12, 2025
venue: "International Conference on Artificial Intelligence for Healthcare (AIHC), NIT Calicut 2025 — Under Submission"
excerpt: "Prospective HNC cohort; Bootstrap-LASSO + PSO + Random Forest achieved best test AUC (0.80). Interpretable features emphasize tumor geometry and heterogeneity."
paperurl: 'http://academicpages.github.io/files/Metaheuristic_Radiomics_AIHC_2025.pdf'
citation: "Shaikh H., Thomas H.M.T., Kuchipudi R.B., Krishna S., Pavamani S. (2025). AIHC 2025. Under submission."
---

**Purpose.** LRR prediction in HNC remains challenging; radiomics offers a high-dimensional substrate for risk modelling. We benchmark ML pipelines with **metaheuristic** feature selection on a **prospectively collected** cohort (2020–2024) to develop reproducible, clinically relevant tools.

**Methods.** Contrast-enhanced planning CTs were used to extract first-order, shape, and texture features. We evaluated 42 pipelines combining six classifiers (Logistic Regression, Naive Bayes, Linear SVM, RBF SVM, Decision Tree, Random Forest) with seven selectors: SelectKBest, LASSO, and five population-based metaheuristics (PSO, WOA, GWO, GA, SA). A **Bootstrap-LASSO** pre-filter was used before metaheuristics to improve stability. Evaluation used stratified 5-fold CV and independent test splits; primary metrics were ROC AUC and accuracy.

**Results.** **Bootstrap-LASSO + PSO + Random Forest** yielded the best test performance (**AUC 0.80**, **accuracy 0.84**). Similar performance was observed with Bootstrap-LASSO + GWO and + GA. Frequently selected features included shape descriptors (e.g., maximum 2D diameters, sphericity) and heterogeneity metrics (e.g., GLCM information measures, GLRLM run-length non-uniformity).

**Conclusion.** Protocol-driven prospective data combined with metaheuristic-enhanced pipelines produce robust and interpretable LRR prediction models. The framework supports risk-adaptive follow-up and motivates future multi-centre validation.
