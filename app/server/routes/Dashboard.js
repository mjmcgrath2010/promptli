const express = require('express')
const router = express.Router()
const controller = require('../controllers/Dashboard')

router.route('/').get(controller.initDashboard)

module.exports = router
