import { useEffect, useRef, useState } from "react";
import {
  Share2,
  Video,
  Globe,
  Target,
  Lightbulb,
  Palette,
  Users,
  Camera,
} from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    features: [
      "Content planning",
      "Content scheduling",
      "Audience engagement",
      "Monthly reporting",
    ],
  },
  {
    icon: Video,
    title: "Content Creation",
    features: [
      "Reels production",
      "Social media content",
      "Creative storytelling",
      "Platform-specific content",
    ],
  },
  {
    icon: Globe,
    title: "Website Development",
    features: [
      "Business websites",
      "Landing pages",
      "Responsive design",
      "Website maintenance",
    ],
  },
  {
    icon: Target,
    title: "Performance Marketing",
    features: [
      "Meta Ads",
      "Google Ads",
      "Lead generation campaigns",
      "Conversion optimization",
    ],
  },
  {
    icon: Lightbulb,
    title: "Brand Strategy & Identity",
    features: [
      "Brand positioning",
      "Visual identity",
      "Brand messaging",
      "Personal branding",
    ],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    features: [
      "Social media creatives",
      "Posters",
      "Marketing materials",
      "Brand assets",
    ],
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    features: [
      "Influencer collaborations",
      "Campaign planning",
      "Content partnerships",
      "Brand awareness campaigns",
    ],
  },
  {
    icon: Camera,
    title: "Drone Photography & Videography",
    features: [
      "Drone shoots",
      "Aerial videos",
      "Event coverage",
      "Promotional visuals",
    ],
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
      className="scroll-mt-16 md:scroll-mt-20 py-20 md:py-32 bg-muted"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6">
            Our Growth Services
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything your brand needs to grow, scale, and stand out digitally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-card rounded-2xl p-7 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Divider */}
                <div className="h-px w-full bg-border/60 mb-4" />

                {/* Feature list */}
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
