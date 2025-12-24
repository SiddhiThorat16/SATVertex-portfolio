// SATVertex/SATVertex-portfolio/src/hooks/useProjects.js

import { useEffect, useState } from 'react'
import cmsApi from '../lib/cmsApi'

export function useProjects({ featuredOnly = false } = {}) {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    ;(async () => {
      try {
        const { data } = await cmsApi.get('/projects')
        let list = data || []
        if (featuredOnly) list = list.filter(p => p.featured)
        if (active) setProjects(list)
      } catch (err) {
        if (active) setError('Failed to load projects')
      } finally {
        if (active) setLoading(false)
      }
    })()
    return () => { active = false }
  }, [featuredOnly])

  return { projects, loading, error }
}
