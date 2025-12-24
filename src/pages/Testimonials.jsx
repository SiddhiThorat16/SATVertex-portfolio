// SATVertex/SATVertex-portfolio/src/pages/Testimonials.jsx

import { useTestimonials } from '../hooks/useTestimonials'

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={
            i < rating
              ? 'text-amber-400 text-xs'
              : 'text-slate-600 text-xs'
          }
        >
          ★
        </span>
      ))}
    </div>
  )
}

function Testimonials() {
  const { testimonials, loading, error } = useTestimonials()

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 text-slate-100">
      <section className="rounded-3xl border border-slate-800 bg-[#050816]/90 px-6 py-8 md:px-10 md:py-10">
        <header className="mb-6">
          <p className="text-base uppercase tracking-[0.22em] text-teal-300 mb-3">
            Testimonials
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-50">
            What people say about the work.
          </h1>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Feedback from collaborators and clients on shipped projects and
            experiments.
          </p>
        </header>

        {loading && (
          <p className="text-sm text-slate-400">Loading testimonials…</p>
        )}

        {error && (
          <p className="text-sm text-red-400 bg-red-950/40 border border-red-900/60 rounded-lg px-3 py-2 inline-block">
            {error}
          </p>
        )}

        {!loading && !error && (
          <>
            {testimonials.length === 0 ? (
              <p className="text-sm text-slate-400">
                Testimonials will appear here once added in the CMS.
              </p>
            ) : (
              <div className="grid gap-5 md:grid-cols-2">
                {testimonials.map((t) => (
                  <figure
                    key={t._id}
                    className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5 flex flex-col gap-3"
                  >
                    <Stars rating={t.rating || 5} />
                    <blockquote className="text-sm text-slate-200 leading-relaxed">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="text-xs text-slate-400 mt-1">
                      <span className="font-semibold text-slate-100">
                        {t.name}
                      </span>
                      {t.role && ` • ${t.role}`}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </div>
  )
}

export default Testimonials
