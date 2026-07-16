# erosoft — website

Static site, no build step. Open `index.html` in a browser or serve the folder
(`python3 -m http.server`).

## Structure

erosoft-site/
├── index.html            Home — studio intro, game overview, download CTA
├── game.html             Game — hero, trailer, screenshots, download band
├── studio.html           Studio — philosophy, values, social links
├── blog.html             Dev blog index (6 stage posts)
├── blog/
│   ├── post-01.html      Stage 01 — Concept & prototype
│   ├── post-02.html      Stage 02 — Core mechanics
│   ├── post-03.html      Stage 03 — Level & puzzle design
│   ├── post-04.html      Stage 04 — Art direction
│   ├── post-05.html      Stage 05 — Systems & simulation
│   └── post-06.html      Stage 06 — Polish & release
├── css/style.css         All styling (VI tokens at the top)
├── js/main.js            Nav, scroll reveal, starfield sparks, video play
└── assets/
    ├── fonts/            NicoMoji.woff2 · KodeMono.woff2 (SIL OFL 1.1, self-hosted)
    ├── img/              logo-rose.png · logo-white.png · placeholder-wide.png
    └── video/            drop trailer.mp4 here

## Swapping in real content

- Search for `[PLACEHOLDER` across the HTML files — every spot that needs the
  real mariopackage copy is marked (game pitch, world paragraphs, all blog body text).
- Trailer: put the file at `assets/video/trailer.mp4`, then in game.html
  uncomment the `<video>` line and delete the placeholder `<img>` below it.
- Screenshots: replace `assets/img/placeholder-wide.png` references, or add new
  files and update the three `shot_0x` blocks in game.html.
- Social links: studio.html — replace the `href="#"` on each `.social` card.
- Store buttons: game.html `#download` band — itch.io + Steam hrefs.

## VI tokens (css/style.css `:root`)

Ink #17151A · Graphite #2A2730 · Paper #FCFAFB
Rose #CC0066 · Rose Hot #E81B70 · Blush #FBE4EF
Display: Nico Moji · Body/UI: Kode Mono
