import { motion } from 'framer-motion'

const skills = [
  { group: 'Core', items: ['JavaScript', 'TypeScript', 'Python', 'SQL'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'Framer Motion'] },
  { group: 'Backend', items: ['FastAPI', 'Node', 'MongoDB', 'PostgreSQL'] },
  { group: 'Design', items: ['Figma', 'Design Systems', 'Accessibility', 'Prototyping'] },
]

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Skills</h2>
        <p className="mt-3 text-gray-600">A focused toolset to build fast, accessible products.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((s, idx) => (
          <motion.div
            key={s.group}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="border border-gray-200 rounded-xl p-6"
          >
            <h3 className="text-lg font-medium">{s.group}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span key={item} className="px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
