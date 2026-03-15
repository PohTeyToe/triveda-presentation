import { motion } from 'framer-motion';
import { phases, metrics } from '../../data/timeline';

export default function S10Approach() {
  return (
    <section className="snap-section noise-overlay flex items-center justify-center relative bg-dark">
      <div className="aqua-halo" style={{ width: 700, height: 700, top: '-15%', left: '-10%' }} />

      <div className="relative z-10 px-6 max-w-6xl w-full py-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-white/40 font-body mb-4"
        >
          The Plan
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="font-heading font-extralight text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] mb-10"
        >
          <span className="text-white/90">How We Build This</span>
        </motion.h2>

        {/* Opening callout */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-3xl font-light text-brand-teal/80 mb-14"
        >
          Start simple. Build on what works.
        </motion.p>

        {/* Two-phase timeline */}
        <div className="space-y-6 mb-14 max-w-3xl">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.label}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-8"
              style={{ borderLeftWidth: 3, borderLeftColor: phase.color }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="text-sm font-body font-medium tracking-wide"
                  style={{ color: phase.color }}
                >
                  {phase.label}
                </span>
                <span className="text-white/30 text-sm font-body">
                  {phase.weeks}
                </span>
              </div>

              <h3 className="font-heading text-xl font-light text-white/85 mb-5">
                {phase.title}
              </h3>

              <ul className="space-y-2.5">
                {phase.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: phase.color }}
                    />
                    <span className="text-white/50 font-light font-body text-sm leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Key quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <div className="flex items-start gap-4">
            <div className="w-[2px] min-h-[50px] bg-brand-teal/40 rounded-full shrink-0 mt-1 self-stretch" />
            <p className="text-white/40 font-light font-body text-sm md:text-base italic leading-relaxed">
              3 questions to start. One card immediately. One question per day
              after that. By week two, the profile is complete — and the user
              never felt like they were filling out a form.
            </p>
          </div>
        </motion.div>

        {/* KPIs to track */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 font-body mb-6">
            KPIs to Track
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-5"
              >
                <p className="text-brand-teal font-heading text-xl font-light mb-2">
                  {m.target}
                </p>
                <p className="text-white/40 font-body text-xs leading-snug">
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
