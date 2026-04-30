import { Link } from 'react-router-dom';

export default function LaunchCTA() {
  return (
    <section className="relative border-t border-white/5 bg-botcore-green text-botcore-black">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="relative mx-auto flex max-w-[1280px] flex-col items-start gap-8 px-6 py-24 md:flex-row md:items-end md:justify-between md:px-10 md:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow !text-botcore-black/70">Get in touch</span>
          <h2 className="h-hero mt-4 font-bold text-botcore-black">
            Ready to build your brand?
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-botcore-black/80">
            Tell us about your project. Whether you have a clear brief or just
            a rough idea, we will get on a call and tell you honestly how we
            can help.
          </p>
        </div>
        <Link
          to="/studio"
          className="inline-flex items-center gap-2 border-2 border-botcore-black bg-transparent px-7 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-botcore-black transition-colors hover:bg-botcore-black hover:text-botcore-green"
        >
          Start a project <span aria-hidden>↗</span>
        </Link>
      </div>
    </section>
  );
}
