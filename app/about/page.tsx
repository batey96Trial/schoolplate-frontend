import Hero from '@/components/about/hero';
import MissionVision from '@/components/about/missionVision';
import OurStory from '@/components/about/ourStory';
import Problem from '@/components/about/problem';
import Values from '@/components/about/values';
import JoinUs from '@/components/about/joinUs';
import ImpactSection from '@/components/ImpactSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <MissionVision />
        <OurStory />
        <Problem />
        <ImpactSection />
        <Values />
        <JoinUs />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
