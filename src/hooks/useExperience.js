// SATVertex/SATVertex-portfolio/src/hooks/useExperience.js

import { useEffect, useState } from 'react'
import cmsApi from '../lib/cmsApi'

export function useExperience() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    ;(async () => {
      try {
        const { data } = await cmsApi.get('/experience')
        if (active) {
          const sorted = (data || []).slice().sort(
            (a, b) => new Date(b.startDate) - new Date(a.startDate)
          )
          setItems(sorted)
        }
      } catch (err) {
        if (active) setError('Failed to load experience')
      } finally {
        if (active) setLoading(false)
      }
    })()
    return () => {
      active = false
    }
  }, [])

  return { items, loading, error }
}
