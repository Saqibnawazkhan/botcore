import MotionReveal from './MotionReveal';

export default function VoyageStep({
  step,
  title,
  body,
  visual,
  caption,
  reverse = false,
  withGrid = false,
}) {
  return (
    <MotionReveal>
      <div
        className={`relative grid grid-cols-1 items-center gap-10 border-t border-white/5 px-6 py-20 md:px-10 lg:grid-cols-2 lg:gap-16 ${
          withGrid ? 'grid-bg' : ''
        }`}
      >
        <div className={`flex flex-col gap-6 ${reverse ? 'lg:order-2' : ''}`}>
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center border border-botcore-green text-center font-mono text-[11px] text-botcore-green">
              {step}
            </span>
            <span className="h-px w-10 bg-botcore-green/60" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-botcore-greyLight/60">
              STEP / {step} OF 05
            </span>
          </div>
          <h3 className="font-display h-section font-extrabold uppercase italic text-botcore-white">
            {title}
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-botcore-greyLight/70 md:text-base">
            {body}
          </p>
        </div>

        <div
          className={`corner-ticks relative flex h-[320px] items-center justify-center border border-white/5 bg-white/[0.02] p-6 md:h-[380px] ${
            reverse ? 'lg:order-1' : ''
          }`}
        >
          <div className="scanline absolute inset-0 opacity-40" aria-hidden />
          <div className="relative h-full w-full">{visual}</div>
          {caption && (
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-display text-2xl font-extrabold italic tracking-wider text-botcore-greyLight/50">
              {caption}
            </span>
          )}
          <span className="absolute right-3 top-3 font-mono text-[9px] tracking-[0.3em] text-botcore-green">
            // OUTPUT_{step}
          </span>
        </div>
      </div>
    </MotionReveal>
  );
}
