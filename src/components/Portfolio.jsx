import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import MotionReveal from './MotionReveal';

const projects = [
  {
    id: '01',
    name: 'ORION_GOLF',
    tags: ['Campaigns', 'Branding'],
    pattern: 'circles',
    grad: 'from-emerald-900/40 via-botcore-black to-botcore-black',
  },
  {
    id: '02',
    name: 'CATERPAX',
    tags: ['Websites'],
    pattern: 'grid',
    grad: 'from-botcore-green/30 via-botcore-black to-botcore-black',
  },
  {
    id: '03',
    name: 'AIRSTREAM_AMP',
    tags: ['Campaigns', 'Websites'],
    pattern: 'diagonal',
    grad: 'from-purple-900/40 via-botcore-black to-botcore-black',
  },
  {
    id: '04',
    name: 'BARREL_FOODS',
    tags: ['Branding'],
    pattern: 'wave',
    grad: 'from-amber-900/30 via-botcore-black to-botcore-black',
  },
  {
    id: '05',
    name: 'LMPD_PROTOCOL',
    tags: ['Branding'],
    pattern: 'grid',
    grad: 'from-blue-900/30 via-botcore-black to-botcore-black',
  },
  {
    id: '06',
    name: 'BEV_SYNDICATE',
    tags: ['Branding', 'Photo'],
    pattern: 'circles',
    grad: 'from-rose-900/30 via-botcore-black to-botcore-black',
  },
  {
    id: '07',
    name: 'INDY_ARTS',
    tags: ['Branding'],
    pattern: 'diagonal',
    grad: 'from-cyan-900/30 via-botcore-black to-botcore-black',
  },
  {
    id: '08',
    name: 'APPALACHIAN',
    tags: ['Photo & Video'],
    pattern: 'wave',
    grad: 'from-emerald-900/40 via-botcore-black to-botcore-black',
  },
];

export default function Portfolio() {
  return (
    <section className="relative mx-auto max-w-[1280px] px-6 py-20 md:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <MotionReveal>
          <SectionLabel>YOUR POSSIBILITIES</SectionLabel>
          <h2 className="mt-6 font-display h-section font-extrabold uppercase italic text-botcore-white">
            FEATURED <span className="text-botcore-green text-glow">WORK</span>
          </h2>
        </MotionReveal>
        <MotionReveal delay={0.15}>
          <Link
            to="/reps"
            className="group inline-flex items-center gap-2 border border-botcore-green/40 px-5 py-3 font-mono text-[11px] tracking-[0.3em] text-botcore-green transition-colors hover:bg-botcore-green hover:text-botcore-black"
          >
            EXPLORE ALL
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </MotionReveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p, i) => (
          <MotionReveal key={p.id} delay={i * 0.05} y={24}>
            <ProjectCard {...p} />
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

function PatternLayer({ pattern }) {
  switch (pattern) {
    case 'circles':
      return (
        <svg viewBox="0 0 200 150" className="absolute inset-0 h-full w-full">
          <g stroke="#00FF00" strokeOpacity="0.3" fill="none" strokeWidth="0.6">
            <circle cx="140" cy="40" r="30" />
            <circle cx="140" cy="40" r="20" />
            <circle cx="140" cy="40" r="10" />
            <circle cx="50" cy="110" r="40" />
            <circle cx="50" cy="110" r="25" />
          </g>
        </svg>
      );
    case 'grid':
      return (
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,255,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,0,0.25) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            maskImage: 'radial-gradient(circle at 30% 70%, black, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at 30% 70%, black, transparent 70%)',
          }}
        />
      );
    case 'diagonal':
      return (
        <svg viewBox="0 0 200 150" className="absolute inset-0 h-full w-full">
          <g stroke="#00FF00" strokeOpacity="0.35" strokeWidth="0.8">
            {Array.from({ length: 14 }).map((_, i) => (
              <line key={i} x1={i * 30 - 60} y1="0" x2={i * 30 + 60} y2="150" />
            ))}
          </g>
        </svg>
      );
    case 'wave':
      return (
        <svg viewBox="0 0 200 150" className="absolute inset-0 h-full w-full">
          <g stroke="#00FF00" strokeOpacity="0.35" fill="none" strokeWidth="0.8">
            {Array.from({ length: 8 }).map((_, i) => (
              <path
                key={i}
                d={`M0 ${30 + i * 14} Q50 ${10 + i * 14} 100 ${30 + i * 14} T200 ${
                  30 + i * 14
                }`}
              />
            ))}
          </g>
        </svg>
      );
    default:
      return null;
  }
}

function ProjectCard({ id, name, tags, pattern, grad }) {
  return (
    <motion.div
      whileHover="hover"
      className="group relative flex min-w-0 flex-col gap-4 overflow-hidden border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-botcore-green/60"
    >
      <div
        className={`relative aspect-[4/3] overflow-hidden border border-white/5 bg-gradient-to-br ${grad}`}
      >
        <div className="scanline absolute inset-0 opacity-40" />
        <PatternLayer pattern={pattern} />

        <span className="absolute left-3 top-3 font-mono text-[10px] tracking-[0.3em] text-botcore-green">
          // {id}
        </span>
        <span className="absolute right-3 top-3 font-mono text-[9px] tracking-[0.3em] text-botcore-greyLight/60">
          CASE_STUDY
        </span>

        <div className="absolute inset-x-3 bottom-3 flex items-end justify-between">
          <motion.span
            variants={{ hover: { y: -2 } }}
            transition={{ duration: 0.25 }}
            className="font-display text-2xl font-extrabold italic tracking-tighter text-botcore-white/90 md:text-3xl"
          >
            {id}
          </motion.span>
          <motion.span
            variants={{ hover: { opacity: 1, x: 0 } }}
            initial={{ opacity: 0, x: 6 }}
            transition={{ duration: 0.3 }}
            className="font-mono text-[10px] tracking-[0.3em] text-botcore-green"
          >
            VIEW ↗
          </motion.span>
        </div>

        <motion.div
          variants={{ hover: { opacity: 1 } }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="pointer-events-none absolute inset-0 bg-botcore-green/5 ring-1 ring-inset ring-botcore-green/30"
        />
      </div>

      <div className="flex min-w-0 flex-col gap-2 px-2 pb-2">
        <h3 className="truncate font-display text-base font-extrabold uppercase italic tracking-tight text-botcore-white transition-colors group-hover:text-botcore-green">
          {name}
        </h3>
        <ul className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <li
              key={t}
              className="border border-white/10 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-botcore-greyLight/60"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
