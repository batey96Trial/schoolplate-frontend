import { Button } from '@/components/ui/button';
import people from '@/public/about-images/group-1000004364-i4EObA.png';
import Image from 'next/image';

const JoinUs = () => {
  return (
    <section id="join-us" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <Image src={people} alt="Community of students, restaurants and sponsors" className="rounded-2xl" />
          <div>
            <span className="text-amber font-semibold text-sm uppercase tracking-wider">
              Get Involved
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mt-4 mb-6">
              Join Us in Supporting Students
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Whether you&apos;re a student, restaurant, or sponsor, you can help build a stronger
              support system for students.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Button variant="default" size="lg">
                I&apos;m a Student
              </Button>
              <Button variant="outline" size="lg">
                Partner Restaurant
              </Button>
              <Button variant="amber" size="lg">
                Become a Sponsor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
