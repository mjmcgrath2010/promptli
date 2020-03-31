import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Head from 'next/head'

import withAuth from '../../lib/withAuth'
import { dashboardActions } from '../../actions/index'
import DashboardLayout from '../../components/dashboard/layouts'

class Design extends Component {
  static defaultProps = {}
  static propTypes = {}
  static async getInitialProps() {
    return {
      design: '',
    }
  }
  componentDidMount() {
    window.PromptliWidget && window.PromptliWidget.init({ title: 'hello from dashboard' }, 'editor')
  }

  render() {
    return (
      <DashboardLayout>
        <Head>
          <title>Dashboard</title>
        </Head>
        <div>Design</div>
        <div id="editor" />
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
