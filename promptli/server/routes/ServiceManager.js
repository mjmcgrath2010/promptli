const express = require('express')
const router = express.Router()
const controller = require('../controllers/ServiceManager')

router.route('/:id').post(controller.create)

module.exports = router