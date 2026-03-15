import { motion } from 'framer-motion';
import { audiences, headspaceAnalogy } from '../../data/audiences';

export default function S09Audience() {
  return (
    <section className="snap-section noise-overlay flex items-center justify-center relative bg-dark">
      <div className="aqua-halo" style={{ width: 600, height: 600, bottom: '-10%', right: '-10%' }} />

      <div className="relative z-10 px-6 max-w-6xl w-full py-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-white/40 font-body mb-4"
        >
          Target Audience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="font-heading font-extralight text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] mb-16"
        >
          <span className="text-white/90">Who It's For</span>
        </motion.h2>

        {/* Audience cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {audiences.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-8"
            >
              {/* Priority badge */}
              <span
                className="inline-block px-3 py-1 rounded-full text-[11px] tracking-wide font-body border mb-5"
                style={{
                  borderColor: `${a.color}50`,
                  color: a.color,
                  backgroundColor: `${a.color}10`,
                }}
              >
                {a.priority}
              </span>

              <h3 className="font-heading text-xl font-light text-white/90 mb-5">
                {a.name}
              </h3>

              {/* Bullet list */}
              <ul className="space-y-3 mb-6">
                {a.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: a.color }}
                    />
                    <span className="text-white/50 font-light font-body text-sm leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Devil's advocate block */}
              {a.devilsAdvocate && (
                <div
                  className="border-l-2 pl-4 mt-4"
                  style={{ borderColor: `${a.color}60` }}
                >
                  <p className="text-white/40 font-light font-body text-sm italic leading-relaxed">
                    {a.devilsAdvocate}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-white/35 font-light font-body text-sm md:text-base mb-10 max-w-2xl"
        >
          We stress-tested these against a devil's advocate. Audience 1 held up.
          The others didn't.
        </motion.p>

        {/* Headspace analogy callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-brand-terracotta/20 bg-brand-terracotta/[0.04] backdrop-blur-sm p-8 max-w-3xl"
        >
          <div className="flex items-start gap-4">
            <div className="w-[3px] rounded-full bg-brand-terracotta/50 shrink-0 self-stretch" />
            <div>
              <h4 className="font-heading text-lg font-light text-brand-terracotta/90 mb-3">
                {headspaceAnalogy.title}
              </h4>
              <p className="text-white/50 font-light font-body text-sm leading-relaxed">
                {headspaceAnalogy.content}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
