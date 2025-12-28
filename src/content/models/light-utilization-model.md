---
title: "Light utilization efficiency model for fast-growing greens"
summary: "A simplified systems model linking light intensity, photoperiod, and canopy development for microgravity-compatible greens. It combines published PAR response curves with conservative assumptions about airflow and nutrient uptake to produce bounds for biomass accumulation. The model is intended as a planning aid for habitat designers; it flags where empirical data is thin and should not be used for final yield predictions without site-specific calibration." 
tags: ["models", "lighting", "planning"]
source: "https://doi.org/10.1080/00945715.2020.1846183"
year: 2021
level_of_evidence: "L1"
evidence_rationale: "Derived from peer-reviewed data but simplified; lacks validation against long-duration spaceflight datasets."
model_type: "deterministic envelope with tunable coefficients"
inputs: ["photosynthetic photon flux density", "photoperiod", "airflow rate", "nutrient concentration"]
outputs: ["estimated biomass envelope", "expected time-to-harvest window"]
---

Canon model. Document parameter choices and version the coefficients. Highlight sensitivity to airflow assumptions, which remain under-tested in microgravity.
