const WidgetConfig = require('../models/WidgetConfig')

exports.params = (req, res, next, id) => {
  WidgetConfig.findById(id)
    .populate('categories')
    .exec((err, widgetConfig) => {
      if (err) {
        next(err)
      } else if (widgetConfig) {
        req.widgetConfig = widgetConfig
        req.id = id
        next()
      } else {
        next(new Error('failed to load user'))
      }
    })
}

exports.get = (req, res, next) => {
  WidgetConfig.find({ account: req.user.account() }, (err, widgetConfig) => {
    if (err) {
      next(err)
    } else {
      res.json(widgetConfig)
    }
  })
}

exports.getOne = (req, res) => {
  return res.json(req.widgetConfig)
}

exports.create = (req, res, next) => {
  const widgetConfig = new WidgetConfig({ ...req.body, account: req.user.account() })
  widgetConfig
    .save()
    .then(config => res.json(config))
    .catch(err => next(err))
}

exports.update = (req, res, next) => {
  WidgetConfig.findByIdAndUpdate(req.id, req.body, { new: true, useFindAndModify: false }, (err, widgetConfig) => {
    if (err) {
      next(err)
    } else if (widgetConfig) {
      res.json(widgetConfig)
    } else {
      next(new Error('failed to update user'))
    }
  })
}
