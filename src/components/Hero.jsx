import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-end pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 backdrop-blur rounded-xl p-6 md:p-8 w-full md:w-auto pointer-events-none"
        >
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Minimal. Modern. Memorable.
          </h1>
          <p className="mt-3 md:mt-4 text-gray-700 max-w-xl">
            A refined portfolio that balances clean aesthetics with interactive 3D moments.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
