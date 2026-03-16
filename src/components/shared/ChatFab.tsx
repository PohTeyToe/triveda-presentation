import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function ChatFab({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://triveda-research-chat.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 pl-3.5 pr-5 py-2.5 rounded-full border border-brand-teal/25 bg-dark/90 backdrop-blur-lg shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(20,184,166,0.1)] hover:border-brand-teal/40 hover:shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_12px_rgba(20,184,166,0.15)] transition-all duration-300 group cursor-pointer"
          title="Chat with the research"
        >
          <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-brand-teal/10 group-hover:bg-brand-teal/20 transition-colors">
            <MessageCircle className="w-3.5 h-3.5 text-brand-teal" />
            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-40" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal" />
            </span>
          </span>
          <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors font-body">
            Ask the research
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
