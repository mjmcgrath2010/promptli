const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')
const passportJWT = require('passport-jwt')
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

const initPassport = () => {
    passport.use(
        new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
            },
            function(username, password, done) {
                User.findOne({ email: username }, function(err, user) {
                    if (err) {
                        return done(err)
                    }
                    if (!user) {
                        return done(null, false, {
                            message: 'Incorrect username.',
                        })
                    }
                    if (!user.validPassword(password)) {
                        return done(null, false, {
                            message: 'Incorrect password.',
                        })
                    }
                    return done(null, user)
                })
            }
        )
    )

    passport.use(
        new JWTStrategy(
            {
                jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
                secretOrKey: 'n3xtm0ng03XpR3$$',
            },
            function(jwtPayload, cb) {
                //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
                return User.findById(jwtPayload.id)
                    .then(user => {
                        return cb(null, user)
                    })
                    .catch(err => {
                        return cb(err)
                    })
            }
        )
    )

    passport.serializeUser(function(user, done) {
        done(null, user._id)
    })

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user)
        })
    })
}

module.exports = initPassport
