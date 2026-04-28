import { Link } from 'react-router-dom';
import MotionReveal from './MotionReveal';
import { projects } from '../data/projects';

const featured = projects.filter((p) => p.featured).slice(0, 6);

function Thumb({ hue, cover, logo, alt }) {
  if (cover) {
    return (
      <img
        src={cover}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
    );
  }
  return (
    <div
      className="relative h-full w-full"
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 40% 16%) 0%, #0d0d0d 70%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 70% 30%, rgba(0,255,0,0.25), transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {logo && (
        <img
          src={logo}
          alt={`${alt} logo`}
          loading="lazy"
          className="absolute inset-0 m-auto max-h-[55%] max-w-[60%] object-contain transition-transform duration-500 group-hover:scale-[1.05]"
        />
      )}
    </div>
  );
}

export default function Portfolio() {
  return (
    <section className="relative border-t border-white/5">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="eyebrow accent-rule">Selected Work</div>
            <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
              Recent missions.
            </h2>
          </div>
          <Link
            to="/reps"
            className="eyebrow group inline-flex items-center gap-2 text-botcore-green hover:text-botcore-greyLight"
          >
            View all work
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <MotionReveal key={p.id} delay={i * 0.05}>
              <Link to={`/reps/${p.slug}`} className="card group block overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Thumb hue={p.hue} cover={p.cover} logo={p.logo} alt={p.name} />
                  <span className="eyebrow absolute left-4 top-4 !text-botcore-greyLight/70">
                    {p.id}
                  </span>
                  <span className="eyebrow absolute right-4 top-4 !text-botcore-greyLight/70">
                    {p.year}
                  </span>
                </div>
                <div className="flex items-center justify-between px-5 py-5">
                  <div className="min-w-0">
                    <h3 className="h-card truncate font-semibold text-botcore-greyLight transition-colors group-hover:text-botcore-green">
                      {p.name}
                    </h3>
                    <p className="eyebrow mt-1 truncate !tracking-[0.2em]">
                      {p.tags.join(' · ')}
                    </p>
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
      </div>
    </section>
  );
}
