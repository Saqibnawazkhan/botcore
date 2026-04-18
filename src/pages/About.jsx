import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import CoreValues from '../components/CoreValues';
import LaunchCTA from '../components/LaunchCTA';

export default function About() {
  return (
    <div className="pt-[72px]">
      <AboutSection />
      <TeamSection />
      <CoreValues />
      <LaunchCTA />
    </div>
  );
}
