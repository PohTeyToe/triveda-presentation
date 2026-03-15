import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { demoScenes } from '../../data/dailyDemo';

export default function S05DailyExperience() {
  const [activeScene, setActiveScene] = useState(0);
  const [showWhy, setShowWhy] = useState(false);

  const scene = demoScenes[activeScene];

  const handleSceneSwitch = (idx: number) => {
    if (idx === activeScene) return;
    setShowWhy(false);
    setActiveScene(idx);
  };

  return (
    <section className="snap-section noise-overlay flex items-center justify-center relative bg-dark">
      <div
        className="aqua-halo"
        style={{ width: 700, height: 700, top: '-10%', left: '-10%' }}
      />
      <div
        className="aqua-halo"
        style={{
          width: 500,
          height: 500,
          bottom: '-15%',
          right: '-5%',
          background:
            'radial-gradient(circle, rgba(237,117,35,0.06) 0%, rgba(237,117,35,0.01) 40%, transparent 70%)',
        }}
      />

      <div className="relative z-10 px-6 max-w-5xl w-full flex flex-col items-center">
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-white/40 font-body mb-4"
        >
          The Daily Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="font-heading font-extralight text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] mb-12 text-center"
        >
          <span className="gradient-text-teal italic font-light">One Card.</span>{' '}
          <span className="text-white/30">Three Dimensions.</span>
        </motion.h2>

        {/* Phone frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-[320px] min-h-[580px] rounded-[2.5rem] border-2 border-white/[0.12] bg-[#141418] shadow-2xl shadow-black/40 relative overflow-hidden flex flex-col"
        >
          {/* Notch */}
          <div className="flex justify-center pt-3 pb-2 shrink-0">
            <div className="w-24 h-1 rounded-full bg-white/10" />
          </div>

          {/* Phone content */}
          <div className="flex-1 px-5 pb-5 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={scene.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                {/* Scene header */}
                <div className="mb-4 mt-2">
                  <p className="text-white/80 text-sm font-body font-medium">
                    {scene.title}
                  </p>
                  <p className="text-white/35 text-xs font-body font-light mt-1 leading-relaxed">
                    {scene.weather}
                  </p>
                </div>

                {/* Suggestion card */}
                <div className="rounded-xl border border-white/[0.1] bg-white/[0.05] backdrop-blur-sm p-4 mb-3">
                  <p className="text-white/90 text-sm font-body font-medium leading-relaxed">
                    {scene.suggestion}
                  </p>
                </div>

                {/* Rationale */}
                <p className="text-white/40 text-xs font-body font-light leading-relaxed mb-4">
                  {scene.rationale}
                </p>

                {/* Why button */}
                <button
                  onClick={() => setShowWhy((v) => !v)}
                  className="flex items-center gap-2 text-brand-teal text-xs font-body font-medium tracking-wide uppercase mb-4 hover:text-brand-teal/80 transition-colors"
                >
                  <motion.span
                    animate={{ rotate: showWhy ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block text-[10px]"
                  >
                    ▶
                  </motion.span>
                  {showWhy ? 'Hide details' : 'Why?'}
                </button>

                {/* Expanded panels */}
                <AnimatePresence>
                  {showWhy && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      {/* Convergence line */}
                      <p
                        className={`text-xs font-body font-medium leading-relaxed mb-3 ${
                          scene.isDisagreement
                            ? 'text-brand-terracotta'
                            : 'text-brand-teal'
                        }`}
                      >
                        {scene.convergenceLine}
                      </p>

                      {/* Tradition panels */}
                      <div className="space-y-2.5">
                        {scene.panels.map((panel, i) => (
                          <motion.div
                            key={panel.tradition}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className={`rounded-lg p-3 border-l-2 ${
                              scene.isDisagreement &&
                              panel.tradition === 'TCM'
                                ? 'bg-amber-500/[0.08]'
                                : 'bg-white/[0.03]'
                            }`}
                            style={{ borderLeftColor: panel.color }}
                          >
                            <p
                              className="text-[10px] font-body font-semibold tracking-wider uppercase mb-1"
                              style={{ color: panel.color }}
                            >
                              {panel.label}
                            </p>
                            <p className="text-white/50 text-[11px] font-body font-light leading-relaxed">
                              {panel.content}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Tab pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex gap-3 mt-8"
        >
          {['Convergence', 'Disagreement'].map((label, idx) => (
            <button
              key={label}
              onClick={() => handleSceneSwitch(idx)}
              className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                activeScene === idx
                  ? 'bg-brand-teal text-[#0a0a0f]'
                  : 'border border-white/20 text-white/50 hover:border-white/40 hover:text-white/70'
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
