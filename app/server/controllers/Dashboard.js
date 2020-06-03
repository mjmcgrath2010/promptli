const User = require('../models/User')
const Reservations = require('../models/Reservations')
const Items = require('../models/Item')
const WidgetConfig = require('../models/WidgetConfig')

exports.initDashboard = (req, res, next) => {
  req.dashboardInit = {}
  const reservations = fetchReservations(req, res, next)
  const items = fetchItems(req, res, next)
  const widgetConfig = widgetConfigs(req, res, next)
  const profile = fetchProfile(req, res, next)

  Promise.all([reservations, items, widgetConfig, profile])
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

const fetchItems = (req, res, next) => {
  return new Promise((resolve, reject) => {
    Items.find({ account: req.user.account() }).exec((err, items) => {
      if (err) {
        return reject(next(err))
      }
      req.dashboardInit.items = items
      resolve(items)
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
      .populate('item')
      .exec((err, configs) => {
        if (err) {
          return reject(res.sendStatus(401))
        }
        req.dashboardInit.displays = configs
        resolve(configs)
      })
  })
}
