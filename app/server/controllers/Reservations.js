const Reservations = require('../models/Reservations')
const GoogleCalendar = require('../services/google-calendar')

exports.params = (req, res, next, id) => {
  Reservations.findById(id, (err, reservations) => {
    if (err) {
      next(err)
    } else if (reservations) {
      req.reservations = reservations
      req.id = id
      next()
    } else {
      next(new Error('failed to load user'))
    }
  })
}

exports.get = (req, res, next) => {
  Reservations.find({ account: req.user.account() }, (err, reservations) => {
    if (err) {
      next(err)
    } else {
      res.json(reservations)
    }
  })
}

exports.getConnectedCalendarEvents = (req, res, next) => {
  const { google_access_token, google_refresh_token } = req.account
  GoogleCalendar.getCalendarEvents({ tokens: { google_access_token, google_refresh_token } })
    .then(events => {
      res.json(events)
    })
    .catch(e => next(e))
}

exports.getOne = (req, res) => {
  return res.json(req.reservations)
}

exports.create = (req, res, next) => {
  const reservations = new Reservations(req.body)
  reservations
    .save()
    .then(reservation => res.json(reservation))
    .catch(err => next(err))
}

exports.update = (req, res, next) => {
  Reservations.findByIdAndUpdate(req.id, req.body, { new: true, useFindAndModify: false }, (err, reservations) => {
    if (err) {
      next(err)
    } else if (reservations) {
      res.json(reservations)
    } else {
      next(new Error('failed to update user'))
    }
  })
}
