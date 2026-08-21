# Golden Gate Design

Build "Saif Studio" — a premium creative agency portfolio website. This is NOT a freelancer portfolio. It should feel like a world-class digital agency (Awwwards/Framer/Linear/Stripe/Apple-tier) that makes a business owner think "if this is what he did for himself, I want him to build my website."

═══════════════════════════
BUSINESS CONTEXT
═══════════════════════════
Name: Saif Studio
Services: Website Design, Shopify Development, Website Redesign, Landing Pages, Branding, Website Maintenance
Target clients: Restaurants, Dentists, Financial Advisors, Law Firms, Real Estate Agencies, Gyms, Educational Consultants, Local & SMBs
Markets: United States, Canada, International
Pricing: Starter Website $250 · Business Website $450 · Premium Website Custom
Goal: generate leads and support cold outreach — this site needs to convert visitors into inquiries.

═══════════════════════════
DESIGN SYSTEM (use exactly)
═══════════════════════════
Background: #0A0A0A
Surface: #121212
Primary text: #F5F5F5
Secondary text: #A1A1AA
Accent (gold): #C8A96A
Hover accent: #E7C98A
Borders: rgba(255,255,255,0.08)

Headline font: a premium modern display font (Clash Display / General Sans style — use a similar Google Font like "Instrument Serif" or "Bricolage Grotesque" for display if Clash Display isn't available, use your judgement for closest premium match)
Body font: Inter

Visual style: dark luxury theme, massive whitespace, cinematic layouts, elegant gold gradients, subtle grain texture, glass effects where appropriate, large imagery, minimal but memorable.

Animations: smooth scrolling, scroll-triggered reveals, text reveal animations, subtle parallax, hover interactions, magnetic buttons, interactive project cards, section transitions. Intentional and premium — never gimmicky, never hurts performance.

═══════════════════════════
REAL PORTFOLIO PROJECTS (use this real data — do not invent fictional ones except where noted)
═══════════════════════════
1. Burger Bliss (Restaurant) — Live demo: https://preview--burger-bliss-booster.lovable.app/
2. Shekhar Pathare — Financial Advisor — Live demo: https://preview--shekhar-pathare-advisor.lovable.app/
3. Bright Smile Dental Studio (Dental Clinic demo) — Live demo: https://id-preview--60f4d0df-3134-449c-8768-f32fe5be80c7.lovable.app
4. Sterling & Cole Law Group (Law Firm demo) — Live demo: https://id-preview--21937cae-d99c-4f90-91d3-62e9fe219510.lovable.app
5. Ease Living Decor (Shopify store, home decor) — Live site: https://www.easelivingdecor.com/
6. Pruthak Infra (construction firm, Pune — 7 developments) — Live site: https://incredible-maamoul-19f747.netlify.app/
7. Sai Real Estate (Rohan Ranka, Kothrud-based real estate broker) — full digital presence build (website, Google Maps, WhatsApp Business, SEO, social branding, analytics). IMPORTANT: this project has NO live link — do not link to sairealestate.org. Instead present it as a video case study / walkthrough placeholder (use a placeholder video embed area labeled "Project Walkthrough" — I will drop in my own screen recording later). Do not fabricate a live URL for this one.

For each project in the portfolio, build a case study treatment with: hero, overview/challenge, what was built (features), and a "View Live Site" button linking to its real URL (except Sai Real Estate, which gets a "Watch Walkthrough" video placeholder instead of a live link).

═══════════════════════════
SITE STRUCTURE — build as a multi-page app
═══════════════════════════
/ — Home
/portfolio — Portfolio overview (all 7 projects, immersive presentation, not a basic grid)
/projects/burger-bliss
/projects/financial-advisor
/projects/dental-clinic
/projects/law-firm
/projects/ease-living-decor
/projects/pruthak-infra
/projects/sai-real-estate
/services
/pricing
/about
/contact

═══════════════════════════
HOME PAGE SECTIONS
═══════════════════════════
1. Hero — Headline: "Websites Your Customers Remember." Supporting copy on trust, conversions, business growth. Primary CTA "Explore Portfolio" → /portfolio. Secondary CTA "Start a Project" → /contact. Large animated hero visual (abstract gold gradient/grain, not a stock photo).
2. Featured Projects — showcase Burger Bliss, Financial Advisor, Sai Real Estate as large cinematic panels with hover interactions.
3. Why Choose Saif Studio — Strategy, Design, Performance, Growth — elegant visual storytelling, not generic icon boxes.
4. Services — Website Design, Shopify Development, Landing Pages, Branding, Website Redesign, Website Maintenance as interactive cards linking to /services.
5. Process — animated timeline: Discover → Design → Develop → Launch → Support.
6. Featured Case Study — Burger Bliss in depth: Challenge / Solution / Features / Results / Live Preview button.
7. Final CTA — Headline "Ready to Build Something Unforgettable?" CTA "Start Your Project" → /contact.

═══════════════════════════
OTHER PAGES
═══════════════════════════
/services — detailed sections per service: what it is, who it's for, benefits, process, CTA.
/pricing — Starter $250, Business $450, Premium Custom. Present elegantly, focus on value not just price.
/about — position Saif as a trusted digital partner (not a generic freelancer bio) — helping businesses build trust, improve online presence, generate leads. He's a final-year Civil Engineering student whose technical/analytical background is a differentiator for real estate and infrastructure-adjacent clients.
/contact — minimal, premium, conversion-focused. Contact form, email, WhatsApp link, strong CTA.

═══════════════════════════
TECHNICAL
═══════════════════════════
Fully responsive, mobile-first, fast, accessible, SEO-friendly, production quality. Use tasteful scroll-triggered reveal animations throughout. This is a flagship-quality build — treat it like a $10,000 agency project.

Start with the Home page, Portfolio overview page, and the Burger Bliss + Sai Real Estate case study pages fully built out first, then proceed to the remaining pages.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3191d44c-2016-4e06-bfd8-3c67c74d7d15).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
