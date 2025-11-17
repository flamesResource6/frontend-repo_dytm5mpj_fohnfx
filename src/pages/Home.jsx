import Hero from '../components/Hero'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="">
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {[{
            title: 'About', desc: 'A concise snapshot of who I am and how I think.', to: '/about'
          }, {
            title: 'Projects', desc: 'Selected work focused on craft, performance, and results.', to: '/projects'
          }, {
            title: 'Skills', desc: 'Tools and techniques I use to deliver premium experiences.', to: '/skills'
          }].map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="group border border-gray-200 rounded-xl p-6 hover:border-rose-300 hover:shadow-sm transition-all"
            >
              <h3 className="text-xl font-medium text-gray-900">{card.title}</h3>
              <p className="mt-2 text-gray-600">{card.desc}</p>
              <Link to={card.to} className="mt-4 inline-flex items-center gap-2 text-rose-600">
                Explore <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
