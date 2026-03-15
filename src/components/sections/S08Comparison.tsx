import { motion } from 'framer-motion';
import { comparisonRows } from '../../data/comparison';

export default function S08Comparison() {
  return (
    <section className="snap-section noise-overlay flex items-center justify-center relative bg-dark">
      <div className="aqua-halo" style={{ width: 700, height: 700, top: '-10%', right: '-15%' }} />

      <div className="relative z-10 px-6 max-w-4xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-white/40 font-body mb-4"
        >
          Side by side
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="font-heading font-extralight text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] mb-14"
        >
          <span className="text-white/30 italic font-light">Before</span>{' '}
          <span className="text-white/20">vs</span>{' '}
          <span className="gradient-text-teal italic font-light">After</span>
        </motion.h2>

        {/* Desktop table */}
        <div className="hidden md:block">
          {/* Header row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 pb-4 border-b border-white/[0.1] mb-2"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-white/30 font-body" />
            <span className="text-xs tracking-[0.2em] uppercase text-brand-terracotta font-body">
              Current App
            </span>
            <span className="text-xs tracking-[0.2em] uppercase text-brand-teal font-body">
              Triveda
            </span>
          </motion.div>

          {/* Data rows */}
          {comparisonRows.map((row, i) => (
            <motion.div
              key={row.dimension}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 py-4 border-b border-white/[0.06]"
            >
              <span className="text-white/60 text-sm font-body font-medium">
                {row.dimension}
              </span>
              <span className="text-white/40 text-sm font-body font-light">
                {row.current}
              </span>
              <span className="text-brand-teal text-sm font-body font-light">
                {row.triveda}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden space-y-4">
          {comparisonRows.map((row, i) => (
            <motion.div
              key={row.dimension}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              viewport={{ once: true }}
              className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 space-y-3"
            >
              <span className="text-white/60 text-sm font-body font-medium block">
                {row.dimension}
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-[10px] tracking-wider uppercase text-brand-terracotta shrink-0 mt-0.5">
                    Now
                  </span>
                  <span className="text-white/40 text-sm font-body font-light">
                    {row.current}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[10px] tracking-wider uppercase text-brand-teal shrink-0 mt-0.5">
                    New
                  </span>
                  <span className="text-brand-teal text-sm font-body font-light">
                    {row.triveda}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
