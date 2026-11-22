# John Marks – Technical writing portfolio

Source files for my technical writing portfolio site. The site is built with [Docusaurus](https://docusaurus.io) and published with GitHub Pages.

**Live site:** https://johnbmarks.github.io/portfolio

## Contents

- **Home:** introduction
- **About:** who I am and how I work
- **Resume:** experience and skills
- **Portfolio:** writing samples
- **Blog:** articles (coming soon)

## Preview the site on your Mac

In a terminal, from this folder:

```bash
npm install   # first time only: downloads Docusaurus into node_modules
npm start     # opens a live preview at http://localhost:3000/portfolio/
```

Edits to pages appear in the preview as soon as you save. Press **Ctrl + C** in the terminal to stop it.

## Where things are

| To change… | Edit… |
|---|---|
| Home page | `src/pages/index.js` |
| About page | `src/pages/about.md` |
| Resume page | `src/pages/resume.md` |
| Portfolio samples | `docs/` (each folder is a sidebar heading) |
| Blog posts | `blog/` (add files named like `2026-11-30-my-post.md`) |
| Site title, menu, footer | `docusaurus.config.js` |
| Colors | `src/css/custom.css` |

For a record of how the site was set up, see [SETUP-NOTES.md](SETUP-NOTES.md).

## License

[MIT](LICENSE) © 2026 John Marks
