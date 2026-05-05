import { Link } from 'react-router-dom';
import {
  Zap,
  Database,
  Layers,
  Trophy,
  ShieldCheck,
  Users,
  Wrench,
  Rocket,
  Sparkles,
} from 'lucide-react';
import MotionReveal from '../components/MotionReveal';
import LaunchCTA from '../components/LaunchCTA';

const highlights = [
  {
    id: '01',
    title: 'Reduce manual work',
    body: 'Streamline repetitive operations so your team focuses on decisions that actually need humans.',
    Icon: Zap,
  },
  {
    id: '02',
    title: 'Unlock your data',
    body: 'Turn unstructured logs, chats, and documents into actionable, auditable insight.',
    Icon: Database,
  },
  {
    id: '03',
    title: 'Lift every department',
    body: 'Measurable performance gains across marketing, operations, and customer experience.',
    Icon: Layers,
  },
  {
    id: '04',
    title: 'Compound advantage',
    body: 'Capabilities that get sharper over time — proprietary loops competitors can’t buy off the shelf.',
    Icon: Trophy,
  },
];

const process = [
  {
    id: '01',
    title: 'AI audit workshop',
    duration: '2 hours',
    body: 'A working session with your leadership team to map current tools, blockers, and opportunity vectors.',
  },
  {
    id: '02',
    title: 'Analysis & research',
    duration: '2 weeks',
    body: 'We benchmark your stack, interview operators, and model the highest-leverage interventions.',
  },
  {
    id: '03',
    title: 'Findings & roadmap',
    duration: '1 hour',
    body: 'A scoped roadmap with sequenced wins, dependencies, risks, and investment ranges.',
  },
];

const pillars = [
  {
    id: '01',
    title: 'Leadership alignment',
    body: 'Get your executive team operating from a shared AI vision before a single dollar is spent.',
    Icon: Users,
  },
  {
    id: '02',
    title: 'Governance & ethics',
    body: 'Clear policies, access controls, and review loops so adoption scales safely.',
    Icon: ShieldCheck,
  },
  {
    id: '03',
    title: 'Skills & frameworks',
    body: 'Repeatable playbooks that turn AI fluency into an organisational muscle, not a hero project.',
    Icon: Wrench,
  },
  {
    id: '04',
    title: 'Deploy & scale',
    body: 'Hands-on delivery of the agents, automations, and platforms that unlock the roadmap.',
    Icon: Rocket,
  },
  {
    id: '05',
    title: 'Sustained innovation',
    body: 'Monitoring, evaluation, and refresh cycles to keep your advantage compounding.',
    Icon: Sparkles,
  },
];

const deliverables = [
  'Custom roadmap with sequenced initiatives and investment ranges',
  'Readiness assessment scoring data, tooling, and org maturity',
  'Recommendations for custom GPTs, agents, and automations',
  'Enablement plan for internal AI fluency and governance',
];

const domains = [
  {
    id: '01',
    title: 'Marketing',
    body: 'Creative ideation, audience modelling, content ops, paid-media optimisation.',
  },
  {
    id: '02',
    title: 'Operations',
    body: 'Process automation, knowledge retrieval, forecasting, document workflows.',
  },
  {
    id: '03',
    title: 'Customer experience',
    body: 'Conversational interfaces, support copilots, personalised journeys at scale.',
  },
];

