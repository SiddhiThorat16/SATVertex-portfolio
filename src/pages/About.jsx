// SATVertex/SATVertex-portfolio/src/pages/About.jsx

import { useAbout } from '../hooks/useAbout'

function About() {
  const { about, loading, error } = useAbout()

  return (
    <div className="max-w-5xl mx-auto px-4 pt-24 pb-16 text-slate-100">
      <header className="mb-8">
        <p className="text-base uppercase tracking-[0.22em] text-teal-300 mb-3">
          About
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold">
          A developer focused on building <strong className="font-semibold">real</strong> products.
        </h1>
      </header>

      {loading && (
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-slate-800 rounded w-3/4" />
          <div className="h-4 bg-slate-800 rounded w-full" />
          <div className="flex gap-4 items-center mt-2">
            <div className="h-24 w-24 rounded-full bg-slate-800" />
            <div className="space-y-2 flex-1">
              <div className="h-4 bg-slate-800 rounded w-1/2" />
              <div className="h-3 bg-slate-800 rounded w-1/3" />
            </div>
          </div>
        </div>
      )}

      {error && (
        <p className="text-sm text-red-400 bg-red-950/40 border border-red-900/60 rounded-lg px-3 py-2 inline-block">
          {error}
        </p>
      )}

      {!loading && !error && (
        <div className="grid gap-10 md:grid-cols-[1.6fr,1fr] items-start mt-6">
          {/* Text content */}
          <div className="space-y-4">
            <p className="text-base text-slate-300 leading-relaxed">
              {about?.summary ||
                'Full‑stack MERN developer building scalable web apps, internal tools, and custom CMS platforms.'}
            </p>
            {about?.details && (
              <p className="text-sm text-slate-400 leading-relaxed whitespace-pre-line">
                {about.details}
              </p>
            )}
          </div>

          {/* Profile card */}
          <aside className="rounded-2xl border border-slate-800 bg-[#050816]/80 p-5 flex flex-col items-center gap-4">
            {about?.avatarUrl && (
              <img
                src={about.avatarUrl}
                alt={about?.name || "Profile"}
                className="h-24 w-24 rounded-full object-cover border border-slate-700"
              />
            )}
            <div className="text-center">
              <h2 className="text-lg font-semibold text-slate-50">
                {about?.name || 'Siddhi Thorat'}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                {about?.role || 'Full‑Stack MERN Developer'}
              </p>
            </div>
            <ul className="mt-3 space-y-1 text-xs text-slate-400">
              {(about?.highlights?.length ? about.highlights : [
                'Specialised in React, Node.js, MongoDB',
                'Custom CMS & real‑time collaboration tools',
                'Passion for blockchain & product thinking'
              ]).map((h, i) => (
                <li key={i}>• {h}</li>
              ))}
            </ul>
          </aside>
        </div>
      )}
    </div>
  )
}

export default About
