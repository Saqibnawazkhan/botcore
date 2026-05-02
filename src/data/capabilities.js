// Configuration for each capability sub-page at /capabilities/:slug.
// `projectFilter` decides which projects appear in the featured-work
// grid. Each capability also has its own hand-picked image pool so the
// hero collage and the supporting strip show imagery relevant to that
// service — packaging shots on Branding, website screenshots on
// Websites, lifestyle/brand-film stills on Photo & Video, etc.

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
    collageImages: [
      { src: '/projects/edit-beauty/02.png', slug: 'edit-beauty', name: 'Edit Beauty — Product' },
      { src: '/projects/tajjal/Untitled%20design%20-%202026-04-17T001549.935.png', slug: 'tajjal', name: 'Tajjal — Olive Oil Identity' },
      { src: '/projects/rzr-jaw/P2PET21%20copy%202%20(2).png', slug: 'rzr-jaw', name: 'Rzr Jaw — Packaging', fit: 'contain' },
    ],
    extraImages: [
      { src: '/projects/pro-inhale/cover.png', slug: 'pro-inhale', name: 'Pro Inhale — Packaging Spec' },
      { src: '/projects/rzr-jaw/banner.png', slug: 'rzr-jaw', name: 'Rzr Jaw — Brand Hero' },
      { src: '/projects/edit-beauty/banner.png', slug: 'edit-beauty', name: 'Edit Beauty — Brand Hero' },
      { src: '/projects/pro-inhale/banner.png', slug: 'pro-inhale', name: 'Pro Inhale — Brand Hero' },
    ],
    platformsHeadingWhite: 'Tools-',
    platformsHeadingGreen: 'Of the trade',
    platformsIntro:
      'We work in the platforms a founder can keep using after we hand off — modern, flexible, and built to scale alongside the brand.',
    platforms: [
      { name: 'Figma', blurb: 'System design, brand libraries, and shared component kits the in-house team can pick up.' },
      { name: 'Illustrator', blurb: 'Wordmarks, mark systems, and any vector asset that needs full print fidelity.' },
      { name: 'Photoshop', blurb: 'Imagery work, retouch, and packaging mockups where pixel-level control matters.' },
      { name: 'Notion', blurb: 'Living brand guidelines and a single source of truth for everyone touching the brand.' },
    ],
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
    collageImages: [
      { src: '/projects/rzr-jaw/02.png', slug: 'rzr-jaw', name: 'Rzr Jaw — Pack & Campaign' },
      { src: '/projects/pro-inhale/cover.png', slug: 'pro-inhale', name: 'Pro Inhale — Spec Sheet' },
      { src: '/projects/edit-beauty/02.png', slug: 'edit-beauty', name: 'Edit Beauty — Product Layout' },
    ],
    extraImages: [
      { src: '/projects/edit-beauty/01.png', slug: 'edit-beauty', name: 'Edit Beauty — Editorial' },
      { src: '/projects/tajjal/banner.png', slug: 'tajjal', name: 'Tajjal — Identity' },
      { src: '/projects/rzr-jaw/banner.png', slug: 'rzr-jaw', name: 'Rzr Jaw — Wordmark' },
      { src: '/projects/pro-inhale/banner.png', slug: 'pro-inhale', name: 'Pro Inhale — Wordmark' },
    ],
    platformsHeadingWhite: 'Production-',
    platformsHeadingGreen: 'Stack',
    platformsIntro:
      'The studio runs on a tight set of tools chosen for collaboration, file fidelity, and ease of handoff to the in-house team.',
    platforms: [
      { name: 'Illustrator', blurb: 'Vector design for logos, packaging, and any asset destined for print or large-format.' },
      { name: 'Photoshop', blurb: 'Image work, mockups, and any pixel-precise composite for digital and print.' },
      { name: 'InDesign', blurb: 'Editorial layouts, decks, and long-form documents that need real typography.' },
      { name: 'Figma', blurb: 'Social templates, motion-ready frames, and shared asset libraries.' },
    ],
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
    collageImages: [
      { src: '/projects/edit-beauty/banner.png', slug: 'edit-beauty', name: 'Edit Beauty — Lifestyle' },
      { src: '/projects/rzr-jaw/banner.png', slug: 'rzr-jaw', name: 'Rzr Jaw — Brand Film' },
      { src: '/projects/pro-inhale/banner.png', slug: 'pro-inhale', name: 'Pro Inhale — Brand Hero' },
    ],
    extraImages: [
      { src: '/projects/edit-beauty/02.png', slug: 'edit-beauty', name: 'Edit Beauty — Product Hero' },
      { src: '/projects/rzr-jaw/02.png', slug: 'rzr-jaw', name: 'Rzr Jaw — Lifestyle' },
      { src: '/projects/tajjal/banner.png', slug: 'tajjal', name: 'Tajjal — Brand Stills' },
      { src: '/projects/pro-inhale/cover.png', slug: 'pro-inhale', name: 'Pro Inhale — Product' },
    ],
    platformsHeadingWhite: 'Studio-',
    platformsHeadingGreen: '& Post',
    platformsIntro:
      'An in-house production setup with the gear, software, and crew to take a shoot from concept to final delivery.',
    platforms: [
      { name: 'Sony / Canon', blurb: 'Cinema and stills bodies for brand films, lifestyle, and product hero shots.' },
      { name: 'DaVinci Resolve', blurb: 'Colour grading, finishing, and the look that ties a brand’s video output together.' },
      { name: 'Premiere Pro', blurb: 'Edit, sound design, and short-form delivery built for social and ads.' },
      { name: 'Capture One', blurb: 'Tethered product capture and colour-managed retouch for packaging and ecom.' },
    ],
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
    collageImages: [
      { src: '/projects/rzr-jaw/cover.png', slug: 'rzr-jaw', name: 'Rzr Jaw — Storefront' },
      { src: '/projects/edit-beauty/cover.png', slug: 'edit-beauty', name: 'Edit Beauty — Storefront' },
      { src: '/projects/tajjal/cover.png', slug: 'tajjal', name: 'Tajjal — Storefront' },
    ],
    extraImages: [
      { src: '/projects/rzr-jaw/01.png', slug: 'rzr-jaw', name: 'Rzr Jaw — Product Listing' },
      { src: '/projects/tajjal/01.png', slug: 'tajjal', name: 'Tajjal — Process Page' },
      { src: '/projects/edit-beauty/01.png', slug: 'edit-beauty', name: 'Edit Beauty — Bestsellers' },
      { src: '/projects/pro-inhale/01.png', slug: 'pro-inhale', name: 'Pro Inhale — Mobile Site' },
      { src: '/projects/pro-inhale/02.png', slug: 'pro-inhale', name: 'Pro Inhale — Product Detail' },
    ],
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
    collageImages: [
      { src: '/projects/edit-beauty/banner.png', slug: 'edit-beauty', name: 'Edit Beauty — Social Hero' },
      { src: '/projects/rzr-jaw/02.png', slug: 'rzr-jaw', name: 'Rzr Jaw — Reels Cut' },
      { src: '/projects/pro-inhale/banner.png', slug: 'pro-inhale', name: 'Pro Inhale — Campaign' },
    ],
    extraImages: [
      { src: '/projects/tajjal/01.png', slug: 'tajjal', name: 'Tajjal — Content Series' },
      { src: '/projects/edit-beauty/01.png', slug: 'edit-beauty', name: 'Edit Beauty — Editorial Reel' },
      { src: '/projects/rzr-jaw/cover.png', slug: 'rzr-jaw', name: 'Rzr Jaw — Drop Post' },
      { src: '/projects/pro-inhale/01.png', slug: 'pro-inhale', name: 'Pro Inhale — Story Cut' },
    ],
    platformsHeadingWhite: 'Channels-',
    platformsHeadingGreen: 'We Run',
    platformsIntro:
      'We plan, produce, and post on the platforms your audience actually spends time on — built for each channel rather than recycled across them.',
    platforms: [
      { name: 'Instagram', blurb: 'Reels, photography, and the feed where most brand identity lands first.' },
      { name: 'TikTok', blurb: 'Short-form video built for the platform, not repurposed from elsewhere.' },
      { name: 'LinkedIn', blurb: 'Founder-led storytelling and B2B content that drives inbound conversations.' },
      { name: 'YouTube', blurb: 'Long-form brand films and shorts as a search-driven discovery channel.' },
    ],
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
    collageImages: [
      { src: '/projects/rzr-jaw/banner.png', slug: 'rzr-jaw', name: 'Rzr Jaw — Launch Creative' },
      { src: '/projects/edit-beauty/banner.png', slug: 'edit-beauty', name: 'Edit Beauty — Lifestyle Ad' },
      { src: '/projects/pro-inhale/banner.png', slug: 'pro-inhale', name: 'Pro Inhale — Performance Ad' },
    ],
    extraImages: [
      { src: '/projects/rzr-jaw/02.png', slug: 'rzr-jaw', name: 'Rzr Jaw — UGC Cut' },
      { src: '/projects/edit-beauty/02.png', slug: 'edit-beauty', name: 'Edit Beauty — Product Cut' },
      { src: '/projects/tajjal/banner.png', slug: 'tajjal', name: 'Tajjal — Awareness Creative' },
      { src: '/projects/pro-inhale/cover.png', slug: 'pro-inhale', name: 'Pro Inhale — Product Ad' },
    ],
    platformsHeadingWhite: 'Channels-',
    platformsHeadingGreen: 'We Buy On',
    platformsIntro:
      'Paid media planned, bought, and optimised on the platforms that match your customer — not the ones that pay the highest agency commission.',
    platforms: [
      { name: 'Meta', blurb: 'Facebook and Instagram, the workhorse of most consumer brand growth plans.' },
      { name: 'Google', blurb: 'Search, Performance Max, and YouTube — capturing intent at every funnel stage.' },
      { name: 'TikTok', blurb: 'Creative-led performance for brands willing to test fast and iterate weekly.' },
      { name: 'Snap & Pinterest', blurb: 'Discovery-stage channels where the right creative still buys real reach cheaply.' },
    ],
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
    collageImages: [
      { src: '/projects/rzr-jaw/banner.png', slug: 'rzr-jaw', name: 'Rzr Jaw — Strategy in Practice' },
      { src: '/projects/tajjal/banner.png', slug: 'tajjal', name: 'Tajjal — Positioning' },
      { src: '/projects/edit-beauty/cover.png', slug: 'edit-beauty', name: 'Edit Beauty — Audience Insight' },
    ],
    extraImages: [
      { src: '/projects/pro-inhale/banner.png', slug: 'pro-inhale', name: 'Pro Inhale — Category Audit' },
      { src: '/projects/rzr-jaw/cover.png', slug: 'rzr-jaw', name: 'Rzr Jaw — Funnel Mapping' },
      { src: '/projects/tajjal/01.png', slug: 'tajjal', name: 'Tajjal — Customer Journey' },
      { src: '/projects/edit-beauty/01.png', slug: 'edit-beauty', name: 'Edit Beauty — Roadmap' },
    ],
    platformsHeadingWhite: 'How-',
    platformsHeadingGreen: 'We Sift',
    platformsIntro:
      'Strategy is a research method, not a deck. The frameworks we lean on the most are listed here — applied to the brand in front of us, not pulled off a shelf.',
    platforms: [
      { name: 'Jobs-to-be-Done', blurb: 'Customer interviews focused on what people are actually hiring the brand to do.' },
      { name: 'Brand Positioning', blurb: 'A documented point of view the team can stand behind across every surface.' },
      { name: 'Category Audits', blurb: 'Competitor mapping that finds the white space before we design into it.' },
      { name: 'Roadmaps', blurb: 'Quarterly creative and channel plans tied to the strategic intent, not vibes.' },
    ],
  },
];

export const capabilityBySlug = Object.fromEntries(
  capabilityList.map((c) => [c.slug, c])
);
