import { UtensilsCrossed, TrendingDown, LifeBuoy } from 'lucide-react';

const problems = [
  {
    icon: UtensilsCrossed,
    title: 'Food Insecurity',
    description: 'Many students skip meals due to limited finances.',
  },
  {
    icon: TrendingDown,
    title: 'Academic Impact',
    description: 'Hunger reduces focus, productivity, and performance.',
  },
  {
    icon: LifeBuoy,
    title: 'Lack of Support',
    description: 'Not every student has a reliable support system.',
  },
];

const Problem = () => {
  return (
    <section id="problem" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber font-semibold text-sm uppercase tracking-wider">
            The Reality
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            The Problem We Solve
          </h2>
          <p className="text-muted-foreground text-lg">
            Hunger on campus is common, but it doesn&apos;t have to be inevitable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-background border border-border hover:shadow-medium transition-shadow"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-amber/10 flex items-center justify-center mb-6">
                <problem.icon className="w-8 h-8 text-amber" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
