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
  ArrowRight,
} from 'lucide-react';
import MotionReveal from './MotionReveal';

const capabilities = [
  {
    id: '01',
    label: 'Branding',
    Icon: Sparkles,
    image: '/visuals/branding.png',
    to: '/capabilities/branding',
    blurb: 'Names, logos, colour, type, voice, full guidelines.',
  },
  {
    id: '02',
    label: 'Graphic Design',
    Icon: PenTool,
    image: '/visuals/graphic-design.png',
    to: '/capabilities/graphic-design',
    blurb: 'Packaging, print, social, decks, signage, menus.',
  },
  {
    id: '03',
    label: 'Photo & Video',
    Icon: Camera,
    image: '/visuals/photo-video.png',
    to: '/capabilities/photo-video',
    blurb: 'Product, lifestyle, brand films, short-form social.',
  },
  {
    id: '04',
    label: 'Websites',
    Icon: Monitor,
    image: '/visuals/websites.png',
    to: '/capabilities/websites',
    blurb: 'Brand sites, e-commerce, custom builds, ongoing care.',
  },
  {
    id: '05',
    label: 'Content & Social',
    Icon: Megaphone,
    image: '/visuals/content-social.png',
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

function trackPointer(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
}

function CapabilityCard({ c }) {
  const Icon = c.Icon;
  return (
    <Link
      to={c.to}
      onMouseMove={trackPointer}
      className="group relative flex h-full flex-col items-center justify-between gap-5 overflow-hidden border border-white/8 bg-white/[0.02] p-5 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-botcore-green/60 hover:bg-white/[0.04] md:p-6"
    >
      {/* Diagonal sheen background */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'repeating-linear-gradient(125deg, transparent 0 38px, rgba(255,255,255,0.025) 38px 76px)',
        }}
      />

      {/* Cursor-tracking spotlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(260px circle at var(--mx,50%) var(--my,50%), rgba(0,255,0,0.18), transparent 70%)',
        }}
      />

      {/* Top dashed corner mark grows on hover */}
      <span
        aria-hidden
        className="absolute left-4 top-3 h-[3px] w-16 transition-all duration-300 group-hover:w-24"
        style={{
          background:
            'repeating-linear-gradient(135deg, rgba(0,255,0,0.7) 0 6px, transparent 6px 10px)',
        }}
      />

      {/* Bottom dashed corner mark mirrors on hover */}
      <span
        aria-hidden
        className="absolute bottom-3 right-4 h-[3px] w-0 transition-all duration-300 group-hover:w-12"
        style={{
          background:
            'repeating-linear-gradient(135deg, rgba(0,255,0,0.7) 0 6px, transparent 6px 10px)',
        }}
      />

      {/* Hero visual */}
      <span className="relative flex w-full items-center justify-center text-botcore-greyLight/85 transition-all duration-300 group-hover:scale-[1.04] group-hover:text-botcore-green">
        {c.image ? (
          <img
            src={c.image}
            alt=""
            loading="lazy"
            className="h-48 w-48 object-contain drop-shadow-[0_0_30px_rgba(0,255,0,0.42)] transition-all duration-300 group-hover:drop-shadow-[0_0_44px_rgba(0,255,0,0.62)] sm:h-56 sm:w-56 md:h-60 md:w-60"
          />
        ) : (
          <Icon className="h-48 w-48 sm:h-56 sm:w-56 md:h-60 md:w-60" strokeWidth={1.1} />
        )}
      </span>

      <div className="relative text-center">
        <h3
          className="text-lg font-bold uppercase tracking-[0.18em] text-botcore-greyLight transition-colors duration-300 group-hover:text-botcore-green md:text-xl"
          style={{ fontFamily: 'Syne, Space Grotesk, sans-serif' }}
        >
          {c.label}
        </h3>
      </div>

      <span
        aria-hidden
        className="relative flex h-9 w-9 items-center justify-center rounded-full border border-botcore-green/40 text-botcore-green transition-all duration-300 group-hover:rotate-[10deg] group-hover:bg-botcore-green group-hover:text-botcore-black"
      >
        <ArrowUpRight size={16} strokeWidth={1.75} />
      </span>
    </Link>
  );
}

function SeeAllCard() {
  return (
    <Link
      to="/capabilities"
      onMouseMove={trackPointer}
      className="group relative flex h-full flex-col items-center justify-between gap-5 overflow-hidden border border-botcore-green/40 bg-botcore-green/[0.04] p-5 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-botcore-green hover:bg-botcore-green/[0.08] md:p-6"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'repeating-linear-gradient(125deg, transparent 0 38px, rgba(0,255,0,0.04) 38px 76px)',
        }}
      />

      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(260px circle at var(--mx,50%) var(--my,50%), rgba(0,255,0,0.28), transparent 70%)',
        }}
      />

      <span
        aria-hidden
        className="absolute left-4 top-3 h-[3px] w-16 transition-all duration-300 group-hover:w-24"
        style={{
          background:
            'repeating-linear-gradient(135deg, rgba(0,255,0,0.85) 0 6px, transparent 6px 10px)',
        }}
      />
      <span
        aria-hidden
        className="absolute bottom-3 right-4 h-[3px] w-0 transition-all duration-300 group-hover:w-12"
        style={{
          background:
            'repeating-linear-gradient(135deg, rgba(0,255,0,0.85) 0 6px, transparent 6px 10px)',
        }}
      />

      <span className="relative flex w-full items-center justify-center text-botcore-green transition-all duration-300 group-hover:scale-[1.04]">
        <ArrowRight strokeWidth={1.1} className="h-48 w-48 drop-shadow-[0_0_28px_rgba(0,255,0,0.55)] sm:h-56 sm:w-56 md:h-60 md:w-60" />
      </span>

      <div className="relative text-center">
        <h3
          className="text-lg font-bold uppercase tracking-[0.18em] text-botcore-greyLight transition-colors group-hover:text-botcore-green md:text-xl"
          style={{ fontFamily: 'Syne, Space Grotesk, sans-serif' }}
        >
          See All
          <br />
          Capabilities
        </h3>
      </div>

      <span
        aria-hidden
        className="relative flex h-9 w-9 items-center justify-center rounded-full border border-botcore-green bg-botcore-green/30 text-botcore-green transition-all duration-300 group-hover:rotate-[10deg] group-hover:bg-botcore-green group-hover:text-botcore-black"
      >
        <ArrowUpRight size={16} strokeWidth={2} />
      </span>
    </Link>
  );
}

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

        <ul className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <MotionReveal key={c.id} delay={i * 0.04}>
              <li className="h-full">
                <CapabilityCard c={c} />
              </li>
            </MotionReveal>
          ))}
          <MotionReveal delay={capabilities.length * 0.04}>
            <li className="h-full">
              <SeeAllCard />
            </li>
          </MotionReveal>
        </ul>
      </div>
    </section>
  );
}
