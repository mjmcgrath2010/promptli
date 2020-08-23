;(function() {
  console.log('setting up', window.TEST_BUSINESS_IDENTIFIER)
  window.PromptliWidget &&
    window.PromptliWidget.init(
      {
        identifier: window.TEST_BUSINESS_IDENTIFIER,
        widgetId: window.TEST_BUSINESS_IDENTIFIER,
      },
      'demo'
    )
})()
