import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Utensils } from 'lucide-react';
import { MENU_CATEGORIES } from '../constants';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  activeCategory: string;
  setView: (view: 'home' | 'details') => void;
}

export default function Navbar({ activeCategory, setView }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500">
        <div className="bg-background/80 backdrop-blur-2xl border-b border-border h-16 md:h-20 flex items-center justify-between px-6 md:px-12">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              setView('home');
              window.scrollTo(0, 0);
              window.location.hash = 'home';
            }}
            className="font-bebas text-3xl md:text-4xl tracking-wider flex items-center group"
          >
            <span className="text-foreground">CHOP</span>
            <span className="text-primary italic ml-1 group-hover:text-accent transition-colors">LIFE</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 overflow-x-auto no-scrollbar max-w-2xl px-4 translate-y-[1px]">
            <button
              onClick={() => setView('details')}
              className="px-4 py-2 font-display text-[10px] uppercase font-bold tracking-[0.2em] text-muted hover:text-primary transition-all whitespace-nowrap border-b-2 border-transparent"
            >
              Our Standards
            </button>
            <div className="w-[1px] h-4 bg-border mx-2" />
            {MENU_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className={`
                  px-4 py-2 font-display text-[10px] uppercase font-bold tracking-[0.2em] transition-all whitespace-nowrap border-b-2
                  ${activeCategory === cat.id 
                    ? 'text-primary border-primary bg-primary/5' 
                    : 'text-muted border-transparent hover:text-foreground'}
                `}
              >
                {cat.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 lg:gap-8">
            <button className="hidden sm:flex items-center gap-3 font-display text-[11px] font-bold tracking-widest text-muted hover:text-foreground transition-colors group">
              <Utensils size={14} className="group-hover:text-primary transition-colors" />
              RESERVATIONS
            </button>
            
            <ThemeToggle />

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-muted hover:text-foreground transition-colors"
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] lg:hidden"
          >
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-surface border-l border-border p-8 flex flex-col">
              <div className="flex justify-between items-center mb-12">
                <span className="font-bebas text-2xl text-foreground">MENU</span>
                <button onClick={() => setIsOpen(false)} className="p-2 text-muted-foreground"><X size={20} /></button>
              </div>

              <div className="flex flex-col gap-6 overflow-y-auto no-scrollbar pb-12">
                <button
                  onClick={() => { setView('details'); setIsOpen(false); }}
                  className="group flex items-center justify-between py-4 border-b border-border text-primary font-bebas text-4xl uppercase tracking-tight"
                >
                  Our Standards
                  <ArrowRight size={20} />
                </button>
                {MENU_CATEGORIES.map((cat, i) => (
                  <motion.a
                    key={cat.id}
                    href={`#${cat.id}`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`
                      group flex items-center justify-between py-2 border-b border-border
                      ${activeCategory === cat.id ? 'text-primary' : 'text-muted'}
                    `}
                  >
                    <span className="font-bebas text-4xl uppercase tracking-tight group-hover:text-primary transition-colors text-foreground">
                      {cat.name}
                    </span>
                    <ArrowRight size={20} className="translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-primary" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-border flex flex-col gap-4">
                <button className="w-full py-4 bg-primary text-white font-display text-[11px] font-bold tracking-widest uppercase rounded-xl hover:bg-primary-dark transition-colors">
                  BOOK A TABLE
                </button>
                <p className="text-center text-muted-foreground font-mono text-[9px] uppercase tracking-[0.2em]">
                  15 Choplife Avenue, Victoria Island
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
