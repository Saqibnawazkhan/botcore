import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-[72px]">
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1920&q=60"
        aria-hidden
      >
        <source
          src="https://cdn.pixabay.com/video/2023/10/13/185039-873351598_large.mp4"
          type="video/mp4"
        />
        <source
          src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video>

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-botcore-black via-botcore-black/70 to-botcore-black/40"
        aria-hidden
      />
      <div className="radial-purple pointer-events-none absolute inset-0" aria-hidden />
      <div className="radial-green pointer-events-none absolute inset-0" aria-hidden />
      <div className="scanline pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-20 md:px-10">
        <div className="flex max-w-3xl flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-botcore-green" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-botcore-greyLight">
              <span className="text-botcore-green">//</span> SYSTEM_ORIGIN : STUDIO_v04
            </span>
          </motion.div>

          <h1 className="h-hero font-extrabold italic text-botcore-white">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="block"
            >
              LEAVE<span className="text-botcore-green">/</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="block pl-[5%]"
            >
              ORDINARY<span className="text-botcore-green">/</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="block pl-[10%] text-botcore-green text-glow"
            >
              BEHIND.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="max-w-lg text-base leading-relaxed text-botcore-greyLight/70 md:text-lg"
          >
            Precision-engineered digital experiences for the next epoch. We bridge the gap
            between biological intuition and synthetic logic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 bg-botcore-green px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-botcore-black transition-all hover:scale-[1.03] hover:bg-botcore-white"
            >
              DISCOVER CAPABILITIES
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                ↗
              </span>
            </Link>
            <Link
              to="/studio"
              className="group inline-flex items-center gap-3 border border-botcore-greyLight/30 px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-botcore-greyLight transition-colors hover:border-botcore-green hover:text-botcore-green"
            >
              MAKE CONTACT
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-botcore-greyLight/50">
          SCROLL
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="text-botcore-green"
        >
          <ArrowDown size={14} strokeWidth={1.5} />
        </motion.span>
      </motion.div>

      <div className="absolute bottom-8 right-6 hidden items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-botcore-green md:right-10 md:flex">
        <span className="h-px w-12 bg-botcore-green" />
        // DATA_STREAM
      </div>
    </section>
  );
}
