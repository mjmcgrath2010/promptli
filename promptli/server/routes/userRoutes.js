const express = require('express')
const router = express.Router()
const passport = require('passport')
const controller = require('../controllers/User')
router.param('id', controller.params)

router
    .route('/')
    .get(passport.authenticate('jwt'), controller.get)
    .post(controller.create)

router
    .route('/:id')
    .get(passport.authenticate('jwt'), controller.getOne)
    .put(passport.authenticate('jwt'), controller.update)

module.exports = router
