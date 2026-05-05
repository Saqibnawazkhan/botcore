import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden pt-[72px]">
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
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
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-botcore-black/30 via-botcore-black/10 to-botcore-black"
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

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-start px-6 pb-24 pt-20 md:px-10 md:pb-28">
        <span
          aria-hidden
          className="pointer-events-none absolute -left-10 top-1/2 -z-0 h-[420px] w-[680px] -translate-y-1/2 rounded-[55%_45%_60%_40%/45%_55%_50%_50%] opacity-70 blur-3xl md:h-[520px] md:w-[820px]"
          style={{
            background:
              'radial-gradient(60% 70% at 35% 50%, rgba(0,255,0,0.45) 0%, rgba(0,200,0,0.18) 40%, transparent 75%)',
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -left-6 top-1/2 -z-0 h-[280px] w-[520px] -translate-y-1/2 rotate-[-4deg] rounded-[40%_60%_55%_45%/55%_45%_60%_40%] opacity-90 blur-[60px]"
          style={{
            background:
              'radial-gradient(50% 60% at 40% 55%, rgba(0,255,0,0.55) 0%, transparent 70%)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative eyebrow accent-rule"
        >
          Marketing Agency for New Brands
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative h-hero mt-6 max-w-3xl font-bold text-botcore-greyLight"
        >
          Where New Brands{' '}
          <span className="text-botcore-green glow-green">Begin</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="relative mt-6 max-w-xl text-base leading-relaxed text-botcore-greyLight/85 md:text-lg"
        >
          We build the marketing engine your brand needs from day one. Logo,
          website, content, ads, every piece working together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative mt-8 flex flex-wrap items-center gap-3"
        >
          <Link to="/capabilities" className="btn-primary">
            See What We Do <span aria-hidden>↗</span>
          </Link>
          <Link to="/studio" className="btn-ghost">
            Start Your Project <span aria-hidden>↗</span>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-6 hidden flex-col items-center gap-2 text-botcore-greyLight/50 md:right-10 md:flex">
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
