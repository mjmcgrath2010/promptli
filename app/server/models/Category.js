const mongoose = require('mongoose')
const schema = mongoose.Schema

const CategoryModel = new schema({
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'account',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  location: {
    streetAddress: String,
    city: String,
    state: String,
    zipCode: Number,
  },
  attributes: {
    type: mongoose.Schema.Types.Object,
  },
})

module.exports = mongoose.model('category', CategoryModel)
