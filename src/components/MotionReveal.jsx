import { motion } from 'framer-motion';

const variants = {
  up: { opacity: 0, y: 40 },
  down: { opacity: 0, y: -40 },
  left: { opacity: 0, x: -40 },
  right: { opacity: 0, x: 40 },
  scale: { opacity: 0, scale: 0.92 },
  fade: { opacity: 0 },
};

export default function MotionReveal({
  children,
  delay = 0,
  y,
  from = 'up',
  duration = 0.6,
  amount = 0.2,
  once = true,
  className = '',
}) {
  const initial = y != null ? { opacity: 0, y } : variants[from] || variants.up;
  const target = { opacity: 1, x: 0, y: 0, scale: 1 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={target}
      viewport={{ once, amount }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
