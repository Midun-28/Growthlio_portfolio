import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaseStudyModal } from "./CaseStudyModal";
import { CATEGORIES, projects, Project } from "../data/projectsData";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="projects" className="scroll-mt-16 md:scroll-mt-20 py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary mb-6"
          >
            Growthlio Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            A showcase of our creative work across industries.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 relative z-30 sticky top-16 md:top-20 bg-background/95 backdrop-blur-md py-4 shadow-sm rounded-2xl">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2 text-sm md:text-base font-medium transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-secondary"
                }`}
              >
                {category}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer rounded-[20px] bg-card border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                {/* Auto-playing preview video */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <motion.div layoutId={`project-hero-${project.id}`} className="w-full h-full">
                    <video
                      src={project.heroVideoUrl}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                    />
                  </motion.div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-xs text-white font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Minimal Label */}
                <div className="p-5 bg-white/5 backdrop-blur-xl">
                  <h3 className="text-xl font-semibold text-secondary">
                    {project.label}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-32 text-muted-foreground"
          >
            {/* Empty state as requested */}
          </motion.div>
        )}
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
