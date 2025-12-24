// SATVertrex/SATVertex-portfolio/src/hooks/useAbout.js

import { useEffect, useState } from 'react'
import cmsApi from '../lib/cmsApi'

export function useAbout() {
  const [about, setAbout] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    ;(async () => {
      try {
        const { data } = await cmsApi.get('/about')
        if (active) setAbout(data)
      } catch (err) {
        if (active) setError('Failed to load about section')
      } finally {
        if (active) setLoading(false)
      }
    })()
    return () => { active = false }
  }, [])

  return { about, loading, error }
}
