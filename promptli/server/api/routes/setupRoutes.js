const express = require('express')
const router = express.Router()
const controller = require('../controllers/Setup')

router.route('/').get(controller.get)

module.exports = router
