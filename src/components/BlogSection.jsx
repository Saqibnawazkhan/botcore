import { Link } from 'react-router-dom';
import MotionReveal from './MotionReveal';
import { posts } from '../data/posts';

const featured = posts.filter((p) => p.featured).slice(0, 3);

export default function BlogSection() {
  return (
    <section className="relative border-t border-white/5">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="eyebrow accent-rule">Botcore Insights</div>
            <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
              Notes from the team.
            </h2>
          </div>
          <Link
            to="/labs"
            className="eyebrow group inline-flex items-center gap-2 text-botcore-green hover:text-botcore-greyLight"
          >
            Read all articles
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <ul className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {featured.map((p, i) => (
            <MotionReveal key={p.id} delay={i * 0.07}>
              <li>
                <Link
                  to="/labs"
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-7 transition-colors hover:bg-white/[0.02] md:grid-cols-[auto_1fr_auto_auto]"
                >
                  <span className="eyebrow !text-botcore-green">{p.id}</span>
                  <div className="min-w-0">
                    <h3 className="h-card truncate font-semibold text-botcore-greyLight transition-colors group-hover:text-botcore-green">
                      {p.title}
                    </h3>
                    <p className="eyebrow mt-2 !tracking-[0.2em]">
                      {p.author} · {p.category}
                    </p>
                  </div>
                  <span className="eyebrow hidden md:block">{p.dateLabel}</span>
                  <span
                    aria-hidden
                    className="text-botcore-greyLight/40 transition-all group-hover:translate-x-1 group-hover:text-botcore-green"
                  >
                    →
                  </span>
                </Link>
              </li>
            </MotionReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
