import SectionLabel from './SectionLabel';
import LaunchCTA from './LaunchCTA';
import MotionReveal from './MotionReveal';

export default function InnerPage({ label, title, paragraphs }) {
  return (
    <>
      <section className="relative mx-auto max-w-[1280px] px-6 pb-24 pt-36 md:px-10 md:pt-44">
        <div className="radial-purple pointer-events-none absolute inset-0" aria-hidden />
        <div className="scanline pointer-events-none absolute inset-0 opacity-60" aria-hidden />

        <div className="relative flex flex-col gap-8">
          <MotionReveal>
            <SectionLabel>{label}</SectionLabel>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h1 className="h-section font-extrabold uppercase italic text-botcore-white">
              {title.split(' ').map((word, i, arr) => (
                <span
                  key={i}
                  className={i === arr.length - 1 ? 'text-botcore-green text-glow' : ''}
                >
                  {word}
                  {i < arr.length - 1 ? ' ' : ''}
                </span>
              ))}
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <div className="grid max-w-3xl gap-5 text-base leading-relaxed text-botcore-greyLight/70 md:text-lg">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>
      <LaunchCTA />
    </>
  );
}
