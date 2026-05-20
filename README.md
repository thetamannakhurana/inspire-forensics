# Inspire Forensics — Website

A complete, production-ready website for the Inspire Forensics Society, NFSU Delhi Campus.

---

## Project Structure

```
inspire-forensics/
├── index.html                  ← Main website (single page)
├── css/
│   └── style.css               ← All styles
├── js/
│   └── main.js                 ← All data + functionality
├── images/
│   ├── members/                ← Team member photos (18 photos included)
│   ├── events/                 ← Event posters (4 included)
│   ├── gallery/                ← Activity photos (20 included)
│   └── guest-lectures/         ← Lecture posters (16 included)
└── resources/
    ├── Newsletter Dec_25.pdf
    ├── Traces & Trends Jan_ 26.pdf
    ├── Newsletter Feb_26 (1).pdf
    ├── Newsletter April_26 (1).pdf
    ├── INSPIRE FORENSICS Sample Paper-1.pdf
    ├── IF Sample Paper 2.pdf
    ├── IF Sample Paper 3.pdf
    ├── IF Sample Paper 4.pdf
    ├── CUET PG Sample 01 (2).pdf
    ├── IF UG Biology Sample.pdf
    ├── IF UG Chemistry Sample.pdf
    ├── IF UG Physics Sample.pdf
    └── IF UG Math Sample.pdf
```

---

## Sections

1. **Hero** — Full-screen with animated scroll, live stats bar
2. **About** — Society description, mission, visual photos
3. **Departments** — 9 forensic disciplines & departments
4. **Guest Lectures** — All 16 lecture posters (clickable lightbox)
5. **Events** — Event posters + list of all events
6. **Gallery** — 20-photo masonry grid with lightbox
7. **Team** — Core leadership + members with photos
8. **Resources** — Downloadable newsletters & sample papers
9. **Contact** — Contact form + society details
10. **Footer** — Full links

---

## Admin Panel

Click the **⚙ Admin** button in the top navigation bar.

**Default password:** `inspire2025`

To change it, open `js/main.js` and find:
```js
const ADMIN_PASSWORD = 'inspire2025';
```

### What you can manage in the Admin Panel:

| Tab | What you can do |
|-----|----------------|
| Events | Add, edit, delete events; toggle upcoming/past status |
| Guest Lectures | Add, delete lecture entries |
| Core Team | Add, edit, delete core leadership members |
| Members | Add, edit, delete society members |
| Gallery | Add, delete gallery photos |
| Resources | Add, delete newsletters and sample papers |
| Stats | Update the "50+ Members", "25+ Events" numbers |

---

## How to Add New Photos

### Member photo:
1. Copy the photo to `images/members/`
2. In Admin Panel → Core Team or Members → Edit the member → update the photo path

### Gallery photo:
1. Copy the image to `images/gallery/`
2. In Admin Panel → Gallery → Add Image
3. Enter path like: `images/gallery/new_photo.jpg`

### Event poster:
1. Copy image to `images/events/`
2. In Admin Panel → Events → Edit event → update poster path

### Guest lecture poster:
1. Copy image to `images/guest-lectures/`
2. In Admin Panel → Guest Lectures → Add → enter path

---

## How to Deploy

### Option 1: Vercel (recommended)
1. Upload the `inspire-forensics` folder to a GitHub repo
2. Connect to [vercel.com](https://vercel.com)
3. Deploy — done!

### Option 2: Netlify
1. Drag and drop the `inspire-forensics` folder at [netlify.com/drop](https://app.netlify.com/drop)

### Option 3: GitHub Pages
1. Push to GitHub → Settings → Pages → Deploy from root

### Option 4: Local (development)
Open `index.html` directly in a browser — works without any server.

---

## Making Content Permanent

Currently, changes made in the Admin Panel are **in-memory only** (lost on page refresh).

To make changes permanent, edit the data directly in `js/main.js`:
- Find `const SiteData = { ... }` at the top of the file
- Update the relevant arrays (events, coreTeam, members, gallery, resources)

For a proper database-backed admin panel in future, consider connecting to Firebase or Supabase.

---

## Colour Palette

| Colour | Hex | Usage |
|--------|-----|-------|
| Gold | `#D4AF37` | Accents, highlights, CTAs |
| Beige | `#F3C678` | Secondary gold, badges |
| Dark Red | `#D32F2F` | Labels, accent borders |
| Navy | `#0D254C` | Primary background, cards |
| Navy Deep | `#07111f` | Footer, dark sections |
| Black | `#000000` | Text |
| White | `#FFFFFF` | Backgrounds, text on dark |
| Brown | `#A0522D` | Accent use |

---

## Credits

Built for Inspire Forensics Society — NFSU Delhi Campus
