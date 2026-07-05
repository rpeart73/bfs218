# BFS218 Companion (async)

The reading room for **BFS218: Racism and the Digital Age (Understanding Techno-Racism)** at Seneca Polytechnic, Online Asynchronous section.

A student-facing source library on the shared corpus engine: search and filter the course readings, move through the course by week, drill into one source, browse the glossary and key thinkers, and run self-check cards. Weekly pages carry the overview, purpose, outcomes, guiding questions, concepts, readings, an embedded walkthrough deck, and an activity. The repo also serves the weekly walkthrough decks at `/walkthroughs/`.

It is a **companion to Blackboard**, not a replacement. Official course records, discussion, grades, and submission live in Blackboard. No accounts, no grading, no student-to-student interaction, no analytics, no PDFs, and no reproduced reading text. Reading links point outward (open access, publisher, Seneca Library, or Blackboard).

## Single source with the sibling site
This site and the Online Synchronous sibling (`bfs218-sync`, the Field Guide) share one engine and one content set. Pushing either repo propagates the shared parts (`app.js`, `data/corpus-data.js`, `data/bfs218-mc.js`, `walkthroughs/`) to the other via `BFS218/_shared/propagate.sh` (installed as a pre-push hook by `_shared/install_bidi_hooks.sh`). Each site keeps its own skin (`index.html`), its `course.mode` label, its favicon, and its README.

## Editing content
Live data is `data/corpus-data.js` (one `window.BFS218` object) plus `data/bfs218-mc.js` (self-check banks). Weekly page copy lives in the `WEEKPAGE` block of `app.js`.
- Never use em or en dashes anywhere.
- Every glossary term and key concept cites the week's assigned reading.
- Book readings are always pinned to a chapter or page range; nothing is due in the final week (capstone due Week 13, matching the official outline).
- After editing, bump the `?v=` cache-busters in `index.html`; the propagate script aligns the sibling's automatically.

## Run it
Static site, no build step, no framework. Serve the folder and open it:

```bash
python3 -m http.server 8200
```

IBM Plex Sans and Mono are self-hosted from `./fonts/` (OFL 1.1, license in `fonts/OFL.txt`); the site loads no CDN scripts and no Google Fonts. The only external requests are user-facing scholar-talk video embeds (YouTube thumbnail + click-gated player).
