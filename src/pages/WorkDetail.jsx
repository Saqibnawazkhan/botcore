import { Link, useParams, Navigate } from 'react-router-dom';
import MotionReveal from '../components/MotionReveal';
import LaunchCTA from '../components/LaunchCTA';
import { getProjectBySlug, getNextProject } from '../data/projects';

function Cover({ hue, banner, logo, alt }) {
  if (banner) {
    const isVideo = /\.(mp4|webm|mov)$/i.test(banner);
    if (isVideo) {
      return (
        <video
          src={banner}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      );
    }
    return (
      <img
        src={banner}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, hsl(${hue} 45% 22%) 0%, #0d0d0d 75%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 70% 30%, rgba(0,255,0,0.22), transparent 55%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {logo && (
        <img
          src={logo}
          alt={`${alt} logo`}
          className="absolute inset-0 m-auto max-h-[40%] max-w-[40%] object-contain"
        />
      )}
    </>
  );
}

export default function WorkDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/reps" replace />;
  }

  const next = getNextProject(slug);

  return (
    <>
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden md:max-h-[1080px]">
        <Cover
          hue={project.hue}
          banner={project.banner}
          logo={project.logo}
          alt={project.name}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.15) 35%, rgba(13,13,13,0.55) 75%, rgba(13,13,13,0.95) 100%)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(13,13,13,0.7) 0%, rgba(13,13,13,0.25) 45%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32">
          <MotionReveal className="self-start">
            <Link
              to="/reps"
              className="group inline-flex h-12 items-center gap-3 border-2 border-botcore-green/60 bg-botcore-green/5 px-5 font-mono text-xs font-bold uppercase tracking-[0.28em] text-botcore-green transition-colors hover:border-botcore-green hover:bg-botcore-green hover:text-botcore-black md:h-14 md:px-6 md:text-sm"
            >
              <span
                aria-hidden
                className="text-base transition-transform group-hover:-translate-x-1 md:text-lg"
              >
                ←
              </span>
              All work
            </Link>
          </MotionReveal>

          <div className="mt-auto">
            <MotionReveal delay={0.1}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow !text-botcore-green">{project.id}</span>
                <span className="eyebrow !text-botcore-greyLight/80">
                  {project.industry}
                </span>
                <span className="eyebrow !text-botcore-greyLight/80">
                  {project.year}
                </span>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.15}>
              <h1
                className="h-hero mt-6 max-w-4xl font-bold text-botcore-greyLight"
                style={{ textShadow: '0 2px 24px rgba(0,0,0,0.45)' }}
              >
                {project.name}
                <span className="text-botcore-green">.</span>
              </h1>
            </MotionReveal>

            <MotionReveal delay={0.25}>
              <p
                className="mt-8 max-w-3xl text-base leading-relaxed text-botcore-greyLight/85 md:text-lg"
                style={{ textShadow: '0 1px 16px rgba(0,0,0,0.5)' }}
              >
                {project.overview}
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-20">
          <MotionReveal>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-y border-white/10 py-8 sm:grid-cols-4">
              <div>
                <dt className="eyebrow">Client</dt>
                <dd className="mt-2 text-sm text-botcore-greyLight">{project.name}</dd>
              </div>
              <div>
                <dt className="eyebrow">Role</dt>
                <dd className="mt-2 text-sm text-botcore-greyLight">{project.role}</dd>
              </div>
              <div>
                <dt className="eyebrow">Duration</dt>
                <dd className="mt-2 text-sm text-botcore-greyLight">
                  {project.duration}
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Year</dt>
                <dd className="mt-2 text-sm text-botcore-greyLight">{project.year}</dd>
              </div>
            </dl>
          </MotionReveal>
        </div>
      </section>

      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <MotionReveal className="lg:col-span-4">
              <div className="eyebrow accent-rule">The challenge</div>
            </MotionReveal>
            <MotionReveal delay={0.1} className="lg:col-span-8">
              <p className="text-base leading-relaxed text-botcore-greyLight/75 md:text-lg">
                {project.challenge}
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <MotionReveal className="lg:col-span-4">
              <div className="eyebrow accent-rule">The approach</div>
            </MotionReveal>
            <MotionReveal delay={0.1} className="lg:col-span-8">
              <p className="text-base leading-relaxed text-botcore-greyLight/75 md:text-lg">
                {project.approach}
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <MotionReveal className="lg:col-span-4">
              <div className="eyebrow accent-rule">The outcome</div>
            </MotionReveal>
            <MotionReveal delay={0.1} className="lg:col-span-8">
              <p className="text-base leading-relaxed text-botcore-greyLight/75 md:text-lg">
                {project.outcome}
              </p>

              <dl className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {project.stats.map((s) => (
                  <div
                    key={s.label}
                    className="card flex flex-col gap-2 p-5"
                  >
                    <dt className="text-3xl font-semibold tracking-tight text-botcore-greyLight md:text-4xl">
                      {s.value}
                      <span className="text-botcore-green">{s.suffix || ''}</span>
                    </dt>
                    <dd className="eyebrow !tracking-[0.2em]">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <MotionReveal className="lg:col-span-4">
              <div className="eyebrow accent-rule">Deliverables</div>
              <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
                What we shipped.
              </h2>
            </MotionReveal>

            <div className="lg:col-span-8">
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {project.deliverables.map((d, i) => (
                  <MotionReveal key={d} delay={i * 0.05}>
                    <li className="grid grid-cols-[auto_1fr] items-center gap-6 py-5">
                      <span className="eyebrow !text-botcore-green">
                        0{i + 1}
                      </span>
                      <p className="text-base text-botcore-greyLight/80">{d}</p>
                    </li>
                  </MotionReveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {project.gallery && project.gallery.length > 0 && (
        <section className="relative border-t border-white/5">
          <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
            <div className="eyebrow accent-rule">Gallery</div>
            <h2 className="h-section mt-5 font-semibold text-botcore-greyLight">
              Selected frames.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
              {project.gallery.map((src, i) => (
                <MotionReveal key={src} delay={i * 0.05}>
                  <div className="relative aspect-square overflow-hidden border border-white/10">
                    <img
                      src={src}
                      alt={`${project.name} — frame ${i + 1}`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {next && (
        <section className="relative border-t border-white/5">
          <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-20">
            <Link
              to={`/reps/${next.slug}`}
              className="group grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto_auto]"
            >
              <div>
                <div className="eyebrow accent-rule">Next project</div>
                <h3 className="h-section mt-4 font-semibold text-botcore-greyLight transition-colors group-hover:text-botcore-green">
                  {next.name}.
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {[...next.tags, next.industry].map((t) => (
                    <li
                      key={t}
                      className="border border-white/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-botcore-greyLight/65 transition-colors group-hover:border-botcore-green/40 group-hover:text-botcore-greyLight/85"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="eyebrow hidden self-start md:block">{next.year}</span>
              <span
                aria-hidden
                className="text-2xl text-botcore-greyLight/40 transition-all group-hover:translate-x-1 group-hover:text-botcore-green"
              >
                →
              </span>
            </Link>
          </div>
        </section>
      )}

      <LaunchCTA />
    </>
  );
}
