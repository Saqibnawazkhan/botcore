import MotionReveal from './MotionReveal';

export default function AboutSection() {
  return (
    <section id="about" className="relative border-t border-white/5">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <MotionReveal className="lg:col-span-4">
            <span className="inline-flex items-center border border-botcore-green/40 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-botcore-green">
              About Botcore
            </span>
          </MotionReveal>

          <MotionReveal delay={0.1} className="lg:col-span-8">
            <h2 className="h-section font-semibold text-botcore-greyLight">
              A full service marketing agency{' '}
              <span className="text-botcore-green">built for founders</span>
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
              <p>
                Botcore is a marketing and creative agency built around one
                purpose, helping new brands find their footing and grow with
                confidence. We work with founders who are starting from zero
                and need a partner that can handle every part of the brand.
              </p>
              <p>
                From the first sketch of a logo to the campaigns that bring in
                real customers, we treat your business like our own. Every
                brand we take on gets a focused team, honest advice, and
                work that holds up next to anyone in the market.
              </p>
            </div>

            <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
              <Stat value="9" suffix="+" label="Brands launched" />
              <Stat value="7" label="Services in-house" />
              <Stat value="5" suffix=" steps" label="From brief to launch" />
              <Stat value="100" suffix="%" label="Founder-focused" />
            </dl>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix = '', label }) {
  return (
    <div>
      <dt className="text-4xl font-semibold tracking-tight text-botcore-greyLight md:text-5xl">
        {value}
        <span className="text-botcore-green">{suffix}</span>
      </dt>
      <dd className="eyebrow mt-3">{label}</dd>
    </div>
  );
}
