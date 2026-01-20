
Formetrix exposes two distinct kinds of indexes: **Composition Metrics** and **Interpretation Indexes**.
They serve different purposes **by design** and are handled differently by the system.

### **Composition vs Interpretation (Key Distinction)

>[!tip] At a Glance
>
| **Aspect**                  | **Composition Metrics**             | **Interpretation Indexes**                   |
| --------------------------- | ----------------------------------- | -------------------------------------------- |
| **Purpose**                 | Describe physical body components   | Contextualize, normalize, or compare         |
| **What they represent**     | Fat, lean mass, muscle, water, bone | Size, proportion, symmetry, risk, efficiency |
| **Primary role**            | Core body state                     | Meaning and interpretation                   |
| **How values are obtained** | Input directly or estimated         | Automatically calculated                   
|**Update behavior**|Updated per measurement session|Recomputed whenever inputs change|

The distinction between the two is intentional:

- **Composition metrics** describe what the **body is composed of**
    
- **Interpretation indexes** explain what those values mean **in context**

In practice, composition metrics act as the **bridge** between:

- raw anthropometric inputs (measurements), and
    
- higher-level interpretation indexes (risk, proportion, efficiency)

They anchor trends, enable continuity, and provide the foundation upon which interpretation is built — without imposing conclusions on their own.

---
# **Interpretation Indexes**

Interpretation indexes are calculated values that **contextualize raw measurements**.

They do not describe body composition directly, but instead **interpret size, proportion, symmetry, risk, or efficiency** using anthropometric inputs and profile attributes.

In Formetrix, interpretation indexes:

- Are calculated automatically when required inputs are available
    
- Do **not** rely on device-only composition metrics (with one explicit exception)
    
- Exist to **add meaning**, not raw data density
  

They answer questions such as:

- _Is this proportionally healthy for my height?_
    
- _Is fat distribution changing even if weight is stable?_
    
- _Are left and right limbs developing symmetrically?_


> [!Important] **Important Clarifications**
>
> - Interpretation indexes are **not medical diagnoses**
> - They are **contextual tools**, designed to be read together rather than in isolation
> - Different indexes respond at different speeds:
>   - some react quickly to change (e.g. waist-based indexes)
>   - others reflect slower, structural shifts

---
## **Categories of Interpretation Indexes**

Interpretation indexes in Formetrix are grouped by **what they normalize, compare, or contextualize**.

Each category answers a different question about the body, using the same underlying measurements.

- **Size & Scaling** — normalize body mass against height or lean mass to enable fair comparison
    
- **Proportion & Distribution** — describe how mass is distributed, not how much exists
    
- **Energy & Efficiency** — estimate physiological demand rather than structure
    
- **Symmetry & Balance** — compare left vs right measurements to reveal imbalance
    
- **Advanced / Guarded** — calculated only under strict conditions and interpreted cautiously

Together, these indexes complement raw measurements by adding **context, comparability, and meaning** over time.

The current version of Formetrix includes the following interpretation indexes:

|**Index**|**Category**|**Required Inputs**|**What It Adds / Why It Matters**|
|---|---|---|---|
|**BMI**|Size & Scaling|Weight, Height|Baseline size normalization. Useful for population comparison but insensitive to body composition or distribution.|
|**Ponderal Index**|Size & Scaling|Weight, Height|Alternative to BMI with stronger height normalization. More stable across extreme statures.|
|**Fat-Free Mass Index (FFMI)**|Size & Scaling|Weight, Height, Body Fat %|Separates lean mass from fat mass. Useful for tracking muscular development independent of fat changes.|
|**Waist-to-Height Ratio (WHtR)**|Proportion & Distribution|Waist, Height|Sensitive indicator of central fat accumulation. Often changes before weight does.|
|**Waist-to-Hip Ratio (WHR)**|Proportion & Distribution|Waist, Hip|Describes fat distribution pattern rather than quantity. Useful for longitudinal shape analysis.|
|**Relative Fat Mass (RFM)**|Proportion & Distribution|Waist, Height, Sex|Shape-based fat estimation without requiring body fat devices. Responds quickly to waist changes.|
|**ABSI**|Proportion & Risk|Waist, Height, BMI|Body shape index designed to be independent of BMI. Highlights risk not visible in weight-based metrics.|
|**ABSI-Z**|Proportion & Risk|ABSI, Age, Sex|Standardized ABSI for age and sex. Improves comparability across individuals and time.|
|**Basal Metabolic Rate (BMR)**|Energy & Efficiency|Weight, Height, Age, Sex|Estimates baseline energy needs. Provides context for nutrition, fatigue, and stalled progress.|
|**Arm Symmetry Index**|Symmetry & Balance|Left & Right Arm Circumference|Detects upper-body asymmetry. Useful for rehabilitation, injury prevention, and performance balance.|
|**Leg Symmetry Index**|Symmetry & Balance|Left & Right Leg Length|Detects lower-body asymmetry. Often reveals compensation patterns not visible in totals.|
|**Visceral Fat Area**|Advanced / Guarded|Waist, Thigh, BMI, Age, Sex, DoB|High-constraint estimate. Provides additional context when all inputs are reliable. Should be interpreted cautiously.|

