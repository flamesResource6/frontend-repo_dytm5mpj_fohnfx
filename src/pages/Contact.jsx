import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      // In a real deployment, post to your backend email endpoint
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks — I will get back to you soon!')
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Let’s talk</h2>
        <p className="mt-3 text-gray-600">Tell me about your project or just say hello.</p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border border-gray-200 rounded-xl p-6 bg-white"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700">Name</label>
            <input required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-rose-400" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input required type="email" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-rose-400" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-700">Message</label>
            <textarea required rows={6} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-rose-400" />
          </div>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <button type="submit" className="px-5 py-2 rounded-md bg-rose-600 text-white hover:bg-rose-700 transition-colors">
            Send
          </button>
          <span className="text-sm text-gray-600">{status}</span>
        </div>
      </motion.form>
    </section>
  )
}
