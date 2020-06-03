import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'

import withAuth from '../../lib/withAuth'
import DashboardLayout from '../../components/dashboard/layouts'
import CreateItem from '../../components/dashboard/CreateItem'
import DataTable from '../../components/common/DataTable'
import FullScreenModal from '../../components/common/FullScreenModal'

class Items extends Component {
  static defaultProps = {}
  static propTypes = {}

  render() {
    return (
      <DashboardLayout>
        <Head>
          <title>My Items | Promptli</title>
        </Head>
        <FullScreenModal title="Add a new Item" btnText="Add Item">
          <CreateItem onSubmit={() => {}} />
        </FullScreenModal>
        <DataTable resource="items" columnsHeaders={['name', 'description']} />
      </DashboardLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
    items: state.dashboard.items,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: action => dispatch(action),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Items))
