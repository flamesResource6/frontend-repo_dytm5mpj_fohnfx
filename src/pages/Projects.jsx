import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const projects = [
  {
    title: 'E‑commerce Performance Revamp',
    summary: 'Optimized Core Web Vitals and rebuilt product pages for a 24% conversion lift.',
  },
  {
    title: '3D Product Configurator',
    summary: 'WebGL experience that lets users customize materials and view in real time.',
  },
  {
    title: 'Design System for SaaS',
    summary: 'A cohesive component library with accessibility and theming baked in.',
  },
]

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Selected Projects</h2>
        <p className="mt-3 text-gray-600">Case studies that show process, decisions, and results.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            className="border border-gray-200 rounded-xl overflow-hidden group hover:border-rose-300"
          >
            <div className="h-40 bg-white">
              <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{p.summary}</p>
              <button className="mt-4 text-rose-600 text-sm">Read case →</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
