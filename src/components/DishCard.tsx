import React, { useRef, useState, useEffect, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { MenuItem } from '../types';

interface DishCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
}

const DishCard: React.FC<DishCardProps> = ({ item, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHashTarget, setIsHashTarget] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Mouse tilt logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: MouseEvent) => {
    if (isTouch || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    const checkHash = () => {
      setIsHashTarget(window.location.hash === `#${item.id}`);
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, [item.id]);

  return (
    <motion.div
      id={item.id}
      ref={cardRef}
      onClick={() => onSelect(item)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isTouch ? 0 : rotateX,
        rotateY: isTouch ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`
        relative group overflow-hidden bg-surface border rounded-3xl transition-all duration-500 cursor-pointer
        ${isHashTarget ? 'border-primary ring-4 ring-primary/20 shadow-[0_0_60px_rgba(227,30,36,0.2)] scale-[1.02]' : 'border-border hover:border-primary/40 shadow-2xl'}
        ${item.isFeatured ? 'md:col-span-2' : ''}
      `}
    >
      <div 
        style={{ transform: isTouch ? "none" : "translateZ(30px)" }}
        className="aspect-[4/3] lg:aspect-square xl:aspect-[4/3] overflow-hidden relative"
      >
        <img 
          src={item.image || 'https://images.unsplash.com/photo-1546767062-f8486dbc150a?w=800&q=80&auto=format'} 
          alt={item.name}
          className="w-full h-full object-cover grayscale-[0.2] transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
        
        {item.badges && (
          <div className="absolute top-4 left-4 lg:top-6 lg:left-6 flex flex-wrap gap-2">
            {item.badges.map(badge => (
              <span key={badge} className="px-3 lg:px-4 py-1.5 bg-primary text-white font-display text-[8px] lg:text-[10px] font-bold tracking-[0.2em] rounded-full shadow-lg">
                {badge}
              </span>
            ))}
          </div>
        )}

        <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 right-4 lg:right-8 flex justify-between items-end">
           <div className="max-w-[70%]">
             <h3 className="text-white text-lg lg:text-3xl mb-1 lg:mb-2 uppercase group-hover:text-primary transition-colors line-clamp-1">{item.name}</h3>
             <p className="text-white/60 font-sans text-[10px] lg:text-xs leading-relaxed line-clamp-2 transition-colors group-hover:text-white/80">
               {item.description}
             </p>
           </div>
           <div className="flex flex-col items-end gap-2 lg:gap-4">
              <span className="font-mono text-accent font-bold text-sm lg:text-xl">
                ?{item.price.toLocaleString()}
              </span>
              <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all transform group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </div>
           </div>
        </div>
      </div>

      <div 
        className="p-4 lg:p-8 flex items-center justify-between bg-surface-soft/40 border-t border-border"
      >
        <div className="flex gap-1">
          {[1,2,3].map(i => (
            <div key={i} className="w-1 lg:w-1.5 h-1 lg:h-1.5 rounded-full bg-primary/20" />
          ))}
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); onSelect(item); }}
          className="font-display text-[9px] lg:text-[11px] font-bold tracking-[0.2em] uppercase text-muted hover:text-foreground transition-all"
        >
          View More
        </button>
      </div>

      {/* Glossy overlay effect on move */}
      {!isTouch && (
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br from-white/20 via-transparent to-black/20" />
      )}
    </motion.div>
  );
};

export default DishCard;
