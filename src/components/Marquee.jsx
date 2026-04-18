const words = [
  'PRECISION',
  'SYSTEMS',
  'BOTCORE',
  'SYNTHETIC_LOGIC',
  'HUMAN_ELEMENT',
  'ORBITAL_DEPLOY',
  'MISSION_CONTROL',
  'DATA_STREAM',
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-botcore-green/30 bg-botcore-black py-4">
      <div className="scanline absolute inset-0 opacity-40" aria-hidden />
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[...words, ...words, ...words].map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-lg font-extrabold uppercase italic tracking-wide text-botcore-white md:text-xl"
          >
            {w}
            <span className="text-botcore-green" aria-hidden>
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
