import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const sections = [
  'Intro', 'Problem', 'Insight', 'Triveda',
  'Demo', 'Contradictions', 'Architecture',
  'Comparison', 'Audience', 'Approach', 'Next'
];

export default function Navigation({ activeSection }: { activeSection: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (index: number) => {
    const allSections = document.querySelectorAll('main > section');
    allSections[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-3"
        >
          {sections.map((label, i) => (
            <button
              key={label}
              onClick={() => scrollTo(i)}
              className="group flex items-center gap-3 cursor-pointer bg-transparent border-none"
              aria-label={`Navigate to ${label}`}
            >
              <span
                className={`text-xs font-body tracking-wider uppercase transition-all duration-300 ${
                  activeSection === i
                    ? 'opacity-100 translate-x-0 text-brand-teal'
                    : 'opacity-0 translate-x-2 text-white/50 group-hover:opacity-70 group-hover:translate-x-0'
                }`}
              >
                {label}
              </span>
              <span
                className={`block rounded-full transition-all duration-300 ${
                  activeSection === i
                    ? 'w-3 h-3 bg-brand-teal shadow-[0_0_12px_rgba(20,184,166,0.5)]'
                    : 'w-2.5 h-2.5 bg-white/30 group-hover:bg-white/50'
                }`}
              />
            </button>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
