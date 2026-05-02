import { Link } from 'react-router-dom';

const iconProps = {
  viewBox: '0 0 24 24',
  width: 16,
  height: 16,
  'aria-hidden': true,
};

const FacebookIcon = () => (
  <svg {...iconProps} fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
  </svg>
);
const InstagramIcon = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedinIcon = () => (
  <svg {...iconProps} fill="currentColor">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5.11 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22V8zm7.66 0h4.37v2.05h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-6.95c0-1.66-.03-3.79-2.31-3.79-2.31 0-2.67 1.81-2.67 3.67V23H7.88V8z" />
  </svg>
);

const columns = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Capabilities', to: '/capabilities' },
      { label: 'Approach', to: '/approach' },
      { label: 'Work', to: '/reps' },
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/studio' },
    ],
  },
  {
    title: 'Get started',
    links: [
      { label: 'Start a project', to: '/studio' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', to: '/' },
      { label: 'Terms & conditions', to: '/' },
      { label: 'Sitemap', to: '/' },
    ],
  },
];

const socials = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: LinkedinIcon, label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-botcore-black">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:px-10">
        <div className="flex flex-col gap-6">
          <span className="text-2xl font-semibold uppercase tracking-[0.2em] text-botcore-green">
            BOTCORE
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-botcore-greyLight/55">
            Botcore.Technology is a marketing agency built for new brands. We
            design, build, and grow the businesses that are just getting
            started.
          </p>
          <ul className="flex gap-3">
            {socials.map(({ Icon, label }) => (
              <li key={label}>
                <a
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-white/10 text-botcore-greyLight/60 transition-colors hover:border-botcore-green hover:text-botcore-green"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-5">
            <h4 className="eyebrow !text-botcore-green">{col.title}</h4>
            <ul className="flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-botcore-greyLight/65 transition-colors hover:text-botcore-green"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-10">
          <p className="eyebrow">
            © 2026 Botcore.Technology. All rights reserved.
          </p>
          <p className="eyebrow">Built for new brands</p>
        </div>
      </div>
    </footer>
  );
}
