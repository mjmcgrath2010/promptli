const Item = require('../models/Item')

exports.params = (req, res, next, id) => {
  Item.find({ account: id }, (err, items) => {
    if (err) {
      next(err)
    } else if (items) {
      req.items = items
      req.id = id
      next()
    } else {
      next(new Error('failed to load account'))
    }
  })
}

exports.get = (req, res, next) => {
  Item.find({ account: req.user.account() }, (err, items) => {
    if (err) {
      next(err)
    } else {
      res.json(items)
    }
  })
}

exports.getOne = (req, res) => {
  return res.json(req.items)
}

exports.create = (req, res, next) => {
  const Items = new Item({ ...req.body, account: req.user.account() })
  Items
    .save()
    .then(item => res.json(item))
    .catch(err => next(err))
}

exports.update = (req, res, next) => {
  Item.findByIdAndUpdate(req.id, req.body, { new: true, useFindAndModify: false }, (err, items) => {
    if (err) {
      next(err)
    } else if (items) {
      res.json(items)
    } else {
      next(new Error('failed to update user'))
    }
  })
}
