import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Head from 'next/head'
import { Container } from '@material-ui/core'

class WidgetTest extends Component {
  static defaultProps = {}
  static propTypes = {}

  componentDidMount() {
    const el = document.getElementById('demo')
    window &&
      el &&
      window.PromptliWidget.init(
        {
          identifier: process.env.TEST_BUSINESS_IDENTIFIER,
          widgetId: process.env.TEST_WIDGET_ID,
        },
        'demo'
      )
  }

  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Widget Integrations | Promptli</title>
        </Head>
        <Container>
          <div id="demo"></div>
        </Container>
      </div>
    )
  }
}

export default WidgetTest
