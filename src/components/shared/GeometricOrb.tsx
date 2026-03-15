import { motion } from 'framer-motion';

interface GeometricOrbProps {
  color?: string;
  size?: number;
  delay?: number;
  className?: string;
}

export default function GeometricOrb({
  color = '#14b8a6',
  size = 400,
  delay = 0,
  className = '',
}: GeometricOrbProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg width={size} height={size} viewBox="0 0 400 400" fill="none">
        <motion.circle
          cx="200" cy="200" r="180"
          stroke={color} strokeWidth="0.5" strokeOpacity="0.25" fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, delay: delay + 0.3, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />
        <motion.circle
          cx="200" cy="200" r="120"
          stroke={color} strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="4 8" fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: delay + 0.6, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />
        <motion.polygon
          points="200,60 320,280 80,280"
          stroke={color} strokeWidth="0.5" strokeOpacity="0.25" fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '200px 200px' }}
        />
        <motion.polygon
          points="200,80 304,140 304,260 200,320 96,260 96,140"
          stroke={color} strokeWidth="0.5" strokeOpacity="0.15" fill="none"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '200px 200px' }}
        />
        <circle cx="200" cy="200" r="60" fill={`url(#glow-${color.replace('#', '')})`} />
        <defs>
          <radialGradient id={`glow-${color.replace('#', '')}`}>
            <stop offset="0%" stopColor={color} stopOpacity="0.15" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
