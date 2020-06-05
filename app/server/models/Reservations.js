const mongoose = require('mongoose')
const schema = mongoose.Schema

const ReservationsModel = new schema({
  customer: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    company: {
      type: String,
    },
  },
  startDate: {
    type: mongoose.Schema.Types.Date,
  },
  endDate: {
    type: mongoose.Schema.Types.Date,
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'item',
    },
  ],
  totalCost: {
    type: Number,
  },
  status: {
    type: String,
    default: 'active',
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'account',
  },
})

ReservationsModel.methods = {
  title() {},
}

module.exports = mongoose.model('reservation', ReservationsModel)
