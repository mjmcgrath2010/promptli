import axios from 'axios'

const PromptliAPI = (businessIdentifier, widgetId) => {
  this.api = axios.create({
    baseURL: `${process.env.API_BASE_URL}/api/widget-config/${businessIdentifier}/${widgetId}`,
    timeout: 1000,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  })

  return {
    get(url) {
      return this.api.get(url)
    },
    post(url, payload) {
      return this.api.post(url, payload)
    },
    handleError(e) {
      console.log(e)
    },
    init() {
      return this.get('/setup')
    },
  }
}

export default PromptliAPI
