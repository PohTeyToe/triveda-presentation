import { motion } from 'framer-motion';
import GeometricOrb from '../shared/GeometricOrb';

export default function S11CTA() {
  return (
    <section className="snap-section noise-overlay flex items-center justify-center relative bg-dark">
      <GeometricOrb color="#14b8a6" size={400} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="font-heading font-extralight text-[clamp(3rem,7vw,7rem)] leading-[0.9] mb-12"
        >
          <span className="gradient-text-teal italic font-light">Questions?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-6 text-left max-w-md mx-auto"
        >
          {[
            'Constitution card + progressive profiling first',
            'Daily food engine builds on top',
            'Test with close contacts, gather real feedback',
          ].map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <span className="w-2 h-2 rounded-full bg-brand-teal mt-2 shrink-0" />
              <span className="text-white/60 text-lg font-light">{point}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="https://triveda-research-chat.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12 inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-brand-teal/30 bg-brand-teal/5 hover:bg-brand-teal/10 hover:border-brand-teal/50 transition-all group"
        >
          <span className="text-brand-teal/80 group-hover:text-brand-teal transition-colors text-lg">💬</span>
          <span className="text-white/70 group-hover:text-white/90 transition-colors font-body text-sm">
            Explore the Research — Chat with the Knowledge Base
          </span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-16 bg-brand-teal/30" />
            <span className="text-xs tracking-[0.3em] uppercase text-white/30">
              Triveda — March 2026
            </span>
            <div className="h-[1px] w-16 bg-brand-teal/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