---
# **Composition Metrics

Composition metrics describe the **physical makeup of the body**.

They represent quantities or proportions such as fat mass, lean mass, muscle, water, or bone — either **measured directly** or **estimated when direct measurement is unavailable**.

In Formetrix, composition metrics are treated as **core state variables**.
### **What They Represent**

Composition metrics model the body as **components**, not comparisons.

They answer questions such as:

- _How much of my body mass is fat versus lean tissue?_
    
- _Is weight change driven by fat, muscle, or fluid?_
    
- _Is composition shifting even when scale weight is stable?_
 
These metrics capture **physical substance**, not interpretation.

---
## **Sources: Measurement First, Estimation When Needed**

Formetrix is designed to work with **the level of measurement access you actually have**.

**If you use a body composition device or clinical scan,** you can import those values directly during a measurement session and continue tracking without disruption.

**If you do not,** Formetrix does not force gaps or incomplete profiles. Instead, it uses a **structured estimation system**, built on validated anthropometric inputs, to keep your body model **complete, interpretable, and comparable over time** — without requiring specialized equipment.

>[!Important]
> **Estimation in Formetrix is not a guess.**
> It is a rule-driven process grounded in anthropometric relationships and explicit input requirements.

Each composition metric can be supported by **multiple estimation methods**, evaluated against available inputs and applied only when their requirements are met. When better data becomes available, it integrates cleanly without breaking historical continuity.

> [!example] To Consider
> Body composition devices themselves are not noise-free. Readings can vary across machines, protocols, hydration state, and time of day.
> >Formetrix is designed to **absorb that variability** rather than amplify it.

This approach ensures that:

- composition metrics remain usable across different measurement contexts
    
- dependent insights and trends remain intact
    
- users are never blocked by missing equipment or incomplete sessions
    

> [!Success] Bottom Line
> When device-derived values are available, they are used directly.
When they are not, Formetrix provides a **deliberate, comprehensive alternative** — so your body model remains actionable.

---
## **Available Composition Metrics**

| **Metric**               | **What It Represents / Why It Matters**                                                                                    | **Available Estimation Methods (Formetrix)**  |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| **Body Fat %**           | Proportion of body weight composed of fat. Central reference point for composition analysis and downstream interpretation. | Skinfolds (JP7, DW4, JP3), US Navy, BMI-based |
| **Fat Mass (kg)**        | Absolute fat quantity. Often more stable and interpretable than percentages for fat-loss tracking.                         | Derived from Body Fat %                       |
| **Lean Body Mass (kg)**  | Total non-fat mass. Anchors muscle, water, and metabolic context.                                                          | From Body Fat %, Boer formula                 |
| **Muscle Mass %**        | Estimated skeletal muscle proportion. Best used for directional trends rather than absolute values.                        | Derived from Lean Body Mass                   |
| **Body Water %**         | Hydration relative to body weight. Highly sensitive to short-term fluctuations.                                            | Derived from Lean Body Mass                   |
| **Bone Mass (kg)**       | Skeletal mass estimate. Changes slowly; primarily provides structural context.                                             | _Not estimated_ (device-only)                 |
| **Visceral Fat**         | Internal fat estimate (device-derived). Interpretation depends strongly on measurement method.                             | _Not estimated_ (device-only)                 |
| **Weight-to-Bone Ratio** | Relates total mass to skeletal support. Structural context indicator.                                                      | Derived from Weight + Bone Mass               |
| **Metabolic Age**        | Device-derived comparative metric. Informational only, not a physiological age measure.                                    | _Not estimated_ (device-only)                 |

>[!error] Not all composition metrics carry the same level of certainty
Precision depends on:
>- Input quality
>
>- Measurement method
   > 
>- Estimation assumptions
  >  
>- Consistency of technique and cadence

---
## Putting Indexes Into Practice

These indexes are used to:

- build **longitudinal trends**
    
- support **visual comparison** and progress views
    
- power **estimation chains** (e.g. fat → lean → water)
    
- add context to raw measurement inputs

They are most meaningful when:

- compared **over time**
    
- interpreted **together**, not in isolation
    
- collected under **consistent conditions**

> [!success]
> What matters most is **consistency** — using comparable inputs, methods, and conditions over time.

For deeper context, see:

- [[composition-metrics-auto-estimator]]
    
- [[trend-vs-noise]]
	
- [[measurement-best-practices]]