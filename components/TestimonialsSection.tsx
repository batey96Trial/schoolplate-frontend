import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Before SchoolPlate, I often studied on an empty stomach. Now I can focus on my engineering studies knowing I'll have a meal. Thank you to my sponsor!",
    name: "Batey Martin",
    role: "Engineering Student, LandMark University Buea",
  },
  {
    quote: "Sponsoring a student has been so rewarding. Getting updates and photos from Marie makes me feel connected to her journey. It's more than charity — it's a relationship.",
    name: "Sarah Efite",
    role: "Donor from Bertoua",
  },
  {
    quote: "SchoolPlate gave me hope when I almost dropped out due to financial struggles. Someone across the country believed in me when I couldn't believe in myself.",
    name: "Enow Patricia",
    role: "Medical Student, University of Douala",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            Voices of Impact
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from the students and donors who are part of the SchoolPlate family.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-amber/30 mb-6" />
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
