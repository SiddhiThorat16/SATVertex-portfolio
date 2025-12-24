// SATVertex/SATVertex-portfolio/src/pages/Experience.jsx

import { useExperience } from '../hooks/useExperience'

function formatRange(item) {
  const start = new Date(item.startDate).toLocaleDateString(undefined, {
    month: 'short',
    year: 'numeric',
  })
  const end = item.current
    ? 'Present'
    : item.endDate
    ? new Date(item.endDate).toLocaleDateString(undefined, {
        month: 'short',
        year: 'numeric',
      })
    : 'N/A'
  return `${start} – ${end}`
}

function Experience() {
  const { items, loading, error } = useExperience()

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 text-slate-100">
      <section className="rounded-3xl border border-slate-800 bg-[#050816]/90 px-6 py-8 md:px-10 md:py-10">
        <header className="mb-6">
          <p className="text-base uppercase tracking-[0.22em] text-teal-300 mb-3">
            Experience
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-50">
            Journey so far.
          </h1>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Roles and projects that shaped the way products are planned,
            built, and shipped.
          </p>
        </header>

        {loading && (
          <p className="text-sm text-slate-400">Loading experience…</p>
        )}

        {error && (
          <p className="text-sm text-red-400 bg-red-950/40 border border-red-900/60 rounded-lg px-3 py-2 inline-block">
            {error}
          </p>
        )}

        {!loading && !error && (
          <>
            {items.length === 0 ? (
              <p className="text-sm text-slate-400">
                Experience entries will appear here once added in the CMS.
              </p>
            ) : (
              <ol className="relative border-l border-slate-700 pl-4 md:pl-6 space-y-6">
                {items.map((exp) => (
                  <li key={exp._id} className="relative pl-4 md:pl-6">
                    <span className="absolute -left-1.5 md:-left-2.5 top-1 h-3 w-3 rounded-full bg-teal-400 border border-slate-900" />
                    <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h2 className="text-sm md:text-base font-semibold text-slate-50">
                          {exp.role}
                        </h2>
                        <p className="text-[11px] text-slate-400">
                          {formatRange(exp)}
                        </p>
                      </div>
                      <p className="text-xs text-slate-300 mb-1">
                        {exp.company}
                        {exp.location && ` • ${exp.location}`}
                      </p>
                      {exp.description && (
                        <p className="mt-2 text-xs text-slate-300">
                          {exp.description}
                        </p>
                      )}
                      {exp.highlights?.length > 0 && (
                        <ul className="mt-2 space-y-1 text-xs text-slate-300">
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="mt-[6px] h-1 w-1 rounded-full bg-teal-400" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </>
        )}
      </section>
    </div>
  )
}

export default Experience
