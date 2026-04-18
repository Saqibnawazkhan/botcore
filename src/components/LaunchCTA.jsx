import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function LaunchCTA() {
  return (
    <section className="relative overflow-hidden bg-botcore-green">
      <div className="scanline absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-6 py-24 text-center md:px-10">
        <span className="font-mono text-[11px] tracking-[0.3em] text-botcore-black/70">
          // BEGIN YOUR VOYAGE
        </span>
        <h2 className="h-cta font-extrabold uppercase italic text-botcore-black">
          READY TO LAUNCH?
        </h2>
        <p className="max-w-xl font-mono text-xs tracking-[0.2em] text-botcore-black/70 md:text-sm">
          CLIMB ABOARD. LET'S FIND OUT WHAT'S OUT THERE.
        </p>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="mt-2">
          <Link
            to="/studio"
            className="inline-flex items-center gap-3 border-2 border-botcore-black bg-transparent px-8 py-4 font-mono text-sm font-bold uppercase tracking-[0.3em] text-botcore-black transition-colors hover:bg-botcore-black hover:text-botcore-green"
          >
            <span>[ MAKE CONTACT</span>
            <span aria-hidden>↗</span>
            <span>]</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
