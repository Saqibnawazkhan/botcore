import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function parseValue(raw) {
  const str = String(raw).trim();
  const signMatch = str.match(/^([+−-])/);
  const sign = signMatch ? signMatch[1] : '';
  const rest = sign ? str.slice(1) : str;
  const numMatch = rest.match(/^([0-9.]+)(.*)$/);
  if (!numMatch) return null;
  const numStr = numMatch[1];
  const tail = numMatch[2];
  const target = parseFloat(numStr);
  if (Number.isNaN(target)) return null;
  const decimals = (numStr.split('.')[1] || '').length;
  return { sign, target, tail, decimals };
}

function format({ sign, target, tail, decimals }, current) {
  return `${sign}${current.toFixed(decimals)}${tail}`;
}

export default function CountUp({ value, duration = 1.4, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const parsed = parseValue(value);
  const [display, setDisplay] = useState(
    parsed ? format(parsed, 0) : String(value),
  );

  useEffect(() => {
    if (!inView || !parsed) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(format(parsed, parsed.target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, parsed, duration]);

  return (
    <span ref={ref} className={className}>
      {parsed ? display : value}
    </span>
  );
}
