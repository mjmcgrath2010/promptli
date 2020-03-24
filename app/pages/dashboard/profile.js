import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Head from 'next/head'

import withAuth from '../../lib/withAuth'
import { dashboardActions } from '../../actions/index'
import DashboardLayout from '../../components/dashboard/layouts'

class Profile extends Component {
  static defaultProps = {}
  static propTypes = {
    profile: PropTypes.object.isRequired,
  }
  render() {
    const {
      profile: { name, email },
    } = this.props
    return (
      <DashboardLayout>
        <Head>
          <title>Profile | Promptli</title>
        </Head>
        <div>{name}</div>
        <div>{email}</div>
      </DashboardLayout>
    )
  }
}
const mapStateToProps = state => {
  return {
    profile: state.dashboard.profile,
  }
}

const mapDispatchToProps = dispactch => {
  return {
    dispatch: action => dispatch(action),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Profile))
