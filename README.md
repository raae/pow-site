# POW! website

The marketing site for [POW!](https://www.usepow.app), the privacy-first menstrual cycle journal. Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed on Netlify.

## Develop

```shell
nvm use
npm install
npm run dev
```

The site runs at http://localhost:4321. `npm run build` builds to `dist/`, and `npm run preview` serves that build.

## Content

Every `index.md` in `content/` becomes a page, and its folder is the url:

- `content/index/index.md` → `/`
- `content/changelog/index.md` → `/changelog/`
- `content/newsletter/thank-you/index.md` → `/newsletter/thank-you/`
- `content/404/index.md` → the 404 page

The markdown in an `index.md` is rendered at the top of the page. Pages can also list `sections` in the frontmatter:

```yaml
sections:
  - title: Your private data # big headline
    subtitle: Short intro text
    body: ./your-private-data.md # markdown file, relative to index.md
    cta:
      path: /signup
      label: Yes to privacy
    form: newsletter # shows the newsletter sign-up form
    image: ../assets/pow-family.jpg
    imageAlt: Describe the image
    videos:
      - id: Bk1jonYPFD4 # YouTube id
        action: Optional button text
```

The schema lives in `src/content.config.ts`.

### Adding a YouTube video

Thumbnails are stored in `src/assets/youtube/<id>.jpg` so the site doesn't load anything from YouTube. To add a video, save its thumbnail there (`https://img.youtube.com/vi/<id>/hqdefault.jpg`) and add its title to `src/data/videos.ts`.

## Styling

Tailwind, configured in `src/styles/global.css`. The theme colors and the shared `prose`, `button`, `link` and `field` classes are defined there too.
