import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Head from 'next/head'

class WidgetTest extends Component {
  static defaultProps = {}
  static propTypes = {}

  componentDidMount() {
    const el = document.getElementById('demo')
    console.log(
      el,
      window.PromptliWidget.init,
      process.env.TEST_BUSINESS_IDENTIFIER,
      process.env.TEST_BUSINESS_IDENTIFIER
    )
    window &&
      el &&
      window.PromptliWidget.init(
        {
          identifier: process.env.TEST_BUSINESS_IDENTIFIER,
          widgetId: process.env.TEST_BUSINESS_IDENTIFIER,
        },
        'demo'
      )
  }

  render() {
    return (
      <div>
        <Head>
          <title>Settings | Promptli</title>
        </Head>
        <div id="demo"></div>
      </div>
    )
  }
}

export default WidgetTest
