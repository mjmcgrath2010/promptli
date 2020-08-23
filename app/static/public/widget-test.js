;(function() {
  console.log('setting up', process.env.TEST_BUSINESS_IDENTIFIER)
  window.PromptliWidget &&
    window.PromptliWidget.init(
      {
        identifier: process.env.TEST_BUSINESS_IDENTIFIER,
        widgetId: process.env.TEST_WIDGET_ID,
      },
      'demo'
    )
})()
