const User = require('../models/User')
const Reservations = require('../models/Reservations')
const Packages = require('../models/Packages')
const Services = require('../models/Service')
const WidgetConfig = require('../models/WidgetConfig')

exports.initDashboard = (req, res, next) => {
  req.dashboardInit = {}
  const reservations = fetchReservations(req, res, next)
  const services = fetchServices(req, res, next)
  const packages = fetchPackages(req, res, next)
  const widgetConfig = widgetConfigs(req, res, next)
  const profile = fetchProfile(req, res, next)

  Promise.all([reservations, services, packages, widgetConfig, profile])
    .then(values => {
      console.log('complete', values)
      res.json(req.dashboardInit)
    })
    .catch(e => res.send('error'))
}
const fetchReservations = (req, res, next) => {
  return new Promise((resolve, reject) => {
    Reservations.find({ account: req.user.account() }).exec((err, reservations) => {
      if (err) {
        return reject(next(err))
      }
      req.dashboardInit.reservations = reservations
      resolve(reservations)
    })
  })
}

const fetchPackages = (req, res, next) => {
  return new Promise((resolve, reject) => {
    Packages.find({ account: req.user.account() }).exec((err, packages) => {
      if (err) {
        return reject(next(err))
      }
      req.dashboardInit.packages = packages
      resolve(packages)
    })
  })
}

const fetchServices = (req, res, next) => {
  return new Promise((resolve, reject) => {
    Services.find({ account: req.user.account() }).exec((err, services) => {
      if (err) {
        return reject(next(err))
      }
      req.dashboardInit.services = services
      resolve(services)
    })
  })
}

const fetchProfile = (req, res) => {
  return new Promise((resolve, reject) => {
    User.findById(req.user._id)
      .populate('account')
      .exec((err, user) => {
        if (err) {
          return reject(res.sendStatus(401))
        }
        req.dashboardInit.profile = user
        resolve(user)
      })
  })
}

const widgetConfigs = (req, res) => {
  return new Promise((resolve, reject) => {
    WidgetConfig.find({ account: req.user.account() })
      .populate('service')
      .populate('package')
      .exec((err, configs) => {
        if (err) {
          return reject(res.sendStatus(401))
        }
        req.dashboardInit.displays = configs
        resolve(configs)
      })
  })
}
