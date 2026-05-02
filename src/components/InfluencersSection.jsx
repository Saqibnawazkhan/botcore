import MotionReveal from './MotionReveal';

const influencers = [
  { name: 'Ken Doll', hue: 320 },
  { name: 'Annural Khalid', hue: 200 },
  { name: 'Aizaz Hashmi', hue: 30 },
  { name: 'Kashif Wazir', hue: 140 },
  { name: 'Kashif Afridi', hue: 280 },
  { name: 'Umair Yousafzai', hue: 60 },
  { name: 'Syed Abdullah', hue: 190 },
  { name: 'Kashif Ali', hue: 0 },
  { name: 'Moiz Nawaz', hue: 240 },
  { name: 'Hamna', hue: 340 },
];

function InfluencerTile({ name, hue }) {
  return (
    <div className="card group relative aspect-[3/4] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, hsl(${hue} 45% 24%) 0%, #0d0d0d 78%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 35%, rgba(0,255,0,0.18), transparent 55%)',
        }}
      />
      <span className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
        <span className="h-card font-semibold leading-tight text-botcore-greyLight">
          {name}
        </span>
        <span
          aria-hidden
          className="text-botcore-greyLight/40 transition-colors group-hover:text-botcore-green"
        >
          ↗
        </span>
      </span>
    </div>
  );
}

export default function InfluencersSection() {
  return (
    <section className="relative border-t border-white/5">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <MotionReveal>
            <div className="eyebrow accent-rule">Creators we work with</div>
            <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
              Influencers we have{' '}
              <span className="text-botcore-green">collaborated with.</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-botcore-greyLight/65">
              From talent partnerships to full launch campaigns, we bring the
              right voices into a brand&apos;s story — creators whose audiences
              actually move when they speak.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {influencers.map((p) => (
                <li key={p.name}>
                  <InfluencerTile {...p} />
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
