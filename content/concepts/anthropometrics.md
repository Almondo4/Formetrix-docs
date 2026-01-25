---
title: Anthropometrics
description: The foundational body measurements used throughout Formetrix for composition, trends, and analysis.
tags:
  - guide
  - concepts
  - measurement
publish: true
created: 2026-01-20
modified: 2026-01-25
---

**Anthropometrics** are direct measurements of the human body.

They describe **size, proportion, and shape** using physical dimensions such as lengths, circumferences, and skinfold thickness — without relying on electrical signals or device-specific assumptions.
  
In Formetrix, anthropometrics form the **foundation of body composition analysis**.

---
## **What Anthropometrics Are**

Anthropometric measurements include:

- **Lengths** (e.g. height, limb length)
    
- **Circumferences** (e.g. waist, hip, limbs)
    
- **Skinfolds** (subcutaneous fat thickness at specific sites)

They capture **real, physical change** in the body — not estimates inferred from impedance or proprietary models.

Because they measure size directly, anthropometrics are:

- repeatable
    
- device-independent
    
- comparable over time

---
## **How Formetrix Uses Anthropometrics**


Formetrix treats anthropometrics as **primary inputs**.
From them, the app:

- calculates composition metrics (e.g. body fat %, lean mass)
    
- derives interpretation indexes (e.g. ratios, symmetry)
    
- builds trends and cumulative views
    
- anchors AI-based interpretation in real measurements

No single measurement is assumed to be perfect.
Meaning comes from **how measurements evolve together over time**.

---
## **Measurement Points in the Interface**

Each anthropometric measurement is represented visually on the [[Modules/📊 Body Composition/overview#**Body Composition Module — Interface Overview**|body model]].
### **Ripple Indicators**

- Show the **location** of a measurement point
    
- Appear when points are collapsed
    
- Reduce visual clutter in View Mode
  
### **Measurement Lines & Circles**

When expanded:

- **Lines** indicate linear measurements (e.g. limb length)
    
- **Circles** indicate circumferences (e.g. waist, thigh)
	
- The displayed value updates based on the active **measurement selection** — either a specific **measurement date** or the **cumulative view**
    
- Tapping the measurement again opens the **historical chart** for that specific measurement point, showing how it has changed over time



---
## **Skinfold Measurements**

Skinfolds measure **subcutaneous fat thickness** using calipers.

In Formetrix, skinfolds:

- are optional and advanced
    
- improve body fat estimation accuracy
    
- unlock higher-resolution composition metrics

However, they are **technique-sensitive**.
  
> [!important]
> Skinfolds improve accuracy **only when measured correctly and consistently**.
> Poor technique can reduce accuracy more than simpler methods.

Formetrix supports multiple validated skinfold methods (e.g. JP3, DW4, JP7) and clearly indicates when requirements are met.

---
## **Grouping Anthropometric Measurements**
  
Anthropometric measurements can be organized into **groups** based on purpose.


Defaults:

- **General**
    
    - Height, weight, waist circumference, hip circumference, chest circumference
        
    
- **Body Building**
    
    - Height, weight
        
    - Neck, chest, waist, hip
        
    - Left/right biceps, thighs, calves
        
    
- **Symmetry**
    
    - Left/right arm length
        
    - Left/right biceps and forearms
        
    - Left/right leg length, thighs, calves
        
    
- **Skinfolds (SF)**
    
    - Chest, biceps, abdominal
        
    - Triceps, thigh
        
    - Subscapular, suprailiac, midaxillary, calf
        
    
- **All Except Skinfolds**
    
    - All anthropometric points except skinfold sites

  

In Formetrix, groups:

- simplify input
    
- reduce unnecessary repetition
    
- allow goal-specific tracking
    
- keep the body model coherent

You can enable, disable, or customize these groups at any time via **pointer presets**.

---

## **Measurement Points — Context & Notes (T-Pose)**

|**Category**|**Measurement Point**|**What It Represents**|**Usage Notes / When It Matters**|
|---|---|---|---|
|**Basics**|Height|Structural body length|Stable reference value. Required for most indexes. Does not need frequent re-measurement.|
||Weight|Total body mass|Changes frequently. Core input for composition and interpretation.|
||Shoulder Width|Skeletal width|Structural proportion reference. Useful for balance and visual analysis, not short-term change.|
|**Head & Neck**|Head Circumference|Cranial size|Rarely changes. Mostly informational.|
||Neck Circumference|Upper torso girth|Required for tape-based body fat estimation (e.g. US Navy). Technique consistency is critical.|
|**Torso**|Chest Circumference|Upper torso volume|Useful for physique and posture tracking. Not required for core composition estimates.|
||Waist Circumference|Primary abdominal reference|**Most important waist point.** Used by multiple health and composition indexes (WHtR, ABSI, VFA). Track consistently.|
||One Inch Above Belly Button|Upper abdominal distribution|Optional. Useful to distinguish upper abdominal fat or bloating effects.|
||One Inch Below Belly Button|Lower abdominal distribution|Optional. Often changes differently than upper waist during fat loss.|
||Hip Circumference|Pelvic width|Required for waist-to-hip ratio and female tape-based body fat estimation.|
|**Arms – Left / Right**|Arm Length|Limb length|Structural measurement. Useful for symmetry and proportion, not frequent change tracking.|
||Bicep Circumference|Upper arm size|Common in physique tracking. Track left/right for symmetry if relevant.|
||Forearm Circumference|Lower arm size|Useful for strength or sport-specific tracking.|
||Wrist Circumference|Joint size|Mostly structural. Rarely changes.|
|**Legs – Left / Right**|Leg Length|Limb length|Structural reference. Useful for symmetry and biomechanical context.|
||Thigh Circumference|Upper leg size|Used for symmetry and visceral fat estimation. Landmark consistency matters.|
||Knee Circumference|Joint size|Structural. Rarely changes.|
||Calf Circumference|Lower leg size|Useful for symmetry and performance tracking.|
||Ankle Circumference|Joint size|Structural reference.|
|**Skinfolds (SF)**|Chest, Triceps, Subscapular, Suprailiac, Abdominal, Thigh, Midaxillary, etc.|Subcutaneous fat thickness|**Advanced use only.** Improves body-fat accuracy **only if technique is consistent**. Poor technique reduces accuracy.|


