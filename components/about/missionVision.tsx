import { Target, Eye } from 'lucide-react';

const MissionVision = () => {
  return (
    <section id="mission-vision" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 md:p-10 rounded-2xl bg-card border border-border shadow-soft">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <span className="text-amber font-semibold text-sm uppercase tracking-wider">
              Our Mission
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-foreground mt-3 mb-4">
              No Student Left Hungry
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To guarantee every university student in Cameroon consistent access to nutritious
              meals by connecting them directly with trusted local restaurants and generous
              sponsors — removing hunger as a barrier to education.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-2xl bg-card border border-border shadow-soft">
            <div className="w-14 h-14 rounded-2xl bg-amber/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-amber" />
            </div>
            <span className="text-amber font-semibold text-sm uppercase tracking-wider">
              Our Vision
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-foreground mt-3 mb-4">
              A Future Where Hunger Never Ends an Education
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A Cameroon where every campus is backed by a transparent, community-powered feeding
              network — so no student ever has to choose between a meal and their studies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
