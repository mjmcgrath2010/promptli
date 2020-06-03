const mongoose = require('mongoose')
const schema = mongoose.Schema

const ItemsModel = new schema({
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
      fixed: {
        type: Number,
        default: null,
      },
      hourly: {
        type: Number,
        default: null,
      },
      minimum: {
        type: Number,
        default: null,
      },
      deposit: {
        type: Number,
        default: null,
      },
    },
  ],
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'account',
  },
})

module.exports = mongoose.model('item', ItemsModel)
