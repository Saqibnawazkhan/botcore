import { Link } from 'react-router-dom';
import MotionReveal from './MotionReveal';

const crew = [
  { id: 'K.A', role: 'Commander', hue: 140 },
  { id: 'M.O', role: 'Strategist', hue: 280 },
  { id: 'R.V', role: 'Engineer', hue: 190 },
  { id: 'S.L', role: 'Designer', hue: 40 },
  { id: 'T.I', role: 'Analyst', hue: 340 },
];

function CrewTile({ id, role, hue }) {
  return (
    <div className="card group relative aspect-[3/4] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, hsl(${hue} 40% 22%) 0%, #0d0d0d 75%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 40%, rgba(0,255,0,0.2), transparent 55%)',
        }}
      />
      <span className="eyebrow absolute left-4 top-4">{id}</span>
      <span className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <span className="h-card font-semibold text-botcore-greyLight">{role}</span>
        <span
          aria-hidden
          className="text-botcore-greyLight/40 transition-colors group-hover:text-botcore-green"
        >
          →
        </span>
      </span>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="relative border-t border-white/5">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <MotionReveal>
            <div className="eyebrow accent-rule">The Crew</div>
            <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
              A constellation of{' '}
              <span className="text-botcore-green">brave storytellers.</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-botcore-greyLight/65">
              Louisville-based, orbit-minded. A cross-disciplinary crew of designers,
              engineers, and strategists chartered to leave ordinary behind.
            </p>
            <Link to="/team" className="btn-ghost mt-10 inline-flex">
              Meet the crew <span aria-hidden>↗</span>
            </Link>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {crew.map((c) => (
                <CrewTile key={c.id} {...c} />
              ))}
              <div className="card flex aspect-[3/4] flex-col items-center justify-center p-6 text-center">
                <span className="text-3xl font-semibold text-botcore-green md:text-4xl">
                  +19
                </span>
                <span className="eyebrow mt-3">Active operators</span>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
