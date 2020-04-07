const Service = require('../models/Service')

exports.params = (req, res, next, id) => {
  Service.findById(id, (err, service) => {
    if (err) {
      next(err)
    } else if (service) {
      req.service = service
      req.id = id
      next()
    } else {
      next(new Error('failed to load user'))
    }
  })
}

exports.get = (req, res, next) => {
  Service.find({ account: req.user.account() }, (err, services) => {
    if (err) {
      next(err)
    } else {
      res.json(services)
    }
  })
}

exports.getOne = (req, res) => {
  return res.json(req.service)
}

exports.create = (req, res, next) => {
  const service = new Service({ ...req.body, account: req.user.account() })
  service
    .save()
    .then(service => res.json(service))
    .catch(err => next(err))
}

exports.update = (req, res, next) => {
  Service.findByIdAndUpdate(req.id, req.body, { new: true, useFindAndModify: false }, (err, service) => {
    if (err) {
      next(err)
    } else if (service) {
      res.json(service)
    } else {
      next(new Error('failed to update user'))
    }
  })
}
