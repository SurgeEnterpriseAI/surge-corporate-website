# Surge Software Solutions — Corporate Website

The official corporate website for **Surge Software Solutions Pvt Ltd**, a Premier Adobe Experience Cloud Partner.

🌐 Production: [https://surgesoftware.co.in](https://surgesoftware.co.in) (hosted on Hostinger)

## Stack

Pure static site — no build step required.

- **HTML5** — 48 hand-authored pages (home, Adobe technology pages, industry/success stories, case studies, company story, locations, contact, legal)
- **CSS3** — single stylesheet at [`styles/main.css`](styles/main.css)
- **Vanilla JavaScript** — [`scripts/main.js`](scripts/main.js) (mobile nav, sticky header, tabbed deck, typewriter hero, particle canvas, scroll reveals)
- **PHP** — [`contact_handler.php`](contact_handler.php) processes the contact form via `mail()` (requires a PHP host such as Hostinger)

## Project structure

```
.
├── index.html                 # Home page
├── *.html                     # 47 content pages
├── contact_handler.php        # Contact form mail handler (PHP)
├── assets/images/             # Logos, hero, backgrounds, tech illustrations
├── scripts/
│   ├── main.js                # Site interactivity
│   └── comprehensive_generator.js  # Dev-only page generator (not loaded by the site)
├── styles/main.css            # All styling
├── robots.txt
├── sitemap.xml
└── sitemap.html
```

## Run locally

The site is static. Serve the folder with any static server:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then open <http://localhost:8000>.

> Note: the contact form (`contact_handler.php`) needs a PHP runtime to actually send mail. Static servers will render every page but won't process the form — that path works on the Hostinger production host.

## Deployment (Hostinger)

This site is served from the Hostinger hosting account for `surgesoftware.co.in`. To deploy, upload the full contents of this repository into the account's `public_html/` directory (via hPanel File Manager, FTP, or Git deployment), making sure the domain is pointed at the hosting account (not parked on Hostinger DNS).

---

© 2025 Surge Software Solutions Pvt Ltd. All rights reserved.
