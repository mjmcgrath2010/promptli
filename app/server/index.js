require('dotenv').config()

const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware').default
const Sentry = require('@sentry/node')
const bodyParser = require('body-parser')
const PORT = process.env.PORT
const dev = process.env.NODE_ENV !== 'production' //true false
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler() //part of next config
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')

const nextI18next = require('../lib/i18n')

const initPassport = require('./services/passport')
const User = require('./models/User')
const Account = require('./models/Account')

Sentry.init({
  dsn: process.env.SENTRY_DSN,
})

const db = mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    if (process.env.NODE_ENV !== 'production') {
      User.find({ email: 'mike@mikemcgrathonline.us' }, (err, user) => {
        if (user.length) {
          return
        } else {
          const seedUser = new User({
            name: 'Mike McGrath',
            email: 'mike@mikemcgrathonline.us',
            password: 'admin',
            accounts: [],
            admin: true,
          })
          seedUser
            .save()
            .then(user => {
              const seedAccount = new Account({
                name: user.name,
                users: [user._id],
                owner: user._id,
                admins: [user._id],
              })

              seedAccount
                .save()
                .then(({ _id }) => user.update({ accounts: [_id] }).then(() => console.log('db seeded')))

                .catch(e => console.error(e))
                .catch(err => console.error(err))
            })
            .catch(e => console.error(e))
        }
      })
    }
  })

nextApp.prepare().then(() => {
  // express code here
  const app = express()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(express.static('public'))
  app.use(session({ secret: 'R3rjntjwtnqgigiernwgi3' }))

  app.use(passport.initialize())
  app.use(passport.session())
  initPassport()
  app.use(nextI18NextMiddleware(nextI18next))

  app.use('/api/', require('./routes/index'))
  app.get('*', (req, res) => {
    return handle(req, res) // for all the react stuff
  })

  app.listen(PORT, err => {
    if (err) {
      throw err
    }
  })
})
