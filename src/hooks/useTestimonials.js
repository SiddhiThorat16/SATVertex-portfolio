// SATVertex/SATVertex-portfolio/src/hooks/useTestimonials.js

import { useEffect, useState } from 'react'
import cmsApi from '../lib/cmsApi'

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    ;(async () => {
      try {
        const { data } = await cmsApi.get('/testimonials')
        if (active) setTestimonials(data || [])
      } catch (err) {
        if (active) setError('Failed to load testimonials')
      } finally {
        if (active) setLoading(false)
      }
    })()
    return () => {
      active = false
    }
  }, [])

  return { testimonials, loading, error }
}
