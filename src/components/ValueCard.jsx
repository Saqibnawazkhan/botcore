import { motion } from 'framer-motion';

export default function ValueCard({ index, title, body }) {
  return (
    <motion.div
      whileHover="hover"
      className="group relative flex h-full flex-col gap-4 overflow-hidden border-t-2 border-botcore-green/60 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.05]"
    >
      <motion.div
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-botcore-green/10 via-transparent to-transparent"
        aria-hidden
      />

      <div className="relative flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.3em] text-botcore-green">
          // {index}
        </span>
        <motion.span
          variants={{ hover: { rotate: 45, color: '#00FF00' } }}
          transition={{ duration: 0.3 }}
          className="font-mono text-lg text-botcore-greyLight/40"
        >
          +
        </motion.span>
      </div>

      <h4 className="relative h-card font-extrabold uppercase italic text-botcore-white transition-colors group-hover:text-botcore-green">
        {title}
      </h4>
      <p className="relative text-sm leading-relaxed text-botcore-greyLight/60">{body}</p>
    </motion.div>
  );
}
