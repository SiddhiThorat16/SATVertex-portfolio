// SATVertex/SATVertex-portfolio/src/hooks/useSkills.js

import { useEffect, useState } from 'react'
import cmsApi from '../lib/cmsApi'

export function useSkills() {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    ;(async () => {
      try {
        const { data } = await cmsApi.get('/skills')
        if (active) setSkills(data || [])
      } catch (err) {
        if (active) setError('Failed to load skills')
      } finally {
        if (active) setLoading(false)
      }
    })()
    return () => { active = false }
  }, [])

  return { skills, loading, error }
}
