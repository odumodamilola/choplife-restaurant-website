import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function Cursor() {
  const [isPointer, setIsPointer] = useState(false);
  
  const mouseX = useSpring(0, { stiffness: 400, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 400, damping: 28 });
  
  const ringX = useSpring(0, { stiffness: 150, damping: 20 });
  const ringY = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, ringX, ringY]);

  return (
    <>
      <motion.div 
        style={{ x: mouseX, y: mouseY }}
        className="cursor-dot"
        animate={{
          scale: isPointer ? 0.5 : 1,
        }}
      />
      <motion.div 
        style={{ x: ringX, y: ringY }}
        className="cursor-ring"
        animate={{
          scale: isPointer ? 1.5 : 1,
        }}
      />
    </>
  );
}
