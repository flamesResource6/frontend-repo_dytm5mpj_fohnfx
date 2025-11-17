import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            Building clean, useful things for the web
          </motion.h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I combine thoughtful design with robust engineering to create digital products
            that feel effortless. My work is guided by clarity, performance, and a strong
            sense of craft. I value systems, small details, and communication.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Outside of work, I explore new mediums and processes to stay curious and
            broaden perspective.
          </p>
        </div>
        <div className="h-72 md:h-[28rem] rounded-xl overflow-hidden border border-gray-200">
          <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </section>
    </div>
  )
}
