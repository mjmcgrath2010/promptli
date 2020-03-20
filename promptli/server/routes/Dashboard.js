const express = require('express')
const router = express.Router()
const controller = require('../controllers/Dashboard')

router.route('/').get(controller.fetchProfile)
router.route('/setup/:id').get(controller.initDashboard)
router.route('/me').get(controller.fetchProfile)

module.exports = router
