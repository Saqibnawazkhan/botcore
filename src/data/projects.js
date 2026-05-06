// Central project catalog used by the home Portfolio, the Work listing
// at /reps, and each case-study detail page at /reps/:slug.

export const CATEGORIES = [
  'All',
  'Branding',
  'Websites',
  'Campaigns',
  'Design',
];

export const projects = [
  {
    id: '01',
    slug: 'rzr-jaw',
    name: 'Rzr Jaw',
    tags: ['Branding', 'Websites', 'Campaigns', 'Design'],
    year: '2026',
    hue: 10,
    featured: true,
    industry: 'Product',
    role: 'Brand identity, packaging, art direction',
    duration: '10 weeks',
    logo: '/projects/thumbnails/rzrjaw.png',
    cover: '/projects/rzr-jaw/cover.png',
    banner: '/projects/rzr-jaw/banner.png',
    gallery: [
      '/projects/rzr-jaw/cover.png',
      '/projects/rzr-jaw/01.png',
      '/projects/rzr-jaw/02.png',
    ],
    influencers: [
      '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2022.34.51.jpeg',
      '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2022.34.51%20(1).jpeg',
      '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2022.34.51%20(2).jpeg',
      '/projects/influencer/Untitled%20design%20-%202026-05-05T040209.375.png',
      '/projects/influencer/Untitled%20design%20-%202026-05-05T040944.011.png',
      '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2022.34.50.jpeg',
    ],
    overview:
      'Rzr Jaw came to us as an early-stage product brand looking for an identity with edge and presence. We built the full brand system from the name treatment to the packaging language, then carried it across the website and launch content so the brand felt sharp and consistent the day it went live.',
    challenge:
      'Rzr Jaw was launching into a saturated grooming market dominated by soft, wellness-leaning brands. They needed a voice that felt engineered and uncompromising without drifting into the generic "bold masculine" trope the category overuses.',
    approach:
      'We anchored the identity on a custom wordmark with machined angles, a monochrome system accented by a single industrial accent colour, and packaging that behaves like a product spec sheet. Every asset reads like a tool, not a cosmetic.',
    outcome:
      'The system launched across packaging, ecommerce, and campaign touchpoints with immediate lift in brand recall. Direct-to-consumer sell-through on week one outpaced the client’s projection.',
    stats: [
      { value: '+38', suffix: '%', label: 'Week-one sell-through' },
      { value: '3.2', suffix: 'x', label: 'Media earned vs target' },
      { value: '9', suffix: ' SKUs', label: 'Product system' },
    ],
    deliverables: [
      'Branding',
      'Logo design',
      'Packaging',
      'Social media',
      'Website',
    ],
  },
  {
    id: '02',
    slug: 'tajjal',
    name: 'Tajjal',
    tags: ['Branding', 'Websites', 'Campaigns'],
    year: '2026',
    hue: 280,
    featured: true,
    industry: 'Brand',
    role: 'Brand strategy, identity, website',
    duration: '14 weeks',
    logo: '/projects/thumbnails/tajjal.png',
    cover: '/projects/tajjal/cover.png',
    banner: '/projects/tajjal/banner.png',
    gallery: [
      '/projects/tajjal/cover.png',
      '/projects/tajjal/01.png',
    ],
    influencers: [
      '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2023.32.55%20(1).jpeg',
      '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2023.32.55.jpeg',
      '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2023.32.55%20(2).jpeg',
    ],
    overview:
      'Tajjal is a Pakistani Extra Virgin Olive Oil brand built around in-house manufacturing and a digital-first approach. We shaped the identity, the packaging, and the visual story behind the product, then created the assets needed to bring it to retail shelves and to investors. The work focuses on premium feel without losing the local roots that make the brand honest.',
    challenge:
      'Tajjal wanted to expand beyond a niche audience without losing the cultural texture that made it distinctive. The existing identity and site were holding the business back at every step of the funnel.',
    approach:
      'We rebuilt the brand from positioning out — a clearer articulation of voice, a refined mark, and a new type system paired with photography that celebrates material and detail. The site was rebuilt on a modern stack with fast-loading, editorial-style product pages.',
    outcome:
      'The launch lifted conversion rate across the board while broadening the audience. Direct traffic grew as the brand started to travel via word of mouth.',
    stats: [
      { value: '+62', suffix: '%', label: 'Conversion rate' },
      { value: '2.4', suffix: 'x', label: 'Direct traffic' },
      { value: '0.9', suffix: 's', label: 'Median page load' },
    ],
    deliverables: [
      'Branding',
      'Packaging',
      'Photography',
      'Website',
      'Investor materials',
    ],
  },
  {
    id: '03',
    slug: 'edit-beauty',
    name: 'Edit Beauty',
    tags: ['Branding', 'Websites', 'Campaigns', 'Design'],
    year: '2026',
    hue: 335,
    featured: true,
    industry: 'Beauty',
    role: 'Identity, digital design, campaign',
    duration: '12 weeks',
    logo: '/projects/thumbnails/edit.png',
    cover: '/projects/edit-beauty/02.png',
    banner: '/projects/edit-beauty/banner.png',
    gallery: [
      '/projects/edit-beauty/cover.png',
      '/projects/edit-beauty/01.png',
      '/projects/edit-beauty/02.png',
    ],
    influencers: [
      '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2023.26.58.jpeg',
      '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2023.26.59.jpeg',
      '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2023.26.59%20(2).jpeg',
      '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2023.26.59%20(1).jpeg',
      '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2023.26.59%20(3).jpeg',
    ],
    overview:
      'Edit Beauty needed a brand that could sit comfortably next to global names while staying approachable for everyday customers. We developed the identity, the packaging across the product line, and a content style that runs through the website and the social channels, giving the brand a clean and confident voice.',
    challenge:
      'The beauty space is crowded with brands shouting about every feature. Edit Beauty wanted the opposite — a calm, confident voice that positioned it as a discerning edit, not a warehouse.',
    approach:
      'We led with typography: a high-contrast serif paired with a mono for labels, and generous whitespace across the system. The site uses long-form product storytelling, a routine builder, and soft motion to keep browsing meditative.',
    outcome:
      'Average session duration nearly doubled versus the previous site. Subscription revenue — the hardest metric to move for a young beauty brand — grew steadily from month one.',
    stats: [
      { value: '1.9', suffix: 'x', label: 'Session duration' },
      { value: '+44', suffix: '%', label: 'Subscription revenue' },
      { value: '12', suffix: ' routines', label: 'Guided journeys' },
    ],
    deliverables: [
      'Branding',
      'Packaging',
      'Photography',
      'Social media',
      'Website',
    ],
  },
  {
    id: '04',
    slug: 'pro-inhale',
    name: 'Pro Inhale',
    tags: ['Branding', 'Websites', 'Campaigns', 'Design'],
    year: '2025',
    hue: 190,
    featured: true,
    industry: 'Wellness',
    role: 'Brand identity, packaging, art direction',
    duration: '9 weeks',
    logo: '/projects/thumbnails/proinhale.png',
    cover: '/projects/pro-inhale/cover.png',
    banner: '/projects/pro-inhale/banner.png',
    gallery: [
      '/projects/pro-inhale/cover.png',
      '/projects/pro-inhale/01.png',
      '/projects/pro-inhale/02.png',
    ],
    overview:
      'Pro Inhale is a wellness-focused product brand. The challenge was to create a brand that felt clinical enough to trust and warm enough to enjoy. We built the identity, the website, and the launch campaigns around clear messaging that explains what the product does and why it matters.',
    challenge:
      'Pro Inhale’s category is clinical by default: sterile blues, medical typography, and packaging that looks like it belongs in a pharmacy back room. The team wanted trust without the drabness.',
    approach:
      'We shifted the palette to a calm, aquatic neutral with a single breath-inspired accent, tightened the logotype, and re-engineered packaging around a single repeated motif that reads at shelf distance.',
    outcome:
      'Retail buyers placed expanded orders in the first cycle. Consumer-facing recall in independent tests improved sharply against the incumbent category leaders.',
    stats: [
      { value: '+54', suffix: '%', label: 'Shelf recall' },
      { value: '3', suffix: ' chains', label: 'Expanded retail' },
      { value: '6', suffix: ' SKUs', label: 'New system' },
    ],
    deliverables: [
      'Branding',
      'Product design',
      'Website',
      'Campaigns',
    ],
  },
  {
    id: '05',
    slug: 'reform-pilates',
    name: 'Reform Pilates',
    tags: ['Branding', 'Websites', 'Campaigns'],
    year: '2025',
    hue: 140,
    featured: true,
    industry: 'Fitness',
    role: 'Brand identity, website, booking UX',
    duration: '11 weeks',
    logo: '/projects/thumbnails/reform.png',
    banner: '/projects/reform.mov',
    overview:
      'Reform Pilates is a studio brand built around community and movement. We created the full identity, the studio signage, and the online presence so the experience customers feel inside the space matches what they see online before they ever walk in.',
    challenge:
      'Growing from one studio to four, Reform Pilates needed a system that could scale across locations while staying warm. The legacy booking flow was causing measurable drop-off at every step.',
    approach:
      'A restrained identity leaning on a custom display face, a muted palette, and a photography style that prioritises motion over aspiration. The booking flow was rebuilt from scratch with clear class timelines, instructor bios, and a one-screen checkout.',
    outcome:
      'Booking completion jumped significantly and no-show rates dropped. The brand carries cleanly across the studio with a single source system.',
    stats: [
      { value: '+71', suffix: '%', label: 'Booking completion' },
      { value: '−28', suffix: '%', label: 'No-show rate' },
      { value: '1', suffix: ' studio', label: 'Unified system' },
    ],
    deliverables: [
      'Branding',
      'Interior signage',
      'Photography',
      'Website',
      'Social media',
    ],
  },
  {
    id: '06',
    slug: 'cafe-soir',
    name: 'Cafe Soir',
    tags: ['Branding', 'Websites', 'Campaigns', 'Design'],
    year: '2025',
    hue: 25,
    featured: true,
    industry: 'Hospitality',
    role: 'Identity, environmental, campaign',
    duration: '8 weeks',
    logo: '/projects/thumbnails/soir.png',
    influencers: [
      '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2023.34.41.jpeg',
    ],
    overview:
      'Cafe Soir wanted a brand that felt like a place rather than just a logo. We worked on the identity, the menu, the food photography, and the in-store graphics, building a brand that customers recognise the moment they step inside or scroll past on social.',
    challenge:
      'The owners wanted a venue that didn’t feel like a morning coffee shop running late. Everything from the menu to the signage needed to communicate "evening" without sliding into nightclub aesthetics.',
    approach:
      'We built an identity on warm amber tones, a soft custom wordmark, and menu typography borrowed from vintage European hospitality. In-venue signage, table cards, and the seasonal campaign all share one visual vocabulary.',
    outcome:
      'The launch generated strong organic social reach and a loyal weekday-evening crowd — the exact audience the venue was targeting.',
    stats: [
      { value: '28k', label: 'Organic reach' },
      { value: '+46', suffix: '%', label: 'Weeknight covers' },
      { value: '5', suffix: ' seasons', label: 'Menu systems' },
    ],
    deliverables: [
      'Branding',
      'Menu design',
      'Photography',
      'Interior graphics',
      'Social media',
    ],
  },
  {
    id: '07',
    slug: 'snackeez',
    name: 'Snackeez',
    tags: ['Branding', 'Websites', 'Campaigns', 'Design'],
    year: '2024',
    hue: 45,
    industry: 'Food & Beverage',
    role: 'Brand identity, packaging, campaign',
    duration: '10 weeks',
    logo: '/projects/thumbnails/snackeez.png',
    overview:
      'Snackeez is a snack brand built for everyday moments. We handled the identity, the packaging across multiple SKUs, the product photography, and the launch ads. The brand needed to feel fun on the shelf and convert clicks into orders online, so we built the system to do both.',
    challenge:
      'The founding team had a great product with zero shelf presence. Packaging had to earn attention in a three-second decision window against incumbents ten times larger.',
    approach:
      'Bold hand-drawn typography, high-saturation colour blocks, and a wordmark that prints at any scale. Campaign assets lean into the same energy, with short-form video built for TikTok-first distribution.',
    outcome:
      'Retail sell-through improved month-over-month through the first two quarters. Organic social following grew steadily without paid acceleration.',
    stats: [
      { value: '+82', suffix: '%', label: 'Retail sell-through' },
      { value: '18k', label: 'Organic followers' },
      { value: '7', suffix: ' SKUs', label: 'Launch lineup' },
    ],
    deliverables: [
      'Branding',
      'Packaging',
      'Photography',
      'Website',
      'Performance ads',
    ],
  },
  {
    id: '08',
    slug: 'urstrong',
    name: 'Urstrong',
    tags: ['Branding', 'Websites', 'Campaigns'],
    year: '2024',
    hue: 210,
    industry: 'Fitness',
    role: 'Brand identity, website, launch campaign',
    duration: '12 weeks',
    logo: '/projects/thumbnails/ur.png',
    overview:
      'Urstrong is a fitness and lifestyle brand. We shaped the identity and the content engine that keeps the brand active across platforms. The work covers the website, the photography style, and the ongoing social content that keeps the audience growing.',
    challenge:
      'Urstrong was tired of fitness branding that leans on hustle language and generic stock photography. The goal was a calmer, more technical voice that treated members as serious athletes from day one.',
    approach:
      'A disciplined identity with a mono-heavy type system, data-forward motion graphics, and a site that places programming and progression at the centre of the experience.',
    outcome:
      'Membership enquiries converted at a higher rate and retention improved in the first full cycle post-launch. The brand now operates as the premium option in its city.',
    stats: [
      { value: '+39', suffix: '%', label: 'Enquiry conversion' },
      { value: '+21', suffix: '%', label: 'Member retention' },
      { value: '3', suffix: ' tiers', label: 'Programme lineup' },
    ],
    deliverables: [
      'Branding',
      'Website',
      'Content',
      'Photography',
      'Social media',
    ],
  },
  {
    id: '09',
    slug: 'zar',
    name: 'Zar',
    tags: ['Branding', 'Websites', 'Campaigns', 'Design'],
    year: '2025',
    hue: 260,
    industry: 'Brand',
    role: 'Brand identity, art direction',
    duration: '7 weeks',
    logo: '/projects/thumbnails/zar.png',
    overview:
      'Zar needed a brand that could carry a premium feel without becoming distant. We built the identity, the packaging, and the visual world around it, then translated that into a website and product imagery that makes the brand feel ready for the next stage of its journey.',
    challenge:
      'Zar’s founder wanted an identity built around the single-letter name — memorable and unmistakable, but flexible enough to carry an expanding product line.',
    approach:
      'A custom ligature treatment of the letter, paired with a restrained neutral palette and a photography style that lets product and material do the talking. The system is small on purpose: a few moves, applied consistently.',
    outcome:
      'The brand launched to strong press pickup and direct inbound from retail partners ahead of the first public drop.',
    stats: [
      { value: '14', suffix: '', label: 'Press placements' },
      { value: '5', suffix: ' retailers', label: 'Inbound interest' },
      { value: '2', suffix: ' drops', label: 'Launch rollout' },
    ],
    deliverables: [
      'Branding',
      'Packaging',
      'Photography',
      'Website',
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug) {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return null;
  return projects[(idx + 1) % projects.length];
}
