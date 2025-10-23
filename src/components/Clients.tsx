import { useEffect, useRef, useState } from "react";
import clientLogo1 from "@/assets/client-logo-1.jpg";
import clientLogo2 from "@/assets/client-logo-2.jpg";
import clientLogo3 from "@/assets/client-logo-3.jpg";
import clientLogo4 from "@/assets/client-logo-4.jpg";
import clientLogo5 from "@/assets/client-logo-5.jpg";
import clientLogo6 from "@/assets/client-logo-6.jpg";

// Dynamic client data - easily add or remove clients here
const clients = [
  { name: "TechCorp", logo: clientLogo1 },
  { name: "InnovateLab", logo: clientLogo2 },
  { name: "GrowthHub", logo: clientLogo3 },
  { name: "BrandFlow", logo: clientLogo4 },
  { name: "DigitalEdge", logo: clientLogo5 },
  { name: "CreativeMinds", logo: clientLogo6 },
];

const Clients = () => {
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
      id="clients"
      ref={sectionRef}
      className="py-20 md:py-32 bg-muted overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6">
            Our Growth Partners
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proud to collaborate with industry leaders and innovative brands
          </p>
        </div>

        {/* Animated Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className={`flex gap-8 animate-scroll ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {/* First set of logos */}
              {clients.map((client, index) => (
                <div
                  key={`${client.name}-1-${index}`}
                  className="flex-shrink-0 w-32 h-32 rounded-full bg-card shadow-lg flex items-center justify-center hover-scale transition-all duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-20 h-20 object-contain rounded-full"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`${client.name}-2-${index}`}
                  className="flex-shrink-0 w-32 h-32 rounded-full bg-card shadow-lg flex items-center justify-center hover-scale transition-all duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-20 h-20 object-contain rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
