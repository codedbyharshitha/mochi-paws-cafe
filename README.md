# 🐾 Mochi Paws Café

A pastel, bubble-style website for a pet-friendly café with cute coffees, a tiny book nook, and cats & pups to play with or adopt.

**Live website:** `PASTE-YOUR-GITHUB-PAGES-OR-VERCEL-LINK-HERE`

## 1. The Idea

| | |
|---|---|
| **What it is** | A friendly one-page website for a fictional café, *Mochi Paws Café*. |
| **Purpose** | Show the café's drinks and offers, invite people to the book nook, let visitors meet and adopt rescue animals, and collect donations for animal care. |
| **Target audience** | College students, young adults, families, book lovers, and animal lovers looking for a cozy hangout. |
| **Design idea** | No boring dashboard. The home screen is a cluster of floating **bubbles with icons**; each bubble takes you to a section. Cartoon animals pop up from the edges of every section. |

## 2. Features

- 🫧 **Bubble navigation**: icon bubbles on the home screen, plus a floating bubble menu button that is available on every section
- ☕ **Coffee menu** with filter bubbles (Hot / Iced / Sweet treats)
- 🎀 **Offer tickets**: click to copy a coupon code
- 📚 **Book Nook**: flip-style book cards and a "save me a seat" counter
- 🐶 **Play & Adopt**: pet carousel (cats / pups filter) with an adopt or play-time pop-up form and validation
- 📍 **Visit Us**: address, hours, contact, pet rules, and a live "open now?" indicator
- 💝 **Donate**: amount bubbles, custom amount, animated progress bar, floating hearts (demo only, no real payments)
- 🐱 **Cartoon animals** drawn in SVG that peek in and say something when clicked
- 📱 **Responsive** layout for phones, tablets, and desktops
- ♿ Keyboard-friendly, visible focus, and respects "reduce motion" settings

## 3. Technology Stack

- **HTML5**: structure
- **CSS3**: Grid, Flexbox, custom properties, animations, media queries
- **Vanilla JavaScript (ES6)**: no frameworks or libraries
- **Google Fonts**: Fredoka and Quicksand
- Frontend only: no backend, no database, no login

## 4. Project Structure

```
mochi-paws-cafe/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## 5. Setup Instructions

### Run locally
1. Download or clone this repository.
2. Open the folder in **VS Code**.
3. Install the **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**.
   (You can also double-click `index.html` to open it in a browser.)

### Customize
All text content (drinks, offers, books, pets) lives in the arrays at the top of `js/script.js`. The address, hours, and phone are in `index.html` under the **Visit Us** section.

### Deploy on GitHub Pages
1. Create a new repository on GitHub and upload all the files (keep `index.html` in the root).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose **main** and **/(root)**, then click **Save**.
4. After a minute, your site is live at `https://<your-username>.github.io/<repo-name>/`.

### Deploy on Vercel (alternative)
1. Sign in at vercel.com with GitHub and click **Add New → Project**.
2. Import your repository, leave the settings as they are (no build command), and click **Deploy**.

## 6. Notes

- The café, pets, address, and donation goal are fictional examples.
- The donation and adoption forms are demos and send no data anywhere.

Made with 🧋 and 🐾
