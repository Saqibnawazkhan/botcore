import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import AboutSection from '../components/AboutSection';
import Portfolio from '../components/Portfolio';
import Capabilities from '../components/Capabilities';
import SystematicVoyage from '../components/SystematicVoyage';
import CoreValues from '../components/CoreValues';
import TeamSection from '../components/TeamSection';
import BlogSection from '../components/BlogSection';
import LaunchCTA from '../components/LaunchCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutSection />
      <Portfolio />
      <Capabilities />
      <Marquee />
      <SystematicVoyage />
      <CoreValues />
      <TeamSection />
      <BlogSection />
      <LaunchCTA />
    </>
  );
}
