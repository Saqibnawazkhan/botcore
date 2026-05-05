import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import MotionReveal from '../components/MotionReveal';
import LaunchCTA from '../components/LaunchCTA';
import { posts, POST_CATEGORIES } from '../data/posts';

export default function Labs() {
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(() => {
    if (filter === 'All') return posts;
    return posts.filter((p) => p.tags.includes(filter));
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
        <div className="relative mx-auto max-w-[1280px] px-6 pb-12 pt-36 text-center md:px-10 md:pb-16 md:pt-44">
          <MotionReveal>
            <div className="eyebrow accent-rule-both">Interstellar insights</div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h1 className="h-hero mx-auto mt-6 max-w-4xl font-bold text-botcore-greyLight">
              Mission <span className="text-botcore-green">control.</span>
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
              Field notes from the studio — strategy, search, branding, and the
              technology shaping how we ship work.
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-6 md:px-10">
          <div className="flex flex-wrap items-center gap-2">
            {POST_CATEGORIES.map((cat) => {
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
              {filtered.length} / {posts.length}
            </span>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-20">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {filtered.map((p, i) => (
              <MotionReveal key={p.id} delay={Math.min(i * 0.04, 0.3)}>
                <li>
                  <Link
                    to="#"
                    className="group grid grid-cols-[auto_1fr_auto] items-start gap-6 py-7 transition-colors hover:bg-white/[0.02] md:grid-cols-[auto_1fr_auto_auto]"
                  >
                    <span className="eyebrow !text-botcore-green">{p.id}</span>

                    <div className="min-w-0">
                      <h2 className="h-card font-semibold text-botcore-greyLight transition-colors group-hover:text-botcore-green">
                        {p.title}
                      </h2>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-botcore-greyLight/60">
                        {p.excerpt}
                      </p>
                      <p className="eyebrow mt-3 !tracking-[0.2em]">
                        {p.author} · {p.category}
                      </p>
                    </div>

                    <span className="eyebrow hidden self-center whitespace-nowrap md:block">
                      {p.dateLabel}
                    </span>
                    <span
                      aria-hidden
                      className="self-center text-botcore-greyLight/40 transition-all group-hover:translate-x-1 group-hover:text-botcore-green"
                    >
                      →
                    </span>
                  </Link>
                </li>
              </MotionReveal>
            ))}
          </ul>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-sm text-botcore-greyLight/60">
              No posts match this filter.
            </p>
          )}
        </div>
      </section>

      <LaunchCTA />
    </>
  );
}
