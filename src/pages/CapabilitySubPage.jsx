import { Link, useParams, Navigate } from 'react-router-dom';
import MotionReveal from '../components/MotionReveal';
import ProjectThumb from '../components/ProjectThumb';
import LaunchCTA from '../components/LaunchCTA';
import { projects } from '../data/projects';
import { capabilityBySlug } from '../data/capabilities';

function buildMosaic(matchedProjects, useGallery) {
  // For useGallery=true we surface every gallery image we have plus the
  // logo thumbnail so the page reads like a real visual portfolio rather
  // than a row of repeated chips.
  if (!useGallery) {
    return matchedProjects.slice(0, 9).map((p) => ({
      key: p.slug,
      slug: p.slug,
      hue: p.hue,
      cover: p.cover,
      logo: p.logo,
      name: p.name,
      id: p.id,
    }));
  }

  const tiles = [];
  matchedProjects.forEach((p) => {
    tiles.push({
      key: `${p.slug}-logo`,
      slug: p.slug,
      hue: p.hue,
      cover: p.cover,
      logo: p.logo,
      name: p.name,
      id: p.id,
    });
    (p.gallery || []).forEach((img, idx) => {
      tiles.push({
        key: `${p.slug}-g${idx}`,
        slug: p.slug,
        hue: p.hue,
        cover: img,
        logo: null,
        name: p.name,
        id: p.id,
      });
    });
  });
  return tiles;
}

