import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const traditions = [
  { name: 'Ayurveda', color: '#22c55e', cx: 200, cy: 100 },
  { name: 'TCM', color: '#ed7523', cx: 320, cy: 300 },
  { name: 'Naturopathy', color: '#6b8156', cx: 80, cy: 300 },
];

const connections = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 0, to: 2 },
];

const keyPoints = [
  'Trust goes up when you admit uncertainty',
  'Disagreements are more memorable than agreements',
  'It becomes a learning relationship, not a prescription',
];

export default function S06Contradictions() {
  const [isAgreement, setIsAgreement] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAgreement((v) => !v);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="snap-section noise-overlay flex items-center justify-center relative bg-dark">
      <div
        className="aqua-halo"
        style={{
          width: 600,
          height: 600,
          top: '-10%',
          right: '-10%',
          background:
            'radial-gradient(circle, rgba(237,117,35,0.06) 0%, rgba(237,117,35,0.015) 40%, transparent 70%)',
        }}
      />

      <div className="relative z-10 px-6 max-w-5xl w-full">
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-white/40 font-body mb-4"
        >
          The Real Product
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="font-heading font-extralight text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] mb-14"
        >
          <span className="text-white/90">Why Disagreements</span>
          <br />
          <span className="gradient-text-warm italic font-light">
            Are the Feature
          </span>
        </motion.h2>

        {/* SVG visualization + key points */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
            >
              {/* Glow filters */}
              <defs>
                {traditions.map((t) => (
                  <filter
                    key={t.name}
                    id={`glow-${t.name}`}
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feGaussianBlur
                      stdDeviation="8"
                      result="blur"
                    />
                    <feFlood floodColor={t.color} floodOpacity="0.3" />
                    <feComposite in2="blur" operator="in" />
                    <feMerge>
                      <feMergeNode />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                ))}
              </defs>

              {/* Connection lines */}
              {connections.map((conn, i) => {
                const from = traditions[conn.from];
                const to = traditions[conn.to];
                return (
                  <motion.line
                    key={i}
                    x1={from.cx}
                    y1={from.cy}
                    x2={to.cx}
                    y2={to.cy}
                    animate={{
                      stroke: isAgreement ? '#14b8a6' : '#ed7523',
                      strokeDasharray: isAgreement ? '0' : '8 6',
                      opacity: isAgreement ? 0.5 : 0.7,
                    }}
                    transition={{ duration: 0.8 }}
                    strokeWidth={2}
                  />
                );
              })}

              {/* Tradition circles */}
              {traditions.map((t) => (
                <g key={t.name}>
                  {/* Glow fill */}
                  <motion.circle
                    cx={t.cx}
                    cy={t.cy}
                    r={80}
                    fill={t.color}
                    animate={{
                      opacity: isAgreement ? 0.04 : 0.07,
                    }}
                    transition={{ duration: 0.8 }}
                  />
                  {/* Stroke ring */}
                  <motion.circle
                    cx={t.cx}
                    cy={t.cy}
                    r={80}
                    fill="none"
                    stroke={t.color}
                    strokeWidth={1.5}
                    animate={{ opacity: isAgreement ? 0.4 : 0.6 }}
                    transition={{ duration: 0.8 }}
                    filter={`url(#glow-${t.name})`}
                  />
                  {/* Label */}
                  <text
                    x={t.cx}
                    y={t.cy}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={t.color}
                    fontSize="13"
                    fontFamily="DM Sans, sans-serif"
                    fontWeight="500"
                    opacity={0.9}
                  >
                    {t.name}
                  </text>
                </g>
              ))}

              {/* State label */}
              <motion.text
                x={200}
                y={385}
                textAnchor="middle"
                fontSize="11"
                fontFamily="DM Sans, sans-serif"
                fontWeight="500"
                letterSpacing="0.15em"
                animate={{
                  fill: isAgreement ? '#14b8a6' : '#ed7523',
                }}
                transition={{ duration: 0.8 }}
              >
                {isAgreement ? 'AGREEMENT' : 'DISAGREEMENT'}
              </motion.text>
            </svg>
          </motion.div>

          {/* Key points */}
          <div className="space-y-6">
            {keyPoints.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <span className="w-2 h-2 rounded-full bg-brand-terracotta mt-2 shrink-0" />
                <span className="text-white/60 text-base md:text-lg font-light font-body">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Big quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="font-heading font-extralight italic text-[clamp(1.5rem,3.5vw,2.8rem)] leading-[1.15] text-center max-w-3xl mx-auto gradient-text-teal mb-6"
        >
          &ldquo;The food is the Trojan horse. The contradiction engine is the
          product.&rdquo;
        </motion.blockquote>

        {/* Smaller note */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-white/30 text-sm font-body font-light text-center max-w-2xl mx-auto leading-relaxed"
        >
          No other app does this — RLHF trains LLMs to smooth over
          disagreements; Triveda&rsquo;s architecture prevents that.
        </motion.p>
      </div>
    </section>
  );
}
