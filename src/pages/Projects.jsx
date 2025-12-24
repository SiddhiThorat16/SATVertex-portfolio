// SATVertex/SATVertex-portfolio/src/pages/Projects.jsx

import { useProjects } from '../hooks/useProjects'
import { Github, ExternalLink } from 'lucide-react'

function Projects() {
  const { projects, loading, error } = useProjects()

  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 text-slate-100">
      <section className="rounded-3xl border border-slate-800 bg-[#050816]/90 px-6 py-8 md:px-10 md:py-10">
        {/* Header */}
        <header className="mb-6">
          <p className="text-xs uppercase tracking-[0.22em] text-teal-300 mb-2">
            Projects
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-50">
            Selected work and experiments.
          </h1>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            A mix of full‑stack products, internal tools, and experiments around
            real‑time collaboration and custom CMS platforms.
          </p>
        </header>

        {loading && (
          <div className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
                <div className="h-4 bg-slate-800 rounded w-1/3 mb-4" />
                <div className="h-3 bg-slate-800 rounded w-full mb-2" />
                <div className="h-3 bg-slate-800 rounded w-full mb-2" />
                <div className="h-6 bg-slate-800 rounded w-24 mt-4" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <p className="text-sm text-red-400 bg-red-950/40 border border-red-900/60 rounded-lg px-3 py-2 inline-block">
            {error}
          </p>
        )}

        {!loading && !error && (
          <>
            {/* Featured */}
            {featured.length > 0 && (
              <section className="mb-10">
                <h2 className="text-lg font-semibold text-slate-50 mb-4">
                  Featured projects
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {featured.map((project) => (
                    <article
                      key={project._id}
                      className="group rounded-2xl border border-slate-700 bg-slate-900/70 p-6 hover:border-teal-400/70 hover:-translate-y-1 transition-transform"
                    >
                      <a
                        href={project.liveUrl || project.githubUrl || '#'}
                        target={project.liveUrl || project.githubUrl ? '_blank' : undefined}
                        rel={project.liveUrl || project.githubUrl ? 'noreferrer' : undefined}
                        className="block"
                        aria-label={`Open ${project.title}`}
                      >
                        <p className="text-xs uppercase tracking-[0.16em] text-teal-300 mb-2">
                          Featured project
                        </p>
                        <h3 className="text-xl font-semibold text-slate-50 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-300 mb-3 line-clamp-3">
                          {project.description}
                        </p>
                      </a>

                      {project.techStack?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.techStack.map((t) => (
                            <span key={t} className="text-[11px] px-2 py-1 rounded bg-slate-800 text-slate-300">{t}</span>
                          ))}
                        </div>
                      )}

                      <div className="flex gap-3 text-xs">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-teal-300 hover:text-teal-200 transition"
                          >
                            <ExternalLink className="h-3 w-3" />
                            Live demo
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-slate-300 hover:text-slate-100 transition"
                          >
                            <Github className="h-3 w-3" />
                            Code
                          </a>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* More projects */}
            {others.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold text-slate-50 mb-4">
                  More projects
                </h2>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {others.map((project) => (
                    <article
                      key={project._id}
                      className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5 hover:border-slate-500 transition"
                    >
                      <a
                        href={project.liveUrl || project.githubUrl || '#'}
                        target={project.liveUrl || project.githubUrl ? '_blank' : undefined}
                        rel={project.liveUrl || project.githubUrl ? 'noreferrer' : undefined}
                        className="block"
                        aria-label={`Open ${project.title}`}
                      >
                        {project.imageUrl && (
                          <img src={project.imageUrl} alt={project.title} className="mb-3 rounded-md object-cover h-36 w-full" />
                        )}
                        <h3 className="text-base font-semibold text-slate-50 mb-1">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-300 mb-3 line-clamp-3">
                          {project.description}
                        </p>
                      </a>

                      {project.techStack?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.techStack.map((t) => (
                            <span key={t} className="text-[11px] px-2 py-1 rounded bg-slate-800 text-slate-300">{t}</span>
                          ))}
                        </div>
                      )}

                      <div className="flex gap-3 text-[11px]">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-teal-300 hover:text-teal-200"
                          >
                            <ExternalLink className="h-3 w-3" />
                            Live
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-slate-300 hover:text-slate-100"
                          >
                            <Github className="h-3 w-3" />
                            GitHub
                          </a>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {featured.length === 0 && others.length === 0 && (
              <p className="text-sm text-slate-400">
                Projects coming soon. Check back after the next deployment.
              </p>
            )}
          </>
        )}
      </section>
    </div>
  )
}

export default Projects
