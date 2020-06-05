const express = require('express')
const router = express.Router()
const controller = require('../controllers/ReservationManager')

router.route('/:id').post(controller.create)

module.exports = router
