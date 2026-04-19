import MotionReveal from './MotionReveal';

export default function AboutSection() {
  return (
    <section id="about" className="relative border-t border-white/5">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <MotionReveal className="lg:col-span-4">
            <div className="eyebrow accent-rule">About Botcore</div>
            <p className="mt-6 text-sm text-botcore-greyLight/50">01 · Signal</p>
          </MotionReveal>

          <MotionReveal delay={0.1} className="lg:col-span-8">
            <h2 className="h-section font-semibold text-botcore-greyLight">
              We open doors to <span className="text-botcore-green">new spaces</span>
              — bridging brand, product, and systems engineering under one studio.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
              BOTCORE is a precision studio of designers, engineers, and strategists. We
              discover infinite potential in everyday interfaces and ship work calibrated
              for measurable impact — from brand systems to full product launches.
            </p>

            <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
              <Stat value="180" suffix="+" label="Missions launched" />
              <Stat value="24" label="Crew members" />
              <Stat value="12" suffix=" yrs" label="In orbit" />
              <Stat value="97" suffix="%" label="Signal clarity" />
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
