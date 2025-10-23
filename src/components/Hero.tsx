import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-workspace-marketing.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-parallax-pan"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Growth Line Animation */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <svg className="absolute bottom-0 left-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
          <path
            d="M0,700 Q300,500 600,400 T1200,200"
            stroke="white"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10,10"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Accelerating Brand Growth
            <br />
            <span className="text-primary-foreground">Through Creativity.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Empowering brands to grow with innovative digital strategies and captivating storytelling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-secondary hover:bg-white/90 font-semibold px-8 py-6 text-lg group"
              onClick={() => window.open("https://wa.me/919600818538?text=Hi!%20I%20want%20to%20know%20more%20about%20Growthlio%20Branding", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold px-8 py-6 text-lg bg-transparent group"
              onClick={() => window.open("https://www.instagram.com/ngp_explorer/", "_blank")}
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
