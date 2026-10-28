# Cultiv8 — Festive Privilege Landing Page

Landing page for **Cultiv8 Sterling Towers, Baner, Pune** (Option A — The Festive Privilege), built from the approved desktop/mobile design and the Cultiv8 brand guideline.

- **client/** — React 18 + Vite (all 11 sections, fully responsive)
- **server/** — Express API for the enquiry form (no database)

## Quick start

```bash
npm run install:all   # installs root, server and client deps
npm run dev           # server on :5000, React on http://localhost:5173
```

Production:

```bash
npm run build         # builds client/dist
npm start             # Express serves the API + built site on :5000
```

Frontend only (no Node server, e.g. Netlify/Vercel static): `cd client && npm run build` and deploy `client/dist`. The form will then need an endpoint — point the `fetch("/api/enquiry")` in `EnquiryForm.jsx` at a form service.

## Page sections (in order)

| # | Section | Component |
|---|---------|-----------|
| 01 | Header & hero + offer card | `Header.jsx`, `Hero.jsx` |
| 02 | Client logos (scrolling) & workspace options | `ClientLogos.jsx`, `Workspaces.jsx` |
| 03 | Inside Cultiv8 — videos & filterable gallery | `Gallery.jsx` |
| 04 | Amenities | `Amenities.jsx` |
| 05 | Location (map on click) | `Location.jsx` |
| 06 | Why Cultiv8 | `WhyCultiv8.jsx` |
| 07 | Member reviews | `Reviews.jsx` |
| 08 | Enquiry form | `EnquiryForm.jsx` |
| 09 | FAQs (accordion) | `Faq.jsx` |
| 10 | Final call to action | `FinalCta.jsx` |
| 11 | Footer | `Footer.jsx` |
| — | Floating WhatsApp (desktop) / sticky Call·WhatsApp·Offer bar (mobile) | `FloatingContact.jsx` |

All copy, phone numbers, links, FAQs and reviews live in **`client/src/data/content.js`**.

## Add the real photos, logos and videos

Drop files into `client/public/` with these names. Anything missing shows a sand-coloured placeholder, so the page never looks broken.

```
images/
  cultiv8-logo.png        hero.jpg
  dedicated-desks.jpg     private-cabins.jpg     managed-offices.jpg
  boardroom.jpg           directors-suite.jpg    reception.jpg
  breakout-zone.jpg       breakout-mural.jpg     front-desk.jpg
  cafe-games.jpg          meeting-room.jpg       team-space.jpg
  recreation.jpg          cafeteria.jpg          highlights-poster.jpg
  strip-1.jpg … strip-4.jpg          (photo strip above the form)
  logos/ sopra-banking.png greythr.png tenthpin.png gigindia.png
         crossover.png exaltare.png mobifolio.png
videos/
  walkthrough.mp4   highlights.mp4
```

Recommended: JPG/WebP, ~1600 px wide for hero, ~1000 px for cards; compress before uploading.

## Before going live — checklist

- [ ] Replace `email`, `instagram`, `facebook` and the Google reviews link in `content.js` (marked `TODO`).
- [ ] Connect leads: the server currently **keeps enquiries in memory and logs them to the console** — they're lost on restart. Add email (Nodemailer) or a CRM/Google Sheet webhook in `handleLead()` in `server/index.js`.
- [ ] Add a privacy policy page and update the `#privacy` link in the form.
- [ ] Brand font: the guideline specifies **Sharp Sans** (licensed). Barlow is used as the web stand-in; self-host Sharp Sans and update `--font-display` / `--font-body` in `index.css` if the licence covers web use.

## Brand tokens (from guideline)

| Name | Hex |
|---|---|
| Graphite Black | `#27292B` |
| Rust Orange | `#CC6633` |
| Dark Grey | `#333333` |
| Light Grey | `#E6E6E6` |
| Warm Sand | `#E3DACE` |
