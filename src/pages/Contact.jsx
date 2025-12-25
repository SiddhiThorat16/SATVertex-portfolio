// SATVertex/SATVertex-portfolio/src/pages/Contact.jsx

import { useState } from 'react'
import cmsApi from '../lib/cmsApi'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)

    try {
      await cmsApi.post('/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 text-slate-100">
      <section className="rounded-3xl border border-slate-800 bg-[#050816]/90 px-6 py-8 md:px-10 md:py-10">
        {/* Header */}
        <header className="mb-6">
          <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-teal-300 mb-2">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-50">
            Let&apos;s talk about your next project.
          </h1>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Share a bit about what you&apos;re building or what you&apos;re looking
            for. You&apos;ll get a reply as soon as possible.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr),minmax(0,1.2fr)] items-start">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 focus:border-teal-400 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 focus:border-teal-400 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 focus:border-teal-400 focus:outline-none"
                placeholder="What would you like to discuss?"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 focus:border-teal-400 focus:outline-none resize-none"
                placeholder="Tell me a bit about your idea, project, or opportunity."
              />
            </div>

            {status === 'success' && (
              <p className="text-xs text-emerald-300">
                Thanks for reaching out! Your message has been sent.
              </p>
            )}
            {status === 'error' && (
              <p className="text-xs text-red-400">
                Something went wrong. Please try again in a moment.
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center rounded-xl bg-teal-400 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-teal-400/30 hover:bg-teal-300 disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {submitting ? 'Sending…' : 'Send message'}
            </button>
          </form>

          {/* Side info */}
          <aside className="space-y-4 text-sm text-slate-300">
            <br />
            {/* <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4">
              <h2 className="text-sm font-semibold text-slate-50 mb-2">
                Prefer email?
              </h2>
              <p className="text-xs text-slate-400 mb-1">
                You can also reach out directly:
              </p>
              <a
                href="mailto:youremail@example.com"
                className="text-xs text-teal-300 hover:text-teal-200 break-all"
              >
                youremail@example.com
              </a>
            </div> */}

            <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4">
              <h2 className="text-sm font-semibold text-slate-50 mb-2">
                What to include
              </h2>
              <ul className="space-y-1 text-xs text-slate-400">
                <li>• A short intro about you or your team</li>
                <li>• What you&apos;re building or hiring for</li>
                <li>• Timeline and any key requirements</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

export default Contact