export default function AI() {
  return (
    <>
      <section className="relative border-b border-white/5">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse at 80% 0%, rgba(0,255,0,0.08) 0%, transparent 55%)',
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-36 text-center md:px-10 md:pb-24 md:pt-44">
          <MotionReveal>
            <div className="eyebrow accent-rule-both">AI Enablement</div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h1 className="h-hero mx-auto mt-6 max-w-4xl font-bold text-botcore-greyLight">
              Turn AI potential into business{' '}
              <span className="text-botcore-green">momentum.</span>
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
              Our AI Enablement program turns curiosity into capability. We help your
              team move past one-off experiments and build durable, defensible advantage.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link to="/studio" className="btn-primary">
                Book your AI audit <span aria-hidden>↗</span>
              </Link>
              <a href="#how-it-works" className="btn-ghost">
                See how it works <span aria-hidden>↓</span>
              </a>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <MotionReveal className="lg:col-span-5">
              <div className="eyebrow accent-rule">The gap</div>
              <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
                Most teams use AI. Few see{' '}
                <span className="text-botcore-green">real results.</span>
              </h2>
            </MotionReveal>
            <MotionReveal delay={0.1} className="lg:col-span-7">
              <p className="text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
                AI is everywhere — but capability is rarely translated into outcomes.
                Teams buy tools, run pilots, and stall at the proof-of-concept edge.
                We’ve built a program that closes the gap between the demo and the
                P&L — treating AI as a system-level investment rather than another
                app in the stack.
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow accent-rule-both">What changes</div>
            <h2 className="h-section mx-auto mt-5 font-semibold text-botcore-greyLight">
              Four outcomes, sequenced.
            </h2>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <MotionReveal key={h.id} delay={i * 0.06}>
                <li className="card flex h-full flex-col gap-5 p-6">
                  <div className="flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center border border-botcore-green/40 text-botcore-green">
                      <h.Icon size={18} strokeWidth={1.5} />
                    </span>
                    <span className="eyebrow">{h.id}</span>
                  </div>
                  <h3 className="h-card font-semibold text-botcore-greyLight">
                    {h.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-botcore-greyLight/60">
                    {h.body}
                  </p>
                </li>
              </MotionReveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="how-it-works" className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow accent-rule-both">Audit to activation</div>
            <h2 className="h-section mx-auto mt-5 font-semibold text-botcore-greyLight">
              From first signal to scoped roadmap in under a month.
            </h2>
          </div>

          <ol className="mt-14 grid grid-cols-1 gap-px bg-white/5 lg:grid-cols-3">
            {process.map((p) => (
              <li
                key={p.id}
                className="group relative flex h-full flex-col gap-6 bg-botcore-black p-6 transition-colors hover:bg-white/[0.025]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-semibold tracking-tight text-botcore-green md:text-6xl">
                    {p.id}
                  </span>
                  <span className="eyebrow">{p.duration}</span>
                </div>
                <h3 className="h-card font-semibold text-botcore-greyLight">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-botcore-greyLight/60">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <MotionReveal className="lg:col-span-4">
              <div className="eyebrow accent-rule">Certified expertise</div>
              <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
                Five pillars, one enablement system.
              </h2>
              <p className="mt-6 max-w-sm text-sm text-botcore-greyLight/60">
                We work the full stack — from executive alignment down to deployed
                workflows — so adoption doesn’t stall at pilot.
              </p>
            </MotionReveal>

            <div className="lg:col-span-8">
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {pillars.map((p, i) => (
                  <MotionReveal key={p.id} delay={i * 0.05}>
                    <li className="group grid grid-cols-[auto_auto_1fr] items-start gap-6 py-6 transition-colors hover:bg-white/[0.02]">
                      <span className="eyebrow !text-botcore-green">{p.id}</span>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-botcore-green/40 text-botcore-green">
                        <p.Icon size={18} strokeWidth={1.5} />
                      </span>
                      <div>
                        <h3 className="h-card font-semibold text-botcore-greyLight transition-colors group-hover:text-botcore-green">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-botcore-greyLight/60">
                          {p.body}
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

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <MotionReveal>
              <div className="eyebrow accent-rule">You walk away with</div>
              <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
                Deliverables, not decks.
              </h2>
              <ul className="mt-10 space-y-4">
                {deliverables.map((d, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 border-b border-white/5 pb-4 last:border-0"
                  >
                    <span className="eyebrow !text-botcore-green">
                      0{i + 1}
                    </span>
                    <p className="text-base leading-relaxed text-botcore-greyLight/75">
                      {d}
                    </p>
                  </li>
                ))}
              </ul>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <div className="eyebrow accent-rule">Where it lands</div>
              <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
                Three domains we activate first.
              </h2>
              <ul className="mt-10 grid gap-4">
                {domains.map((d) => (
                  <li key={d.id} className="card flex flex-col gap-2 p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="h-card font-semibold text-botcore-greyLight">
                        {d.title}
                      </h3>
                      <span className="eyebrow !text-botcore-green">{d.id}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-botcore-greyLight/60">
                      {d.body}
                    </p>
                  </li>
                ))}
              </ul>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
            <MotionReveal>
              <span className="flex h-20 w-20 items-center justify-center border border-botcore-green/40 text-botcore-green">
                <ShieldCheck size={32} strokeWidth={1.3} />
              </span>
            </MotionReveal>
            <MotionReveal delay={0.1}>
              <div className="eyebrow accent-rule">Ethics & governance</div>
              <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
                Built on ethics, governance, and security — not bolted on.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-botcore-greyLight/65">
                Every engagement ships with policy scaffolding, data-handling
                guardrails, and a review loop. We help you adopt AI in a way your legal,
                security, and leadership teams can defend.
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      <LaunchCTA />
    </>
  );
}
