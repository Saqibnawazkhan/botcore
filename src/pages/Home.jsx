import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Partners from '../components/Partners';
import Capabilities from '../components/Capabilities';
import Portfolio from '../components/Portfolio';
import CoreValues from '../components/CoreValues';
import TeamSection from '../components/TeamSection';
import BlogSection from '../components/BlogSection';
import LaunchCTA from '../components/LaunchCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Partners />
      <Capabilities />
      <Portfolio />
      <CoreValues />
      <TeamSection />
      <BlogSection />
      <LaunchCTA />
    </>
  );
}
