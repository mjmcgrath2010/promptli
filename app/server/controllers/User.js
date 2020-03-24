const User = require('../models/User')
const Account = require('../models/Account')
const Mailer = require('../services/sendgrid')

exports.params = (req, res, next, id) => {
    User.findById(id, (err, user) => {
        if (err) {
            next(err)
        } else if (user) {
            req.user = user
            req.id = id
            next()
        } else {
            next(new Error('failed to load user'))
        }
    })
}

exports.get = (req, res, next) => {
    const user = req.user
    const id = req.user && req.user._id

    if (!id) {
        return res.send('User must be authenticated')
    } else if (user.admin) {
        User.find({}, (err, users) => {
            if (err) {
                return next(err)
            } else if (user) {
                return res.json(users)
            } else {
                return next(new Error('failed to load user'))
            }
        })
    } else {
        User.findById(id, (err, user) => {
            if (err) {
                return next(err)
            } else if (user) {
                return res.status(200).send(user)
            } else {
                return next(new Error('failed to load user'))
            }
        })
    }
}

exports.getOne = (req, res) => {
    return res.json(req.user)
}

exports.create = (req, res, next) => {
    const user = new User(req.body)

    user.save()
        .then(user => {
            const account = new Account({
                name: user.name,
                owner: user._id,
                users: [user._id],
                admins: [user._id],
            })
            account
                .save()
                .then(account => {
                    user.updateOne({ accounts: [account._id] })
                        .then(() => {
                            Mailer.accountCreated(user)
                            const token = user.auth()
                            res.json({ profile: { user, account }, token })
                        })
                        .catch(e => next(e))
                })
                .catch(e => next(e))
        })
        .catch(err => next(err))
}

exports.update = (req, res, next) => {
    User.findByIdAndUpdate(
        req.id,
        req.body,
        { new: true, useFindAndModify: false },
        (err, user) => {
            if (err) {
                next(err)
            } else if (user) {
                res.json(user)
            } else {
                next(new Error('failed to update user'))
            }
        }
    )
}
