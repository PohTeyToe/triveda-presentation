import { motion } from 'framer-motion';

const scoringBars = [
  { label: 'Constitutional', weight: 30, color: '#14b8a6' },
  { label: 'Seasonal', weight: 20, color: '#22c55e' },
  { label: 'Weather', weight: 15, color: '#ed7523' },
  { label: 'Element', weight: 15, color: '#6b8156' },
  { label: 'Anti-repetition', weight: 12, color: 'rgba(255,255,255,0.4)' },
  { label: 'Organ clock', weight: 8, color: 'rgba(255,255,255,0.3)' },
];

const steps = [
  {
    title: 'Structured Food DB',
    subtitle: '50 foods \u00d7 3 traditions',
    type: 'db' as const,
  },
  {
    title: '6-Factor Scoring',
    subtitle: 'Deterministic ranking',
    type: 'scoring' as const,
  },
  {
    title: '3 Isolated LLM Calls',
    subtitle: 'Explain, never decide',
    type: 'llm' as const,
  },
  {
    title: 'Convergence Detection',
    subtitle: 'Agreement or disagreement',
    type: 'merge' as const,
  },
  {
    title: 'Daily Card',
    subtitle: 'One card, three dimensions',
    type: 'card' as const,
  },
];

const traditionDots = [
  { color: '#22c55e', label: 'Ayurveda' },
  { color: '#ed7523', label: 'TCM' },
  { color: '#6b8156', label: 'Naturopathy' },
];

function StepIcon({ type }: { type: (typeof steps)[number]['type'] }) {
  switch (type) {
    case 'db':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <ellipse cx="20" cy="10" rx="14" ry="5" stroke="#14b8a6" strokeWidth="1.5" opacity="0.7" />
          <path d="M6 10v8c0 2.76 6.27 5 14 5s14-2.24 14-5v-8" stroke="#14b8a6" strokeWidth="1.5" opacity="0.5" />
          <path d="M6 18v8c0 2.76 6.27 5 14 5s14-2.24 14-5v-8" stroke="#14b8a6" strokeWidth="1.5" opacity="0.3" />
        </svg>
      );
    case 'scoring':
      return null; // Scoring has its own bar chart
    case 'llm':
      return (
        <div className="flex gap-2 justify-center">
          {traditionDots.map((d) => (
            <div
              key={d.label}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: d.color, opacity: 0.8 }}
              title={d.label}
            />
          ))}
        </div>
      );
    case 'merge':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M8 10L20 25L32 10" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
          <path d="M20 25v10" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          <circle cx="8" cy="10" r="2" fill="#22c55e" opacity="0.6" />
          <circle cx="20" cy="10" r="2" fill="#ed7523" opacity="0.6" />
          <circle cx="32" cy="10" r="2" fill="#6b8156" opacity="0.6" />
        </svg>
      );
    case 'card':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="8" y="6" width="24" height="28" rx="4" stroke="#14b8a6" strokeWidth="1.5" opacity="0.7" />
          <line x1="14" y1="14" x2="26" y2="14" stroke="#14b8a6" strokeWidth="1" opacity="0.3" />
          <line x1="14" y1="19" x2="26" y2="19" stroke="#14b8a6" strokeWidth="1" opacity="0.3" />
          <line x1="14" y1="24" x2="22" y2="24" stroke="#14b8a6" strokeWidth="1" opacity="0.3" />
        </svg>
      );
  }
}

function Arrow({ direction }: { direction: 'right' | 'down' }) {
  if (direction === 'right') {
    return (
      <div className="hidden lg:flex items-center shrink-0 px-1">
        <div className="w-8 h-[1px] bg-brand-teal/30" />
        <svg width="8" height="12" viewBox="0 0 8 12" className="shrink-0 -ml-px">
          <path d="M1 1l5 5-5 5" stroke="#14b8a6" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  return (
    <div className="flex lg:hidden justify-center py-2">
      <svg width="12" height="8" viewBox="0 0 12 8" className="shrink-0">
        <path d="M1 1l5 5 5-5" stroke="#14b8a6" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function S07Architecture() {
  const maxWeight = Math.max(...scoringBars.map((b) => b.weight));

  return (
    <section className="snap-section noise-overlay flex items-center justify-center relative bg-dark">
      <div className="aqua-halo" style={{ width: 800, height: 800, top: '-15%', left: '-10%' }} />

      <div className="relative z-10 px-6 max-w-6xl w-full">
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-white/40 font-body mb-4"
        >
          Architecture
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="font-heading font-extralight text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] mb-14"
        >
          <span className="text-white/90">The LLM Explains.</span>
          <br />
          <span className="gradient-text-teal italic font-light">
            It Never Decides.
          </span>
        </motion.h2>

        {/* Flow diagram */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-0 lg:gap-0 mb-16">
          {steps.map((step, i) => (
            <div key={step.title} className="contents">
              {/* Step card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center lg:w-[160px] shrink-0"
              >
                {/* Icon area */}
                <div className="w-16 h-16 rounded-xl border border-white/[0.08] bg-white/[0.04] flex items-center justify-center mb-3">
                  {step.type !== 'scoring' && <StepIcon type={step.type} />}
                  {step.type === 'scoring' && (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      {[0, 1, 2, 3, 4, 5].map((j) => (
                        <motion.rect
                          key={j}
                          x="4"
                          y={3 + j * 5.5}
                          height="4"
                          rx="1"
                          fill={scoringBars[j].color}
                          initial={{ width: 0 }}
                          whileInView={{
                            width: (scoringBars[j].weight / maxWeight) * 28,
                          }}
                          transition={{
                            duration: 0.6,
                            delay: 0.6 + j * 0.08,
                          }}
                          viewport={{ once: true }}
                        />
                      ))}
                    </svg>
                  )}
                </div>

                <h3 className="text-white/80 text-sm font-body font-medium mb-1">
                  {step.title}
                </h3>
                <p className="text-white/35 text-xs font-body font-light">
                  {step.subtitle}
                </p>

                {/* Scoring breakdown — show below the scoring step */}
                {step.type === 'scoring' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-3 w-full max-w-[160px] space-y-1"
                  >
                    {scoringBars.map((bar, j) => (
                      <div key={bar.label} className="flex items-center gap-2">
                        <motion.div
                          className="h-[3px] rounded-full shrink-0"
                          style={{ backgroundColor: bar.color }}
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${(bar.weight / maxWeight) * 60}px`,
                          }}
                          transition={{
                            duration: 0.5,
                            delay: 0.8 + j * 0.06,
                          }}
                          viewport={{ once: true }}
                        />
                        <span className="text-[9px] text-white/30 font-body whitespace-nowrap">
                          {bar.label} {bar.weight}%
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* LLM dots legend */}
                {step.type === 'llm' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="mt-3 space-y-1"
                  >
                    {traditionDots.map((d) => (
                      <div key={d.label} className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: d.color, opacity: 0.7 }}
                        />
                        <span className="text-[9px] text-white/30 font-body">
                          {d.label}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <>
                  <Arrow direction="right" />
                  <Arrow direction="down" />
                </>
              )}
            </div>
          ))}
        </div>

        {/* Key callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-l-2 border-brand-teal pl-6 py-2 max-w-2xl mx-auto"
        >
          <p className="font-heading font-extralight italic text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.15] gradient-text-teal">
            The LLM explains. It never decides.
          </p>
          <p className="text-white/30 text-sm font-body font-light mt-3 leading-relaxed">
            Deterministic scoring selects the food. Three isolated LLM calls
            explain it through each tradition&rsquo;s lens. The architecture
            makes hallucination structurally impossible for food selection.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
