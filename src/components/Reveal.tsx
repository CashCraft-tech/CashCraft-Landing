import React, { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  delayMs?: number;
  variant?: 'fade-up' | 'fade' | 'scale';
  once?: boolean;
};

const variantClasses: Record<string, { from: string; to: string }> = {
  'fade-up': { from: 'opacity-0 translate-y-6', to: 'opacity-100 translate-y-0' },
  fade: { from: 'opacity-0', to: 'opacity-100' },
  scale: { from: 'opacity-0 scale-[0.97]', to: 'opacity-100 scale-100' },
};

const Reveal: React.FC<RevealProps> = ({ children, delayMs = 0, variant = 'fade-up', once = true }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer = setTimeout(() => setVisible(true), delayMs);
            if (once) observer.disconnect();
            return () => clearTimeout(timer);
          }
          if (!once) setVisible(false);
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [delayMs, once]);

  const { from, to } = variantClasses[variant];

  return (
    <div ref={ref} className={`transition-all duration-700 will-change-transform ${visible ? to : from}`}>
      {children}
    </div>
  );
};

export default Reveal;

