// SATVertex/SATVertex-portfolio/src/lib/cmsApi.js

import axios from 'axios'

const cmsApi = axios.create({
  baseURL: import.meta.env.VITE_CMS_API || 'http://localhost:5000/api',
})

export default cmsApi
