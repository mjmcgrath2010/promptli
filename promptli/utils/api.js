import axios from 'axios'
import Cookies from 'js-cookie'
import _ from 'lodash'

const { API_BASE_URL } = process.env

const API = {
  token() {
    return Cookies.get('token')
  },
  get(resource, config = {}) {
    return axios({
      ...{
        method: 'get',
        url: `${API_BASE_URL}/${resource}`,
        headers: {
          Authorization: `JWT ${this.token()}`,
          'Content-Type': 'application/json',
        },
      },
      ...config,
    })
  },
  post(resource, payload, config = {}) {
    return axios({
      ...{
        method: 'post',
        url: `${API_BASE_URL}/${resource}`,
        headers: {
          Authorization: `JWT ${this.token()}`,
          'Content-Type': 'application/json',
        },
        data: payload,
      },
      ...config,
    })
  },
  update(resource, payload, id, config = {}) {
    return axios({
      ...{
        method: 'put',
        url: `${API_BASE_URL}/${resource}/${id}`,
        headers: {
          Authorization: `JWT ${this.token()}`,
          'Content-Type': 'application/json',
        },
        data: payload,
      },
      ...config,
    })
  },
  getTableData(resource, headersArray) {
    return this.get(resource)
      .then(response => {
        const { data } = response
        let headers = headersArray || Object.keys(data[0])

        headers = headers.map(header => ({
          field: header,
          title: _.startCase(header.toUpperCase()),
          type: this.getDataType(data[0][header]),
        }))

        return new Promise(resolve =>
          resolve({
            columns: data,
            headers,
          })
        )
      })
      .catch(e => new Promise((resolve, reject) => reject('Something went wrong')))
  },
  authenticate({ email, password }) {
    return this.post('auth', { email, password })
  },
  logout() {
    return this.get('auth/logout')
  },
  checkAuth() {
    return this.get('auth/check-auth')
  },
  connectGoogleAccount(payload) {
    return this.post('oauth/google/connect', payload)
  },
  forgotPassword(payload) {
    return this.post('auth/forgot-password', payload)
  },
  resetPassword(payload) {
    return this.post('auth/reset-password', payload)
  },
  createUser({ email, password, name }) {
    return this.post('user', { email, password, name })
  },
  initDashboard() {
    return this.get('dashboard')
  },
  fetchProfile() {
    return this.get('dashboard/me')
  },
  updateUser(id, payload) {
    return this.update('user', payload, id)
  },
  updateAccount(id, payload) {
    return this.update('account', payload, id)
  },
  createPackage(payload) {
    return this.post('packages', payload)
  },
  fetchPackages() {
    return this.get('packages')
  },
  updatePackage(id, payload) {
    return this.update('packages', payload, id)
  },
  createService(payload) {
    return this.post('services', payload)
  },
  fetchServices() {
    return this.get('services')
  },
  updateService(id, payload) {
    return this.update('services', payload, id)
  },
  fetchReservations() {
    return this.get('reservations')
  },
  updateReservation(id, payload) {
    return this.update('reservations', payload, id)
  },
  // Utils
  getDataType(type) {
    switch (typeof type) {
      case 'string':
        return 'string'
      case 'number':
        return 'numeric'
      case 'boolean':
        return 'boolean'
      default:
        return 'string'
    }
  },
  handleError({ error }) {},
  handleSuccess({ success }) {},
}

export default API
