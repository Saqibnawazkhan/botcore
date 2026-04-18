import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { to: '/reps', label: 'REPS' },
  { to: '/services', label: 'SERVICES' },
  { to: '/labs', label: 'LABS' },
  { to: '/studio', label: 'STUDIO' },
  { to: '/about', label: 'ABOUT' },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-botcore-black/75 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 md:px-10">
        <Link
          to="/"
          className="font-display text-xl font-extrabold uppercase tracking-[0.2em] text-botcore-green drop-shadow-glow"
        >
          BOTCORE
        </Link>

        <nav className="hidden items-center gap-6 font-mono text-[11px] tracking-[0.2em] lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative uppercase transition-colors ${
                  isActive
                    ? 'text-botcore-green'
                    : 'text-botcore-greyLight hover:text-botcore-green'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-px bg-botcore-green"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/studio"
          className="group flex h-10 items-center gap-2 bg-botcore-green px-4 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-botcore-black transition-transform hover:scale-[1.03] hover:bg-botcore-greenDark hover:text-botcore-green"
        >
          <span className="hidden sm:inline">CONTACT</span>
          <span aria-hidden>↗</span>
        </Link>
      </div>
    </header>
  );
}
