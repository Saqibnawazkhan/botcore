import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Menu, X } from 'lucide-react';
import MenuOverlay from './MenuOverlay';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleBack = () => {
    setMenuOpen(false);
    if (window.history.length > 1) navigate(-1);
    else navigate('/');
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-botcore-black/80 backdrop-blur-md">
        <div className="flex h-[80px] items-center justify-between px-6 md:px-10">
          <div className="flex items-center gap-3 md:gap-4">
            {!isHome && (
              <button
                type="button"
                onClick={handleBack}
                aria-label="Go back"
                className="flex h-10 items-center gap-2 border border-botcore-green/50 bg-botcore-green/5 px-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-botcore-green transition-colors hover:bg-botcore-green hover:text-botcore-black md:h-11"
              >
                <ArrowLeft size={14} strokeWidth={2.25} />
                <span className="hidden sm:inline">Back</span>
              </button>
            )}
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              aria-label="BotCore — home"
              className="flex items-center"
            >
              <img
                src="/botcore-logo.png"
                alt="BotCore"
                className="h-12 w-auto md:h-14"
              />
            </Link>
          </div>

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
