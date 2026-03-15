import { motion } from 'framer-motion';
import GeometricOrb from '../shared/GeometricOrb';

export default function S01Hero() {
  return (
    <section className="snap-section noise-overlay flex items-center justify-center relative bg-dark">
      <div className="aqua-halo" style={{ width: 800, height: 800, top: '-20%', right: '-10%' }} />
      <div
        className="aqua-halo"
        style={{
          width: 600, height: 600, bottom: '-15%', left: '-5%',
          background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 40%, transparent 70%)',
        }}
      />

      <GeometricOrb color="#22c55e" size={500} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <GeometricOrb color="#ed7523" size={280} delay={0.5} className="top-[15%] right-[10%] hidden lg:block" />
      <GeometricOrb color="#6b8156" size={220} delay={0.8} className="bottom-[20%] left-[8%] hidden lg:block" />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.05] text-sm tracking-[0.2em] uppercase text-white/60 font-body">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
            Product Pivot Presentation — March 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-extralight text-[clamp(3.5rem,10vw,10rem)] leading-[0.85] tracking-tight mb-8"
        >
          <span className="block gradient-text-teal italic font-light">Triveda</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-4 font-light leading-relaxed"
        >
          Three traditions. One daily food companion.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-base text-white/35 max-w-xl mx-auto font-light"
        >
          Know your constitution. Eat for it. Understand why.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/35">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-gradient-to-b from-brand-teal/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
