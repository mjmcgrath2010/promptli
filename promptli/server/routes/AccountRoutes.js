const express = require('express')
const router = express.Router()
const controller = require('../controllers/Account')
const passport = require('passport')

router.param('id', controller.params)

router.route('/')
	.get(controller.get)
	.post(controller.create)

router.route('/:id')
	.get(controller.getOne)
	.put(controller.update)

module.exports = router;
