import SectionLabel from './SectionLabel';
import MotionReveal from './MotionReveal';

export default function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-[1280px] px-6 py-24 md:px-10">
      <MotionReveal>
        <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.3em] text-botcore-greyLight/70">
          <span>OPEN DOORS</span>
          <span className="mx-6 h-px flex-1 bg-botcore-greyLight/20" />
          <span className="text-botcore-green">TO NEW SPACES</span>
        </div>
        <div className="mt-5 h-[6px] w-full overflow-hidden rounded-sm bg-gradient-to-r from-botcore-greenDark via-botcore-green to-botcore-greenDark shadow-[0_0_30px_rgba(0,255,0,0.35)]">
          <div className="scanline h-full w-full opacity-40" />
        </div>
      </MotionReveal>

      <div className="mt-20 flex flex-col gap-10">
        <MotionReveal>
          <SectionLabel>ABOUT BOTCORE</SectionLabel>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <h2 className="h-section font-extrabold uppercase italic text-botcore-white">
            OPEN DOORS TO{' '}
            <span className="text-botcore-green text-glow">NEW SPACES</span>
          </h2>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-botcore-greyLight/75 md:text-lg">
            BOTCORE is a precision-engineered, full-service creative and systems studio.
            We discover{' '}
            <span className="text-botcore-green">infinite potential</span> in everyday
            interfaces. Our crew of daring storytellers and synthetic-logic engineers is
            driven to make your mission our mission. Together, we can chart a course to
            wherever you want to launch{' '}
            <span className="text-botcore-green">— and beyond.</span>
          </p>
        </MotionReveal>

        <MotionReveal delay={0.2}>
          <div className="mt-6 flex flex-wrap gap-10 border-t border-white/10 pt-10">
            <Stat value="180+" label="MISSIONS LAUNCHED" />
            <Stat value="24" label="CREW MEMBERS" />
            <Stat value="12" label="YEARS IN ORBIT" />
            <Stat value="97%" label="SIGNAL CLARITY" />
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-2xl font-extrabold italic text-botcore-green md:text-3xl">
        {value}
      </span>
      <span className="font-mono text-[10px] tracking-[0.3em] text-botcore-greyLight/60">
        {label}
      </span>
    </div>
  );
}
