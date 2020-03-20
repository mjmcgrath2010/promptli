import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Head from 'next/head'

import withAuth from '../../lib/withAuth'
import { dashboardActions } from '../../actions/index'
import DashboardLayout from '../../components/dashboard/layouts'
import GoogleAuthComponent from '../../components/common/GoogleAuthComponent'

class Settings extends Component {
  static defaultProps = {}
  static propTypes = {}
  static async getInitialProps() {
    return {
      settings: '',
    }
  }
  render() {
    return (
      <DashboardLayout>
        <Head>
          <title>Settings | Promptli</title>
        </Head>
        <div>Settings</div>
        <GoogleAuthComponent />
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

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Settings))
