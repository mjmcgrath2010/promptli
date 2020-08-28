const Category = require('../models/Category')

exports.params = (req, res, next, id) => {
  Category.findById(id, (err, category) => {
    if (err) {
      next(err)
    } else if (category) {
      req.category = category
      req.id = id
      next()
    } else {
      next(new Error('failed to load user'))
    }
  })
}

exports.get = (req, res, next) => {
  Category.find({ account: req.user.account() }, (err, categories) => {
    if (err) {
      next(err)
    } else {
      res.json(categories)
    }
  })
}

exports.getOne = (req, res) => {
  return res.json(req.category)
}

exports.create = (req, res, next) => {
  const category = new Category(req.body)
  category
    .save()
    .then(() => res.json(category))
    .catch(err => next(err))
}

exports.update = (req, res, next) => {
  Category.findByIdAndUpdate(req.id, req.body, { new: true, useFindAndModify: false }, (err, category) => {
    if (err) {
      next(err)
    } else if (category) {
      res.json(category)
    } else {
      next(new Error('failed to update user'))
    }
  })
}
