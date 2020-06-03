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
  styles: [
    {
      primaryColor: {
        type: String,
        default: 'blue',
      },
      secondaryColor: {
        type: String,
        default: 'green',
      },
    },
  ],
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'account',
    required: true,
  },
  services: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'service',
      required: true,
    },
  ],
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'item',
      required: true,
    },
  ],
})

module.exports = mongoose.model('widgetConfig', WidgetConfigModel)
