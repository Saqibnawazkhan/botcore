// Configuration for each capability sub-page at /capabilities/:slug.
// `projectFilter` decides which projects appear in the mosaic and the
// featured-work grid. `useGallery` pulls every gallery image from the
// matched projects (used on Branding so the mosaic shows everything we
// have shot for branded work, not just the logo thumbnails).

import {
  Sparkles,
  PenTool,
  Camera,
  Monitor,
  Megaphone,
  LineChart,
  Compass,
} from 'lucide-react';

export const capabilityList = [
  {
    slug: 'branding',
    id: '01',
    label: 'Branding & Identity',
    shortLabel: 'Branding',
    Icon: Sparkles,
    eyebrow: 'Capability / 01 — Branding',
    headlineWhite: 'Brands and identities',
    headlineGreen: 'built to last beyond launch.',
    intro:
      'Naming, wordmark, mark system, colour, typography, voice, and the full guidelines that hold it together. We build brand identities from the ground up, then carry them across packaging, websites, and campaigns so the brand reads like one clear voice from day one.',
    deliverWhite: 'Everything the brand',
    deliverGreen: 'needs to launch.',
    deliverIntro:
      'One team, one brief, one consistent system across every surface a customer ever touches.',
    deliverables: [
      'Naming & wordmark',
      'Logo & mark systems',
      'Colour & typography',
      'Brand voice & messaging',
      'Brand guidelines',
    ],
    processWhite: 'Five steps from',
    processGreen: 'brief to brand.',
    process: [
      {
        id: '01',
        title: 'Listen',
        body: 'We start with the founder. The story, the audience, the competitors, the ambition. The brand work only travels as far as the strategy underneath it.',
      },
      {
        id: '02',
        title: 'Position',
        body: 'A clear articulation of who the brand is for, what it stands for, and what makes it different. The positioning becomes the lens for every creative decision that follows.',
      },
      {
        id: '03',
        title: 'Identify',
        body: 'Wordmark, mark system, colour, typography, voice. Built as a system rather than a logo, so every surface a customer touches feels like the same brand.',
      },
      {
        id: '04',
        title: 'Apply',
        body: 'Packaging, website, social, signage, decks. The identity is pressure-tested across the surfaces the brand actually lives on, not stuck in a guideline PDF.',
      },
      {
        id: '05',
        title: 'Evolve',
        body: 'Brands grow into themselves. We stay involved past launch — refining the system, adding what is missing, keeping it consistent as the business expands.',
      },
    ],
    projectFilter: (p) => p.tags?.includes('Branding'),
    useGallery: true,
  },
  {
    slug: 'graphic-design',
    id: '02',
    label: 'Graphic Design',
    shortLabel: 'Graphic Design',
    Icon: PenTool,
    eyebrow: 'Capability / 02 — Graphic Design',
    headlineWhite: 'Design that bridges strategy',
    headlineGreen: 'and the moment of trust.',
    intro:
      'Packaging, print, social creatives, pitch decks, menus, signage — any surface where your brand needs to appear. Design that pulls weight commercially, not just aesthetically.',
    deliverWhite: 'Surfaces where',
    deliverGreen: 'the brand earns trust.',
    deliverIntro:
      'From the shelf to the pitch deck, every touchpoint reinforces the same system.',
    deliverables: [
      'Packaging & print',
      'Social creatives',
      'Pitch decks',
      'Menus & signage',
      'Editorial layouts',
    ],
    processWhite: 'How a graphic system',
    processGreen: 'comes together.',
    process: [
      { id: '01', title: 'Audit', body: 'We map every surface a customer might encounter so nothing is designed in isolation.' },
      { id: '02', title: 'System', body: 'A grid, type scale, colour rhythm, and asset library that scales across formats.' },
      { id: '03', title: 'Apply', body: 'We design the surfaces that matter most first — the ones converting customers — then expand outward.' },
      { id: '04', title: 'Hand off', body: 'Working files, templates, and clear guidelines so the team can carry the system without us in the room.' },
    ],
    projectFilter: (p) => p.tags?.includes('Design') || p.deliverables?.some((d) => /packag|menu|print|signage|deck/i.test(d)),
    useGallery: true,
  },
  {
    slug: 'photo-video',
    id: '03',
    label: 'Photography & Video',
    shortLabel: 'Photo & Video',
    Icon: Camera,
    eyebrow: 'Capability / 03 — Photography & Video',
    headlineWhite: 'In-house photography and video,',
    headlineGreen: 'concept to final edit.',
    intro:
      'Product shoots, lifestyle content, brand films, and short-form social — produced under one roof. Strong original imagery is one of the fastest ways for a new brand to look credible.',
    deliverWhite: 'Imagery that does',
    deliverGreen: 'the heavy lifting.',
    deliverIntro:
      'A studio team that handles concept, direction, capture, and edit so nothing gets lost between vendors.',
    deliverables: [
      'Product photography',
      'Lifestyle shoots',
      'Brand films',
      'Short-form social',
      'Concept to final edit',
    ],
    processWhite: 'A shoot built',
    processGreen: 'around the brand.',
    process: [
      { id: '01', title: 'Brief', body: 'We interrogate the why before the lens — what the imagery has to do for the brand on the surfaces it lives on.' },
      { id: '02', title: 'Plan', body: 'Shotlist, mood, lighting, talent, location. Everything signed off before the camera comes out.' },
      { id: '03', title: 'Shoot', body: 'Day-of capture with a tight crew and a director on-set. We protect the time for the shots that matter most.' },
      { id: '04', title: 'Edit', body: 'Colour, retouch, and motion finishing in-house. Final delivery is ready to ship across web, social, and print.' },
    ],
    projectFilter: (p) => p.deliverables?.some((d) => /photograph|video|film/i.test(d)),
    useGallery: true,
  },
  {
    slug: 'websites',
    id: '04',
    label: 'Website Design & Development',
    shortLabel: 'Websites',
    Icon: Monitor,
    eyebrow: 'Capability / 04 — Websites',
    headlineWhite: 'Websites that load fast',
    headlineGreen: 'and convert visitors.',
    intro:
      'Brand sites, full e-commerce stores, or custom platforms — design, build, and ongoing improvements. Sites that look sharp on every screen and earn their keep commercially.',
    deliverWhite: 'A website that',
    deliverGreen: 'works for the business.',
    deliverIntro:
      'Performance, SEO, and conversion baked in from the first wireframe — not bolted on at the end.',
    deliverables: [
      'Brand & marketing sites',
      'E-commerce builds',
      'Custom platforms',
      'Performance & SEO',
      'Ongoing care',
    ],
    processWhite: 'How we build',
    processGreen: 'a site that lasts.',
    process: [
      { id: '01', title: 'Map', body: 'Sitemap, page goals, and conversion paths agreed up front.' },
      { id: '02', title: 'Design', body: 'Component-led design that scales with content and translates cleanly to code.' },
      { id: '03', title: 'Build', body: 'Modern stack, clean code, and clear handover for the team that will own it.' },
      { id: '04', title: 'Care', body: 'Post-launch performance monitoring, content updates, and ongoing improvements.' },
    ],
    projectFilter: (p) => p.tags?.includes('Websites'),
    useGallery: true,
    platformsHeadingWhite: 'Platform-',
    platformsHeadingGreen: 'Agnostic',
    platformsIntro:
      'Our development team is platform-agnostic. We have shipped on every leading stack — and we recommend the right one for your business, not the one we earn the most on.',
    platforms: [
      {
        name: 'Webflow',
        blurb: 'Editorial brand sites and marketing pages with a CMS the team can actually run.',
      },
      {
        name: 'Shopify',
        blurb: 'Headless and themed storefronts tuned for conversion, speed, and clean post-purchase flows.',
      },
      {
        name: 'WordPress',
        blurb: 'Long-form content, multi-region builds, and integrations with the marketing stack you already use.',
      },
      {
        name: 'Next.js',
        blurb: 'Custom platforms and product surfaces where editorial alone is not enough.',
      },
    ],
  },
  {
    slug: 'content-social',
    id: '05',
    label: 'Content & Social Media',
    shortLabel: 'Content & Social',
    Icon: Megaphone,
    eyebrow: 'Capability / 05 — Content & Social',
    headlineWhite: 'Content that keeps the brand',
    headlineGreen: 'active and visible.',
    intro:
      'Monthly content calendars, short-form video, photography, captions, and community management — visible to the right people every week without becoming a treadmill.',
    deliverWhite: 'A content engine',
    deliverGreen: 'that runs each week.',
    deliverIntro:
      'Planning, production, posting, and reporting handled by one team so the brand never goes quiet.',
    deliverables: [
      'Content calendars',
      'Short-form video',
      'Captions & copy',
      'Community management',
      'Reporting',
    ],
    processWhite: 'How a content cycle',
    processGreen: 'runs each month.',
    process: [
      { id: '01', title: 'Plan', body: 'Monthly calendar built around the brand pillars and the moments that matter for the business.' },
      { id: '02', title: 'Produce', body: 'Photography, video, and copy created in batched shoots so nothing feels reactive.' },
      { id: '03', title: 'Publish', body: 'Scheduled posting, community responses, and inbox triage — handled, not hoped for.' },
      { id: '04', title: 'Read', body: 'Monthly readout of what worked, what did not, and what we change next cycle.' },
    ],
    projectFilter: (p) => p.deliverables?.some((d) => /social|content/i.test(d)),
    useGallery: true,
  },
  {
    slug: 'performance-ads',
    id: '06',
    label: 'Performance Marketing & Ads',
    shortLabel: 'Performance Ads',
    Icon: LineChart,
    eyebrow: 'Capability / 06 — Performance Ads',
    headlineWhite: 'Paid campaigns,',
    headlineGreen: 'tuned by data not guesswork.',
    intro:
      'Campaigns across Meta, Google, TikTok, and the platforms that match your audience. Built around clear goals, tracked carefully, and adjusted on what the data tells us.',
    deliverWhite: 'Paid campaigns,',
    deliverGreen: 'measured honestly.',
    deliverIntro:
      'Creative, targeting, tracking, and reporting in one place so the loop closes properly each cycle.',
    deliverables: [
      'Meta & Google Ads',
      'TikTok & Snap',
      'Funnel & creative testing',
      'Tracking & analytics',
      'Monthly readouts',
    ],
    processWhite: 'How we run',
    processGreen: 'the paid loop.',
    process: [
      { id: '01', title: 'Goal', body: 'Clear KPI tied to a real business outcome — revenue, signups, leads — not just clicks.' },
      { id: '02', title: 'Build', body: 'Creative pipeline, audiences, tracking, and budget plan stood up before spend goes live.' },
      { id: '03', title: 'Test', body: 'Disciplined creative and audience testing each cycle so we learn faster than we burn.' },
      { id: '04', title: 'Report', body: 'Monthly readout with what shipped, what worked, and what we change next.' },
    ],
    projectFilter: (p) => p.tags?.includes('Campaigns') || p.deliverables?.some((d) => /ads|campaign/i.test(d)),
    useGallery: true,
  },
  {
    slug: 'strategy',
    id: '07',
    label: 'Strategy & Insights',
    shortLabel: 'Strategy',
    Icon: Compass,
    eyebrow: 'Capability / 07 — Strategy & Insights',
    headlineWhite: 'Research, positioning,',
    headlineGreen: 'and the why behind every move.',
    intro:
      'Before we design or launch anything, we study the market, the customer, and the competition. The strategy work shapes every other service so creative output always serves a real business goal.',
    deliverWhite: 'The brief that',
    deliverGreen: 'every other service rests on.',
    deliverIntro:
      'Clear positioning, sharper segmentation, and a roadmap the team can actually execute against.',
    deliverables: [
      'Market & customer research',
      'Competitor audits',
      'Positioning & messaging',
      'Channel strategy',
      'Roadmaps',
    ],
    processWhite: 'How a strategy',
    processGreen: 'comes together.',
    process: [
      { id: '01', title: 'Listen', body: 'Founder interviews, customer conversations, and competitor scans before any deck is touched.' },
      { id: '02', title: 'Sift', body: 'Synthesis of what we heard into themes, tensions, and the openings worth chasing.' },
      { id: '03', title: 'Position', body: 'A point of view the brand can stand behind, articulated as a story not a slide.' },
      { id: '04', title: 'Roadmap', body: 'A prioritised plan tying creative, channel, and product moves to the strategic intent.' },
    ],
    projectFilter: () => true,
    useGallery: true,
  },
];

export const capabilityBySlug = Object.fromEntries(
  capabilityList.map((c) => [c.slug, c])
);