export default function CapabilitySubPage() {
  const { slug } = useParams();
  const config = capabilityBySlug[slug];

  if (!config) {
    return <Navigate to="/capabilities" replace />;
  }

  const matchedProjects = projects.filter(config.projectFilter);
  const mosaic = buildMosaic(matchedProjects, config.useGallery);
  const featured = matchedProjects.slice(0, 3);
  const Icon = config.Icon;

  return (
    <>
      <section className="relative border-b border-white/5">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(0,255,0,0.07) 0%, transparent 55%)',
          }}
        />
        <div
          className="grid-faint pointer-events-none absolute inset-0 opacity-30"
          aria-hidden
        />

        <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
          <MotionReveal>
            <div className="eyebrow accent-rule">{config.eyebrow}</div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h1 className="h-hero mt-6 max-w-4xl font-bold text-botcore-greyLight">
              {config.headlineWhite}{' '}
              <span className="text-botcore-green glow-green">
                {config.headlineGreen}
              </span>
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
              {config.intro}
            </p>
          </MotionReveal>
          <MotionReveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/studio" className="btn-primary">
                Start a project <span aria-hidden>↗</span>
              </Link>
              <Link to="/reps" className="btn-ghost">
                See related work <span aria-hidden>↗</span>
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>

      {mosaic.length > 0 && (
        <section className="relative border-b border-white/5">
          <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
            <MotionReveal>
              <div className="eyebrow accent-rule">
                {config.shortLabel} — Selected Imagery
              </div>
            </MotionReveal>
            <MotionReveal delay={0.1}>
              <h2 className="h-section mt-5 max-w-3xl font-semibold text-botcore-greyLight">
                A system,{' '}
                <span className="text-botcore-green">not a single asset.</span>
              </h2>
            </MotionReveal>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
              {mosaic.map((tile, i) => (
                <MotionReveal key={tile.key} delay={Math.min(i, 12) * 0.03}>
                  <Link
                    to={`/reps/${tile.slug}`}
                    className="card group block overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <ProjectThumb
                        hue={tile.hue}
                        cover={tile.cover}
                        logo={tile.logo}
                        name={tile.name}
                      />
                    </div>
                    <div className="flex items-center justify-between px-4 py-4">
                      <h3 className="truncate text-sm font-semibold text-botcore-greyLight transition-colors group-hover:text-botcore-green md:text-base">
                        {tile.name}
                      </h3>
                      <span
                        aria-hidden
                        className="text-botcore-greyLight/40 transition-all group-hover:translate-x-1 group-hover:text-botcore-green"
                      >
                        →
                      </span>
                    </div>
                  </Link>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <MotionReveal>
                <div className="eyebrow accent-rule">What We Deliver</div>
              </MotionReveal>
              <MotionReveal delay={0.1}>
                <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
                  {config.deliverWhite}{' '}
                  <span className="text-botcore-green">
                    {config.deliverGreen}
                  </span>
                </h2>
              </MotionReveal>
              <MotionReveal delay={0.15}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
                  {config.deliverIntro}
                </p>
              </MotionReveal>
            </div>

            <div className="md:col-span-7">
              <MotionReveal delay={0.1}>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {config.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-4 border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-botcore-greyLight/80 transition-colors hover:border-botcore-green/40 hover:text-botcore-greyLight md:text-base"
                    >
                      <span
                        aria-hidden
                        className="flex h-9 w-9 shrink-0 items-center justify-center border border-botcore-green/40 text-botcore-green"
                      >
                        <Icon size={16} strokeWidth={1.5} />
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <MotionReveal>
            <div className="eyebrow accent-rule">Our Process</div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h2 className="h-section mt-5 max-w-3xl font-semibold text-botcore-greyLight">
              {config.processWhite}{' '}
              <span className="text-botcore-green">{config.processGreen}</span>
            </h2>
          </MotionReveal>

          <ul className="mt-12 flex flex-col">
            {config.process.map((step, i) => (
              <MotionReveal key={step.id} delay={i * 0.04}>
                <li className="grid grid-cols-1 gap-6 border-b border-white/10 py-10 last:border-b-0 md:grid-cols-12 md:gap-10 md:py-12">
                  <div className="md:col-span-1">
                    <span className="eyebrow !text-botcore-green">
                      {step.id}
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-bold uppercase tracking-tight text-botcore-greyLight md:col-span-3 md:text-3xl"
                    style={{ fontFamily: 'Syne, Space Grotesk, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-botcore-greyLight/70 md:col-span-8 md:text-lg">
                    {step.body}
                  </p>
                </li>
              </MotionReveal>
            ))}
          </ul>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="relative border-b border-white/5">
          <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
            <MotionReveal>
              <div className="eyebrow accent-rule">
                Selected {config.shortLabel} Work
              </div>
            </MotionReveal>
            <MotionReveal delay={0.1}>
              <h2 className="h-section mt-5 max-w-2xl font-semibold text-botcore-greyLight">
                Brands we have shaped,{' '}
                <span className="text-botcore-green">
                  launched, and grown with.
                </span>
              </h2>
            </MotionReveal>

            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((p, i) => (
                <MotionReveal key={p.id} delay={i * 0.05}>
                  <Link
                    to={`/reps/${p.slug}`}
                    className="card group block overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <ProjectThumb
                        hue={p.hue}
                        cover={p.cover}
                        logo={p.logo}
                        name={p.name}
                      />
                      <span className="eyebrow absolute left-4 top-4 !text-botcore-greyLight/70">
                        {p.id}
                      </span>
                      <span className="eyebrow absolute right-4 top-4 !text-botcore-greyLight/70">
                        {p.year}
                      </span>
                    </div>
                    <div className="flex items-center justify-between px-5 py-5">
                      <div className="min-w-0 flex-1">
                        <h3 className="h-card truncate font-semibold text-botcore-greyLight transition-colors group-hover:text-botcore-green">
                          {p.name}
                        </h3>
                        <ul className="mt-3 flex flex-wrap gap-1.5">
                          {[...p.tags, p.industry].map((t) => (
                            <li
                              key={t}
                              className="border border-white/15 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-botcore-greyLight/65 transition-colors group-hover:border-botcore-green/40 group-hover:text-botcore-greyLight/85"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <span
                        aria-hidden
                        className="ml-4 text-botcore-greyLight/40 transition-all group-hover:translate-x-1 group-hover:text-botcore-green"
                      >
                        →
                      </span>
                    </div>
                  </Link>
                </MotionReveal>
              ))}
            </div>

            <div className="mt-14 flex justify-center">
              <Link to="/reps" className="btn-ghost inline-flex items-center gap-2">
                Explore More Projects
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      <LaunchCTA />
    </>
  );
}
