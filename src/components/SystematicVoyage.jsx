import SectionLabel from './SectionLabel';
import VoyageStep from './VoyageStep';
import {
  DiscoveryVisual,
  StrategyVisual,
  DesignVisual,
  LaunchVisual,
  MeasureVisual,
} from './visuals';

const steps = [
  {
    step: '01',
    title: 'LEARN',
    body:
      'Deep-space telemetry. We scan your market ecosystem, audience, and competitors to surface insight and strategic vectors.',
    visual: <DiscoveryVisual />,
  },
  {
    step: '02',
    title: 'PLAN',
    body:
      'Mission mapping. Strategists and creatives collaborate on concepts that align signal with business outcomes.',
    visual: <StrategyVisual />,
    caption: 'SAFE WORK',
    reverse: true,
    withGrid: true,
  },
  {
    step: '03',
    title: 'BUILD',
    body:
      'Synthetic fabrication. High-fidelity design and production forged with industrial precision and raw aesthetics.',
    visual: <DesignVisual />,
  },
  {
    step: '04',
    title: 'LAUNCH',
    body:
      'Orbital deployment. Advertising, amplification, and rollout across every channel the mission demands.',
    visual: <LaunchVisual />,
    reverse: true,
  },
  {
    step: '05',
    title: 'MEASURE',
    body:
      'Post-flight telemetry. Data and analytics loop back into the next cycle \u2014 every mission sharper than the last.',
    visual: <MeasureVisual />,
  },
];

export default function SystematicVoyage() {
  return (
    <section className="relative mx-auto max-w-[1280px]">
      <div className="px-6 pt-24 md:px-10">
        <SectionLabel>DRIVEN TO GET RESULTS</SectionLabel>
        <h2 className="mt-6 font-display h-section font-extrabold uppercase italic text-botcore-white">
          THE <span className="text-botcore-green text-glow">SYSTEMATIC VOYAGE</span>
        </h2>
      </div>
      <div className="mt-12">
        {steps.map((s) => (
          <VoyageStep key={s.step} {...s} />
        ))}
      </div>
    </section>
  );
}
