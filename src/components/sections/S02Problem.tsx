import { motion } from 'framer-motion';

const features = [
  'Dashboard', 'Analyze', 'Chat', 'Meal Plan', 'Blood Work',
  'Journal', 'GlowCoach', 'Scan', 'History', 'Notifications',
  'Profile', 'Practitioners', 'Saved Care', 'Daily Briefing',
  'Dosha Quiz', 'Wellness', 'Consult', 'Herbs', 'Remedies',
  'Settings', 'Reports', 'Community',
];

const bullets = [
  'Every feature is a styled form that POSTs to Gemini',
  'Episodic consultation — no daily use case',
  'No defensibility — anyone can copy the prompts',
];

export default function S02Problem() {
  return (
    <section className="snap-section noise-overlay flex items-center justify-center relative bg-dark">
      <div className="aqua-halo" style={{ width: 700, height: 700, top: '-15%', left: '-10%' }} />

      <div className="relative z-10 px-6 max-w-5xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-white/40 font-body mb-4"
        >
          The problem we all see
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="font-heading font-extralight text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] mb-12"
        >
          <span className="gradient-text-warm italic font-light">22 features.</span>{' '}
          <span className="text-white/30">Zero daily users.</span>
        </motion.h2>

        {/* Feature grid — 22 dots that dim out */}
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-11 gap-2.5 mb-14 max-w-3xl">
          {features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              viewport={{ once: true }}
              className="aspect-square rounded-lg border border-white/[0.08] bg-white/[0.04] flex items-center justify-center p-1"
            >
              <motion.span
                initial={{ color: 'rgba(255,255,255,0.6)' }}
                whileInView={{ color: 'rgba(255,255,255,0.15)' }}
                transition={{ duration: 1.2, delay: 0.8 + i * 0.04 }}
                viewport={{ once: true }}
                className="text-[9px] sm:text-[10px] text-center leading-tight font-body select-none"
              >
                {feature}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Bullet points */}
        <div className="space-y-5 max-w-2xl mb-12">
          {bullets.map((bullet, i) => (
            <motion.div
              key={bullet}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <span className="w-2 h-2 rounded-full bg-brand-terracotta mt-2 shrink-0" />
              <span className="text-white/50 text-base md:text-lg font-light font-body">{bullet}</span>
            </motion.div>
          ))}
        </div>

        {/* Reframe */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
          className="max-w-2xl flex items-start gap-4"
        >
          <div className="w-[2px] min-h-[40px] bg-brand-teal/40 rounded-full shrink-0 self-stretch" />
          <p className="text-white/45 text-sm md:text-base font-light font-body italic leading-relaxed">
            These features aren't wasted — they become backend intelligence
            that powers recommendations invisibly. The user just sees input and output.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
