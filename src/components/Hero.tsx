import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Architectural Background */}
      <div className="absolute inset-0 grid grid-cols-6 lg:grid-cols-12 gap-px bg-border/20 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="bg-background/80" />
        ))}
      </div>
      
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] lg:w-[80vw] lg:h-[80vw] bg-primary/5 blur-[200px] rounded-full pointer-events-none" 
      />
      
      <div className="container-xl relative z-10 py-20 lg:py-0">
        <div className="max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8 lg:mb-12"
          >
            <div className="h-[1px] w-12 lg:w-24 bg-primary" />
            <span className="font-mono text-[9px] lg:text-[10px] font-medium tracking-[0.4em] text-primary uppercase">
              Est. 2024
            </span>
          </motion.div>

          <h1 className="mb-10 lg:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="block text-foreground text-4xl lg:text-7xl xl:text-8xl font-light tracking-tight"
            >
              THE ARCHITECT OF
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="block text-foreground text-4xl lg:text-7xl xl:text-8xl font-light tracking-tight mt-2"
            >
              <span className="text-primary italic font-serif">FLAVOUR</span> IN SPACE
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-muted font-light text-sm lg:text-base max-w-sm lg:max-w-lg leading-relaxed mb-12 lg:mb-16"
          >
            Where West African culinary heritage meets contemporary architectural design. Not a restaurant—a spatial experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-6 lg:gap-8"
          >
            <a
              href="#african-dishes"
              className="group flex items-center gap-4 text-foreground hover:text-primary transition-colors"
            >
              <span className="font-mono text-[10px] font-medium tracking-[0.3em] uppercase">
                Explore Space
              </span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Location Markers */}
      <div className="absolute right-8 lg:right-20 bottom-10 lg:bottom-20 hidden sm:flex flex-col items-center gap-8 font-mono text-[9px] tracking-[0.3em] text-muted-foreground uppercase">
        <div className="w-[1px] h-16 lg:h-24 bg-border" />
        <span>OSOGBO</span>
        <span className="w-1 h-1 bg-primary rounded-full" />
        <span>LAGOS</span>
        <span className="w-1 h-1 bg-primary rounded-full" />
        <span>LONDON</span>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-[var(--spacing-container)] lg:translate-x-0 hidden md:block"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary/30 to-transparent" />
      </motion.div>
    </section>
  );
}
