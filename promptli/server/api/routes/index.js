const express = require('express')
const router = express.Router()
const setupRoutes = require('./setupRoutes')

router.use('/setup', setupRoutes)

module.exports = router
