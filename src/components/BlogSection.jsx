import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionLabel from './SectionLabel';
import MotionReveal from './MotionReveal';

const posts = [
  {
    id: '001',
    title: 'Q2 2026 CORE VALUE CALL-OUTS',
    author: 'RUSS',
    date: '2026.04.07',
    tag: 'CULTURE',
    grad: 'from-emerald-900/30 via-transparent to-transparent',
  },
  {
    id: '002',
    title: 'TAG DAY 2026 CORE VALUE CALL-OUTS',
    author: 'RUSS',
    date: '2026.01.30',
    tag: 'CULTURE',
    grad: 'from-purple-900/30 via-transparent to-transparent',
  },
  {
    id: '003',
    title: 'E-E-A-T YOUR HEART OUT: LEVERAGING HUMAN CONTENT IN 2026',
    author: 'MATT PARKS',
    date: '2025.11.28',
    tag: 'SEO',
    grad: 'from-cyan-900/30 via-transparent to-transparent',
  },
  {
    id: '004',
    title: 'THE METAMORPHOSIS OF SEARCH',
    author: 'MATT PARKS',
    date: '2025.08.26',
    tag: 'SEO',
    grad: 'from-amber-900/30 via-transparent to-transparent',
  },
];

export default function BlogSection() {
  return (
    <section className="relative mx-auto max-w-[1280px] px-6 py-20 md:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <MotionReveal>
          <SectionLabel>INTERSTELLAR INSIGHTS</SectionLabel>
          <h2 className="mt-6 font-display h-section font-extrabold uppercase italic text-botcore-white">
            MISSION <span className="text-botcore-green text-glow">CONTROL</span>
          </h2>
        </MotionReveal>
        <MotionReveal delay={0.15}>
          <Link
            to="/labs"
            className="group inline-flex items-center gap-2 border border-botcore-green/40 px-5 py-3 font-mono text-[11px] tracking-[0.3em] text-botcore-green transition-colors hover:bg-botcore-green hover:text-botcore-black"
          >
            READ MORE ARTICLES
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </MotionReveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-4">
        {posts.map((p, i) => (
          <MotionReveal key={p.id} delay={i * 0.07} y={20}>
            <PostCard {...p} />
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

function PostCard({ id, title, author, date, tag, grad }) {
  return (
    <motion.article
      whileHover="hover"
      className="group relative flex h-full min-h-[340px] flex-col gap-5 overflow-hidden bg-botcore-black p-6 transition-colors hover:bg-white/[0.03]"
    >
      <motion.div
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0.5 }}
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${grad}`}
        aria-hidden
      />
      <motion.span
        variants={{ hover: { scaleX: 1 } }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-botcore-green"
        aria-hidden
      />

      <div className="relative flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.3em] text-botcore-green">
          // {id}
        </span>
        <span className="border border-botcore-green/40 px-2 py-1 font-mono text-[9px] tracking-[0.3em] text-botcore-green">
          {tag}
        </span>
      </div>

      <h3 className="relative h-card font-extrabold uppercase italic text-botcore-white transition-colors group-hover:text-botcore-green">
        {title}
      </h3>

      <div className="relative mt-auto flex flex-col gap-3 border-t border-white/10 pt-4 font-mono text-[10px] tracking-[0.3em] text-botcore-greyLight/50">
        <div className="flex items-center justify-between">
          <span>{author}</span>
          <span>{date}</span>
        </div>
        <span className="transition-colors group-hover:text-botcore-green">
          [ READ MORE ↗ ]
        </span>
      </div>
    </motion.article>
  );
}
