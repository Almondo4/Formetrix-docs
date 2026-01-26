---
title: Cumulative Model
description: How Formetrix builds a continuous, up‑to‑date body model by carrying forward your most recent valid measurements.
tags:
  - guide
  - concepts
  - cumulative
  - interpretation
publish: true
created: 2026-01-20
modified: 2026-01-25
---

The **cumulative model** is a way of viewing your profile that prioritizes **continuity and usability** over treating each measurement as an isolated event.

It exists to solve a practical problem:
  
In real life, you rarely measure _everything_ at the same time — yet you still want a coherent picture of your current body state.


 >[!important] TL;DR
 >
>A cumulative view is **not “the last measurement”**.<br/>
>It is the **latest valid state per measurement point**.

---
## **Why the Cumulative Model Exists**
  
A single measurement session is a **snapshot** — a complete record of what you measured _at that moment_.

But over time:

- some measurements change frequently (weight, waist)
    
- others change slowly (height, limb lengths)
    
- some are only measured occasionally 

Re-entering everything every time is unnecessary and often impractical.

The cumulative model was created to:

- reduce repetitive input
    
- preserve continuity across sessions
    
- allow partial measurements without breaking interpretation
    
- keep derived metrics and indexes usable between full measurements


>It is a **structural convenience**, not an intelligent estimator.

---
## **What the Cumulative Model Is (and Is Not)**


### **What it is**
The cumulative model is a **composite view** built by:

- Ordering all measurements chronologically
    
- Taking the **most recent valid value** for each measurement point
    
- Assembling them into a single, complete body model

No averaging. No prediction. No inference.

  
### **What it is not**

- It does **not** create new data
    
- It does **not** smooth values
    
- It does **not** replace real measurements
    
- It does **not** imply that values were measured together

It simply **maps forward existing data**.

---

## **How It Differs From a Single Past Measurement**

|**Aspect**|**Single Measurement**|**Cumulative Model**|
|---|---|---|
|Represents|One moment in time|Best-known current state|
|Uses values from|That session only|Multiple sessions|
|Requires full input|Yes|No|
|Suitable for history review|Yes|No|
|Suitable for current interpretation|Limited|Yes|
|Can mix measurement dates|No|Yes (by design)|

---

## **Where You’ll Find It**

Inside the **Body Composition module**, the cumulative model is available from:

- The [[content/Modules/Body Composition/overview|Body Composition]] -> **Measurement Date Selector**
    
- Alongside individual measurement dates
  
You can switch between:

- **Individual measurements** → historical snapshots
    
- **Cumulative view** → current composite state

The active view is always clearly labeled.

---
## **How the Cumulative Model Behaves**

When a value is not re-entered:

- The last valid value is carried forward
    
- Dependent indexes remain calculable
    
- Interpretation remains continuous
  
When a value _is_ updated:

- It replaces the previous value from that point onward
    
- History remains intact
    
- No retroactive changes occur
  
This allows partial measurements **without breaking the model**.

---

## **When the Cumulative Model Is Useful**

  
Use the cumulative model when:

- Performing **frequent, partial measurements** ([[how-often-to-use#**Partial / Targeted Measurements**|Partial & Targeted Measurements]])
    
- Updating only what changed
    
- Reviewing current interpretation between full sessions
    
- Avoiding repetitive input
    
- Maintaining continuity for AI interpretation and indexes
  

Typical examples:

- Weekly weight + waist, monthly full measurement
    
- Short intervention phase with targeted checks
    
- Interim tracking between clinic or scan visits

> [!important]
> >If overused without awareness, carried-forward values can create the **appearance of continuity without new information**.
> Short-term interpretation becomes less precise, and long-term overuse can lead to an **invalid profile for interpretation**.

---

## **Best Practice Summary**

- Use **individual measurements** for history and comparison
    
- Use **cumulative view** for continuity and current interpretation
    
- Re-measure key values intentionally
    
- Do not rely on carry-over indefinitely

  

> [!success] **Key takeaway**
> The cumulative model is a **tool** to improve usability, not a **shortcut** for bad habits.


