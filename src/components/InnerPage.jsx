import MotionReveal from './MotionReveal';
import LaunchCTA from './LaunchCTA';

export default function InnerPage({ label, title, paragraphs }) {
  return (
    <>
      <section className="relative border-b border-white/5">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse at 20% 0%, rgba(0,255,0,0.06) 0%, transparent 55%)',
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-6 pb-24 pt-36 text-center md:px-10 md:pb-32 md:pt-44">
          <MotionReveal>
            <div className="eyebrow accent-rule-both">{label}</div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h1 className="h-hero mx-auto mt-6 max-w-4xl font-bold text-botcore-greyLight">
              {title}
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <div className="mx-auto mt-10 grid max-w-3xl gap-5 text-base leading-relaxed text-botcore-greyLight/70 md:text-lg">
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
