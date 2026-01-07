import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import StudentsSection from "@/components/StudentsSection";
import PricingSection from "@/components/PricingSection";
import ImpactSection from "@/components/ImpactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Home = () => {
	return (
		<div className='min-h-screen bg-background'>
			<Navbar />
			<main>
				<HeroSection />
				<HowItWorks />
				<StudentsSection />
				<PricingSection />
				<ImpactSection />
				<TestimonialsSection />
				<CTASection />
			</main>
			<Footer />
		</div>
	);
};

export default Home;
