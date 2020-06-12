import axios from 'axios'

class PromptliAPI {
  constructor(businessIdentifier, widgetId) {
    this.api = axios.create({
      baseURL: `${process.env.API_BASE_URL}`,
      timeout: 10000,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    })
    this.items = []
    this.businessIdentifier = businessIdentifier
    this.widgetId = widgetId
  }

  get(url) {
    return new Promise(resolve => {
      this.api
        .get(url)
        .then(response => resolve(response.data))
        .catch(e => this.handleError(e))
    })
  }

  post(url, payload) {
    return new Promise(resolve => {
      this.api
        .post(url, payload)
        .then(response => resolve(response.data))
        .catch(e => this.handleError(e))
    })
  }
  handleError(e) {
    console.log(e)
  }
  init() {
    return new Promise(resolve => {
      this.get(`/widget-config/${this.widgetId}`).then(payload => {
        this.items.push(...payload.items)
        resolve(payload)
      })
    })
  }

  fetchItems(payload) {
    const queryString = Object.keys(payload)
      .map(key => key + '=' + payload[key])
      .join('&')

    return this.get(`/bookings/${this.businessIdentifier}?${queryString}`)
  }

  createBooking(payload) {
    return this.post(`/bookings/${this.businessIdentifier}`, payload)
  }

  getItems() {
    return this.items
  }
}

export default PromptliAPI
