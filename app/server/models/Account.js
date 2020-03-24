const mongoose = require('mongoose')
const schema = mongoose.Schema

const AccountSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  ],
  admins: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  ],
  google_access_token: {
    type: String,
  },
  google_refresh_token: {
    type: String,
  },
})

module.exports = mongoose.model('account', AccountSchema)
