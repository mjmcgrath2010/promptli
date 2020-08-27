import React, { Component } from 'react'

class WidgetTest extends Component {
  static defaultProps = {}
  static propTypes = {}

  componentDidMount() {
    window.location.replace(
      `/static/test/widget.html?identifier=${process.env.TEST_BUSINESS_IDENTIFIER}&widgetId=${process.env.TEST_WIDGET_ID}`
    )
  }

  render() {
    return <div></div>
  }
}

export default WidgetTest
