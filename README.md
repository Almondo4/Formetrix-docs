

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

## 🌍 Deployment (Cloudflare Pages)

The documentation site is deployed using **Cloudflare Pages**, which automatically builds and publishes the site whenever you sync changes to this repository.

### 🔄 How deployment works

1. Cloudflare pulls the latest commit from your GitHub repo
    
2. It runs the Quartz build command
    
3. The generated static site (`/public`) is deployed globally
    
4. Your custom domain (e.g., `docs.formetrix.fit`) updates instantly
    

### 🚀 Deploying updates

Simply commit and push your changes:

bash

```
npx quartz sync --no-pull
```

Cloudflare Pages will detect the update, rebuild the site, and deploy it automatically—no manual steps, no branch switching, no pulling required.


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
