import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import MenuOverlay from './MenuOverlay';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-botcore-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 md:px-10">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-semibold uppercase tracking-[0.2em] text-botcore-green"
          >
            BOTCORE
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/studio"
              onClick={() => setMenuOpen(false)}
              className="hidden h-10 items-center gap-2 bg-botcore-green px-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-botcore-black transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Start a project <span aria-hidden>↗</span>
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="main-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="flex h-10 items-center gap-2 border border-white/15 px-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-botcore-greyLight transition-colors hover:border-botcore-green hover:text-botcore-green"
            >
              {menuOpen ? <X size={14} strokeWidth={2} /> : <Menu size={14} strokeWidth={2} />}
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
