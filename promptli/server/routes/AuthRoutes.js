const express = require('express')
const router = express.Router()
const controller = require('../controllers/Auth')
const passport = require('passport')
const auth = require('../services/auth')

router.route('/').post(passport.authenticate('local'), controller.login)

router
    .route('/check-auth')
    .get(passport.authenticate('jwt'), controller.checkAuth)

router.route('/forgot-password').post(controller.forgotPassword)
router.route('/reset-password').post(controller.resetPassword)

router.route('/logout').get(passport.authenticate('jwt'), controller.logout)

module.exports = router
