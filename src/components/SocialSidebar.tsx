import { Instagram, MessageCircle } from "lucide-react";

const SocialSidebar = () => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 animate-fade-in">
      <a
        href="https://wa.me/91883111773?text=Hi!%20I%20want%20to%20know%20more%20about%20Growthlio%20Branding"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-primary hover:bg-primary-dark flex items-center justify-center transition-all hover:scale-110 shadow-lg group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      </a>
      <a
        href="https://www.instagram.com/growth_lio/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-secondary hover:bg-secondary/90 flex items-center justify-center transition-all hover:scale-110 shadow-lg group"
        aria-label="Instagram"
      >
        <Instagram className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};

export default SocialSidebar;
