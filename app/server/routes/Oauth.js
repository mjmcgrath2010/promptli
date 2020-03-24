const express = require('express')
const router = express.Router()
const controller = require('../controllers/Oauth')

router.route('/google/connect').post(controller.connectGoogleAccount)
router.route('/google').get(controller.authGoogle)

module.exports = router
