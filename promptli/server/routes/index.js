const express = require('express')
const router = express.Router()
const userRoutes = require('./userRoutes')
const accountRoutes = require('./AccountRoutes')
const authRoutes = require('./AuthRoutes')
const dashboardRoutes = require('./Dashboard')
const packagesRoutes = require('./Packages')
const serviceRoutes = require('./Service')
const serviceManagerRoutes = require('./ServiceManager')
const oauthRoutes = require('./Oauth')
const passport = require('passport')
const publicApiRoutes = require('../api')

router.use('/auth', authRoutes)
router.use('/user', userRoutes)
router.use('/account', passport.authenticate('jwt'), accountRoutes)
router.use('/dashboard', passport.authenticate('jwt'), dashboardRoutes)
router.use('/packages', passport.authenticate('jwt'), packagesRoutes)
router.use('/services', passport.authenticate('jwt'), serviceRoutes)
router.use('/service-manager', serviceManagerRoutes)
router.use('/oauth', oauthRoutes)
router.use('/public/v1', publicApiRoutes)

module.exports = router