// SATVertex/SATVertex-portfolio/src/lib/api.js

import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_CMS_API || 'http://localhost:5000/api',
})

export default api
