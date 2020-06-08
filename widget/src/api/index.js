import axios from 'axios'

const PromptliAPI = (businessIdentifier, widgetId) => {
  this.api = axios.create({
    baseURL: `${process.env.API_BASE_URL}/api`,
    timeout: 1000,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  })
  this.items = []

  return {
    get(url) {
      return new Promise(resolve => {
        this.api
          .get(url)
          .then(response => resolve(response.data))
          .catch(e => this.handleError(e))
      })
    },
    post(url, payload) {
      return new Promise(resolve => {
        this.api
          .post(url, payload)
          .then(response => resolve(response.data))
          .catch(e => this.handleError(e))
      })
    },
    handleError(e) {
      console.log(e)
    },
    init() {
      return this.get(`/widget-config/${businessIdentifier}/${widgetId}`).then(({ items }) => (this.items = items))
    },
    fetchItems(payload) {
      const queryString = Object.keys(payload)
        .map(key => key + '=' + payload[key])
        .join('&')

      return this.get(`/bookings/${businessIdentifier}?${queryString}&items=${this.items.join(',')}`)
    },
    createBooking(payload) {
      return this.post(`/bookings/${businessIdentifier}`, payload)
    },
  }
}

export default PromptliAPI
