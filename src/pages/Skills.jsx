// SATVertex/SATVertex-portfolio/src/pages/Skills.jsx

import { useSkills } from '../hooks/useSkills'

const LEVEL_COLORS = {
  Beginner: 'bg-slate-700',
  Intermediate: 'bg-indigo-500',
  Advanced: 'bg-teal-400'
}

const LEVEL_PERCENT = {
  Beginner: 42,
  Intermediate: 66,
  Advanced: 100
}

function Skills() {
  const { skills = [], loading, error } = useSkills()

  // Group by category for nicer layout (safe when skills is empty)
  const grouped = (skills || []).reduce((acc, skill) => {
    const cat = skill?.category || 'Other'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(skill)
    return acc
  }, {})

  const categories = Object.keys(grouped)

  return (
    <div className="max-w-5xl mx-auto px-4 pt-24 pb-16 text-slate-100">
      <header className="mb-8">
        <p className="text-base uppercase tracking-[0.22em] text-teal-300 mb-3">
          Skills
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold">
          Technologies that power the work.
        </h1>
        <p className="text-sm text-slate-400 mt-2 max-w-xl">
          A focused stack around JavaScript, the MERN ecosystem, and tools that
          help ship reliable products faster.
        </p>
      </header>

      {loading && (
        <p className="text-sm text-slate-400">Loading skills…</p>
      )}

      {error && (
        <p className="text-sm text-red-400 bg-red-950/40 border border-red-900/60 rounded-lg px-3 py-2 inline-block">
          {error}
        </p>
      )}

      {!loading && !error && (
        <>
          {skills.length === 0 ? (
            <p className="text-sm text-slate-400">No skills added yet.</p>
          ) : (
            <div className="space-y-8 mt-4">
              {categories.map((cat) => (
                <section key={cat} className="rounded-2xl border border-slate-800 bg-[#050816]/80 p-5">
                  <h2 className="text-lg font-semibold text-slate-50 mb-3">
                    {cat}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {grouped[cat].map((skill) => (
                      <div
                        key={skill._id || skill.name}
                        tabIndex={0}
                        role="group"
                        aria-label={`${skill.name} — ${skill.level || 'Unknown level'}`}
                        className="px-3 py-2 rounded-xl border border-slate-700 bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
                      >
                        <p className="text-xs font-semibold text-slate-50">
                          {skill.name}
                        </p>
                        {skill.level && (
                          <div
                            className="mt-2 h-2 w-28 rounded-full bg-slate-800 overflow-hidden"
                            role="progressbar"
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={LEVEL_PERCENT[skill.level] || 60}
                            title={skill.level}
                          >
                            <div
                              className={`h-full ${LEVEL_COLORS[skill.level] || 'bg-indigo-500'}`}
                              style={{ width: `${LEVEL_PERCENT[skill.level] || 60}%` }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Skills
