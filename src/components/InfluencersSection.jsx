import MotionReveal from './MotionReveal';

const influencers = [
  {
    name: 'Ken Doll',
    handle: '@kendoll',
    brand: 'Rzr Jaw',
    image:
      '/projects/influencer/Untitled%20design%20-%202026-05-05T040209.375.png',
  },
  {
    name: 'Aizaz Hashmi',
    handle: '@aizazhashmi',
    brand: 'Rzr Jaw',
    image: '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2022.34.50.jpeg',
  },
  {
    name: 'Syed Abdullah',
    handle: '@syedabdullah',
    brand: 'Rzr Jaw',
    image: '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2022.34.51.jpeg',
  },
  {
    name: 'Umair Yousafzai',
    handle: '@umairyousafzai',
    brand: 'Rzr Jaw',
    image:
      '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2022.34.51%20(2).jpeg',
  },
  {
    name: 'Hamna',
    handle: '@hamna',
    brand: 'Rzr Jaw',
    image:
      '/projects/influencer/Untitled%20design%20-%202026-05-05T040944.011.png',
  },
  {
    name: 'Moiz Nawaz',
    handle: '@moiznawaz',
    brand: 'Rzr Jaw',
    image:
      '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2022.34.51%20(1).jpeg',
  },
  {
    name: 'Annural Khalid',
    handle: '@annuralkhalid',
    brand: 'Edit Beauty',
    image: '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2023.26.58.jpeg',
  },
  {
    name: 'Kashif Ali',
    handle: '@kashifali',
    brand: 'Edit Beauty',
    image: '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2023.26.59.jpeg',
  },
  {
    name: 'Kashif Afridi',
    handle: '@kashifafridi',
    brand: 'Edit Beauty',
    image:
      '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2023.26.59%20(1).jpeg',
  },
  {
    name: 'Kashif Wazir',
    handle: '@kashifwazir',
    brand: 'Tajjal',
    image: '/projects/influencer/WhatsApp%20Image%202026-05-05%20at%2023.32.55.jpeg',
  },
];

function InfluencerTile({ name, handle, brand, image }) {
  return (
    <div className="card group relative aspect-[3/4] overflow-hidden">
      <img
        src={image}
        alt={`${name} — ${brand}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-botcore-black/85 via-botcore-black/15 to-transparent"
      />
      <span className="absolute left-3 top-3 border border-botcore-green/60 bg-botcore-black/55 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-botcore-green backdrop-blur-sm">
        {brand}
      </span>
      <span className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
        <span className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-botcore-greyLight md:text-base">
            {name}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-botcore-greyLight/55">
            {handle}
          </span>
        </span>
        <span
          aria-hidden
          className="text-botcore-greyLight/50 transition-colors group-hover:text-botcore-green"
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
