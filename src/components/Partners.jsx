import { Trophy, Heart, Zap, Sparkles, Award } from 'lucide-react';
import MotionReveal from './MotionReveal';

const items = [
  {
    id: '01',
    name: 'Meta Business Partner',
    tag: 'Partnership',
    Icon: Zap,
  },
  {
    id: '02',
    name: 'Adobe Solution Partner',
    tag: 'Partnership',
    Icon: Sparkles,
  },
  {
    id: '03',
    name: 'Microsoft Advertising',
    tag: 'Partnership',
    Icon: Award,
  },
  {
    id: '04',
    name: 'Awwwards Winner',
    tag: '2026',
    Icon: Trophy,
  },
  {
    id: '05',
    name: 'Best Place to Work',
    tag: '2026',
    Icon: Heart,
  },
];

export default function Partners() {
  return (
    <section className="relative border-t border-white/5">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="eyebrow accent-rule">Recognised by</div>
            <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
              Partners & accreditations.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-botcore-greyLight/60">
            Validated by the platforms we build on and the industries we serve.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((item, i) => (
            <MotionReveal key={item.id} delay={i * 0.05}>
              <li className="card group flex h-full flex-col justify-between gap-8 p-5">
                <div className="flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center border border-botcore-green/40 text-botcore-green transition-colors group-hover:border-botcore-green group-hover:bg-botcore-green/10">
                    <item.Icon size={18} strokeWidth={1.5} />
                  </span>
                  <span className="eyebrow !tracking-[0.2em]">{item.id}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-tight text-botcore-greyLight transition-colors group-hover:text-botcore-green">
                    {item.name}
                  </h3>
                  <p className="eyebrow mt-2 !tracking-[0.2em]">{item.tag}</p>
                </div>
              </li>
            </MotionReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
