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
      start: Date,
      end: Date,
    },
    tuesday: {
      start: Date,
      end: Date,
    },
    wednesday: {
      start: Date,
      end: Date,
    },
    thursday: {
      start: Date,
      end: Date,
    },
    friday: {
      start: Date,
      end: Date,
    },
    saturday: {
      start: Date,
      end: Date,
    },
    sunday: {
      start: Date,
      end: Date,
    },
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'account',
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category',
    },
  ],
})

module.exports = mongoose.model('item', ItemsModel)
