import { motion } from 'framer-motion';
import { phases, metrics, killDate } from '../../data/timeline';

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
          Strategic Approach
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="font-heading font-extralight text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] mb-10"
        >
          <span className="text-white/90">Test the Thesis First</span>
        </motion.h2>

        {/* Opening callout */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-3xl font-light text-brand-terracotta/80 mb-14"
        >
          NOT a 7-week build.
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
                {i === 1 && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] tracking-wide font-body border border-brand-terracotta/40 text-brand-terracotta/80 bg-brand-terracotta/[0.08]">
                    IF validated
                  </span>
                )}
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
              The constitution card is the product. The daily food card is the
              retention mechanism. Don't build retention until you've proven
              the product.
            </p>
          </div>
        </motion.div>

        {/* Kill-date callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-red-500/20 bg-red-500/[0.04] backdrop-blur-sm p-8 max-w-3xl mb-14"
        >
          <h4 className="font-heading text-lg font-light text-red-400/90 mb-4">
            Kill-date
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <p className="text-[11px] tracking-wide uppercase text-white/30 font-body mb-1">
                Trigger
              </p>
              <p className="text-white/70 font-light font-body text-sm">
                {killDate.trigger}
              </p>
            </div>
            <div>
              <p className="text-[11px] tracking-wide uppercase text-white/30 font-body mb-1">
                Target
              </p>
              <p className="text-white/70 font-light font-body text-sm">
                {killDate.target}
              </p>
            </div>
            <div>
              <p className="text-[11px] tracking-wide uppercase text-white/30 font-body mb-1">
                Kill at
              </p>
              <p className="text-red-400/80 font-light font-body text-sm">
                {killDate.kill}
              </p>
            </div>
            <div>
              <p className="text-[11px] tracking-wide uppercase text-white/30 font-body mb-1">
                Timeline
              </p>
              <p className="text-white/70 font-light font-body text-sm">
                {killDate.timeline}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Success metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 font-body mb-6">
            Success Metrics
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
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
