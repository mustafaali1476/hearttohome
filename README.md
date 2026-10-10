# Heart to Home Cleaning LLC website
Static HTML/CSS/JS, no build step.
## 1. Set your domain (required)
Canonical URLs, Open Graph tags, schema and sitemap use the placeholder `https://YOURDOMAIN.com`. From this folder run:
`grep -rl YOURDOMAIN.com . | xargs sed -i 's#https://YOURDOMAIN.com#https://your-real-domain.com#g'`
## 2. Deploy
Push to Git and import in Vercel (Framework: Other, no build command), or run `npx vercel` here. Then add your domain in Vercel.
## 3. Connect the quote form
Create a form endpoint (e.g. Formspree) and set `data-endpoint="..."` on `<form id="quote-form">` in each page. Until then the form validates and offers a prefilled email to hearttohomecleaning99@gmail.com plus a call button; it does not claim to send.
## Confirm
- Street address is intentionally not published (Fountain address on Facebook may be a home); add it only if you want it public.
- Service area wording (Fountain and Colorado Springs) and owner name (Cora, from reviews).
- Photos: before/after, welcome note and logo are the supplied images.
