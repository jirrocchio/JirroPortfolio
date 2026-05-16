import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#f4faf7' }}
      exit={{ opacity: 0 }}
    >
      {/* Animated logo mark */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative mb-8"
      >
        {/* Spinning ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 rounded-full border-2 border-transparent"
          style={{ borderTopColor: '#1a9e6e', borderRightColor: 'rgba(26,158,110,0.2)' }}
        />
        {/* Center dot */}
        <div
          className="absolute inset-0 flex items-center justify-center font-display font-black text-xl"
          style={{ color: '#1a9e6e' }}
        >
          HJM
        </div>
      </motion.div>

      {/* Name */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-xs uppercase tracking-[0.3em] mb-6"
        style={{ color: '#3d6b57' }}
      >
        Harold Jirro I. Madrona
      </motion.p>

      {/* Progress bar */}
      <div className="w-48 h-0.5 rounded-full overflow-hidden" style={{ background: 'rgba(26,158,110,0.15)' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(to right, #1a9e6e, #22b87e)' }}
        />
      </div>
    </motion.div>
  )
}
