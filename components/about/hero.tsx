import { Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative py-24 md:py-32 bg-gradient-hero text-center overflow-hidden"
    >
      {/* Decorative blobs, consistent with CTASection */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-primary-foreground/5 rounded-full blur-2xl" />

      <div className="relative container mx-auto px-4">
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-6 py-2 mb-6">
          <Heart className="w-4 h-4 text-amber" fill="currentColor" />
          <span className="text-sm text-primary-foreground">Our Story, Our Mission</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
          About SchoolPlate
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
          We connect students, restaurants, and sponsors to build a reliable feeding system for
          university life across Cameroon.
        </p>
      </div>
    </section>
  );
};

export default Hero;
