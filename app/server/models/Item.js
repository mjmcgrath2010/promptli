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
  pricingUnits: {
    fixedAmount: Number,
    hourlyRate: Number,
    minimumSpend: Number,
    depositAmount: Number,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  availability: {
    monday: {
      start: String,
      end: String,
    },
    tuesday: {
      start: String,
      end: String,
    },
    wednesday: {
      start: String,
      end: String,
    },
    thursday: {
      start: String,
      end: String,
    },
    friday: {
      start: String,
      end: String,
    },
    saturday: {
      start: String,
      end: String,
    },
    sunday: {
      start: String,
      end: String,
    },
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'account',
  },
})

module.exports = mongoose.model('item', ItemsModel)
