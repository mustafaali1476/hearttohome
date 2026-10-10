# Heart and Home Solutions LLC website
Static HTML/CSS/JS, no build step.
## Deploy
1. Push this folder to a Git repo, import it in Vercel (Framework: Other, no build command, output directory: root), or run `npx vercel` here.
2. Add the domain heartandhomesolutionsllc.com in Vercel. Canonical URLs and the sitemap already use it.
## Connect the quote form
Create a form at formspree.io (or a similar service), then in every page's `<form id="quote-form" data-endpoint="">` set data-endpoint to your endpoint URL. Until then, the form validates and offers a prefilled text message to (720) 477-8268 instead of claiming to send.
## Still to confirm / add
- Real photos: add approved photos of the team's work to /images and place them in the hero panel and service cards.
- Logo: swap the simple heart-and-house mark for the official logo file.
- Service scope lists are typical focus areas; confirm with Susana.
- Existing site uses different service URLs (e.g. /services/one-time-deep-cleaning/); add 301 redirects when switching over.
- Add an Open Graph image (1200x630).
