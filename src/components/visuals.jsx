const base =
  'h-full w-full text-botcore-greyLight/50 drop-shadow-[0_0_12px_rgba(0,255,0,0.15)]';

export function DiscoveryVisual() {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className={base}
    >
      <circle cx="160" cy="160" r="120" strokeDasharray="2 6" opacity="0.5" />
      <circle cx="160" cy="160" r="90" strokeDasharray="4 8" opacity="0.6" />
      <circle cx="160" cy="160" r="60" />
      <g stroke="#00FF00" strokeWidth="1.8">
        <path d="M160 70v180M70 160h180" opacity="0.5" />
        <circle cx="160" cy="160" r="6" fill="#00FF00" />
        <circle cx="210" cy="110" r="3" fill="#00FF00" />
        <circle cx="105" cy="190" r="3" fill="#00FF00" />
        <circle cx="200" cy="220" r="3" fill="#00FF00" />
      </g>
      <text
        x="20"
        y="30"
        fill="#00FF00"
        fontSize="10"
        fontFamily="Space Mono, monospace"
        letterSpacing="2"
      >
        SCAN_01
      </text>
    </svg>
  );
}

export function StrategyVisual() {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      className={base}
    >
      <g opacity="0.6">
        <rect x="60" y="60" width="200" height="200" />
        <path d="M60 120h200M60 180h200M60 240h200" strokeDasharray="2 4" />
        <path d="M120 60v200M180 60v200M240 60v200" strokeDasharray="2 4" />
      </g>
      <path
        d="M80 220l40-60 40 20 50-80 60 40"
        stroke="#00FF00"
        strokeWidth="2.2"
      />
      <g fill="#00FF00">
        <circle cx="80" cy="220" r="4" />
        <circle cx="120" cy="160" r="4" />
        <circle cx="160" cy="180" r="4" />
        <circle cx="210" cy="100" r="4" />
        <circle cx="270" cy="140" r="4" />
      </g>
      <text
        x="20"
        y="30"
        fill="#00FF00"
        fontSize="10"
        fontFamily="Space Mono, monospace"
        letterSpacing="2"
      >
        PLAN_02
      </text>
    </svg>
  );
}

export function DesignVisual() {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      className={base}
    >
      <rect x="60" y="60" width="120" height="80" opacity="0.7" />
      <rect x="60" y="160" width="80" height="100" opacity="0.7" />
      <rect x="160" y="160" width="100" height="100" stroke="#00FF00" strokeWidth="1.8" />
      <rect x="200" y="60" width="60" height="80" opacity="0.7" />
      <g stroke="#00FF00" strokeWidth="1" opacity="0.8">
        <path d="M175 175h70M175 185h50M175 195h60" />
        <path d="M175 215l30-30M175 240l30-30" />
      </g>
      <g fill="#00FF00">
        <circle cx="60" cy="60" r="3" />
        <circle cx="260" cy="260" r="3" />
      </g>
      <text
        x="20"
        y="30"
        fill="#00FF00"
        fontSize="10"
        fontFamily="Space Mono, monospace"
        letterSpacing="2"
      >
        BUILD_03
      </text>
    </svg>
  );
}

export function LaunchVisual() {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={base}
    >
      <circle cx="160" cy="160" r="70" opacity="0.8" />
      <ellipse cx="160" cy="160" rx="70" ry="22" opacity="0.6" />
      <ellipse cx="160" cy="160" rx="22" ry="70" opacity="0.6" />
      <circle cx="160" cy="160" r="110" strokeDasharray="3 5" opacity="0.5" />
      <circle cx="160" cy="160" r="140" strokeDasharray="2 8" opacity="0.3" />
      <g fill="#00FF00">
        <circle cx="50" cy="160" r="4" />
        <circle cx="160" cy="50" r="4" />
        <circle cx="270" cy="160" r="4" />
        <circle cx="160" cy="270" r="4" />
      </g>
      <g stroke="#00FF00" strokeWidth="1.8">
        <path d="M160 160l60-60" />
      </g>
      <text
        x="20"
        y="30"
        fill="#00FF00"
        fontSize="10"
        fontFamily="Space Mono, monospace"
        letterSpacing="2"
      >
        LAUNCH_04
      </text>
    </svg>
  );
}

export function MeasureVisual() {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      className={base}
    >
      <path d="M60 260h220M60 260V60" opacity="0.7" />
      <path d="M60 100h220M60 140h220M60 180h220M60 220h220" strokeDasharray="2 6" opacity="0.4" />
      <g opacity="0.5">
        <rect x="80" y="180" width="24" height="80" />
        <rect x="120" y="140" width="24" height="120" />
        <rect x="160" y="110" width="24" height="150" />
        <rect x="200" y="80" width="24" height="180" />
        <rect x="240" y="130" width="24" height="130" />
      </g>
      <path
        d="M92 180l40-40 40 -30 40-30 40 20"
        stroke="#00FF00"
        strokeWidth="2.2"
      />
      <g fill="#00FF00">
        <circle cx="92" cy="180" r="4" />
        <circle cx="132" cy="140" r="4" />
        <circle cx="172" cy="110" r="4" />
        <circle cx="212" cy="80" r="4" />
        <circle cx="252" cy="100" r="4" />
      </g>
      <text
        x="20"
        y="30"
        fill="#00FF00"
        fontSize="10"
        fontFamily="Space Mono, monospace"
        letterSpacing="2"
      >
        MEASURE_05
      </text>
    </svg>
  );
}
