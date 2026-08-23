# Portfolio

Personal portfolio website for Dario Schlegel. It presents software projects alongside a more experimental, visual profile section built around a road-style navigation concept.

## Live

https://portfolio-eight-tau-usv97cdepc.vercel.app

## Projects

- **Smash A Meerkat** – browser reaction game with a Java/Spring Boot backend and WebSocket updates.
- **Lyrics Separator** – audio and lyrics workflow with clip preview and export.
- **X-Archive** – mobile-first web project shown in a phone preview.

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Three.js
- Vercel

## Features

- Responsive road-style navigation and project overview
- Project pages with video and external website previews
- Fallback links for embedded previews
- Animated leisure section with video, responsive images and a dynamically loaded Three.js sword model

## Local Development

```bash
git clone https://github.com/im24a-schlegeld/portfolio.git
cd portfolio
npm install
npm run dev
```

Run the production checks with:

```bash
npm run lint
npm run build
```

## Structure

- `app/` contains the App Router pages and UI.
- `app/projekte/` renders project details and previews.
- `app/about/` contains the animated leisure section.
- `data/portfolio.js` contains navigation, project and contact data.
- `public/` contains images, videos and the 3D model.

## Engineering Notes

Three.js is imported only on the client, so the initial server-rendered page does not require the renderer or GLTF loader. Embedded external project previews are lazy-loaded and retain a direct fallback link when an iframe cannot be displayed. The application is deployed on Vercel.
