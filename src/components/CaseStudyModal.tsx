import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { Project } from "../data/projectsData";

interface Props {
  project: Project;
  onClose: () => void;
}

export const CaseStudyModal = ({ project, onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col bg-background overflow-y-auto"
    >
      {/* Sticky Close Button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={onClose}
          className="p-3 bg-black/40 hover:bg-black/60 backdrop-blur-xl rounded-full text-white transition-all hover:scale-110"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Hero Section */}
      <motion.div
        layoutId={`project-hero-${project.id}`}
        className="relative w-full h-[50vh] md:h-[70vh] shrink-0 bg-black"
      >
        <video
          src={project.heroVideoUrl}
          className="w-full h-full object-cover opacity-60"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent flex items-center justify-center text-center">
          <div className="container mx-auto px-4 max-w-4xl pt-20">
            <motion.div
              initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <span className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-white font-medium uppercase tracking-wider shadow-lg">
                {project.category}
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Video Showcase Grid (2 rows x 3 cols) */}
        {project.videoGallery && project.videoGallery.length > 0 && (
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.videoGallery.map((vid, idx) => (
                <div key={idx} className="rounded-[20px] overflow-hidden aspect-[9/16] bg-black shadow-lg">
                  <video 
                    src={vid} 
                    className="w-full h-full object-cover" 
                    controls
                    preload="none"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </motion.div>
  );
};
