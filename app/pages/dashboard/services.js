import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Head from 'next/head'

import withAuth from '../../lib/withAuth'
import { dashboardActions } from '../../actions/index'
import FullScreenModal from '../../components/common/FullScreenModal'
import CreateService from '../../components/dashboard/CreateService'
import DataTable from '../../components/common/DataTable'
import DashboardLayout from '../../components/dashboard/layouts'

class Services extends Component {
  static defaultProps = {}
  static propTypes = {}
  static async getInitialProps() {
    return {
      services: '',
    }
  }
  render() {
    return (
      <DashboardLayout>
        <Head>
          <title>Services | Promptli</title>
        </Head>
        <FullScreenModal title="Add a Service" btnText="Add a Service">
          <CreateService />
        </FullScreenModal>
        <DataTable resource="services" columnsHeaders={['name', 'description']} />
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

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Services))
