import { useEffect, useRef, useState } from "react";
import clientGlosse from "@/assets/client-glosse.png";
import clientIndchicoo from "@/assets/client-indchicoo.png";
import clientPoppy from "@/assets/client-poppy.png";
import clientPonzu from "@/assets/client-ponzu.png";
import clientAura from "@/assets/client-aura.png";
import clientFBrand from "@/assets/client-f-brand.png";
import clientPeacock from "@/assets/client-peacock.png";
import clientKuzhiyum from "@/assets/client-kuzhiyum.png";
import clientBowBow from "@/assets/client-bow-bow.png";
import clientAdditional from "@/assets/client-additional.png";
import clientJuice from "@/assets/client-juice.png";
import clientNew from "@/assets/client-new.jpeg";

const clients = [
  { name: "Glosse Bar", logo: clientGlosse },
  { name: "INDCHICOO", logo: clientIndchicoo },
  { name: "Poppy Vista Tirupur", logo: clientPoppy },
  { name: "Ponzu Delightfully Asian", logo: clientPonzu },
  { name: "Aura", logo: clientAura },
  { name: "F Brand", logo: clientFBrand },
  { name: "Peacock", logo: clientPeacock },
  { name: "Kuzhiyum Curry'um", logo: clientKuzhiyum },
  { name: "Bow Bow Bliss Restocafe", logo: clientBowBow },
  { name: "Partner", logo: clientAdditional },
  { name: "Best Juice Corner", logo: clientJuice },
  { name: "New Partner", logo: clientNew },
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
      className="py-20 md:py-32 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6">
            Our Growth Partners
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Proud to collaborate with ambitious brands and innovative businesses across hospitality, beauty, fashion, food, and lifestyle industries.
          </p>
        </div>

        {/* Animated Carousel */}
        <div className={`relative w-full max-w-7xl mx-auto ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-300`}>
          {/* Gradient Masks for smooth fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden group flex">
            {/* The scrolling container */}
            <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
              {/* First set of logos */}
              <div className="flex items-center justify-around">
                {clients.map((client, index) => (
                  <div
                    key={`${client.name}-1-${index}`}
                    className="flex-shrink-0 mx-8 sm:mx-12 md:mx-16 flex items-center justify-center transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-16 sm:h-20 md:h-24 w-auto max-w-[160px] sm:max-w-[220px] object-contain drop-shadow-sm hover:drop-shadow-md transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-around">
                {clients.map((client, index) => (
                  <div
                    key={`${client.name}-2-${index}`}
                    className="flex-shrink-0 mx-8 sm:mx-12 md:mx-16 flex items-center justify-center transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-16 sm:h-20 md:h-24 w-auto max-w-[160px] sm:max-w-[220px] object-contain drop-shadow-sm hover:drop-shadow-md transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-md sm:text-lg text-muted-foreground/80 font-medium italic">
            Trusted by growing brands that believe in creativity, consistency, and measurable digital growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
