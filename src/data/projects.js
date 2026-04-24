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
    tags: ['Branding', 'Design'],
    year: '2026',
    hue: 10,
    featured: true,
    industry: 'Product',
    role: 'Brand identity, packaging, art direction',
    duration: '10 weeks',
    overview:
      'A precision-grooming product brand built around a sharp, industrial aesthetic and a confident new visual identity.',
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
      'Custom wordmark and monogram',
      'Primary and secondary colour system',
      'Packaging across 9 SKUs',
      'Ecommerce art direction',
      'Launch campaign assets',
    ],
  },
  {
    id: '02',
    slug: 'tajjal',
    name: 'Tajjal',
    tags: ['Branding', 'Websites'],
    year: '2026',
    hue: 280,
    featured: true,
    industry: 'Brand',
    role: 'Brand strategy, identity, website',
    duration: '14 weeks',
    overview:
      'A lifestyle brand rooted in craft and culture, given a modern identity and a bespoke ecommerce presence.',
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
      'Brand strategy and voice system',
      'Logo, typography, and art direction',
      'Ecommerce website',
      'Campaign-ready template library',
    ],
  },
  {
    id: '03',
    slug: 'edit-beauty',
    name: 'Edit Beauty',
    tags: ['Branding', 'Websites', 'Design'],
    year: '2026',
    hue: 335,
    featured: true,
    industry: 'Beauty',
    role: 'Identity, digital design, campaign',
    duration: '12 weeks',
    overview:
      'A clean, editorial beauty brand built on a promise of curation over clutter — and a site designed to read like a magazine.',
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
      'Brand identity and editorial voice',
      'Type system and photography direction',
      'Website with routine builder',
      'Launch campaign across paid and organic',
    ],
  },
  {
    id: '04',
    slug: 'pro-inhale',
    name: 'Pro Inhale',
    tags: ['Branding', 'Design'],
    year: '2025',
    hue: 190,
    featured: true,
    industry: 'Wellness',
    role: 'Brand identity, packaging, art direction',
    duration: '9 weeks',
    overview:
      'A respiratory-wellness brand repositioned from clinical to confident — still trusted, now desirable.',
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
      'Repositioning and messaging',
      'Primary logotype and icon',
      'Packaging system across 6 SKUs',
      'Retail and digital photography',
    ],
  },
  {
    id: '05',
    slug: 'reform-pilates',
    name: 'Reform Pilates',
    tags: ['Branding', 'Websites'],
    year: '2025',
    hue: 140,
    featured: true,
    industry: 'Fitness',
    role: 'Brand identity, website, booking UX',
    duration: '11 weeks',
    overview:
      'A boutique pilates studio group given a grounded, premium identity and a booking experience that actually makes sense.',
    challenge:
      'Growing from one studio to four, Reform Pilates needed a system that could scale across locations while staying warm. The legacy booking flow was causing measurable drop-off at every step.',
    approach:
      'A restrained identity leaning on a custom display face, a muted palette, and a photography style that prioritises motion over aspiration. The booking flow was rebuilt from scratch with clear class timelines, instructor bios, and a one-screen checkout.',
    outcome:
      'Booking completion jumped significantly and no-show rates dropped. The brand travels cleanly across four locations with a single source system.',
    stats: [
      { value: '+71', suffix: '%', label: 'Booking completion' },
      { value: '−28', suffix: '%', label: 'No-show rate' },
      { value: '4', suffix: ' studios', label: 'Unified system' },
    ],
    deliverables: [
      'Brand identity and guidelines',
      'Location signage system',
      'Website and booking flow',
      'Instructor content templates',
    ],
  },
  {
    id: '06',
    slug: 'cafe-soir',
    name: 'Cafe Soir',
    tags: ['Branding', 'Campaigns', 'Design'],
    year: '2025',
    hue: 25,
    featured: true,
    industry: 'Hospitality',
    role: 'Identity, environmental, campaign',
    duration: '8 weeks',
    overview:
      'An evening café positioned as a third place between dinner and the night — warm, grown-up, and photogenic.',
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
      'Identity and naming support',
      'Menu and print system',
      'Environmental signage',
      'Opening campaign across social and print',
    ],
  },
  {
    id: '07',
    slug: 'snackeez',
    name: 'Snackeez',
    tags: ['Branding', 'Campaigns', 'Design'],
    year: '2024',
    hue: 45,
    industry: 'Food & Beverage',
    role: 'Brand identity, packaging, campaign',
    duration: '10 weeks',
    overview:
      'A challenger snacks brand with an unapologetically playful identity engineered for grocery shelves and social.',
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
      'Logo and brand system',
      'Packaging across launch lineup',
      'Social campaign assets',
      'In-store point of sale',
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
    overview:
      'A strength-training brand built for a clientele that wants progress, not motivation posters.',
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
      'Brand identity and voice',
      'Website with programme catalogue',
      'Launch campaign assets',
      'Member welcome kit',
    ],
  },
  {
    id: '09',
    slug: 'zar',
    name: 'Zar',
    tags: ['Branding', 'Design'],
    year: '2024',
    hue: 260,
    industry: 'Brand',
    role: 'Brand identity, art direction',
    duration: '7 weeks',
    overview:
      'A minimalist luxury brand boiled down to a single character and a system that stays out of its own way.',
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
      'Custom letterform and wordmark',
      'Brand guidelines',
      'Art direction and photography',
      'Launch collateral',
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
