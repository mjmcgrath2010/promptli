const express = require('express')
const cors = require('cors')

const router = express.Router()
const controller = require('../controllers/ReservationManager')

router.param('id', controller.params)

router
  .route('/:id')
  .post(cors(), controller.create)
  .get(cors(), controller.getAvailableItems)

module.exports = router
