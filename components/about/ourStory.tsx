import Image from 'next/image';

const OurStory = () => {
  return (
    <section id="our-story" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-amber/20 -z-10" />
            <Image
              src="/hero-students.jpg"
              alt="Students sharing a meal together"
              width={700}
              height={500}
              className="rounded-2xl shadow-medium w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-amber font-semibold text-sm uppercase tracking-wider">
              How It Started
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
              Our Story
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Many university students struggle to balance tuition, accommodation, and feeding.
                For some, skipping meals becomes routine.
              </p>
              <p>
                We started SchoolPlate to make sure no student has to choose between education and
                food.
              </p>
              <p>
                By connecting restaurants and sponsors, we built a system where students receive
                consistent daily meals — with dignity and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
