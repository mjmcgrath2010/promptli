import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Head from 'next/head'

import withAuth from '../../lib/withAuth'
import { dashboardActions } from '../../actions/index'
import DashboardLayout from '../../components/dashboard/layouts'
import FullScreenModal from '../../components/common/FullScreenModal'
import DataTable from '../../components/common/DataTable'
import CreateCategory from '../../components/dashboard/CreateCategory'

class Categories extends Component {
  static defaultProps = {}
  static propTypes = {}
  render() {
    return (
      <DashboardLayout>
        <Head>
          <title>Categories</title>
        </Head>
        <div>Categories</div>
        <FullScreenModal btnText="New Category" title="Add a new Category">
          <CreateCategory onSubmit={() => {}} />
        </FullScreenModal>
        <DataTable resource="categories" columnsHeaders={['title', 'description']} />
      </DashboardLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
    categories: state.dashboard.categories,
  }
}

const mapDispatchToProps = dispactch => {
  return {
    dispatch: action => dispatch(action),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Categories))
