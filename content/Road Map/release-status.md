---
title: 🌍  Release Status & Availability
description: Formetrix release status, availability, and upcoming milestones.
tags:
  - guide
  - roadmap
  - releases
  - planning
publish: true
created: 2026-01-20
modified: 2026-01-26
---



> [!Tip] **Current Status**
> Formetrix is available on **all platforms** (Web, iOS, Android, Desktop) in a **limited Alpha/Beta** phase. At this stage, only the **Body Composition Module** is publicly accessible.
> 
> This phase focuses on validating accuracy, stability, and user experience before expanding into the full Formetrix ecosystem.

## **What’s Available Today**

### **✔ Body Composition Module (Alpha/Beta)**

- Core measurement pipeline
    
- Trend vs Noise analysis
    
    - Graphs
        
    - Composition Indexes & Interpretation Indexes
        
- Multi‑platform access
    
- Continuous UI/UX improvements
    

## **What’s Coming Next**

### **🔜 Formetrix AI — Public Release (Partial Integration)**

The next major milestone introduces the first operational layer of Formetrix AI:

- AI‑powered interpretation of body metrics
    
- Early reasoning engine
    
- First “smart insights” layer
    
- Local‑first models
    
- Local reasoning with data‑aware retrieval (RAG)
    
- Smart import and input (OCR, voice input)
    

This establishes the intelligence layer that future modules will build on.

---

## **Later Milestones**

Every upcoming module ships with its **own Formetrix AI partial integration**, focused on that module’s data and use cases. Formetrix AI is extended and maintained continuously as new modules are released.

### 📸  **Body Studio**

- Shape analysis
    
- Visual progress tracking
    
- Before/after comparisons
    
- **Formetrix AI (Body Studio Integration):**
    
    - Visual change interpretation
        
    - Pattern detection across time
        
    - Contextual insights tied to composition data
    

### **🏋️  Workouts Module**

- In‑app workout tracking
    
- Workout history
    
- Training plans
    
- Exercise library
    
- AI‑generated routines
    
- Progress tracking
    
- **Formetrix AI (Workouts Integration):**
    
    - Training load interpretation
        
    - Recovery and adaptation insights
        
    - Program adjustments based on response
    

### **🍽  Nutrition Module**

- Meal planning
    
- Macro/micro analysis
    
- AI‑generated nutrition guidance
    
- Integration with body composition + workouts
    
- **Formetrix AI (Nutrition Integration):**
    
    - Intake vs progress interpretation
        
    - Habit and pattern detection
        
    - Adaptive nutrition suggestions
        

### **🔗  Unified Formetrix Intelligence**

As each module gains its own AI layer, Formetrix AI gradually operates across all of them, enabling:

- Cross‑module reasoning
    
- Holistic progress interpretation
    
- Coordinated recommendations across composition, training, and nutrition



<div style="display: flex; justify-content: center; margin: 2rem 0;">
<div style="max-width: 100%;">

```mermaid
flowchart TB
   A["**CURRENT RELEASE**<br/>Alpha/Beta"] --> B["**BODY COMPOSITION MODULE**<br/>(Available)"]
    B --> C["**FORMETRIX AI**<br/>Composition Integration"]

    C --> D["**BODY STUDIO**<br/>Module Release"]
    D --> E["**FORMETRIX AI**<br/>Body Studio Integration"]

    E --> F["**WORKOUTS MODULE**<br/>Module Release"]
    F --> G["**FORMETRIX AI**<br/>Workouts Integration"]

    G --> H["**NUTRITION MODULE**<br/>Module Release"]
   H --> I["**FORMETRIX AI**<br/>Nutrition Integration"]

    I --> J["**UNIFIED FORMETRIX INTELLIGENCE**<br/>Cross‑Module Reasoning"]
```
></div>
></div>

