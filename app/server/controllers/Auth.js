const User = require('../models/User')
const Mailer = require('../services/sendgrid')
const bcrypt = require('bcrypt')
const async = require('async')
const crypto = require('crypto')

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            return next(err)
        }
        if (user.validPassword(req.body.password)) {
            const token = user.auth()
            return res.status(200).json({ token, user })
        }
    })
}

exports.logout = (req, res) => {
    req.logout(req)
    res.sendStatus(200)
}

exports.checkAuth = (req, res) => {
    res.send({ token: req.user.auth() })
}

exports.forgotPassword = (req, res) => {
    async.waterfall(
        [
            function(done) {
                User.findOne({
                    email: req.body.email,
                }).exec(function(err, user) {
                    if (user) {
                        done(err, user)
                    } else {
                        done('User not found.')
                    }
                })
            },
            function(user, done) {
                // create the random token
                crypto.randomBytes(20, function(err, buffer) {
                    const token = buffer.toString('hex')
                    done(err, user, token)
                })
            },
            function(user, token, done) {
                User.findByIdAndUpdate(
                    { _id: user._id },
                    {
                        resetPasswordToken: token,
                        resetPasswordExpires: Date.now() + 86400000,
                    },
                    { upsert: true, new: true }
                ).exec(function(err, new_user) {
                    done(err, token, new_user)
                })
            },
            function(token, user, done) {
                const url = `${process.env.APP_BASE_URL}/reset-password?token=${token}`
                Mailer.passwordReset(user, url)
                done(null, user)
            },
        ],
        function(err, user) {
            if (err || !user) {
                return res
                    .status(422)
                    .json({ error: err || 'Something went wrong' })
            } else {
                return res.json({
                    success: `Password reset sent to ${user.email}`,
                })
            }
        }
    )
}

exports.resetPassword = (req, res) => {
    User.findOne({
        resetPasswordToken: req.body.resetPasswordToken,
        resetPasswordExpires: {
            $gt: Date.now(),
        },
    }).exec(function(err, user) {
        if (!err && user) {
            if (req.body.newPassword === req.body.verifyPassword) {
                user.hash_password = bcrypt.hashSync(req.body.newPassword, 10)
                user.resetPasswordToken = undefined
                user.resetPasswordExpires = undefined
                user.updateOne({
                    password: bcrypt.hashSync(req.body.newPassword, 10),
                    resetPasswordToken: undefined,
                    resetPasswordExpires: undefined,
                }).then(() => {
                    const token = user.auth()
                    Mailer.passwordResetConfirmation(user)
                    res.send({ token, user: user })
                })
            } else {
                return res.status(422).send({
                    message: 'Passwords do not match',
                })
            }
        } else {
            return res.status(400).send({
                message: 'Password reset token is invalid or has expired.',
            })
        }
    })
}
