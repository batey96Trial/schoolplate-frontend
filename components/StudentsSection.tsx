import { Button } from "@/components/ui/button";
import { GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";

const students = [
  {
    name: "Amina Fouda",
    image: "/student-1.jpg",
    university: "University of Yaoundé I",
    field: "Computer Science",
    location: "Yaoundé",
    needLevel: "High",
    story: "Third-year student dreaming of becoming a software engineer. Often skips meals to afford textbooks.",
  },
  {
    name: "Jean-Pierre Mbeki",
    image: "/student-2.jpg",
    university: "University of Douala",
    field: "Medicine",
    location: "Douala",
    needLevel: "Critical",
    story: "Medical student with 6 years ahead. Family can only afford tuition, not daily meals.",
  },
  {
    name: "Grace Nkeng",
    image: "/student-3.jpg",
    university: "University of Buea",
    field: "Agricultural Sciences",
    location: "Buea",
    needLevel: "Moderate",
    story: "Passionate about sustainable farming. First in her village to attend university.",
  },
];

const needLevelColors: Record<string, string> = {
  Critical: "bg-destructive/10 text-destructive",
  High: "bg-amber/20 text-amber-foreground",
  Moderate: "bg-primary/10 text-primary",
};

const StudentsSection = () => {
  return (
    <section id="students" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber font-semibold text-sm uppercase tracking-wider">Meet The Students</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            Students Waiting for Your Support
          </h2>
          <p className="text-muted-foreground text-lg">
            These are real students with real dreams. Sponsor their meals at partner restaurants near their campus.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Image
                  src={student.image}
                  alt={student.name}
                  width={300}
                  height={550}
                  priority
                  className="w-full md:w-[500px] lg:w-[385px] xl:w-[620px] mix-blend-darken dark:mix-blend-difference"
                />
                {/* <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${needLevelColors[student.needLevel]}`}>
                    {student.needLevel} Need
                  </span>
                </div> */}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2">{student.name}</h3>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>{student.field}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{student.university}, {student.location}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  "{student.story}"
                </p>

                <Button variant="default" className="w-full">
                  Sponsor {student.name.split(" ")[0]}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Students
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudentsSection;