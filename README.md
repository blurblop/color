# Colorist Portfolio — Setup Guide

A free, fast, dark-themed portfolio for color grading work.
Before/after image sliders + embedded Vimeo videos. No frameworks,
no build tools, no monthly costs.

## Files

| File          | What it is                                          |
|---------------|-----------------------------------------------------|
| `index.html`  | Home / portfolio page (don't need to edit)          |
| `about.html`  | About + contact page (edit your bio and links once) |
| `projects.js` | **Your project list — the only file you edit regularly** |
| `style.css`   | The dark theme (edit only if you want to restyle)   |
| `images/`     | Put your before/after JPEG stills here              |

## Going live on GitHub Pages (one-time, ~10 minutes)

1. Create a free account at github.com
2. Click **+** (top right) → **New repository**
3. Name it exactly: `yourusername.github.io`
   (replace `yourusername` with your actual GitHub username)
4. Set it to **Public**, click **Create repository**
5. Click **uploading an existing file**, drag all these files
   (and the `images` folder) into the page, click **Commit changes**
6. Go to **Settings → Pages** — it should already say your site is
   live at `https://yourusername.github.io`
7. Open that link. Done — free forever, no ads.

## Adding a new project (~5 minutes each)

Fields are flexible per project: both images = drag slider,
only afterImage = single still, no images = video only, and
vimeoId is optional too. Mix freely.

1. In DaVinci Resolve, export two stills of the same frame:
   one before the grade, one after. Export as JPEG, 1280×720 or
   1920×1080 is plenty. Name them clearly,
   e.g. `mercedes-before.jpg` and `mercedes-after.jpg`
2. Upload your before/after comparison video to Vimeo (free plan).
   Copy the number from the link: `vimeo.com/76979871` → `76979871`
3. On GitHub, open the `images` folder → **Add file → Upload files**
   → drag your two stills in → Commit
4. Open `projects.js` → click the pencil icon (Edit) → copy an
   existing project block and fill in your details → Commit

The new project appears on the site within a minute. Newest project
at the top of the list = shown first.

## Editing on your phone

GitHub's website works fine on mobile — you can edit `projects.js`
and upload images from your phone's browser.

## First things to customize

- [ ] `about.html` — your bio, real email, WhatsApp number,
      Instagram and LinkedIn links (marked with `EDIT` comments)
- [ ] `projects.js` — replace demo projects with real ones
- [ ] `index.html` — the name in the wordmark/title if you want
      "Bahrain Drone Studios" or a different name

## Later (all optional, all free)

- **Custom domain**: point a subdomain like
  `portfolio.bahraindrone.com` at GitHub Pages
  (Settings → Pages → Custom domain)
- **Cloudflare Pages**: identical workflow if you ever prefer it
- **Decap CMS**: adds a real admin panel with login, if the
  projects list ever feels limiting

## About this version (v3 — "The Suite" + Archive)

Fullscreen screening experience: each project takes over the whole
screen, letterbox bars, animated vectorscope on the hero, videos
open in a fullscreen overlay.

Scales to any number of projects:
- Home page screens ONLY projects marked `featured: true`
  in projects.js (keep 6-10 there — your best work)
- archive.html automatically lists EVERY project in a filterable
  grid; clicking a tile opens it fullscreen with prev/next
- If nothing is marked featured, the home page shows everything

Same projects.js format as v2 — your data works in both versions,
v3 just adds the optional `featured: true` field.
