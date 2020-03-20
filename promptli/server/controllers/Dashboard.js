const User = require('../models/User')
const Reservations = require('../models/Reservations')
const Packages = require('../models/Packages')
const Services = require('../models/Service')

exports.initDashboard = (req, res, next) => {
  req.dashboardInit = {}
  fetchProfile(req, res, next)
  fetchReservations(req, res, next)
  fetchServices(req, res, next)
  fetchPackages(req, res, next)
}

exports.fetchProfile = (req, res) => {
  User.findById(req.user._id)
    .populate('accounts')
    .exec((err, user) => {
      if (err) {
        return res.sendStatus(401)
      }
      res.json({ profile: user })
    })
}

const fetchReservations = (req, res, next) => {
  Reservations.find({ account: req.params.id }).exec((err, reservations) => {
    if (err) {
      return next(err)
    }
    req.dashboardInit.reservations = reservations
    next()
  })
}

const fetchPackages = (req, res, next) => {
  Packages.find({ account: req.params.id }).exec((err, packages) => {
    if (err) {
      return next(err)
    }
    req.dashboardInit.packages = packages
    next()
  })
}

const fetchServices = (req, res, next) => {
  Services.find({ account: req.params.id }).exec((err, services) => {
    if (err) {
      return next(err)
    }
    req.dashboardInit.services = services
    next()
  })
}

const fetchProfile = (req, res, next) => {
  User.findById(req.user._id)
    .populate('accounts')
    .exec((err, user) => {
      if (err) {
        return res.sendStatus(401)
      }
      req.dashboardInit.profile = user
      next()
    })
}
