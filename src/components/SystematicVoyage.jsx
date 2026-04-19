import MotionReveal from './MotionReveal';

const steps = [
  {
    id: '01',
    title: 'Learn',
    body: 'Deep-space telemetry. We scan your market, audience, and competitors to surface insight and strategic vectors.',
  },
  {
    id: '02',
    title: 'Plan',
    body: 'Mission mapping. Strategists and creatives collaborate on concepts that align signal with business outcomes.',
  },
  {
    id: '03',
    title: 'Build',
    body: 'Synthetic fabrication. High-fidelity design and production forged with industrial precision.',
  },
  {
    id: '04',
    title: 'Launch',
    body: 'Orbital deployment. Advertising, amplification, and rollout across every channel the mission demands.',
  },
  {
    id: '05',
    title: 'Measure',
    body: 'Post-flight telemetry. Data and analytics loop back into the next cycle — every mission sharper.',
  },
];

export default function SystematicVoyage() {
  return (
    <section className="relative border-t border-white/5">
      <div className="grid-faint absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <div className="eyebrow accent-rule">Our Approach</div>
          <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
            Five stages, one systematic voyage.
          </h2>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <MotionReveal key={s.id} delay={i * 0.08}>
              <li className="group relative flex h-full flex-col gap-6 bg-botcore-black p-6 transition-colors hover:bg-white/[0.025]">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-semibold tracking-tight text-botcore-green md:text-6xl">
                    {s.id}
                  </span>
                  <span className="eyebrow">Step</span>
                </div>
                <h3 className="h-card font-semibold text-botcore-greyLight">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-botcore-greyLight/60">
                  {s.body}
                </p>
              </li>
            </MotionReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
