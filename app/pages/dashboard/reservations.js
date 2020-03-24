import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Head from 'next/head'

import withAuth from '../../lib/withAuth'
import { dashboardActions } from '../../actions/index'
import DashboardLayout from '../../components/dashboard/layouts'
import Calendar from '../../components/common/Calendar'

class Reservations extends Component {
  static defaultProps = {}
  static propTypes = {}
  static async getInitialProps() {
    return {
      reservations: '',
    }
  }
  render() {
    return (
      <DashboardLayout>
        <Head>
          <title>Reservations | Promptli</title>
        </Head>
        <Calendar />
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

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Reservations))
