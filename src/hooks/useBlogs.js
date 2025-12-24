// SATVertex/SATVertex-portfolio/src/hooks/useBlogs.js

import { useEffect, useState } from 'react'
import cmsApi from '../lib/cmsApi'

export function useBlogs() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    ;(async () => {
      try {
        const { data } = await cmsApi.get('/blogs')
        if (active) setBlogs(data || [])
      } catch (err) {
        if (active) setError('Failed to load blog posts')
      } finally {
        if (active) setLoading(false)
      }
    })()
    return () => {
      active = false
    }
  }, [])

  return { blogs, loading, error }
}
