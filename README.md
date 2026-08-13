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
1. Replace `https://example.com` in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` with your real domain.
2. Keep your hero video at `public/videos/hero.mp4`.
3. Add official gallery photos to `public/images` and replace the placeholder blocks in `app/[lang]/gallery/page.tsx`.
4. Review biography text and add/remove any claims you do not want displayed.
5. Push to GitHub and import the repository into Vercel.
6. Add your custom domain in Vercel, then update the DNS records at GoDaddy as Vercel instructs.

## Notes
- No country flag is used anywhere in the design.
- This site is a personal biography / official profile, not a coaching sales site.

## SEO / custom domain
After connecting your final domain in Vercel, add an Environment Variable named `NEXT_PUBLIC_SITE_URL` with the full canonical origin, for example `https://yourdomain.com`, then redeploy. This keeps canonical URLs, sitemap.xml and robots.txt aligned with the final domain.
