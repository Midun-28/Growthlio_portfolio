import { useEffect, useRef, useState } from "react";
import { Share2, Target, TrendingUp, Search, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Strategic campaigns that engage audiences and build brand loyalty across all platforms.",
  },
  {
    icon: Target,
    title: "Content Strategy & Branding",
    description: "Crafting compelling narratives and visual identities that resonate with your target audience.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Data-driven campaigns optimized for conversions and measurable ROI.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your online visibility and rank higher with strategic SEO solutions.",
  },
  {
    icon: Palette,
    title: "Graphic Design & Video Editing",
    description: "Stunning visuals and engaging videos that capture attention and tell your story.",
  },
];

const Services = () => {
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
      id="services"
      ref={sectionRef}
      className="py-20 md:py-32 bg-muted"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6">
            Our Services
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to accelerate your brand's growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`hover-lift cursor-pointer border-none bg-card transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
