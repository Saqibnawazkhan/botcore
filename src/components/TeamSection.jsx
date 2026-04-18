import { Link } from 'react-router-dom';
import SectionLabel from './SectionLabel';
import MotionReveal from './MotionReveal';

const crew = [
  { id: 'K.ASH', role: 'COMMANDER', grad: 'from-emerald-700/40 to-botcore-black' },
  { id: 'M.ORI', role: 'STRATEGIST', grad: 'from-purple-700/40 to-botcore-black' },
  { id: 'R.VEX', role: 'ENGINEER', grad: 'from-cyan-700/40 to-botcore-black' },
  { id: 'S.LUN', role: 'DESIGNER', grad: 'from-amber-700/40 to-botcore-black' },
  { id: 'T.IKO', role: 'ANALYST', grad: 'from-rose-700/40 to-botcore-black' },
];

const badges = ['AWWWARDS', 'FWA 2025', 'WEBBY', 'CSS_DA'];

function CrewTile({ id, role, grad }) {
  return (
    <div
      className={`group relative aspect-[3/4] overflow-hidden border border-white/10 bg-gradient-to-b ${grad}`}
    >
      <div className="scanline absolute inset-0 opacity-40" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(rgba(0,255,0,0.15) 1px, transparent 1px)',
          backgroundSize: '8px 8px',
        }}
      />

      <svg
        viewBox="0 0 100 140"
        className="absolute inset-x-0 bottom-0 h-[85%] w-full text-white/20 transition-colors group-hover:text-botcore-green/70"
        fill="currentColor"
      >
        <circle cx="50" cy="42" r="20" />
        <path d="M18 140c0-20 14-34 32-34s32 14 32 34v10H18v-10z" />
      </svg>

      <span className="absolute left-3 top-3 font-mono text-[9px] tracking-[0.3em] text-botcore-green">
        ● {id}
      </span>
      <span className="absolute right-3 top-3 font-mono text-[9px] tracking-[0.3em] text-botcore-greyLight/70">
        {role}
      </span>
      <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-botcore-black/80 px-3 py-2 font-mono text-[9px] tracking-[0.3em] text-botcore-greyLight/70 backdrop-blur-sm">
        CREW_{id}
      </span>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="relative mx-auto max-w-[1280px] px-6 py-20 md:px-10">
      <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <MotionReveal>
          <SectionLabel>WHO WE ARE</SectionLabel>
          <h2 className="mt-6 font-display h-section font-extrabold uppercase italic text-botcore-white">
            A CONSTELLATION OF{' '}
            <span className="text-botcore-green text-glow">BRAVE STORYTELLERS</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-botcore-greyLight/70 md:text-lg">
            We operate from Louisville, Kentucky — and the wider orbit. A
            cross-disciplinary crew of designers, engineers, and strategists empowered to
            leave ordinary behind and chart territory the rest of the industry will
            follow.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {badges.map((b) => (
              <span
                key={b}
                className="border border-white/10 px-3 py-2 font-mono text-[10px] tracking-[0.3em] text-botcore-greyLight/70"
              >
                {b}
              </span>
            ))}
          </div>

          <Link
            to="/about"
            className="group mt-10 inline-flex items-center gap-2 border border-botcore-green/40 px-5 py-3 font-mono text-[11px] tracking-[0.3em] text-botcore-green transition-colors hover:bg-botcore-green hover:text-botcore-black"
          >
            ENCOUNTER BOTCORE
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {crew.map((c) => (
              <CrewTile key={c.id} {...c} />
            ))}
            <div className="flex aspect-[3/4] flex-col items-center justify-center border border-dashed border-botcore-green/30 bg-white/[0.02] p-4 text-center">
              <span className="font-display text-2xl font-extrabold italic text-botcore-green md:text-3xl">
                +19
              </span>
              <span className="mt-2 font-mono text-[9px] tracking-[0.3em] text-botcore-greyLight/60">
                ACTIVE OPERATORS
              </span>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
