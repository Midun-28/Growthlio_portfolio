import { useEffect, useRef, useState } from "react";

const clients = [
  { name: "TechCorp", logo: "https://via.placeholder.com/150x80/0096A8/ffffff?text=TechCorp" },
  { name: "InnovateLab", logo: "https://via.placeholder.com/150x80/002E5D/ffffff?text=InnovateLab" },
  { name: "GrowthHub", logo: "https://via.placeholder.com/150x80/0096A8/ffffff?text=GrowthHub" },
  { name: "BrandFlow", logo: "https://via.placeholder.com/150x80/002E5D/ffffff?text=BrandFlow" },
  { name: "DigitalEdge", logo: "https://via.placeholder.com/150x80/0096A8/ffffff?text=DigitalEdge" },
  { name: "CreativeMinds", logo: "https://via.placeholder.com/150x80/002E5D/ffffff?text=CreativeMinds" },
  { name: "VisionaryX", logo: "https://via.placeholder.com/150x80/0096A8/ffffff?text=VisionaryX" },
  { name: "NextGen", logo: "https://via.placeholder.com/150x80/002E5D/ffffff?text=NextGen" },
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
      className="py-20 md:py-32 bg-muted"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6">
            Our Trusted Partners
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proud to collaborate with industry leaders and innovative brands
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 items-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-6 bg-card rounded-xl hover:shadow-lg transition-all duration-300 hover-scale"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-auto max-w-[150px] opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
