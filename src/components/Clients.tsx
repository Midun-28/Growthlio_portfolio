import { useEffect, useRef, useState } from "react";

const clients = [
  { name: "TechCorp", logo: "https://via.placeholder.com/120/0096A8/ffffff?text=TC" },
  { name: "InnovateLab", logo: "https://via.placeholder.com/120/002E5D/ffffff?text=IL" },
  { name: "GrowthHub", logo: "https://via.placeholder.com/120/0096A8/ffffff?text=GH" },
  { name: "BrandFlow", logo: "https://via.placeholder.com/120/002E5D/ffffff?text=BF" },
  { name: "DigitalEdge", logo: "https://via.placeholder.com/120/0096A8/ffffff?text=DE" },
  { name: "CreativeMinds", logo: "https://via.placeholder.com/120/002E5D/ffffff?text=CM" },
  { name: "VisionaryX", logo: "https://via.placeholder.com/120/0096A8/ffffff?text=VX" },
  { name: "NextGen", logo: "https://via.placeholder.com/120/002E5D/ffffff?text=NG" },
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
              {clients.map((client) => (
                <div
                  key={`${client.name}-1`}
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
              {clients.map((client) => (
                <div
                  key={`${client.name}-2`}
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
