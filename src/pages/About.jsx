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
import TeamSection from '../components/TeamSection';
import LaunchCTA from '../components/LaunchCTA';

const stats = [
  { value: '180', suffix: '+', label: 'Missions launched' },
  { value: '24', label: 'Crew members' },
  { value: '12', suffix: ' yrs', label: 'In orbit' },
  { value: '40', suffix: '+', label: 'Industries touched' },
  { value: '4', label: 'Continents reached' },
  { value: '97', suffix: '%', label: 'Signal clarity' },
];

const atelier = [
  {
    id: '01',
    title: 'Production bay',
    body: 'A full in-house set with a cyc wall, lighting rig, and colour suite. We shoot, cut, and finish without leaving the studio.',
    Icon: Camera,
  },
  {
    id: '02',
    title: 'Engineering lab',
    body: 'Workstations, staging environments, and a Labs sandbox where experimental tools ship alongside client work.',
    Icon: Cpu,
  },
  {
    id: '03',
    title: 'Audio booth',
    body: 'An acoustically-treated room for voiceover, podcasts, and score reference. Same-day turnaround on most cuts.',
    Icon: Mic,
  },
  {
    id: '04',
    title: 'Open learning days',
    body: 'Twice-monthly open-door sessions for students, peer studios, and anyone curious about the way we work.',
    Icon: Lightbulb,
  },
];

const impact = [
  {
    id: '01',
    title: 'Pro-bono crew cycles',
    body: 'A portion of every quarter is reserved for nonprofit, civic, and community initiatives at no cost.',
  },
  {
    id: '02',
    title: 'Mentorship & fellowships',
    body: 'Paid fellowships for early-career designers and engineers from underrepresented backgrounds.',
  },
  {
    id: '03',
    title: 'Open-sourced tools',
    body: 'Select outputs from Labs are released as open source — free for the wider industry to adopt.',
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
        <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
          <MotionReveal>
            <div className="eyebrow accent-rule">About Botcore</div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h1 className="h-hero mt-6 max-w-4xl font-bold text-botcore-greyLight">
              Following in <span className="text-botcore-green">nobody’s</span>{' '}
              footsteps.
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
              A precision studio of designers, engineers, and strategists — engineered
              for the next epoch. We don’t follow trends. We chart territory the rest of
              the industry will eventually catch up to.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/studio" className="btn-primary">
                Make contact <span aria-hidden>↗</span>
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
              <div className="eyebrow accent-rule">North star</div>
              <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
                Signal over noise,{' '}
                <span className="text-botcore-green">always.</span>
              </h2>
            </MotionReveal>
            <MotionReveal delay={0.1} className="lg:col-span-7">
              <div className="space-y-5 text-base leading-relaxed text-botcore-greyLight/70 md:text-lg">
                <p>
                  Botcore was founded on the belief that creative agencies should ship
                  measurable outcomes, not decks. Every mission we take on is scoped
                  with clear objectives, quantified deliverables, and a plan for life
                  after launch.
                </p>
                <p>
                  We’re intentionally small. A cross-disciplinary crew under one roof,
                  with no black boxes, no subcontracted deliverables, and no layers
                  between the operator doing the work and the person accountable for
                  it.
                </p>
                <p>
                  If it can be strategised, designed, fabricated, and shipped — we
                  have a protocol for it. And if we don’t, we build one.
                </p>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <div className="eyebrow accent-rule">By the numbers</div>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
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
          <div className="max-w-2xl">
            <div className="eyebrow accent-rule">The atelier</div>
            <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
              Built to make everything in one place.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
              Our Louisville studio is equipped to take a mission from first signal to
              final deliverable without stepping outside. A rare thing at our size.
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
                <div className="eyebrow">Pointed outward</div>
              </div>
              <h2 className="h-section mt-6 font-semibold text-botcore-greyLight">
                Building beyond the brief.
              </h2>
              <p className="mt-6 max-w-sm text-sm text-botcore-greyLight/60">
                A studio is only as strong as the ecosystem it’s part of. We invest a
                visible share of every year back into ours.
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
      <TeamSection />
      <LaunchCTA />
    </>
  );
}
