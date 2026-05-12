import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { MENU_CATEGORIES } from '../constants';
import ThemeToggle from './ThemeToggle';
import choplifeLogo from '../assets/images/Choplife-bistro-logo-04.png';

interface NavbarProps {
  activeCategory: string;
  setView: (view: 'home' | 'details') => void;
}

export default function Navbar({ activeCategory, setView }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'shadow-sm' : ''}`}>
        <div className={`backdrop-blur-2xl border-b border-border h-16 md:h-20 flex items-center justify-between px-6 md:px-12 transition-colors duration-500 ${isScrolled ? 'bg-background/95' : 'bg-background/80'}`}>
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              setView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group"
          >
            <img src={choplifeLogo} alt="Choplife Bistro" className="h-16 md:h-[4.5rem] w-auto object-contain" />
          </a>

          {/* Desktop Category Navigation */}
          <div className="hidden lg:flex items-center gap-1 overflow-x-auto no-scrollbar max-w-2xl px-4 translate-y-[1px]">
            <button
              onClick={() => setView('details')}
              className="px-4 py-2 font-display text-[10px] uppercase font-bold tracking-[0.2em] text-muted hover:text-primary transition-all whitespace-nowrap border-b-2 border-transparent"
            >
              Our Story
            </button>
            <div className="w-[1px] h-4 bg-border mx-2" />
            {MENU_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className={`
                  relative px-4 py-2 font-display text-[10px] uppercase font-bold tracking-[0.2em] transition-all whitespace-nowrap border-b-2
                  ${activeCategory === cat.id 
                    ? 'text-primary border-primary' 
                    : 'text-muted border-transparent hover:text-foreground hover:border-border'}
                `}
              >
                {cat.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <a 
              href="tel:+2349053063345"
              className="hidden sm:flex items-center gap-2 font-display text-[11px] font-bold tracking-widest text-muted hover:text-primary transition-colors group"
            >
              <Phone size={13} className="group-hover:text-primary transition-colors" />
              <span className="hidden md:inline">CALL US</span>
            </a>
            
            <ThemeToggle />

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-muted hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] lg:hidden"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 250 }}
              className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-background border-l border-border p-8 flex flex-col overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-bebas text-3xl text-foreground">MENU</span>
                <button onClick={() => setIsOpen(false)} className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Close menu">
                  <X size={22} />
                </button>
              </div>

              <div className="flex flex-col gap-4 pb-12">
                <button
                  onClick={() => { setView('details'); setIsOpen(false); }}
                  className="group flex items-center justify-between py-4 border-b border-border"
                >
                  <span className="font-bebas text-3xl text-primary uppercase tracking-tight">Our Story</span>
                  <ArrowRight size={18} className="text-primary" />
                </button>
                
                {MENU_CATEGORIES.map((cat, i) => (
                  <motion.a
                    key={cat.id}
                    href={`#${cat.id}`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`
                      group flex items-center justify-between py-3 border-b border-border/50
                      ${activeCategory === cat.id ? 'border-primary/30' : ''}
                    `}
                  >
                    <span className={`font-bebas text-3xl uppercase tracking-tight transition-colors ${activeCategory === cat.id ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                      {cat.name}
                    </span>
                    <ArrowRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-border flex flex-col gap-4">
                <a href="tel:+2349053063345" className="w-full py-4 bg-primary text-white font-display text-[11px] font-bold tracking-widest uppercase rounded-xl hover:bg-primary-dark transition-colors text-center block">
                  BOOK A TABLE
                </a>
                <p className="text-center text-muted-foreground font-mono text-[9px] uppercase tracking-[0.2em]">
                  Mandela Freedom Park, Osogbo
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
