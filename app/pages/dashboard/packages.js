import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'

import withAuth from '../../lib/withAuth'
import DashboardLayout from '../../components/dashboard/layouts'
import createItem from '../../components/dashboard/createItem'
import DataTable from '../../components/common/DataTable'
import FullScreenModal from '../../components/common/FullScreenModal'

class Packages extends Component {
  static defaultProps = {}
  static propTypes = {}
  static async getInitialProps() {
    return {
      packages: '',
    }
  }

  render() {
    return (
      <DashboardLayout>
        <Head>
          <title>My Packages | Promptli</title>
        </Head>
        <FullScreenModal title="Add a new Package" btnText="Add Package">
          <createItem onSubmit={() => {}} />
        </FullScreenModal>
        <DataTable resource="packages" columnsHeaders={['name', 'description']} />
      </DashboardLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
    services: state.dashboard.services,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: action => dispatch(action),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Packages))
