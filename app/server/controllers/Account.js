const Account = require('../models/Account')

exports.params = (req, res, next, id) => {
    Account.findById(id, (err, account) => {
        if (err) {
            next(err)
        } else if (account) {
            req.account = account
            req.id = id
            next()
        } else {
            next(new Error('failed to load user'))
        }
    })
}

exports.get = (req, res, next) => {
    Account.find({}, (err, accounts) => {
        if (err) {
            next(err)
        } else {
            res.json(accounts)
        }
    })
}

exports.getOne = (req, res) => {
    return res.json(req.account)
}

exports.create = (req, res, next) => {
    const account = new Account(req.body)
    account
        .save()
        .then(() => res.json(account))
        .catch(err => next(err))
}

exports.update = (req, res, next) => {
    Account.findByIdAndUpdate(
        req.id,
        req.body,
        { new: true, useFindAndModify: false },
        (err, account) => {
            if (err) {
                next(err)
            } else if (account) {
                res.json(account)
            } else {
                next(new Error('failed to update user'))
            }
        }
    )
}
