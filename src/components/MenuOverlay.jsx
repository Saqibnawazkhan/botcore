import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden>
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5.11 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22V8zm7.66 0h4.37v2.05h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-6.95c0-1.66-.03-3.79-2.31-3.79-2.31 0-2.67 1.81-2.67 3.67V23H7.88V8z" />
  </svg>
);

const columnA = [
  { label: 'WORK', to: '/reps' },
  { label: 'CAPABILITIES', to: '/capabilities' },
  { label: 'APPROACH', to: '/approach' },
  { label: 'ABOUT', to: '/about' },
];

const columnB = [
  { label: 'BLOG', to: '/labs' },
  { label: 'CAREERS', to: '/' },
  { label: 'CONTACT', to: '/studio' },
  { label: 'CLIENT PORTAL', to: '/' },
];

const utilityLinks = [
  'CAREERS',
  'CLIENT PORTAL',
  'BLOG',
  'PRIVACY POLICY',
  'TERMS',
];

export default function MenuOverlay({ open, onClose }) {
  const location = useLocation();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-40"
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
        >
          <motion.div
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-3 bottom-3 top-[88px] overflow-hidden rounded-2xl border border-white/10 bg-botcore-black/95 backdrop-blur-xl md:inset-x-6 md:bottom-6 md:top-[92px]"
          >
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
              style={{
                background:
                  'radial-gradient(ellipse at 80% 10%, rgba(0,255,0,0.06) 0%, transparent 55%)',
              }}
            />
            <div className="grid-faint pointer-events-none absolute inset-0 opacity-40" aria-hidden />

            <div className="relative flex h-full flex-col overflow-y-auto px-6 pt-10 pb-6 md:px-12 md:pt-14">
              <div className="grid flex-1 grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-2 md:gap-x-20">
                <MenuList items={columnA} delay={0.05} onClose={onClose} />
                <MenuList items={columnB} delay={0.2} onClose={onClose} />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center"
              >
                <ul className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] tracking-[0.25em] text-botcore-greyLight/70">
                  {utilityLinks.map((l) => (
                    <li
                      key={l}
                      className="cursor-pointer transition-colors hover:text-botcore-green"
                    >
                      {l}
                    </li>
                  ))}
                </ul>

                <ul className="flex items-center gap-3">
                  {[FacebookIcon, InstagramIcon, LinkedinIcon].map((Icon, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="flex h-9 w-9 items-center justify-center border border-white/15 text-botcore-greyLight/80 transition-colors hover:border-botcore-green hover:text-botcore-green"
                      >
                        <Icon />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MenuList({ items, delay, onClose }) {
  return (
    <ul className="flex flex-col">
      {items.map((item, i) => (
        <motion.li
          key={item.label}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: delay + i * 0.05, ease: 'easeOut' }}
          className="border-b border-white/5"
        >
          <Link
            to={item.to}
            onClick={onClose}
            className="group flex items-center justify-between gap-4 py-3 md:py-4"
          >
            <span className="h-menu font-semibold text-botcore-greyLight transition-colors group-hover:text-botcore-green">
              {item.label}
            </span>
            <span
              aria-hidden
              className="font-mono text-xs tracking-[0.3em] text-botcore-greyLight/40 transition-all group-hover:translate-x-1 group-hover:text-botcore-green"
            >
              ↗
            </span>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
