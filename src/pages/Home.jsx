import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Capabilities from '../components/Capabilities';
import Portfolio from '../components/Portfolio';
import BlogSection from '../components/BlogSection';
import InfluencersSection from '../components/InfluencersSection';
import LaunchCTA from '../components/LaunchCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Capabilities />
      <Portfolio />
      <BlogSection />
      <LaunchCTA />
      <InfluencersSection />
    </>
  );
}
