import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import MotionReveal from './MotionReveal';

const capabilities = [
  {
    id: '01',
    title: 'BRANDS',
    desc: 'Identity systems engineered for impact across every surface.',
    tags: ['STRATEGY', 'IDENTITY', 'VOICE'],
    to: '/services',
  },
  {
    id: '02',
    title: 'WEBSITES',
    desc: 'Interactive product platforms, fabricated to orbital tolerances.',
    tags: ['DESIGN', 'ENGINEERING', 'CMS'],
    to: '/services',
  },
  {
    id: '03',
    title: 'PRODUCTIONS',
    desc: 'Photo and video capture. Narrative fuel for the mission.',
    tags: ['FILM', 'PHOTO', 'MOTION'],
    to: '/services',
  },
  {
    id: '04',
    title: 'CAMPAIGNS',
    desc: 'Full-stack amplification across paid, earned, and owned channels.',
    tags: ['PAID', 'SOCIAL', 'SEO'],
    to: '/services',
  },
  {
    id: '05',
    title: 'INSIGHTS',
    desc: 'Telemetry, analytics, and the data that sharpens the next launch.',
    tags: ['ANALYTICS', 'RESEARCH', 'CRO'],
    to: '/services',
  },
];

export default function Capabilities() {
  return (
    <section className="relative mx-auto max-w-[1280px] px-6 py-20 md:px-10">
      <MotionReveal>
        <SectionLabel>CAPABILITIES_MATRIX</SectionLabel>
        <div className="mt-6 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display h-section font-extrabold uppercase italic text-botcore-white">
            YOUR <span className="text-botcore-green text-glow">POSSIBILITIES</span>
          </h2>
          <p className="max-w-sm text-sm text-botcore-greyLight/60">
            Five core operational disciplines. Activated individually or deployed as a
            full mission stack.
          </p>
        </div>
      </MotionReveal>

      <div className="mt-14 grid grid-cols-1 gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-5">
        {capabilities.map((c, i) => (
          <MotionReveal key={c.id} delay={i * 0.07} y={20}>
            <CapabilityCard {...c} />
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

function CapabilityCard({ id, title, desc, tags, to }) {
  return (
    <Link to={to} className="block h-full">
      <motion.div
        whileHover="hover"
        className="group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden bg-botcore-black p-6 transition-colors hover:bg-white/[0.03]"
      >
        <motion.div
          variants={{ hover: { opacity: 1 } }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-botcore-green/10 via-transparent to-transparent"
          aria-hidden
        />
        <motion.span
          variants={{ hover: { scaleX: 1 } }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="absolute inset-x-0 top-0 h-[2px] origin-left bg-botcore-green"
          aria-hidden
        />

        <div className="relative flex items-start justify-between">
          <span className="font-mono text-[10px] tracking-[0.3em] text-botcore-green">
            // {id} / 05
          </span>
          <motion.span
            variants={{ hover: { x: 4, y: -4, color: '#00FF00' } }}
            transition={{ duration: 0.25 }}
            className="font-mono text-xl text-botcore-greyLight/50"
          >
            ↗
          </motion.span>
        </div>

        <div className="relative flex flex-col gap-4">
          <h3 className="h-card font-extrabold uppercase italic text-botcore-white transition-colors group-hover:text-botcore-green">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-botcore-greyLight/60">{desc}</p>
          <ul className="flex flex-wrap gap-2 pt-2">
            {tags.map((t) => (
              <li
                key={t}
                className="font-mono text-[9px] tracking-[0.25em] text-botcore-greyLight/50"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Link>
  );
}
