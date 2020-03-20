const mongoose = require('mongoose')
const schema = mongoose.Schema

const ServiceModel = new schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pricingUnits: [
    {
      fixed: Number,
      hourly: Number,
      minimum: Number,
      deposit: Number,
    },
  ],
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'account',
  },
  packages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'packages',
    },
  ],
})

module.exports = mongoose.model('service', ServiceModel)
