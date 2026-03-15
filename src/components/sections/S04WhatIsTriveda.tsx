import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { traditions } from '../../data/traditions';

export default function S04WhatIsTriveda() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="snap-section noise-overlay flex items-center justify-center relative bg-dark">
      <div className="aqua-halo" style={{ width: 700, height: 700, top: '-10%', right: '-15%' }} />

      <div className="relative z-10 px-6 max-w-6xl w-full py-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-white/40 font-body mb-4"
        >
          Three Traditions
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="font-heading font-extralight text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] mb-16"
        >
          Ancient Traditions,
          <br />
          <span className="gradient-text-warm italic font-light">Modern Synthesis</span>
        </motion.h2>

        {/* Tradition cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {traditions.map((t, i) => {
            const isExpanded = expanded === i;

            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}
                onClick={() => setExpanded(isExpanded ? null : i)}
                className={`rounded-2xl border backdrop-blur-sm p-8 cursor-pointer transition-colors duration-300 ${
                  isExpanded
                    ? 'border-white/[0.15] bg-white/[0.06]'
                    : 'border-white/[0.08] bg-white/[0.04]'
                }`}
              >
                {/* Colored top line */}
                <div
                  className="h-[2px] w-12 rounded-full mb-6"
                  style={{ backgroundColor: t.color }}
                />

                <h3 className="font-heading text-2xl font-light text-white/90 mb-2">
                  {t.name}
                </h3>

                <p
                  className="text-sm font-body font-medium tracking-wide uppercase mb-4"
                  style={{ color: t.color }}
                >
                  {t.lens}
                </p>

                <p className="text-white/50 font-light font-body leading-relaxed">
                  {t.description}
                </p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 border-t border-white/[0.08] mt-6">
                        <p className="text-white/60 font-light font-body text-sm leading-relaxed mb-4">
                          {t.detail}
                        </p>
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs tracking-wide font-body border"
                          style={{
                            borderColor: `${t.color}40`,
                            color: t.color,
                            backgroundColor: `${t.color}10`,
                          }}
                        >
                          {t.role}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Key callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="flex items-start gap-4">
            <div className="w-[2px] h-full min-h-[40px] bg-brand-teal/40 rounded-full shrink-0 mt-1" />
            <p className="text-white/40 font-light font-body text-sm md:text-base italic leading-relaxed">
              Explicitly asymmetric — Ayurveda and TCM are constitutional pillars,
              Naturopathy is the empirical check.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
