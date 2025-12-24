// SATVertex/SATVertex-portfolio/src/pages/Home.jsx

import { motion } from 'framer-motion'
import { Download, Github, Linkedin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-20 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#050816]/90 px-6 py-16 md:px-10 md:py-20 mt-8">
        {/* Background accent image / gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.25)_0,_transparent_55%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.18)_0,_transparent_55%)] opacity-90"
        />

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-300 mb-3">
            Full‑Stack Web Developer
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-50 leading-tight">
            Building scalable
            <span className="block text-teal-300">
              SaaS & custom platforms.
            </span>
          </h1>

          <p className="mt-5 text-base md:text-lg text-slate-300 max-w-xl">
            Building scalable web applications as a full‑stack MERN developer, driven by a passion for blockchain and innovation to craft modern, high‑impact digital experiences.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="./public/SiddhiThoratResume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-400 px-7 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-teal-400/30 hover:bg-teal-300 transition"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>

            <div className="flex gap-3">
              <a
                href="https://github.com/SiddhiThorat16"
                className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-slate-900/60 p-3 text-slate-200 hover:border-teal-400 hover:text-teal-200 transition"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/siddhi-thorat-988577340/"
                className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-slate-900/60 p-3 text-slate-200 hover:border-teal-400 hover:text-teal-200 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-5 text-sm text-slate-400">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 hover:text-teal-300 transition"
            >
              View my projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 hover:text-teal-300 transition"
            >
              Learn about me
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          {
            num: '7+',
            label: 'Projects',
            desc: 'Production‑ready full‑stack apps and internal tools.'
          },
          {
            num: '2+',
            label: 'Years experience',
            desc: 'Hands‑on building real products end‑to‑end.'
          },
          {
            num: '100%',
            label: 'Custom builds',
            desc: 'No templates, tailored solutions for each idea.'
          }
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-slate-800 bg-[#050816]/80 p-6 hover:border-teal-400/70 hover:-translate-y-1 transition-transform"
          >
            <p className="text-3xl font-semibold text-teal-300">
              {stat.num}
            </p>
            <h3 className="mt-2 text-base font-semibold text-slate-100">
              {stat.label}
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              {stat.desc}
            </p>
          </motion.div>
        ))}
      </section>
    </div>
  )
}

export default Home
