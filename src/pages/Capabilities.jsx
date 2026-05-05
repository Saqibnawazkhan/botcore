import { Link } from 'react-router-dom';
import {
  Sparkles,
  PenTool,
  Camera,
  Monitor,
  Megaphone,
  LineChart,
  Compass,
} from 'lucide-react';
import MotionReveal from '../components/MotionReveal';
import LaunchCTA from '../components/LaunchCTA';

const capabilities = [
  {
    id: '01',
    label: 'Branding & Identity',
    Icon: Sparkles,
    image: '/visuals/branding.png',
    href: '/capabilities/branding',
    blurb:
      'We create brand identities from the ground up — name treatment, logo, colour, typography, voice, and the full guidelines that keep everything consistent as you grow. Built to last beyond launch and stand up to real competition.',
    deliverables: [
      'Naming & wordmark',
      'Logo & mark systems',
      'Colour & typography',
      'Brand voice & messaging',
      'Brand guidelines',
    ],
  },
  {
    id: '02',
    label: 'Graphic Design',
    Icon: PenTool,
    image: '/visuals/graphic-design.png',
    href: '/capabilities/graphic-design',
    blurb:
      'Design that bridges strategy and the moment a customer decides to trust you. Packaging, print, social creatives, pitch decks, menus, signage — any surface where your brand needs to appear.',
    deliverables: [
      'Packaging & print',
      'Social creatives',
      'Pitch decks',
      'Menus & signage',
      'Editorial layouts',
    ],
  },
  {
    id: '03',
    label: 'Photography & Video',
    Icon: Camera,
    image: '/visuals/photo-video.png',
    href: '/capabilities/photo-video',
    blurb:
      'In-house photography and video — product shoots, lifestyle content, brand films, and short-form social. Strong original imagery is one of the fastest ways for a new brand to look credible.',
    deliverables: [
      'Product photography',
      'Lifestyle shoots',
      'Brand films',
      'Short-form social',
      'Concept to final edit',
    ],
  },
  {
    id: '04',
    label: 'Website Design & Development',
    Icon: Monitor,
    image: '/visuals/websites.png',
    href: '/capabilities/websites',
    blurb:
      'Websites that load fast, look sharp on every screen, and convert visitors into customers. Brand sites, full e-commerce stores, or custom platforms — design, build, and ongoing improvements.',
    deliverables: [
      'Brand & marketing sites',
      'E-commerce builds',
      'Custom platforms',
      'Performance & SEO',
      'Ongoing care',
    ],
  },
  {
    id: '05',
    label: 'Content & Social Media',
    Icon: Megaphone,
    image: '/visuals/content-social.png',
    href: '/capabilities/content-social',
    blurb:
      'The content that keeps your brand active online. Monthly content calendars, short-form video, photography, captions, and community management — visible to the right people every week.',
    deliverables: [
      'Content calendars',
      'Short-form video',
      'Captions & copy',
      'Community management',
      'Reporting',
    ],
  },
  {
    id: '06',
    label: 'Performance Marketing & Ads',
    Icon: LineChart,
    href: '/capabilities/performance-ads',
    blurb:
      'Paid campaigns across Meta, Google, TikTok, and other platforms that match your audience. Built around clear goals, tracked carefully, and adjusted based on what the data tells us — not guesswork.',
    deliverables: [
      'Meta & Google Ads',
      'TikTok & Snap',
      'Funnel & creative testing',
      'Tracking & analytics',
      'Monthly readouts',
    ],
  },
  {
    id: '07',
    label: 'Strategy & Insights',
    Icon: Compass,
    href: '/capabilities/strategy',
    blurb:
      'Before we design or launch anything, we study the market, the customer, and the competition. The strategy work shapes every other service we offer, so the creative output always serves a real business goal.',
    deliverables: [
      'Market & customer research',
      'Competitor audits',
      'Positioning & messaging',
      'Channel strategy',
      'Roadmaps',
    ],
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <section className="relative border-b border-white/5">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(0,255,0,0.07) 0%, transparent 55%)',
          }}
        />
        <div className="grid-faint pointer-events-none absolute inset-0 opacity-30" aria-hidden />

        <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
          <MotionReveal>
            <div className="eyebrow accent-rule">What we do</div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h1 className="h-hero mt-6 max-w-4xl font-bold text-botcore-greyLight">
              Everything your brand needs{' '}
              <span className="text-botcore-green glow-green">under one roof.</span>
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
              New brands need more than a logo or a single ad campaign — they
              need a full system that works from first impression to final
              sale. Botcore brings every service a marketing agency can offer
              into one place, so you never have to chase five vendors to keep
              your brand moving.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/studio" className="btn-primary">
                Start a project <span aria-hidden>↗</span>
              </Link>
              <Link to="/approach" className="btn-ghost">
                See how we work <span aria-hidden>↗</span>
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <ul className="flex flex-col">
            {capabilities.map((c, i) => (
              <MotionReveal key={c.id} delay={i * 0.04}>
                <li className="group grid grid-cols-1 gap-8 border-b border-white/10 py-12 last:border-b-0 md:grid-cols-12 md:gap-10 md:py-16">
                  <div className="md:col-span-1">
                    <span className="eyebrow !text-botcore-green">{c.id}</span>
                  </div>

                  <div className="flex items-start gap-5 md:col-span-4">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center border border-botcore-green/40 text-botcore-green md:h-20 md:w-20">
                      <c.Icon size={32} strokeWidth={1.25} />
                    </span>
                    <h2
                      className="text-2xl font-bold uppercase tracking-tight text-botcore-greyLight transition-colors group-hover:text-botcore-green md:text-3xl"
                      style={{ fontFamily: 'Syne, Space Grotesk, sans-serif' }}
                    >
                      {c.label}
                    </h2>
                  </div>

                  <div className="md:col-span-7">
                    <p className="text-base leading-relaxed text-botcore-greyLight/70 md:text-lg">
                      {c.blurb}
                    </p>
                    <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {c.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-3 text-sm text-botcore-greyLight/60"
                        >
                          <span
                            aria-hidden
                            className="h-px w-4 bg-botcore-green/60"
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                    {c.href && (
                      <Link
                        to={c.href}
                        className="eyebrow mt-8 inline-flex items-center gap-2 text-botcore-green hover:text-botcore-greyLight"
                      >
                        Explore
                        <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    )}
                  </div>
                </li>
              </MotionReveal>
            ))}
          </ul>
        </div>
      </section>

      <LaunchCTA />
    </>
  );
}
