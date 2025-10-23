import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Campus Connect Campaign",
    category: "NGP Explorer",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    description: "Social media strategy for student engagement",
  },
  {
    title: "Brand Identity",
    category: "Aloft Events",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    description: "Complete visual identity and brand guidelines",
  },
  {
    title: "Digital Reach Booster",
    category: "Vision Studio",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "Performance marketing campaign with 300% ROI",
  },
  {
    title: "E-commerce Growth",
    category: "TrendyCart",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    description: "SEO and content strategy for online retail",
  },
  {
    title: "Brand Revamp",
    category: "FitLife Wellness",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
    description: "Complete rebranding and digital presence",
  },
  {
    title: "Launch Campaign",
    category: "TechStart Solutions",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    description: "Go-to-market strategy and brand launch",
  },
];

const Projects = () => {
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
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6">
            Recent Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped brands achieve remarkable growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group overflow-hidden border-none cursor-pointer transition-all duration-500 hover-lift ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <ExternalLink className="h-8 w-8 mx-auto mb-3" />
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {project.title}
                </h3>
                <p className="text-primary font-medium">{project.category}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
