import { useEffect, useState, useRef } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DishCard from './components/DishCard';
import DetailsPage from './components/DetailsPage';
import FoodDetailsPage from './components/FoodDetailsPage';
import { MENU_CATEGORIES, MENU_ITEMS } from './constants';
import { MenuItem } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin, Instagram, Twitter, Facebook, Music, ExternalLink, Mail } from 'lucide-react';
import choplifeVideo from './assets/videos/choplifebistroo (@choplifebistroo).mp4';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('');
  const [currentView, setCurrentView] = useState<'home' | 'details'>('home');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (selectedItem) {
      window.scrollTo(0, 0);
    }
  }, [selectedItem]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id) {
            setActiveCategory(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    MENU_CATEGORIES.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <Cursor />
      <div className="noise-overlay" />
      <Navbar activeCategory={activeCategory} setView={setCurrentView} />
      
      <AnimatePresence mode="wait">
        {selectedItem ? (
          <FoodDetailsPage 
            key="food-details"
            item={selectedItem} 
            onBack={() => setSelectedItem(null)} 
          />
        ) : currentView === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <main>
              <Hero />

              <section className="py-20 lg:py-40">
                <div className="container-xl">
                  {MENU_CATEGORIES.map((cat) => (
                    <div 
                      key={cat.id} 
                      id={cat.id}
                      className="mb-24 lg:mb-48 scroll-mt-24 lg:scroll-mt-32"
                      ref={el => { sectionRefs.current[cat.id] = el; }}
                    >
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-border pb-8 lg:pb-12 mb-12 lg:mb-20 gap-8"
                      >
                        <div className="max-w-2xl">
                          <span className="font-display text-[9px] lg:text-[11px] font-bold tracking-[0.5em] text-primary uppercase block mb-4 lg:mb-6">
                            {cat.label}
                          </span>
                          <h2 className="tracking-tight leading-none uppercase text-foreground">
                            {cat.name}
                          </h2>
                        </div>
                        <div className="hidden md:flex flex-col items-end">
                          <span className="font-mono text-[10px] lg:text-xs text-muted-foreground mb-4 tracking-[0.2em]">/ {cat.count.toString().padStart(2, '0')}</span>
                          <div className="h-[2px] w-24 lg:w-40 bg-gradient-to-r from-primary/40 to-transparent" />
                        </div>
                      </motion.div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-10">
                        {MENU_ITEMS.filter(item => item.category === cat.id).map(item => (
                          <DishCard key={item.id} item={item} onSelect={setSelectedItem} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Story Section */}
              <section id="about" className="py-20 lg:py-48 bg-surface-soft/20 border-y border-border relative overflow-hidden">
                <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                  <div className="relative perspective-1000 order-2 lg:order-1">
                     <motion.div 
                      initial={{ rotateY: -15, rotateX: 10, opacity: 0 }}
                      whileInView={{ rotateY: 0, rotateX: 0, opacity: 1 }}
                      transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                      className="aspect-square lg:aspect-[4/5] bg-gradient-to-br from-surface to-background border border-border rounded-[2rem] lg:rounded-[4rem] overflow-hidden relative"
                     >
                       <video 
                        src={choplifeVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                       />
                       <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                     </motion.div>
                  </div>

                  <div className="max-w-2xl order-1 lg:order-2">
                    <span className="font-display text-[11px] lg:text-[13px] font-bold tracking-[0.5em] text-primary uppercase block mb-6 lg:mb-10">Our Roots</span>
                    <h2 className="mb-8 lg:mb-12 text-foreground">MORE THAN A RESTAURANT. <span className="text-primary italic">A CELEBRATION.</span></h2>
                    <p className="text-muted text-lg lg:text-2xl leading-relaxed mb-12 font-sans italic lg:not-italic lg:text-muted/80">
                      At Choplife, food is a love language. We take the bold, smoky, soulful flavors passed down through generations and serve them in a space designed to make you feel like royalty. Every plate is a love letter to West African heritage.
                    </p>
                    
                    <button 
                      onClick={() => setCurrentView('details')}
                      className="group flex items-center gap-4 text-primary font-display text-[11px] font-bold tracking-[0.2em] uppercase mb-12 hover:gap-6 transition-all"
                    >
                      Our Philosophy
                      <ArrowRight size={14} />
                    </button>

                    <div className="grid grid-cols-2 gap-12 lg:gap-20">
                      {[
                        { label: "Generations of Taste", val: "100+" },
                        { label: "Crafted Dishes", val: "50+" },
                        { label: "Community First", val: "ALWAYS" },
                        { label: "Joy Factor", val: "100%" }
                      ].map((stat, i) => (
                        <motion.div 
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                        >
                          <div className="font-bebas text-5xl lg:text-7xl mb-2 text-foreground">{stat.val}</div>
                          <div className="font-display text-[9px] lg:text-[11px] font-bold tracking-[0.3em] text-muted-foreground uppercase">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Location Section */}
              <section id="location" className="py-20 lg:py-48">
                <div className="container-xl">
                   <div className="relative border border-border rounded-[2rem] lg:rounded-[5rem] overflow-hidden bg-surface shadow-2xl group">
                      {/* Abstract Interactive Glow */}
                      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full hidden lg:block bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none" />
                      
                      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
                        <div className="p-10 lg:p-24 border-b lg:border-b-0 lg:border-r border-border">
                          <span className="font-display text-[10px] lg:text-[12px] font-bold tracking-[0.4em] text-accent uppercase block mb-8 lg:mb-12">Visit Us</span>
                          <h2 className="mb-12 lg:mb-20 uppercase text-foreground">EXPERIENCE <br/> <span className="text-primary italic">.</span></h2>
                          
                          <div className="flex flex-col gap-10 lg:gap-16 mb-16 lg:mb-24">
                             <div>
                                <h4 className="font-display text-[10px] lg:text-[12px] font-bold tracking-[0.3em] uppercase text-primary mb-4">Our Home</h4>
                                <p className="text-muted font-sans text-xl lg:text-3xl leading-tight">
                                   1, Mandela Freedom Park,<br />
                                   Alekunwodo, Osogbo,<br />
                                   Nigeria
                                </p>
                             </div>
                             <div className="grid grid-cols-2 gap-8">
                                <div>
                                  <h4 className="font-display text-[9px] font-bold tracking-[0.3em] uppercase text-muted-foreground mb-3">Service Hours</h4>
                                  <p className="text-muted font-sans text-sm tracking-wide">11:00 — 23:00 DAILY</p>
                                </div>
                                <div>
                                  <h4 className="font-display text-[9px] font-bold tracking-[0.3em] uppercase text-muted-foreground mb-3">Priority Line</h4>
                                  <p className="text-muted font-sans text-sm tracking-wide">+234 905 306 3345</p>
                                </div>
                             </div>
                          </div>

                          <div className="flex flex-wrap gap-4 lg:gap-6">
                            <a href="tel:+2349053063345" className="bg-foreground text-background px-10 py-5 rounded-xl font-display text-[11px] font-bold tracking-[0.2em] hover:bg-foreground/80 transition-all text-center flex-1 sm:flex-none">VOICE CALL</a>
                            <button className="border border-border px-10 py-5 rounded-xl font-display text-[11px] font-bold tracking-[0.2em] hover:border-primary transition-all text-center flex-1 sm:flex-none uppercase text-foreground">Digital Booking</button>
                          </div>
                        </div>

                        <div className="h-[400px] lg:h-auto bg-surface-soft flex items-center justify-center relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                           <span className="font-bebas text-[15vmax] text-muted-foreground/5 select-none">MAPPING</span>
                           {/* Floating Map Marker */}
                           <motion.div 
                              animate={{ y: [0, -20, 0] }}
                              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                              className="absolute text-primary"
                           >
                             <MapPin size={100} strokeWidth={1} />
                           </motion.div>
                        </div>
                      </div>
                   </div>
                </div>
              </section>
            </main>

            <footer className="py-20 lg:py-32 border-t border-border bg-surface-soft">
               <div className="container-xl">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 lg:gap-0 mb-20 lg:mb-32">
                     <div>
                        <div className="font-bebas text-6xl lg:text-9xl leading-none mb-6 text-foreground">
                          CHOP<span className="text-primary italic">LIFE.</span>
                        </div>
                        <p className="text-muted-foreground font-display text-xs lg:text-sm tracking-[0.3em] uppercase">Bold West African flavors, beautifully served.</p>
                     </div>
                     
                     <div className="flex flex-col sm:flex-row gap-10 lg:gap-20">
                        <a href="mailto:choplifebistrooo@gmail.com" className="font-display text-[10px] lg:text-[12px] font-bold tracking-[0.4em] uppercase text-muted hover:text-primary transition-colors flex items-center gap-4 group">
                          <Mail size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                          choplifebistrooo@gmail.com
                        </a>
                        {[
                          { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/choplifebristoo' },
                          { name: 'TikTok', icon: Music, url: 'https://tiktok.com/@choplifebristoo' },
                          { name: 'Facebook', icon: Facebook, url: '#' }
                        ].map(social => (
                          <a key={social.name} href={social.url} className="font-display text-[10px] lg:text-[12px] font-bold tracking-[0.4em] uppercase text-muted hover:text-primary transition-colors flex items-center gap-4 group">
                            <social.icon size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                            {social.name}
                            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ))}
                     </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border gap-8">
                     <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.4em] text-center md:text-left">
                        © 2026 CHOPLIFE BISTRO GROUP · DESIGNED FOR THE FUTURE.
                     </div>
                     <div className="flex gap-8 text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
                        <a href="#" className="hover:text-foreground">Privacy</a>
                        <a href="#" className="hover:text-foreground">Terms</a>
                        <a href="#" className="hover:text-foreground" onClick={(e) => { e.preventDefault(); setCurrentView('details'); }}>Our Standards</a>
                     </div>
                  </div>
               </div>
            </footer>
          </motion.div>
        ) : currentView === 'details' ? (
          <DetailsPage key="details" onBack={() => {
            setCurrentView('home');
            window.scrollTo(0, 0);
          }} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
