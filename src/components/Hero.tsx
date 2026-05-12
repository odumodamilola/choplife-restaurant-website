import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[100vw] h-[100vw] lg:w-[60vw] lg:h-[60vw] bg-primary blur-[160px] rounded-full pointer-events-none" 
      />
      
      <div className="container-xl relative z-10 py-20 lg:py-0">
        <div className="max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8 lg:mb-12"
          >
            <div className="h-[2px] w-8 lg:w-16 bg-accent" />
            <span className="font-display text-[10px] lg:text-[12px] font-bold tracking-[0.5em] text-accent uppercase">
              The Architectural Soul of Lagos
            </span>
          </motion.div>

          <h1 className="mb-10 lg:mb-16">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="block text-foreground"
            >
              EAT WELL,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="block text-primary italic relative inline-block"
            >
              LIVE WELL.
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute -bottom-2 lg:-bottom-4 left-0 right-0 h-[2px] lg:h-[4px] bg-border origin-left"
              />
            </motion.span>
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-10 lg:gap-20">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-muted font-sans text-base lg:text-xl max-w-sm lg:max-w-md leading-relaxed"
            >
              Welcome to the heart of West African flavor. We take the recipes of our ancestors and serve them with a modern, soulful twist. This isn't just a meal—it's a celebration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-4 lg:gap-6"
            >
              <a
                href="#african-dishes"
                className="bg-primary hover:bg-primary-dark text-white px-8 lg:px-12 py-4 lg:py-6 rounded-full font-display text-[11px] lg:text-[13px] font-bold tracking-[0.2em] transition-all hover:scale-105 hover:shadow-[0_20px_50px_rgba(227,30,36,0.2)]"
              >
                CURATED MENU
              </a>
              <button className="group flex items-center gap-4 px-6 lg:px-8 py-4 lg:py-6 font-display text-[11px] lg:text-[13px] font-bold tracking-[0.2em] text-muted hover:text-foreground transition-colors">
                <Play size={16} className="text-primary group-hover:scale-110 transition-transform" />
                OUR STORY
                <motion.div 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-10 h-[1px] bg-border group-hover:bg-primary transition-colors"
                />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-8 lg:right-20 bottom-10 lg:bottom-20 hidden sm:flex flex-col items-center gap-12 lg:gap-24 font-display text-[10px] font-bold tracking-[0.8em] text-muted-foreground uppercase vertical-text translate-y-[-10%] lg:translate-y-0">
        <div className="w-[1px] h-20 lg:h-40 bg-border" />
        <span className="rotate-180">OSOGBO · LAGOS · LONDON</span>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-[var(--spacing-container)] lg:translate-x-0 hidden md:block"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary/40 to-transparent" />
      </motion.div>
    </section>
  );
}
