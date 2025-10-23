import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";

// Dynamic team data - easily add or remove team members here
const teamMembers = [
  {
    name: "Naveen Prabu",
    role: "Founder & Digital Marketing Strategist",
    tagline: "Creative Thinker | Growth Hacker | Storyteller",
    image: teamMember1,
  },
  {
    name: "Priya Sharma",
    role: "Creative Director & Brand Architect",
    tagline: "Visual Innovator | Brand Builder | Design Enthusiast",
    image: teamMember2,
  },
];

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6">
            Faces Behind Growthlio
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate individuals driving innovation and growth
          </p>
        </div>

        {/* Dynamic Grid - Automatically adjusts to any number of team members (1 to n) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className={`overflow-hidden border-none hover-lift transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="flex gap-4">
                      <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                        <Linkedin className="h-5 w-5 text-primary" />
                      </button>
                      <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                        <Mail className="h-5 w-5 text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-card text-center">
                  <h3 className="text-2xl font-bold text-secondary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground italic">
                    {member.tagline}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
