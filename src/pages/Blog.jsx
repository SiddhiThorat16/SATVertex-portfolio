// SATVertex/SATVertex-portfolio/src/pages/Blog.jsx

import { useBlogs } from '../hooks/useBlogs'
import { ArrowRight } from 'lucide-react'

function Blog() {
  const { blogs, loading, error } = useBlogs()

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 text-slate-100">
      <section className="rounded-3xl border border-slate-800 bg-[#050816]/90 px-6 py-8 md:px-10 md:py-10">
        <header className="mb-6">
          <p className="text-base uppercase tracking-[0.22em] text-teal-300 mb-3">
            Blog
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-50">
            Notes on building and learning.
          </h1>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Short write‑ups on projects, problems solved, and things learned
            while working with the MERN stack and related tools.
          </p>
        </header>

        {loading && (
          <p className="text-sm text-slate-400">Loading posts…</p>
        )}

        {error && (
          <p className="text-sm text-red-400 bg-red-950/40 border border-red-900/60 rounded-lg px-3 py-2 inline-block">
            {error}
          </p>
        )}

        {!loading && !error && (
          <>
            {blogs.length === 0 ? (
              <p className="text-sm text-slate-400">
                Posts coming soon.
              </p>
            ) : (
              <div className="space-y-4">
                {blogs.map((post) => (
                  <article
                    key={post._id}
                    className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5 hover:border-teal-400/70 transition"
                  >
                    <p className="text-[11px] uppercase tracking-[0.18em] text-teal-300 mb-1">
                      {post.tags?.join(' • ') || 'Article'}
                    </p>
                    <h2 className="text-lg font-semibold text-slate-50 mb-1">
                      {post.title}
                    </h2>
                    <p className="text-xs text-slate-400 mb-3">
                      {post.publishedAt &&
                        new Date(post.publishedAt).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-slate-300 line-clamp-3 mb-3">
                      {post.excerpt || post.content?.slice(0, 200)}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </div>
  )
}

export default Blog
