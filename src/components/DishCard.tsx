import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { MenuItem } from '../types';
import OptimizedImage from './OptimizedImage';

interface DishCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
}

export default function DishCard({ item, onSelect }: DishCardProps) {
  return (
    <motion.article
      id={item.id}
      onClick={() => onSelect(item)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`
        group relative overflow-hidden bg-surface border border-border rounded-2xl lg:rounded-3xl cursor-pointer
        hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500
        ${item.isFeatured ? 'md:col-span-2' : ''}
      `}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <OptimizedImage
          src={item.image || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&auto=format&fit=crop'}
          alt={`${item.name} - West African dish at Choplife Bistro`}
          className="w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />

        {/* Badges */}
        {item.badges && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {item.badges.map(badge => (
              <span key={badge} className="px-3 py-1.5 bg-primary/90 backdrop-blur-sm text-white font-display text-[9px] font-bold tracking-[0.15em] rounded-full">
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Price badge - top right */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-2 bg-black/60 backdrop-blur-md text-white font-mono text-sm font-bold rounded-lg border border-white/10">
            {'\u20A6'}{item.price.toLocaleString()}
          </span>
        </div>

        {/* Bottom content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
          <h3 className="text-white text-lg lg:text-2xl mb-1 uppercase group-hover:text-primary transition-colors duration-300 line-clamp-1">
            {item.name}
          </h3>
          <p className="text-white/60 font-sans text-xs lg:text-sm leading-relaxed line-clamp-2 group-hover:text-white/80 transition-colors duration-300">
            {item.description}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-5 lg:px-6 py-4 flex items-center justify-between border-t border-border/50">
        <span className="font-display text-[9px] lg:text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase">
          {item.category.replace(/-/g, ' ')}
        </span>
        <button 
          onClick={(e) => { e.stopPropagation(); onSelect(item); }}
          className="flex items-center gap-2 font-display text-[10px] lg:text-[11px] font-bold tracking-[0.15em] uppercase text-muted hover:text-primary transition-colors group/btn"
        >
          View
          <div className="w-7 h-7 rounded-full border border-border flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:border-primary group-hover/btn:text-white transition-all">
            <ArrowUpRight size={12} className="group-hover/btn:rotate-45 transition-transform" />
          </div>
        </button>
      </div>
    </motion.article>
  );
}
