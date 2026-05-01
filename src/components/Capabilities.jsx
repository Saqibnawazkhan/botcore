import { Link } from 'react-router-dom';
import {
  Sparkles,
  PenTool,
  Camera,
  Monitor,
  Megaphone,
  LineChart,
  Compass,
  ArrowUpRight,
} from 'lucide-react';
import MotionReveal from './MotionReveal';

const capabilities = [
  {
    id: '01',
    label: 'Branding',
    Icon: Sparkles,
    to: '/capabilities/branding',
    blurb: 'Names, logos, colour, type, voice, full guidelines.',
  },
  {
    id: '02',
    label: 'Graphic Design',
    Icon: PenTool,
    to: '/capabilities/graphic-design',
    blurb: 'Packaging, print, social, decks, signage, menus.',
  },
  {
    id: '03',
    label: 'Photo & Video',
    Icon: Camera,
    to: '/capabilities/photo-video',
    blurb: 'Product, lifestyle, brand films, short-form social.',
  },
  {
    id: '04',
    label: 'Websites',
    Icon: Monitor,
    to: '/capabilities/websites',
    blurb: 'Brand sites, e-commerce, custom builds, ongoing care.',
  },
  {
    id: '05',
    label: 'Content & Social',
    Icon: Megaphone,
    to: '/capabilities/content-social',
    blurb: 'Calendars, captions, short-form video, community.',
  },
  {
    id: '06',
    label: 'Performance Ads',
    Icon: LineChart,
    to: '/capabilities/performance-ads',
    blurb: 'Meta, Google, TikTok — tracked, tuned, accountable.',
  },
  {
    id: '07',
    label: 'Strategy',
    Icon: Compass,
    to: '/capabilities/strategy',
    blurb: 'Market, customer, and competitor research that leads creative.',
  },
];

export default function Capabilities() {
  return (
    <section className="relative border-b border-white/5">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(0,255,0,0.06) 0%, transparent 55%)',
        }}
      />
      <div className="grid-faint pointer-events-none absolute inset-0 opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
        <div className="text-center">
          <MotionReveal>
            <div className="eyebrow">What we do</div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h2 className="h-hero mt-5 font-bold text-botcore-greyLight">
              Everything your brand needs{' '}
              <span className="text-botcore-green glow-green">under one roof.</span>
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
              New brands need more than a logo or a single ad. They need a full
              system that works from first impression to final sale. We bring
              every service a marketing agency can offer into one place.
            </p>
          </MotionReveal>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <MotionReveal key={c.id} delay={i * 0.04}>
              <li>
                <Link
                  to={c.to}
                  className="group relative flex h-full flex-col items-center justify-between gap-6 border border-white/8 bg-white/[0.02] p-6 transition-colors hover:border-botcore-green/50 hover:bg-white/[0.04] md:p-7"
                >
                  <span
                    aria-hidden
                    className="absolute left-4 top-3 h-[3px] w-12"
                    style={{
                      background:
                        'repeating-linear-gradient(135deg, rgba(0,255,0,0.7) 0 6px, transparent 6px 10px)',
                    }}
                  />

                  <span className="flex h-20 w-20 items-center justify-center text-botcore-greyLight/85 transition-colors group-hover:text-botcore-green md:h-24 md:w-24">
                    <c.Icon size={48} strokeWidth={1.25} />
                  </span>

                  <div className="text-center">
                    <h3
                      className="text-base font-bold uppercase tracking-[0.16em] text-botcore-greyLight md:text-lg"
                      style={{ fontFamily: 'Syne, Space Grotesk, sans-serif' }}
                    >
                      {c.label}
                    </h3>
                    <p className="mt-3 hidden text-xs leading-relaxed text-botcore-greyLight/55 md:block">
                      {c.blurb}
                    </p>
                  </div>

                  <span
                    aria-hidden
                    className="flex h-9 w-9 items-center justify-center border border-botcore-green/40 text-botcore-green transition-all group-hover:bg-botcore-green group-hover:text-botcore-black"
                  >
                    <ArrowUpRight size={16} strokeWidth={1.75} />
                  </span>
                </Link>
              </li>
            </MotionReveal>
          ))}
        </ul>

        <MotionReveal delay={0.4}>
          <div className="mt-14 flex justify-center">
            <Link to="/capabilities" className="btn-primary">
              See all capabilities <span aria-hidden>↗</span>
            </Link>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
