import SectionLabel from './SectionLabel';
import ValueCard from './ValueCard';
import MotionReveal from './MotionReveal';

const values = [
  {
    index: '001',
    title: 'VISIONARY',
    body:
      'Scanning beyond the visible spectrum to anticipate the future of digital interaction.',
  },
  {
    index: '002',
    title: 'PRECISE',
    body:
      'Millimeter-perfect execution. Every pixel and line of code is calibrated for maximum impact.',
  },
  {
    index: '003',
    title: 'UNCHARTED',
    body:
      'Fearless exploration of new technology frontiers. We don’t follow trends — we forge them.',
  },
  {
    index: '004',
    title: 'STELLAR',
    body:
      'Uncompromising quality that reaches the highest standards of the digital ecosystem.',
  },
];

export default function CoreValues() {
  return (
    <section className="relative mx-auto max-w-[1280px] px-6 py-24 md:px-10">
      <MotionReveal>
        <SectionLabel>CORE_CONSTANTS</SectionLabel>
        <h2 className="mt-6 font-display h-section font-extrabold uppercase italic text-botcore-white">
          THE_VALUES
        </h2>
      </MotionReveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <MotionReveal key={v.index} delay={i * 0.08} y={24}>
            <ValueCard {...v} />
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
