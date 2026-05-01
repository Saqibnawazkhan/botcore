import { Link, useParams, Navigate } from 'react-router-dom';
import MotionReveal from '../components/MotionReveal';
import ProjectThumb from '../components/ProjectThumb';
import LaunchCTA from '../components/LaunchCTA';
import { projects } from '../data/projects';
import { capabilityBySlug } from '../data/capabilities';

// Pick three representative images for the hero collage. We prefer the
// brand thumbnail (logo panel) for the centre tile and the first cover
// images we can find for the flanking tiles, falling back to the logo
// when a project has no cover.
function buildCollage(matchedProjects) {
  const pick = (p) => p.cover || p.logo;
  const slice = matchedProjects.slice(0, 3);
  if (slice.length < 3) return null;
  return [
    { project: slice[0], src: slice[0].logo || slice[0].cover },
    { project: slice[1], src: pick(slice[1]) },
    { project: slice[2], src: pick(slice[2]) },
  ];
}

export default function CapabilitySubPage() {
  const { slug } = useParams();
  const config = capabilityBySlug[slug];

  if (!config) {
    return <Navigate to="/capabilities" replace />;
  }

  const matchedProjects = projects.filter(config.projectFilter);
  const collage = buildCollage(matchedProjects);
  const featured = matchedProjects.slice(0, 3);

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

        <div className="relative mx-auto max-w-[1280px] px-6 pb-12 pt-36 text-center md:px-10 md:pb-16 md:pt-44">
          <MotionReveal>
            <div className="eyebrow accent-rule mx-auto inline-block">
              {config.eyebrow}
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h1
              className="mt-8 font-bold uppercase leading-[0.95] tracking-tight text-botcore-greyLight"
              style={{
                fontFamily: 'Syne, Space Grotesk, sans-serif',
                fontSize: 'clamp(3.5rem, 11vw, 9rem)',
              }}
            >
              {config.shortLabel}
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
              {config.intro}
            </p>
          </MotionReveal>
          <MotionReveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link to="/reps" className="btn-primary">
                See {config.shortLabel} Work <span aria-hidden>↗</span>
              </Link>
              <Link to="/studio" className="btn-ghost">
                Make Contact <span aria-hidden>↗</span>
              </Link>
            </div>
          </MotionReveal>
        </div>

        {collage && (
          <div className="relative mx-auto max-w-[1480px] px-6 pb-28 md:px-10 md:pb-40">
            <div className="relative mx-auto h-[560px] w-full max-w-6xl sm:h-[640px] md:h-[820px] lg:h-[900px]">
              {/* Centre tile — sits behind the flanking ones */}
              <Link
                to={`/reps/${collage[0].project.slug}`}
                aria-label={`Open ${collage[0].project.name} case study`}
                className="group/centre collage-tile-centre absolute left-1/2 top-1/2 z-10 block w-[68%] overflow-hidden border border-white/10 bg-botcore-black shadow-[0_40px_120px_rgba(0,0,0,0.7)] transition-[box-shadow] duration-500 hover:shadow-[0_50px_160px_rgba(0,255,0,0.18)] sm:w-[60%]"
              >
                <div className="relative aspect-[4/3] transition-transform duration-700 group-hover/centre:scale-[1.04]">
                  <ProjectThumb
                    hue={collage[0].project.hue}
                    cover={collage[0].src}
                    logo={null}
                    name={collage[0].project.name}
                  />
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-botcore-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/centre:opacity-100"
                />
                <div className="absolute bottom-0 left-0 right-0 flex translate-y-2 items-center justify-between px-5 py-4 opacity-0 transition-all duration-500 group-hover/centre:translate-y-0 group-hover/centre:opacity-100">
                  <span className="text-sm font-semibold text-botcore-greyLight md:text-base">
                    {collage[0].project.name}
                  </span>
                  <span className="eyebrow !text-botcore-green">View →</span>
                </div>
              </Link>

              {/* Left flanking tile */}
              <Link
                to={`/reps/${collage[1].project.slug}`}
                aria-label={`Open ${collage[1].project.name} case study`}
                className="group/left collage-tile-left absolute -left-4 bottom-0 z-20 block w-[52%] overflow-hidden border border-white/10 bg-botcore-black shadow-[0_40px_120px_rgba(0,0,0,0.7)] transition-[box-shadow] duration-500 hover:z-30 hover:shadow-[0_50px_160px_rgba(0,255,0,0.18)] sm:w-[48%] md:-left-10 md:bottom-4 lg:-left-16"
              >
                <div className="relative aspect-[4/3] transition-transform duration-700 group-hover/left:scale-[1.05]">
                  <ProjectThumb
                    hue={collage[1].project.hue}
                    cover={collage[1].src}
                    logo={null}
                    name={collage[1].project.name}
                  />
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-botcore-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/left:opacity-100"
                />
                <div className="absolute bottom-0 left-0 right-0 flex translate-y-2 items-center justify-between px-5 py-4 opacity-0 transition-all duration-500 group-hover/left:translate-y-0 group-hover/left:opacity-100">
                  <span className="text-sm font-semibold text-botcore-greyLight md:text-base">
                    {collage[1].project.name}
                  </span>
                  <span className="eyebrow !text-botcore-green">View →</span>
                </div>
              </Link>

              {/* Right flanking tile */}
              <Link
                to={`/reps/${collage[2].project.slug}`}
                aria-label={`Open ${collage[2].project.name} case study`}
                className="group/right collage-tile-right absolute -right-4 top-0 z-20 block w-[54%] overflow-hidden border border-white/10 bg-botcore-black shadow-[0_40px_120px_rgba(0,0,0,0.7)] transition-[box-shadow] duration-500 hover:z-30 hover:shadow-[0_50px_160px_rgba(0,255,0,0.18)] sm:w-[50%] md:-right-10 md:top-4 lg:-right-16"
              >
                <div className="relative aspect-[4/3] transition-transform duration-700 group-hover/right:scale-[1.05]">
                  <ProjectThumb
                    hue={collage[2].project.hue}
                    cover={collage[2].src}
                    logo={null}
                    name={collage[2].project.name}
                  />
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-botcore-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/right:opacity-100"
                />
                <div className="absolute bottom-0 left-0 right-0 flex translate-y-2 items-center justify-between px-5 py-4 opacity-0 transition-all duration-500 group-hover/right:translate-y-0 group-hover/right:opacity-100">
                  <span className="text-sm font-semibold text-botcore-greyLight md:text-base">
                    {collage[2].project.name}
                  </span>
                  <span className="eyebrow !text-botcore-green">View →</span>
                </div>
              </Link>
            </div>
          </div>
        )}
      </section>

      <section className="relative border-b border-white/5 bg-white/[0.015]">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
          style={{
            background:
              'radial-gradient(circle at 20% 0%, rgba(0,255,0,0.06) 0%, transparent 45%)',
          }}
        />
        <div className="grid-faint pointer-events-none absolute inset-0 opacity-25" aria-hidden />

        <div className="relative mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
          <div className="text-center">
            <MotionReveal>
              <div className="eyebrow">Our {config.shortLabel} Process</div>
            </MotionReveal>
            <MotionReveal delay={0.1}>
              <h2 className="h-section mt-5 max-w-3xl font-semibold text-botcore-greyLight md:mx-auto">
                {config.processWhite}{' '}
                <span className="text-botcore-green">{config.processGreen}</span>
              </h2>
            </MotionReveal>
            <MotionReveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-botcore-greyLight/65 md:text-lg">
                Our process starts with the founder's story. We use those
                insights to launch creative work that stays true to the brand
                while opening the door to new growth.
              </p>
            </MotionReveal>
          </div>

          <ul className="mt-16 flex flex-col">
            {config.process.map((step, i) => (
              <MotionReveal key={step.id} delay={i * 0.04}>
                <li className="grid grid-cols-1 items-center gap-6 border-b border-white/10 py-10 last:border-b-0 md:grid-cols-12 md:gap-10 md:py-12">
                  <div className="flex items-center gap-5 md:col-span-4">
                    <span
                      className="select-none font-bold leading-none text-transparent"
                      style={{
                        fontFamily: 'Syne, Space Grotesk, sans-serif',
                        fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
                        WebkitTextStroke: '1.5px rgba(0,255,0,0.7)',
                      }}
                    >
                      {step.id}
                    </span>
                    <h3
                      className="text-2xl font-bold uppercase tracking-tight text-botcore-greyLight md:text-4xl"
                      style={{ fontFamily: 'Syne, Space Grotesk, sans-serif' }}
                    >
                      {step.title}
                    </h3>
                  </div>
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
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div>
                <MotionReveal>
                  <div className="eyebrow accent-rule">Mission Briefs</div>
                </MotionReveal>
                <MotionReveal delay={0.1}>
                  <h2 className="h-section mt-5 max-w-2xl font-semibold text-botcore-greyLight">
                    From refreshes to brands built{' '}
                    <span className="text-botcore-green">from the ground up.</span>
                  </h2>
                </MotionReveal>
              </div>
              <Link to="/reps" className="btn-ghost shrink-0">
                Explore More Projects <span aria-hidden>→</span>
              </Link>
            </div>

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
                        <span className="eyebrow mt-3 inline-flex items-center gap-2 !text-botcore-green/80 transition-colors group-hover:!text-botcore-green">
                          Read the brief
                          <span aria-hidden className="transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <LaunchCTA />
    </>
  );
}
