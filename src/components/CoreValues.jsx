import MotionReveal from './MotionReveal';

const values = [
  {
    id: '01',
    title: 'We specialise in new brands',
    body: 'Most agencies are built to service big established companies. We are built for founders starting from zero who need a partner that understands the pace, the budget, and the pressure of building something new.',
  },
  {
    id: '02',
    title: 'Everything under one roof',
    body: 'You do not need to manage a designer, a video team, a developer, and a media buyer separately. We handle every service in-house, which keeps the work consistent and the timelines tight.',
  },
  {
    id: '03',
    title: 'Honest communication',
    body: 'We tell you what we think, even when it is not what you want to hear. If a campaign is not working, we say so. If a strategy needs to change, we change it. You get a partner, not a yes machine.',
  },
  {
    id: '04',
    title: 'Work that performs',
    body: 'Beautiful work that does not sell anything is just decoration. Every piece we ship is built to do a job — winning trust, driving a click, or closing a sale.',
  },
];

export default function CoreValues() {
  return (
    <section className="relative border-t border-white/5">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <MotionReveal className="lg:col-span-4">
            <div className="eyebrow accent-rule">Why Botcore</div>
            <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
              Reasons founders{' '}
              <span className="text-botcore-green">choose us.</span>
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
