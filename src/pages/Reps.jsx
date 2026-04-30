import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import MotionReveal from '../components/MotionReveal';
import LaunchCTA from '../components/LaunchCTA';
import ProjectThumb from '../components/ProjectThumb';
import { projects, CATEGORIES } from '../data/projects';

export default function Reps() {
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((p) => p.tags.includes(filter));
  }, [filter]);

  return (
    <>
      <section className="relative border-b border-white/5">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse at 20% 0%, rgba(0,255,0,0.06) 0%, transparent 55%)',
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-6 pb-12 pt-36 md:px-10 md:pb-16 md:pt-44">
          <MotionReveal>
            <div className="eyebrow accent-rule">Selected projects</div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h1 className="h-hero mt-6 max-w-4xl font-bold text-botcore-greyLight">
              Brands we helped build{' '}
              <span className="text-botcore-green">from the ground up.</span>
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
              Every project on this page started as a conversation with a
              founder who had a vision and needed someone to help bring it to
              life. Filter by discipline.
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-6 md:px-10">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] transition-colors ${
                    active
                      ? 'border-botcore-green bg-botcore-green text-botcore-black'
                      : 'border-white/15 text-botcore-greyLight/70 hover:border-botcore-green hover:text-botcore-green'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
            <span className="ml-auto eyebrow">
              {filtered.length} / {projects.length}
            </span>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-20">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <MotionReveal key={p.id} delay={Math.min(i * 0.03, 0.3)}>
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
                  <div className="flex items-center justify-between gap-4 px-5 py-5">
                    <div className="min-w-0">
                      <h3 className="h-card truncate font-semibold text-botcore-greyLight transition-colors group-hover:text-botcore-green">
                        {p.name}
                      </h3>
                      <p className="eyebrow mt-1 truncate !tracking-[0.2em]">
                        {p.tags.join(' · ')} · {p.industry}
                      </p>
                    </div>
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

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-sm text-botcore-greyLight/60">
              No projects match this filter.
            </p>
          )}
        </div>
      </section>

      <LaunchCTA />
    </>
  );
}
