# Kumari Nidhi — Portfolio Website

A responsive, animated portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lenis** smooth scrolling.

---

## ⚠️ IMPORTANT: Download Images Before Deploying

The images currently in the code are temporary Figma MCP URLs that **expire in 7 days**. Before hosting:

1. Open each URL listed in `lib/data.ts` (under `ASSETS` and `PROJECT_IMAGES`) in your browser
2. Right-click → "Save image as…" → save to `public/images/`
3. Update the path in `lib/data.ts`:
   - Change `'https://www.figma.com/api/mcp/asset/...'`
   - To `'/images/your-filename.png'`

**Images to download:**

| Variable | Save as |
|---|---|
| `ASSETS.signature` | `public/images/signature.png` |
| `ASSETS.heroPhoto` | `public/images/hero-photo.png` |
| `ASSETS.statsCardBg` | `public/images/stats-card-bg.png` |
| `ASSETS.arrowDown` | `public/images/arrow-down.svg` |
| `ASSETS.arrowRightUp` | `public/images/arrow-right-up.svg` |
| `ASSETS.linkedinFill` | `public/images/linkedin.svg` |
| `ASSETS.behanceLine` | `public/images/behance.svg` |
| Each project image | `public/images/project-*.png` |
| Each skill icon | `public/images/skill-*.svg` |

---

## 🚀 Getting Started (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 🌐 Deploy to GitHub Pages

### Step 1 — Create a GitHub repository
- Name it: `your-github-username.github.io`
- Set it to **Public**

### Step 2 — Build the site
```bash
npm run build
```
This creates the `out/` folder with all static files.

### Step 3 — Upload to GitHub
- In your GitHub repo, click **Add file → Upload files**
- Upload **all files inside the `out/` folder** (not the folder itself — the files inside)
- Commit changes

### Step 4 — Enable GitHub Pages
- Go to **Settings → Pages**
- Under "Branch", select **main** → **/ (root)**
- Click **Save**
- Wait 1-2 minutes

### Step 5 — Visit your site
`https://your-github-username.github.io`

---

## 🎨 Customisation

### Update personal info
Edit `lib/data.ts`:
- `HEADLINE_PAIRS` — rotating hero headlines
- `PROJECTS` — project titles, links, images
- `SKILL_CATEGORIES` — your skills
- `AI_TOOLS` — AI tools in your workflow
- `COMPANIES` — your work timeline

### Change colours
Edit `tailwind.config.js` → `theme.extend.colors`

### Add/change fonts
Edit `app/globals.css` → `@import url(...)` line

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout, fonts, dark mode
│   ├── page.tsx          # Main page (assembles sections)
│   └── globals.css       # Global styles, fonts, utilities
├── components/
│   ├── Navbar.tsx        # Navigation with scroll hide/show
│   ├── HeroSection.tsx   # Hero with typing animation
│   ├── SkillsSection.tsx # Skills with chip animations
│   ├── ProjectsSection.tsx # Timeline + project cards
│   ├── Footer.tsx        # Footer
│   └── LenisProvider.tsx # Smooth scroll wrapper
├── lib/
│   └── data.ts           # All content: projects, skills, assets
├── public/
│   └── images/           # ← Download Figma images here
├── next.config.js        # Static export config
├── tailwind.config.js    # Design tokens
└── package.json
```

---

## ✨ Features Implemented

- [x] **Navbar** — fades in on load, hides on scroll down, reappears on scroll up
- [x] **Hero typing animation** — word-by-word, blinking cursor, pauses on hover
- [x] **Rotating headlines** — 3 headline pairs with smooth type-in / type-out
- [x] **Hero image** — fade-in entrance, subtle zoom-out on hover
- [x] **Stats card** — fade in, remains static
- [x] **Skill chips** — staggered fade-up animation on scroll enter
- [x] **Chip ripple** — ripple effect on hover
- [x] **Collapsible categories** — on mobile, skill categories are collapsible
- [x] **Project cards** — scale + fade on viewport enter, replay on re-enter
- [x] **Sticky timeline** — fills progressively as you scroll through projects
- [x] **Active company** — updates automatically as sections enter viewport
- [x] **Dark mode** — instant switch, remembers preference, respects system default
- [x] **Lenis smooth scroll** — natural, unobtrusive scrolling
- [x] **Reduced motion** — all animations disabled when OS setting is on
- [x] **Responsive** — 7 breakpoints, mobile-first layout
- [x] **Accessible** — semantic HTML, ARIA labels, visible focus states, keyboard nav
- [x] **Let's Talk** — opens mailto in Gmail
