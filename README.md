# Reptile Discovery

An editorial, wildlife-documentary style landing page showcasing three extraordinary reptiles: the Panther Chameleon, the Tokay Gecko and the Green Sea Turtle.

Built with React 18, TypeScript, Vite and Tailwind CSS, with icons from Lucide React.

## Features

- Sticky navigation that is transparent at the top and turns solid on scroll, with a mobile menu
- Full-screen hero with a slow-zoom photograph, two calls to action and a scroll indicator
- Reusable reptile card with a photo, name, description, three facts and an expandable Learn More panel
- "Did You Know" section with large count-up numbers over a photographic background
- Call to action and footer with minimal social icons
- Scroll-triggered entrance animations and subtle hover effects
- Smooth scrolling, with animations disabled for visitors who prefer reduced motion
- Responsive layout for mobile, tablet and desktop
- Gradient fallback if a photograph fails to load

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Then open the local address Vite prints (usually http://localhost:5173).

Other scripts:

```bash
npm run build     # type-check and create a production build in dist/
npm run preview   # serve the production build locally
```

## Project structure

```
reptile-discovery/
├── index.html
├── public/
│   └── favicon.svg
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css              Tailwind layers, buttons, reveal animation
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── FeaturedReptiles.tsx
│   │   ├── ReptileCard.tsx    Reusable card
│   │   ├── DidYouKnow.tsx
│   │   ├── CallToAction.tsx
│   │   ├── Footer.tsx
│   │   ├── Reveal.tsx         Fade-up on scroll wrapper
│   │   └── Photo.tsx          Image with fallback and focal point
│   ├── hooks/
│   │   ├── useInView.ts       IntersectionObserver
│   │   ├── useScrolled.ts     Navbar background state
│   │   └── useCountUp.ts      Animated numbers
│   └── data/
│       ├── reptiles.ts        Reptile content
│       └── images.ts          Image sources
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── tsconfig.json
```

## Customizing

### Content

Edit `src/data/reptiles.ts` to change names, descriptions, facts or the Learn More text. The cards render from this array, so adding a reptile only needs a new entry.

### Photographs

Image sources live in `src/data/images.ts`. They currently point to Wikimedia Commons. For a more reliable site, download your own photos into `public/images/` and reference them like this:

```ts
turtle: `${import.meta.env.BASE_URL}images/turtle.jpg`,
```

Using `BASE_URL` keeps the paths working when the site is hosted in a sub-folder, such as GitHub Pages.

### Keeping faces in frame

Each reptile has a `focus` value in `src/data/reptiles.ts`. It sets the CSS `object-position` used when the photo is cropped inside its card. The first number moves the crop left to right and the second moves it top to bottom. For example, `100% 40%` shows the far-right edge of the photo.

### Design tokens

Colors, fonts and animations are defined in `tailwind.config.js`:

- Palette: `forest`, `charcoal`, `sand`, `moss` and `amber`
- Fonts: Fraunces (serif headings) and Inter (body text)
- Only buttons are rounded. Border radius is limited to `none` and `full` on purpose, so use `rounded-full` on buttons only.

## Deploying to GitHub Pages

1. Push the project to a GitHub repository. Make sure `node_modules` and `dist` are listed in `.gitignore`.
2. If the site will live at `https://username.github.io/repo-name/`, set the base path in `vite.config.ts`:

   ```ts
   export default defineConfig({
     base: '/repo-name/',
     plugins: [react()],
   })
   ```

   Skip this step for a `username.github.io` repository or a custom domain.
3. In `index.html`, change the favicon link to `href="%BASE_URL%favicon.svg"`.
4. Run `npm run build` and publish the `dist` folder. The usual way is a GitHub Actions workflow that builds the project and deploys `dist` to Pages (Settings, Pages, Source: GitHub Actions).

Other hosts such as Netlify and Vercel work with no changes: use `npm run build` as the build command and `dist` as the output directory.

## Photo credits

Most Wikimedia Commons photographs are licensed under Creative Commons and require attribution. Check each file's page on Commons and credit the photographers before publishing.

## Tech stack

- React 18 and TypeScript
- Vite 5
- Tailwind CSS 3
- Lucide React
