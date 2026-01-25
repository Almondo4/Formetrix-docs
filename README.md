

# 📘 Formetrix Documentation

Welcome to the official **Formetrix Documentation** — a structured, modular knowledge base covering the concepts, workflows, and systems behind the Formetrix platform.

This site is built with **Quartz v4**, a fast, modern static‑site generator optimized for technical documentation.  
It is deployed automatically via **GitHub Pages**.

---

## ✨ Features

- **Modular documentation structure**  
    Concepts, Guides, Modules, and FAQs organized for clarity and discoverability.
    
- **Fast, searchable knowledge base**  
    Powered by Quartz’s built‑in full‑text search with keyboard shortcuts (`⌘K` / `Ctrl+K`).
    
- **Lightweight & responsive UI**  
    Custom‑styled components, rounded search bar, platform‑aware hints, and a clean light theme.
    
- **Automatic deployment**  
    GitHub Actions builds and publishes the site to GitHub Pages on every push.
    
- **Analytics support**  
    Easily integrates with Plausible, Clarity, Vercel Analytics, and more.
    

---

## 📂 Project Structure

```
/
├── content/               # All documentation pages (Markdown)
│   ├── Concepts/
│   ├── Guides/
│   ├── Modules/
│   └── FAQ/
│
├── quartz/                # Quartz configuration & components
│   ├── components/
│   ├── scripts/
│   ├── styles/
│   └── quartz.config.ts
│
├── public/                # Built static site (generated)
├── .github/workflows/     # Deployment workflow
└── README.md
```

---

## 🚀 Local Development

To run the documentation locally:

```bash
npm install
npx quartz build
npx quartz serve
```

Then open:

```
http://localhost:8080
```

Quartz will watch for changes and rebuild automatically.

---

## 🔧 Configuration

All site configuration lives in:

```
quartz/quartz.config.ts
```

Key settings include:

- `baseUrl` — required for GitHub Pages
- `theme` — light/dark mode settings
- `analytics` — Plausible, Clarity, Vercel, etc.
- `plugins` — search, backlinks, table of contents, etc.

---

## 🌍 Deployment (GitHub Pages)

This repository includes a GitHub Actions workflow that:

1. Builds the Quartz site
2. Publishes the output to the `gh-pages` branch
3. Serves it via GitHub Pages

To trigger deployment, simply push to `main`:

```bash
git add .
git commit -m "Update docs"
git push
```

GitHub Pages will update automatically.


---

## 🤝 Contributing

If you want to add or update documentation:

1. Create or edit Markdown files in `content/`
2. Run the site locally to preview changes
3. Commit and push

Quartz will rebuild and redeploy automatically.

---

## 📄 License

This documentation is part of the Formetrix project.  
All rights reserved unless otherwise stated.
