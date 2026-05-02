import { Link } from 'react-router-dom';
import MotionReveal from './MotionReveal';
import ProjectThumb from './ProjectThumb';
import { projects } from '../data/projects';

const featured = projects.filter((p) => p.featured).slice(0, 3);

export default function Portfolio() {
  return (
    <section className="relative border-t border-white/5">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
        <span className="inline-flex items-center border border-botcore-green/40 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-botcore-green">
          Selected Projects
        </span>
        <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
          Brands We Helped Build{' '}
          <span className="text-botcore-green">From the Ground Up</span>
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
          Every project on this page started as a conversation with a founder
          who had a vision and needed someone to help bring it to life. These
          are the brands we have shaped, launched, and grown with.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <MotionReveal key={p.id} delay={i * 0.05}>
              <Link to={`/reps/${p.slug}`} className="card group block overflow-hidden">
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
  );
}
