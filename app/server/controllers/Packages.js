const Packages = require('../models/Packages')

exports.params = (req, res, next, id) => {
  Packages.find({ account: id }, (err, packages) => {
    if (err) {
      next(err)
    } else if (packages) {
      req.packages = packages
      req.id = id
      next()
    } else {
      next(new Error('failed to load account'))
    }
  })
}

exports.get = (req, res, next) => {
  Packages.find({ account: req.user.account() }, (err, packages) => {
    if (err) {
      next(err)
    } else {
      res.json(packages)
    }
  })
}

exports.getOne = (req, res) => {
  return res.json(req.packages)
}

exports.create = (req, res, next) => {
  const packages = new Packages({ ...req.body, account: req.user.account() })
  packages
    .save()
    .then(pkgs => res.json(pkgs))
    .catch(err => next(err))
}

exports.update = (req, res, next) => {
  Packages.findByIdAndUpdate(req.id, req.body, { new: true, useFindAndModify: false }, (err, packages) => {
    if (err) {
      next(err)
    } else if (packages) {
      res.json(packages)
    } else {
      next(new Error('failed to update user'))
    }
  })
}
