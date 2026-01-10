import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import StudentsSection from '@/components/StudentsSection';
import PricingSection from '@/components/PricingSection';
// import CameroonMapSection from '@/components/CameroonMapSection';
import ImpactSection from '@/components/ImpactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import FadeAnimation from '@/components/ui/fading-animation';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FadeAnimation>
          <HowItWorks />
        </FadeAnimation>
        <FadeAnimation>
          <StudentsSection />
        </FadeAnimation>
        <FadeAnimation>
          <PricingSection />
        </FadeAnimation>
        {/* <CameroonMapSection /> */}
        <ImpactSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
