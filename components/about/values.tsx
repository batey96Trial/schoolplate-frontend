import { ShieldCheck, HandHeart, Handshake, Sparkles } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: 'Transparency',
    description: 'Every donation is tracked from sponsor to plate — no cash, no guesswork.',
  },
  {
    icon: HandHeart,
    title: 'Dignity',
    description: 'Students choose their meals at real restaurants, just like any other customer.',
  },
  {
    icon: Handshake,
    title: 'Community',
    description: 'Restaurants, sponsors, and students working together toward one goal.',
  },
  {
    icon: Sparkles,
    title: 'Reliability',
    description: 'Consistent daily meals students can count on, not one-off gestures.',
  },
];

const Values = () => {
  return (
    <section id="values" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber font-semibold text-sm uppercase tracking-wider">
            What Drives Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            Our Core Values
          </h2>
          <p className="text-muted-foreground text-lg">
            The principles that shape every meal we help deliver.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-background border border-border hover:shadow-medium transition-shadow"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-lg font-semibold mb-2 text-foreground">{value.title}</p>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
