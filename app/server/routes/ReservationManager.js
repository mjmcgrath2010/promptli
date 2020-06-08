const express = require('express')
const router = express.Router()
const controller = require('../controllers/ReservationManager')

router.param('id', controller.params)

router
  .route('/:id')
  .post(controller.create)
  .get(controller.getAvailableItems)

module.exports = router
