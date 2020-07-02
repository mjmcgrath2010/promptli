const mongoose = require('mongoose')
const schema = mongoose.Schema

const WidgetConfigModel = new schema({
  title: {
    type: String,
    required: true,
  },
  ctaText: {
    type: String,
    required: true,
  },
  styles: {
    primaryColor: {
      type: String,
      default: 'blue',
    },
    secondaryColor: {
      type: String,
      default: 'green',
    },
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'account',
    required: true,
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'item',
      required: true,
    },
  ],
  categories: [
    {
      type: mongoose.Schema.Types.ObjectID,
      ref: 'category',
    },
  ],
})

module.exports = mongoose.model('widgetConfig', WidgetConfigModel)
