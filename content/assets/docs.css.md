---
draft: true
---

/* Minimal FAQ row (no box) */
details.fmx-faq {
  margin: 0.9rem 0;
  padding: 0;
  border: 0;
  background: transparent;
}

/* Summary row */
details.fmx-faq > summary {
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.55rem 0;
  border-bottom: 1px solid rgba(160,160,160,0.25);

  user-select: none;
}

/* Remove default marker */
details.fmx-faq > summary::-webkit-details-marker { display: none; }

/* Chevron */
details.fmx-faq > summary::after {
  content: "▾";
  opacity: 0.55;
  transition: transform 180ms ease, opacity 180ms ease;
}

details.fmx-faq[open] > summary::after {
  transform: rotate(180deg);
  opacity: 0.75;
}

/* Smooth “open” feel (content reveal) */
details.fmx-faq .fmx-faq-content {
  overflow: hidden;
  max-height: 0;
  transition: max-height 260ms ease;
}

details.fmx-faq[open] .fmx-faq-content {
  max-height: 400px; /* adjust if answers can be longer */
}

details.fmx-faq .fmx-faq-inner {
  padding: 0.65rem 0 0.2rem 0;
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 220ms ease, transform 220ms ease;
}

details.fmx-faq[open] .fmx-faq-inner {
  opacity: 1;
  transform: translateY(0);
}