import { motion } from 'framer-motion';

export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-[2px]"
      style={{ background: 'rgba(20, 184, 166, 0.1)' }}
    >
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX: progress,
          background: 'linear-gradient(90deg, #14b8a6, #22c55e)',
        }}
      />
    </motion.div>
  );
}
