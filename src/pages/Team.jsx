import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import MotionReveal from '../components/MotionReveal';
import LaunchCTA from '../components/LaunchCTA';
import { crew, DEPARTMENTS, initials } from '../data/crew';

function CrewCard({ member }) {
  return (
    <div className="card group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, hsl(${member.hue} 40% 24%) 0%, #0d0d0d 80%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 35%, rgba(0,255,0,0.2), transparent 55%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <span className="absolute left-3 top-3 font-mono text-[10px] tracking-[0.3em] text-botcore-green">
          // {member.id}
        </span>
        <span className="absolute bottom-3 right-3 font-mono text-[10px] tracking-[0.3em] text-botcore-greyLight/70">
          {member.dept}
        </span>
        <span className="absolute inset-0 flex items-center justify-center font-display text-5xl font-semibold text-botcore-greyLight/75 transition-colors group-hover:text-botcore-greyLight md:text-6xl">
          {initials(member.name)}
        </span>
      </div>
      <div className="flex flex-col gap-1 px-4 py-4">
        <h3 className="text-base font-semibold leading-tight text-botcore-greyLight transition-colors group-hover:text-botcore-green">
          {member.name}
        </h3>
        <p className="eyebrow !tracking-[0.18em]">{member.role}</p>
      </div>
    </div>
  );
}

export default function Team() {
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(() => {
    if (filter === 'All') return crew;
    return crew.filter((m) => m.dept === filter);
  }, [filter]);

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
        <div className="relative mx-auto max-w-[1280px] px-6 pb-12 pt-36 text-center md:px-10 md:pb-16 md:pt-44">
          <MotionReveal>
            <div className="eyebrow accent-rule-both">The Crew</div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h1 className="h-hero mx-auto mt-6 max-w-4xl font-bold text-botcore-greyLight">
              Meet the <span className="text-botcore-green">crew.</span>
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
              Navigating the vast expanses of strategy, brand, and product takes an
              intrepid crew. Twenty-four operators across leadership, strategy, design,
              engineering, production, and creative.
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-6 md:px-10">
          <div className="flex flex-wrap items-center gap-2">
            {DEPARTMENTS.map((dept) => {
              const active = filter === dept;
              return (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setFilter(dept)}
                  className={`border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] transition-colors ${
                    active
                      ? 'border-botcore-green bg-botcore-green text-botcore-black'
                      : 'border-white/15 text-botcore-greyLight/70 hover:border-botcore-green hover:text-botcore-green'
                  }`}
                >
                  {dept}
                </button>
              );
            })}
            <span className="ml-auto eyebrow">
              {filtered.length} / {crew.length}
            </span>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-20">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {filtered.map((m, i) => (
              <MotionReveal key={m.id} delay={Math.min(i * 0.03, 0.3)}>
                <CrewCard member={m} />
              </MotionReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-sm text-botcore-greyLight/60">
              No crew in this department.
            </p>
          )}
        </div>
      </section>

      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <div className="eyebrow accent-rule">Work with us</div>
              <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
                Have a mission in mind?
              </h2>
              <p className="mt-6 text-base leading-relaxed text-botcore-greyLight/65">
                Send a transmission. A senior operator will be in touch within 48 hours.
              </p>
            </div>
            <Link to="/studio" className="btn-primary">
              Start a project <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <LaunchCTA />
    </>
  );
}
