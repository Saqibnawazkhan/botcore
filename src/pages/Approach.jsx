import { Link } from 'react-router-dom';
import MotionReveal from '../components/MotionReveal';
import LaunchCTA from '../components/LaunchCTA';

const steps = [
  {
    id: '01',
    title: 'Learn',
    body: 'Chart a course with overall brand and creative strategy, all fueled by deep insights and research.',
    accent: '#FF3355',
  },
  {
    id: '02',
    title: 'Plan',
    body: 'Take your company to new heights with creative concepts engineered to captivate your audience.',
    accent: '#C13BFF',
  },
  {
    id: '03',
    title: 'Build',
    body: 'Transform ideas into reality with our capabilities in graphic design, video production, web development, and more.',
    accent: '#7A3BFF',
  },
  {
    id: '04',
    title: 'Launch',
    body: 'Amplify your reach with targeted advertising solutions across all the channels that matter to your customers.',
    accent: '#3B7AFF',
  },
  {
    id: '05',
    title: 'Measure',
    body: 'Navigate with precision using data-driven insights and unlock new strategic opportunities.',
    accent: '#3BD4D4',
  },
];

const principles = [
  {
    id: '01',
    title: 'No black boxes',
    body: 'Every decision is documented and shared. You see the same dashboards, briefs, and metrics that we do.',
  },
  {
    id: '02',
    title: 'Quantified outcomes',
    body: 'Every mission is scoped against measurable goals — traffic, conversion, recall, retention. Pick your KPIs.',
  },
  {
    id: '03',
    title: 'Built to last past launch',
    body: 'We hand off systems, not artefacts. Your team owns and operates everything we build, end-to-end.',
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
                <div className="eyebrow accent-rule">Our approach</div>
              </MotionReveal>
              <MotionReveal delay={0.1}>
                <h1 className="h-hero mt-6 font-bold text-botcore-greyLight">
                  Driven to get{' '}
                  <span className="text-botcore-green glow-green">results.</span>
                </h1>
              </MotionReveal>
              <MotionReveal delay={0.2}>
                <p className="mt-8 max-w-md text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
                  Your success is our success. Our integrated approach ensures that
                  at every stage we keep our course set on reaching your audience
                  and goals. Being driven by results means that even with our sights
                  set on the stars, we remain grounded in what matters most to you.
                  Achieving your goals is always our north star.
                </p>
              </MotionReveal>
              <MotionReveal delay={0.3}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <Link to="/studio" className="btn-primary">
                    Make contact <span aria-hidden>↗</span>
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
          <div className="max-w-2xl">
            <div className="eyebrow accent-rule">Operating principles</div>
            <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
              The way we work, in three lines.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
              Our process is the visible part. These are the principles that hold
              it up — non-negotiable on every mission, regardless of scope.
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
