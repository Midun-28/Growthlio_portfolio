import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6">
            Who We Are
          </h2>
          
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-8 rounded-full" />
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            At Growthlio, we believe in the power of strategic growth and engaging content that connects with your audience. 
            Our professional team specializes in crafting memorable campaigns that elevate your online presence through 
            Social Media Marketing, Branding & Design, Website Creation, Video Editing, and Ads Management. 
            We focus on what resonates with your customers, making your brand relatable and impactful. 
            Let's collaborate to transform your ideas into vibrant realities and drive measurable growth!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            <div className="p-6 rounded-2xl bg-gradient-accent hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-accent hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-accent hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
