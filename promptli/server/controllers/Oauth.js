const GoogleCalender = require('../services/google-calendar')
const Account = require('../models/Account')

exports.connectGoogleAccount = (req, res) => {
  const { accountId } = req.body
  const redirectUrl = GoogleCalender.auth(accountId)
  res.json(redirectUrl)
}

exports.authGoogle = async (req, res, next) => {
  const { code, state } = req.query
  GoogleCalender.getTokens(code)
    .then(({ access_token, refresh_token }) => {
      Account.findById(state, (err, account) => {
        if (err) {
          return next(err)
        }
        account.update({ google_access_token: access_token, google_refresh_token: refresh_token }).exec(err => {
          err ? next(err) : res.redirect(`${process.env.APP_BASE_URL}/dashboard/settings`)
        })
      })
    })
    .catch(e => next(e))
}
