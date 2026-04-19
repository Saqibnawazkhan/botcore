import MotionReveal from './MotionReveal';

const values = [
  {
    id: '01',
    title: 'Visionary',
    body: 'Scanning beyond the visible spectrum to anticipate the future of digital interaction.',
  },
  {
    id: '02',
    title: 'Precise',
    body: 'Millimeter-perfect execution. Every pixel and line of code is calibrated for impact.',
  },
  {
    id: '03',
    title: 'Uncharted',
    body: 'Fearless exploration of new technology frontiers. We don’t follow trends — we forge them.',
  },
  {
    id: '04',
    title: 'Stellar',
    body: 'Uncompromising quality that reaches the highest standards of the digital ecosystem.',
  },
];

export default function CoreValues() {
  return (
    <section className="relative border-t border-white/5">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <MotionReveal className="lg:col-span-4">
            <div className="eyebrow accent-rule">Core Constants</div>
            <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
              The values that guide every mission.
            </h2>
          </MotionReveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
            {values.map((v, i) => (
              <MotionReveal key={v.id} delay={i * 0.06}>
                <div className="card flex h-full flex-col gap-3 p-6">
                  <span className="eyebrow !text-botcore-green">{v.id}</span>
                  <h3 className="h-card font-semibold text-botcore-greyLight">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-botcore-greyLight/60">
                    {v.body}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
