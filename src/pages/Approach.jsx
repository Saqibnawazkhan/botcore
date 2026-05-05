import { Link } from 'react-router-dom';
import MotionReveal from '../components/MotionReveal';
import LaunchCTA from '../components/LaunchCTA';

const steps = [
  {
    id: '01',
    title: 'Discover',
    body: 'We start by learning your business, your customer, and your market. We ask the hard questions about positioning, pricing, and the story you want to tell. The output is a clear brief the rest of the work stands on.',
    accent: '#FF3355',
  },
  {
    id: '02',
    title: 'Plan',
    body: 'We turn the brief into a creative and marketing plan — the brand direction, the content pillars, the channels we will use, and the timeline. You see the plan before any heavy production begins.',
    accent: '#C13BFF',
  },
  {
    id: '03',
    title: 'Create',
    body: 'Design, photography, video, websites, and content all come to life. Our team builds everything in-house, which keeps the work consistent and the timeline tight.',
    accent: '#7A3BFF',
  },
  {
    id: '04',
    title: 'Launch',
    body: 'We take the work live across the channels that matter — website launch, social rollout, paid campaigns. Every launch is treated as a moment to make a strong first impression and start building real traction.',
    accent: '#3B7AFF',
  },
  {
    id: '05',
    title: 'Measure & improve',
    body: 'Once you are live, we track the numbers that matter and share clear monthly reports on what is working, what is not, and what we are changing next. Marketing is a long game.',
    accent: '#3BD4D4',
  },
];

const principles = [
  {
    id: '01',
    title: 'Built for momentum',
    body: 'We do not believe in slow agency processes that burn months before anything ships. Founders need momentum without losing quality.',
  },
  {
    id: '02',
    title: 'Clear at every step',
    body: 'You always know where the work stands and what comes next. Plans are signed off before heavy production. No surprises down the line.',
  },
  {
    id: '03',
    title: 'Honest reporting',
    body: 'Monthly readouts show what worked, what did not, and what we are changing. We tell you what we think — even when it is not what you want to hear.',
  },
];

export default function Approach() {
  return (
    <>
      <section className="relative border-b border-white/5">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse at 80% 0%, rgba(0,255,0,0.07) 0%, transparent 55%)',
          }}
        />
        <div className="grid-faint pointer-events-none absolute inset-0 opacity-30" aria-hidden />

        <div className="relative mx-auto max-w-[1280px] px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <MotionReveal>
                <div className="eyebrow accent-rule">How we work</div>
              </MotionReveal>
              <MotionReveal delay={0.1}>
                <h1 className="h-hero mt-6 font-bold text-botcore-greyLight">
                  Built to get{' '}
                  <span className="text-botcore-green glow-green">real results.</span>
                </h1>
              </MotionReveal>
              <MotionReveal delay={0.2}>
                <p className="mt-8 max-w-md text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
                  We do not believe in slow agency processes that burn months
                  before anything ships. Our approach is built for founders who
                  need momentum without losing quality. Every engagement runs
                  through a clear five-step process, so you always know where
                  the work stands and what comes next.
                </p>
              </MotionReveal>
              <MotionReveal delay={0.3}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <Link to="/studio" className="btn-primary">
                    Start a project <span aria-hidden>↗</span>
                  </Link>
                  <Link to="/reps" className="btn-ghost">
                    See the work <span aria-hidden>↗</span>
                  </Link>
                </div>
              </MotionReveal>
              <MotionReveal delay={0.45}>
                <div
                  aria-hidden
                  className="mt-16 hidden h-2 w-64 lg:block"
                  style={{
                    background:
                      'repeating-linear-gradient(135deg, rgba(0,255,0,0.55) 0 8px, transparent 8px 14px)',
                  }}
                />
              </MotionReveal>
            </div>

            <div className="lg:col-span-7">
              <ul className="flex flex-col gap-4">
                {steps.map((s, i) => (
                  <MotionReveal key={s.id} delay={i * 0.06}>
                    <li
                      className="group relative flex flex-col gap-3 border border-white/8 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04] md:p-8"
                      style={{ borderLeftColor: s.accent, borderLeftWidth: 3 }}
                    >
                      <span
                        aria-hidden
                        className="absolute left-0 top-6 hidden h-3 w-3 -translate-x-1/2 rotate-45 md:block"
                        style={{ background: s.accent }}
                      />
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-[10px] tracking-[0.28em] text-botcore-greyLight/55">
                          STEP
                        </span>
                        <span
                          className="font-mono text-[10px] tracking-[0.28em]"
                          style={{ color: s.accent }}
                        >
                          // {s.id}
                        </span>
                      </div>
                      <h3
                        className="text-3xl font-bold uppercase tracking-tight text-botcore-greyLight md:text-4xl"
                        style={{ fontFamily: 'Syne, Space Grotesk, sans-serif' }}
                      >
                        {s.title}
                      </h3>
                      <p className="max-w-xl text-sm leading-relaxed text-botcore-greyLight/65 md:text-base">
                        {s.body}
                      </p>
                    </li>
                  </MotionReveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow accent-rule-both">Operating principles</div>
            <h2 className="h-section mx-auto mt-5 font-semibold text-botcore-greyLight">
              The way we work, in three lines.
            </h2>
            <p className="mx-auto mt-6 text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
              Our process is the visible part. These are the principles that
              hold it up — non-negotiable on every project, regardless of scope.
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {principles.map((p, i) => (
              <MotionReveal key={p.id} delay={i * 0.06}>
                <li className="card flex h-full flex-col gap-5 p-6">
                  <span className="eyebrow !text-botcore-green">{p.id}</span>
                  <h3 className="h-card font-semibold text-botcore-greyLight">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-botcore-greyLight/60">
                    {p.body}
                  </p>
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
