import { Users, Utensils, School, Store } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "900+",
    label: "Students Fed",
    description: "University students receiving regular meals",
  },
  {
    icon: Utensils,
    value: "7,000+",
    label: "Plates Consumed",
    description: "Hot plates served at partner restaurants",
  },
  {
    icon: Store,
    value: "22+",
    label: "Partner Restaurants",
    description: "Trusted eateries near universities",
  },
  {
    icon: School,
    value: "15",
    label: "Universities",
    description: "Campuses covered across Cameroon",
  },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 md:py-32 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber font-semibold text-sm uppercase tracking-wider">Our Impact</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
            Together, We're Making a Difference
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Every plate sponsored creates ripples of change.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-amber/20 flex items-center justify-center mb-6">
                <stat.icon className="w-8 h-8 text-amber" />
              </div>
              <p className="text-4xl font-display mb-2">{stat.value}</p>
              <p className="text-lg font-semibold mb-2">{stat.label}</p>
              <p className="text-sm text-primary-foreground/60">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;