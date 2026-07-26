import { useEffect, useRef, useState } from "react";
import { Linkedin } from "lucide-react";
import founderSuriya from "@/assets/team-member-1.jpg";
import founderHari from "@/assets/team-member-2.jpg";

const founders = [
  {
    name: "Suriya Prakash",
    role: "Founder & Digital Marketing Strategist",
    bio: "Suriya Prakash is the founder of Growthlio Digital Service and specializes in digital marketing, branding, content strategy, and business growth. Passionate about helping businesses scale online, he focuses on building impactful brand identities, creating high-performing content, and delivering measurable results through innovative digital marketing strategies.",
    image: founderSuriya,
    linkedin: "https://www.linkedin.com/in/suriya-prakash-a-468423269",
  },
  {
    name: "Hari Prakash",
    role: "Co-Founder & Project Coordinator",
    bio: "Hari Prakash plays a key role in managing projects, coordinating client communications, and ensuring seamless execution across every stage of delivery. With a strong focus on organization, quality control, and client satisfaction, he helps transform ideas into successful outcomes while supporting the overall growth of the business.",
    image: founderHari,
    linkedin: "https://www.linkedin.com/in/hari-prakash-a-b07892371",
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
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6">
            Meet The Founders
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The passionate minds behind Growthlio Digital Service, helping brands grow through strategy, creativity, and digital innovation.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className={`group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />

              <div className="p-8 sm:p-10 flex flex-col h-full">
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 ring-primary/15 group-hover:ring-primary/30 transition-all duration-500 shadow-lg">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute -inset-2 rounded-full border-2 border-dashed border-primary/10 group-hover:border-primary/20 group-hover:rotate-12 transition-all duration-700" />
                  </div>
                </div>

                {/* Name & Role */}
                <div className="text-center mb-5">
                  <h3 className="text-2xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                    {founder.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm tracking-wide uppercase">
                    {founder.role}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px w-16 bg-gradient-primary mx-auto mb-5 rounded-full" />

                {/* Bio */}
                <p className="text-muted-foreground text-sm leading-relaxed text-center mb-6 flex-grow">
                  {founder.bio}
                </p>

                {/* LinkedIn */}
                <div className="flex justify-center mt-auto">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-secondary/5 hover:bg-primary hover:text-white flex items-center justify-center text-secondary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                    aria-label={`${founder.name} LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
