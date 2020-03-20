const express = require('express')
const router = express.Router()
const controller = require('../controllers/Packages')
// Use to ensure user is logged in
// const auth = require('../services/auth')

router.param('id', controller.params)

router
  .route('/')
  .get(controller.get)
  .post(controller.create)

router
  .route('/:id')
  .get(controller.getOne)
  .put(controller.update)

module.exports = router
