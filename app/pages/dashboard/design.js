import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Head from 'next/head'
import styled from 'styled-components'
import withAuth from '../../lib/withAuth'
import { dashboardActions } from '../../actions/index'
import DashboardLayout from '../../components/dashboard/layouts'

const IFrameEditor = styled.iframe`
  width: 60vw;
  height: calc(90vh - 70px);
  border: 3px solid gray;
  border-radius: 5px;
  position: absolute;
  right: 2em;
  top: 70px;
`
class Design extends Component {
  static defaultProps = {}
  static propTypes = {}
  static async getInitialProps() {
    return {
      design: '',
    }
  }
  componentDidMount() {
    this.runCode()
  }

  runCode = () => {
    const iframe = this.iframe
    const document = iframe.contentDocument
    const documentContents = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Widget Preview</title>
            <style>
            </style>
          </head>
          <body>
            <div id="editor" />
            <script src="${window.location.origin}/static/widget/promptli.js"></script>
            <script type="text/javascript">
              window.PromptliWidget && window.PromptliWidget.init({ title: 'hello from dashboard' }, 'editor')
            </script>
          </body>
          </html>
        `

    document.open()
    document.write(documentContents)
    document.close()
  }

  render() {
    return (
      <DashboardLayout>
        <Head>
          <title>Dashboard</title>
        </Head>
        <div>Design</div>
        <section className="result">
          <IFrameEditor ref={ref => (this.iframe = ref)} />
        </section>
      </DashboardLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
  }
}

const mapDispatchToProps = dispactch => {
  return {
    dispatch: action => dispatch(action),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Design))
