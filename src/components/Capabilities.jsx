import { Link } from 'react-router-dom';
import MotionReveal from './MotionReveal';

const capabilities = [
  {
    id: '01',
    title: 'Brands',
    desc: 'Identity systems engineered for impact across every surface — naming, voice, visual language, and guidelines.',
  },
  {
    id: '02',
    title: 'Websites',
    desc: 'Interactive product platforms fabricated to orbital tolerances. Design, build, and scale.',
  },
  {
    id: '03',
    title: 'Productions',
    desc: 'Photo and video capture. Narrative fuel for the mission — from concept to edit.',
  },
  {
    id: '04',
    title: 'Campaigns',
    desc: 'Full-stack amplification across paid, earned, and owned channels.',
  },
  {
    id: '05',
    title: 'Insights',
    desc: 'Telemetry, analytics, and the data that sharpens the next launch.',
  },
];

export default function Capabilities() {
  return (
    <section className="relative border-t border-white/5">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <MotionReveal>
              <div className="eyebrow accent-rule">Capabilities</div>
              <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
                What we do, calibrated for impact.
              </h2>
              <p className="mt-6 max-w-sm text-sm text-botcore-greyLight/60">
                Five core disciplines. Activated individually or deployed as a full
                mission stack.
              </p>
              <Link
                to="/services"
                className="btn-ghost mt-8 inline-flex"
              >
                Our approach <span aria-hidden>↗</span>
              </Link>
            </MotionReveal>
          </div>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {capabilities.map((c, i) => (
                <MotionReveal key={c.id} delay={i * 0.06}>
                  <li>
                    <Link
                      to="/services"
                      className="group grid grid-cols-[auto_1fr_auto] items-start gap-6 py-7 transition-colors hover:bg-white/[0.02]"
                    >
                      <span className="eyebrow !text-botcore-green">{c.id}</span>
                      <div>
                        <h3 className="h-card font-semibold text-botcore-greyLight transition-colors group-hover:text-botcore-green">
                          {c.title}
                        </h3>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-botcore-greyLight/60">
                          {c.desc}
                        </p>
                      </div>
                      <span
                        aria-hidden
                        className="text-botcore-greyLight/40 transition-all group-hover:translate-x-1 group-hover:text-botcore-green"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                </MotionReveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
