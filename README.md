# Hassan Golestaneh — Official Website

Premium multilingual personal website built with Next.js.

## Languages
- English `/en`
- Persian `/fa`
- French `/fr`
- Spanish `/es`

## Pages
Home, Biography, Career, Achievements, Media, Gallery, Contact.

## Run locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Before launch
1. Production SEO domain is configured as `https://hassangolestaneh.com` in `lib/seo.ts`.
2. Keep your hero video at `public/videos/hero.mp4`.
3. Add official gallery photos to `public/images` and replace the placeholder blocks in `app/[lang]/gallery/page.tsx`.
4. Review biography text and add/remove any claims you do not want displayed.
5. Push to GitHub and import the repository into Vercel.
6. Add your custom domain in Vercel, then update the DNS records at GoDaddy as Vercel instructs.

## Notes
- No country flag is used anywhere in the design.
- This site is a personal biography / official profile, not a coaching sales site.
