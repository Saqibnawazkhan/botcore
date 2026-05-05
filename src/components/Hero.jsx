import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-[72px]">
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src="/projects/website%20final.mov" type="video/quicktime" />
        <source src="/projects/website%20final.mov" type="video/mp4" />
      </video>

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-botcore-black/80 via-botcore-black/70 to-botcore-black"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse at 20% 40%, rgba(0,255,0,0.08) 0%, transparent 50%)',
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center px-6 py-20 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow accent-rule-both"
        >
          Marketing Agency for New Brands
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="h-hero mt-8 max-w-5xl font-bold text-botcore-greyLight"
        >
          Where New Brands{' '}
          <span className="text-botcore-green glow-green">Begin</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-botcore-greyLight/70 md:text-lg"
        >
          We build the marketing engine your brand needs from day one. Logo,
          website, content, ads, every piece working together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link to="/capabilities" className="btn-primary">
            See What We Do <span aria-hidden>↗</span>
          </Link>
          <Link to="/studio" className="btn-ghost">
            Start Your Project <span aria-hidden>↗</span>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-botcore-greyLight/40 md:flex">
        <span className="eyebrow">scroll</span>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="h-6 w-px bg-botcore-green/60"
        />
      </div>
    </section>
  );
}
