const express = require('express')
const router = express.Router()
const passport = require('passport')

const controller = require('../controllers/WidgetConfig')
// Use to ensure user is logged in
// const auth = require('../services/auth')

router.param('id', controller.params)

router
  .route('/')
  .get(controller.get)
  .post(passport.authenticate('jwt'), controller.create)

router
  .route('/:id')
  .get(controller.getOne)
  .put(passport.authenticate('jwt'), controller.update)

module.exports = router
