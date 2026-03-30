# Lav Naruka — Portfolio Website

**Level Designer & Unity Developer (Gameplay + VR Systems)**

---

## Folder Structure

```
portfolio/
│
├── index.html          ← Home page
├── projects.html       ← Projects page (main page)
├── about.html          ← About / skills page
├── contact.html        ← Contact page
│
├── css/
│   └── styles.css      ← ALL styles (one file, fully commented)
│
├── js/
│   └── script.js       ← ALL JavaScript (one file, fully commented)
│
└── assets/             ← CREATE THIS FOLDER yourself
    ├── images/         ← Put screenshots & thumbnails here
    │   ├── arena-thumb.jpg
    │   ├── stealth-thumb.jpg
    │   ├── vr-thumb.jpg
    │   └── profile.jpg
    └── videos/         ← Put gameplay videos here (or link YouTube)
```

---

## How to Deploy on GitHub Pages (Free)

1. Create a GitHub account at github.com
2. Create a new repository named:  `yourusername.github.io`
3. Upload ALL files from this folder into the repo root
4. Go to: Repository → Settings → Pages
5. Under "Source" select: Deploy from branch → main → / (root)
6. Click Save
7. Wait ~60 seconds
8. Your site is live at: `https://yourusername.github.io`

---

## Before Going Live — Checklist

- [ ] Replace `your@email.com` in contact.html with your real email
- [ ] Replace GitHub URL in contact.html with your real profile
- [ ] Replace LinkedIn URL in contact.html with your real profile
- [ ] Update the availability note in contact.html
- [ ] Create the `assets/images/` folder and add your images

---

## How to Add a Real Project

1. Open `projects.html`
2. Find the comment `ADD YOUR NEXT PROJECT HERE`
3. Copy one of the existing project card blocks
4. Update: title, description, tags, thumbnail image, links
5. Change `data-status="wip"` to `data-status="live"`
6. Change the badge from `badge-wip` to `badge-live`
7. Replace the placeholder thumbnail:
   - Add your screenshot to `assets/images/your-image.jpg`
   - Change the thumb div background-image accordingly
   - Remove the `.thumb-icon` and `.thumb-label` spans

---

## How to Change the Accent Color

Open `css/styles.css` and change line:
```css
--accent: #c8ff00;
```
to any color you want. The whole site updates automatically.

---

## Adding a Profile Photo

In `about.html`, find the comment `PROFILE PHOTO` and uncomment the block.
Place your photo at `assets/images/profile.jpg`.

---

## Adding a Resume/CV Download

In `about.html`, find the comment `Resume / CV Download` and uncomment the block.
Place your resume PDF at `assets/Lav-Naruka-Resume.pdf`.
