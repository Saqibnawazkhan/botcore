import { Link } from 'react-router-dom';
import { Sparkles, Monitor, Video, Megaphone, LineChart } from 'lucide-react';
import MotionReveal from '../components/MotionReveal';
import LaunchCTA from '../components/LaunchCTA';

const capabilities = [
  {
    id: '01',
    label: 'Brands',
    Icon: Sparkles,
    blurb: 'Identity systems that earn distinction from the first frame.',
    deliverables: [
      'Naming & verbal identity',
      'Logo & mark systems',
      'Visual language',
      'Brand guidelines',
      'Internal rollouts',
    ],
  },
  {
    id: '02',
    label: 'Websites',
    Icon: Monitor,
    blurb: 'Marketing sites and product surfaces that move metrics, not just pixels.',
    deliverables: [
      'Marketing sites',
      'Design systems',
      'Headless commerce',
      'CMS integration',
      'Performance tuning',
    ],
  },
  {
    id: '03',
    label: 'Productions',
    Icon: Video,
    blurb: 'Film, photo, motion, and audio — captured and finished in our studio.',
    deliverables: [
      'Brand films',
      'Product photography',
      'Motion design',
      'Podcast & VO',
      'Colour & finishing',
    ],
  },
  {
    id: '04',
    label: 'Campaigns',
    Icon: Megaphone,
    blurb: 'Launches and activations engineered to land, not just look the part.',
    deliverables: [
      'Go-to-market plans',
      'Paid media systems',
      'Social activations',
      'Influencer programs',
      'Always-on creative',
    ],
  },
  {
    id: '05',
    label: 'Insights',
    Icon: LineChart,
    blurb: 'Research and analytics that translate signal into next moves.',
    deliverables: [
      'Brand & market research',
      'Audience studies',
      'Analytics setup',
      'Performance audits',
      'Strategic readouts',
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
            <div className="eyebrow accent-rule">Our capabilities</div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h1 className="h-hero mt-6 max-w-4xl font-bold text-botcore-greyLight">
              Your{' '}
              <span className="text-botcore-green glow-green">possibilities.</span>
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
              Five disciplines, one studio. We design, build, produce, and
              measure — under one roof, with no subcontracted handoffs. Pick a
              single capability or let us run the full mission.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/studio" className="btn-primary">
                Make contact <span aria-hidden>↗</span>
              </Link>
              <Link to="/approach" className="btn-ghost">
                See the approach <span aria-hidden>↗</span>
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <ul className="flex flex-col">
            {capabilities.map((c, i) => (
              <MotionReveal key={c.id} delay={i * 0.05}>
                <li className="group grid grid-cols-1 gap-8 border-b border-white/10 py-12 last:border-b-0 md:grid-cols-12 md:gap-10 md:py-16">
                  <div className="md:col-span-1">
                    <span className="eyebrow !text-botcore-green">{c.id}</span>
                  </div>

                  <div className="flex items-start gap-5 md:col-span-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-botcore-green/40 text-botcore-green md:h-16 md:w-16">
                      <c.Icon size={28} strokeWidth={1.25} />
                    </span>
                    <h2
                      className="text-3xl font-bold uppercase tracking-tight text-botcore-greyLight transition-colors group-hover:text-botcore-green md:text-4xl"
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
