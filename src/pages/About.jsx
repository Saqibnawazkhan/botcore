import { Link } from 'react-router-dom';
import {
  Sparkles,
  Camera,
  Cpu,
  Mic,
  Lightbulb,
  HeartHandshake,
} from 'lucide-react';
import MotionReveal from '../components/MotionReveal';
import CoreValues from '../components/CoreValues';
import LaunchCTA from '../components/LaunchCTA';

const stats = [
  { value: '9', suffix: '+', label: 'Brands launched' },
  { value: '7', label: 'Services in-house' },
  { value: '5', suffix: ' steps', label: 'Brief to launch' },
  { value: '1', label: 'Team for every brand' },
];

const atelier = [
  {
    id: '01',
    title: 'In-house production',
    body: 'Photography and video produced under one roof — product shoots, lifestyle content, brand films, and short-form social. We handle the full production from concept to final edit.',
    Icon: Camera,
  },
  {
    id: '02',
    title: 'Design & development',
    body: 'Designers and developers working side by side. Brand systems, websites, and product surfaces shipped together so nothing lives in a silo.',
    Icon: Cpu,
  },
  {
    id: '03',
    title: 'Strategy & insights',
    body: 'Market research, customer studies, and analytics that shape every other service we offer — so creative output always serves a real business goal.',
    Icon: Mic,
  },
  {
    id: '04',
    title: 'Always-on partnership',
    body: 'After launch we stay on the work — content, ads, reporting, refinement. A long-term partner, not a vendor that disappears once the file is delivered.',
    Icon: Lightbulb,
  },
];

const impact = [
  {
    id: '01',
    title: 'We specialise in new brands',
    body: 'Built for founders starting from zero who need a partner that understands the pace, the budget, and the pressure of building something new.',
  },
  {
    id: '02',
    title: 'Everything under one roof',
    body: 'Designers, video, developers, media buyers — all in-house. The work stays consistent and the timelines stay tight.',
  },
  {
    id: '03',
    title: 'Honest communication',
    body: 'We tell you what we think, even when it is not what you want to hear. You get a partner, not a yes machine.',
  },
];

export default function About() {
  return (
    <>
      <section className="relative border-b border-white/5">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse at 20% 0%, rgba(0,255,0,0.07) 0%, transparent 55%)',
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-36 text-center md:px-10 md:pb-24 md:pt-44">
          <MotionReveal>
            <div className="eyebrow accent-rule-both">The Botcore team</div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h1 className="h-hero mx-auto mt-6 max-w-4xl font-bold text-botcore-greyLight">
              A team of designers, strategists, and{' '}
              <span className="text-botcore-green">storytellers.</span>
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
              Botcore is built around a tight team that cares about the work.
              We come from design, advertising, photography, development, and
              strategy backgrounds. We keep the team tight on purpose so every
              client gets real attention and real ownership of their work — not
              a junior account manager and a long email chain.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link to="/studio" className="btn-primary">
                Start a project <span aria-hidden>↗</span>
              </Link>
              <Link to="/reps" className="btn-ghost">
                See our work <span aria-hidden>↗</span>
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <MotionReveal className="lg:col-span-5">
              <div className="eyebrow accent-rule">Our purpose</div>
              <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
                Built for founders,{' '}
                <span className="text-botcore-green">not committees.</span>
              </h2>
            </MotionReveal>
            <MotionReveal delay={0.1} className="lg:col-span-7">
              <div className="space-y-5 text-base leading-relaxed text-botcore-greyLight/70 md:text-lg">
                <p>
                  Botcore is a marketing and creative agency built around one
                  purpose — helping new brands find their footing and grow with
                  confidence. We work with founders starting from zero who need
                  a partner that can handle every part of the brand.
                </p>
                <p>
                  From the first sketch of a logo to the campaigns that bring
                  in real customers, we treat your business like our own. Every
                  brand we take on gets a focused team, honest advice,
                  and work that holds up next to anyone in the market.
                </p>
                <p>
                  Beautiful work that does not sell anything is just decoration.
                  Every piece we ship is built to do a job — winning trust,
                  driving a click, or closing a sale.
                </p>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <div className="eyebrow accent-rule">By the numbers</div>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {stats.map((s, i) => (
              <MotionReveal key={s.label} delay={i * 0.05}>
                <div>
                  <dt className="text-4xl font-semibold tracking-tight text-botcore-greyLight md:text-5xl">
                    {s.value}
                    <span className="text-botcore-green">{s.suffix || ''}</span>
                  </dt>
                  <dd className="eyebrow mt-3">{s.label}</dd>
                </div>
              </MotionReveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow accent-rule-both">How we are set up</div>
            <h2 className="h-section mx-auto mt-5 font-semibold text-botcore-greyLight">
              Built to make everything in one place.
            </h2>
            <p className="mx-auto mt-6 text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
              Every service runs in-house. You do not need to manage a designer,
              a video team, a developer, and a media buyer separately — the
              work stays consistent and the timelines stay tight.
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {atelier.map((a, i) => (
              <MotionReveal key={a.id} delay={i * 0.06}>
                <li className="card flex h-full flex-col gap-5 p-6">
                  <div className="flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center border border-botcore-green/40 text-botcore-green">
                      <a.Icon size={18} strokeWidth={1.5} />
                    </span>
                    <span className="eyebrow">{a.id}</span>
                  </div>
                  <h3 className="h-card font-semibold text-botcore-greyLight">
                    {a.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-botcore-greyLight/60">
                    {a.body}
                  </p>
                </li>
              </MotionReveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <MotionReveal className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center border border-botcore-green/40 text-botcore-green">
                  <HeartHandshake size={22} strokeWidth={1.5} />
                </span>
                <div className="eyebrow">Why founders choose us</div>
              </div>
              <h2 className="h-section mt-6 font-semibold text-botcore-greyLight">
                The reasons we keep being picked.
              </h2>
              <p className="mt-6 max-w-sm text-sm text-botcore-greyLight/60">
                Not a sales pitch — just the three things we hear from
                founders most often when we ask why they signed with us.
              </p>
            </MotionReveal>

            <div className="lg:col-span-8">
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {impact.map((item, i) => (
                  <MotionReveal key={item.id} delay={i * 0.06}>
                    <li className="group grid grid-cols-[auto_1fr] items-start gap-6 py-6 transition-colors hover:bg-white/[0.02]">
                      <span className="eyebrow !text-botcore-green">{item.id}</span>
                      <div>
                        <h3 className="h-card font-semibold text-botcore-greyLight transition-colors group-hover:text-botcore-green">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-botcore-greyLight/60">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  </MotionReveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CoreValues />
      <LaunchCTA />
    </>
  );
}
