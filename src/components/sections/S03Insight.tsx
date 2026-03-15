import { motion } from 'framer-motion';

const insights = [
  {
    number: '01',
    title: 'Constitutional identity as organizing principle',
    detail: 'Genomic validation — 52 SNPs, Nature publication',
  },
  {
    number: '02',
    title: 'Food as daily surface',
    detail: 'Only universal daily behavior',
  },
  {
    number: '03',
    title: 'Evidence transparency as trust architecture',
    detail: '#1 barrier is trust',
  },
];

export default function S03Insight() {
  return (
    <section className="snap-section noise-overlay flex items-center justify-center relative bg-dark">
      <div
        className="aqua-halo"
        style={{
          width: 600, height: 600, bottom: '-10%', right: '-5%',
          background: 'radial-gradient(circle, rgba(107,129,86,0.08) 0%, rgba(107,129,86,0.02) 40%, transparent 70%)',
        }}
      />

      <div className="relative z-10 px-6 max-w-5xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-white/40 font-body mb-4"
        >
          What survived adversarial review across 8 agents
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="font-heading font-extralight text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] mb-14"
        >
          <span className="gradient-text-sage italic font-light">What survived.</span>
        </motion.h2>

        {/* Three insight cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {insights.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-8"
            >
              <span className="text-brand-sage text-sm font-body tracking-widest mb-4 block">
                {item.number}
              </span>
              <h3 className="font-heading text-xl md:text-2xl font-light text-white/90 mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-white/40 text-sm font-body font-light">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Thesis statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
          className="font-heading font-extralight italic text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.1] text-center max-w-3xl mx-auto gradient-text-teal"
        >
          Know your constitution. Eat for it. Understand why.
        </motion.p>
      </div>
    </section>
  );
}
