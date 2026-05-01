import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import MotionReveal from '../components/MotionReveal';
import ProjectThumb from '../components/ProjectThumb';
import LaunchCTA from '../components/LaunchCTA';
import { projects } from '../data/projects';

const deliverables = [
  'Naming & wordmark',
  'Logo & mark systems',
  'Colour & typography',
  'Brand voice & messaging',
  'Brand guidelines',
];

const process = [
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
];

const brandedProjects = projects.filter((p) => p.tags.includes('Branding'));
const mosaic = brandedProjects.slice(0, 9);
const featured = brandedProjects.slice(0, 3);

export default function CapabilityBranding() {
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
        <div
          className="grid-faint pointer-events-none absolute inset-0 opacity-30"
          aria-hidden
        />

        <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
          <MotionReveal>
            <div className="eyebrow accent-rule">Capability / 01 — Branding</div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h1 className="h-hero mt-6 max-w-4xl font-bold text-botcore-greyLight">
              Brands and identities{' '}
              <span className="text-botcore-green glow-green">
                built to last beyond launch.
              </span>
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
              Naming, wordmark, mark system, colour, typography, voice, and the
              full guidelines that hold it together. We build brand identities
              from the ground up, then carry them across packaging, websites,
              and campaigns so the brand reads like one clear voice from day
              one.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/studio" className="btn-primary">
                Start your brand <span aria-hidden>↗</span>
              </Link>
              <Link to="/reps" className="btn-ghost">
                See branded work <span aria-hidden>↗</span>
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <MotionReveal>
            <div className="eyebrow accent-rule">Brands We Have Built</div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h2 className="h-section mt-5 max-w-3xl font-semibold text-botcore-greyLight">
              A system,{' '}
              <span className="text-botcore-green">not a logo.</span>
            </h2>
          </MotionReveal>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
            {mosaic.map((p, i) => (
              <MotionReveal key={p.id} delay={i * 0.04}>
                <Link
                  to={`/reps/${p.slug}`}
                  className="card group block overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ProjectThumb
                      hue={p.hue}
                      cover={p.cover}
                      logo={p.logo}
                      name={p.name}
                    />
                    <span className="eyebrow absolute left-3 top-3 !text-botcore-greyLight/70">
                      {p.id}
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-4">
                    <h3 className="text-sm font-semibold text-botcore-greyLight transition-colors group-hover:text-botcore-green md:text-base">
                      {p.name}
                    </h3>
                    <span
                      aria-hidden
                      className="text-botcore-greyLight/40 transition-all group-hover:translate-x-1 group-hover:text-botcore-green"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <MotionReveal>
                <div className="eyebrow accent-rule">What We Deliver</div>
              </MotionReveal>
              <MotionReveal delay={0.1}>
                <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
                  Everything the brand{' '}
                  <span className="text-botcore-green">needs to launch.</span>
                </h2>
              </MotionReveal>
              <MotionReveal delay={0.15}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
                  One team, one brief, one consistent system across every
                  surface a customer ever touches.
                </p>
              </MotionReveal>
            </div>

            <div className="md:col-span-7">
              <MotionReveal delay={0.1}>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-4 border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-botcore-greyLight/80 transition-colors hover:border-botcore-green/40 hover:text-botcore-greyLight md:text-base"
                    >
                      <span
                        aria-hidden
                        className="flex h-9 w-9 shrink-0 items-center justify-center border border-botcore-green/40 text-botcore-green"
                      >
                        <Sparkles size={16} strokeWidth={1.5} />
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <MotionReveal>
            <div className="eyebrow accent-rule">Our Branding Process</div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h2 className="h-section mt-5 max-w-3xl font-semibold text-botcore-greyLight">
              Five steps from{' '}
              <span className="text-botcore-green">brief to brand.</span>
            </h2>
          </MotionReveal>

          <ul className="mt-12 flex flex-col">
            {process.map((step, i) => (
              <MotionReveal key={step.id} delay={i * 0.04}>
                <li className="grid grid-cols-1 gap-6 border-b border-white/10 py-10 last:border-b-0 md:grid-cols-12 md:gap-10 md:py-12">
                  <div className="md:col-span-1">
                    <span className="eyebrow !text-botcore-green">
                      {step.id}
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-bold uppercase tracking-tight text-botcore-greyLight md:col-span-3 md:text-3xl"
                    style={{ fontFamily: 'Syne, Space Grotesk, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-botcore-greyLight/70 md:col-span-8 md:text-lg">
                    {step.body}
                  </p>
                </li>
              </MotionReveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <MotionReveal>
                <div className="eyebrow accent-rule">Selected Branding Work</div>
              </MotionReveal>
              <MotionReveal delay={0.1}>
                <h2 className="h-section mt-5 max-w-2xl font-semibold text-botcore-greyLight">
                  Brands we have shaped,{' '}
                  <span className="text-botcore-green">launched, and grown with.</span>
                </h2>
              </MotionReveal>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <MotionReveal key={p.id} delay={i * 0.05}>
                <Link
                  to={`/reps/${p.slug}`}
                  className="card group block overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ProjectThumb
                      hue={p.hue}
                      cover={p.cover}
                      logo={p.logo}
                      name={p.name}
                    />
                    <span className="eyebrow absolute left-4 top-4 !text-botcore-greyLight/70">
                      {p.id}
                    </span>
                    <span className="eyebrow absolute right-4 top-4 !text-botcore-greyLight/70">
                      {p.year}
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-5 py-5">
                    <div className="min-w-0 flex-1">
                      <h3 className="h-card truncate font-semibold text-botcore-greyLight transition-colors group-hover:text-botcore-green">
                        {p.name}
                      </h3>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {[...p.tags, p.industry].map((t) => (
                          <li
                            key={t}
                            className="border border-white/15 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-botcore-greyLight/65 transition-colors group-hover:border-botcore-green/40 group-hover:text-botcore-greyLight/85"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span
                      aria-hidden
                      className="ml-4 text-botcore-greyLight/40 transition-all group-hover:translate-x-1 group-hover:text-botcore-green"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </MotionReveal>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link to="/reps" className="btn-ghost inline-flex items-center gap-2">
              Explore More Projects
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <LaunchCTA />
    </>
  );
}
