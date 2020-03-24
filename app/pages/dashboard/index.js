import React, { Component } from 'react'
import { connect } from 'react-redux'

import withAuth from '../../lib/withAuth'
import { dashboardActions } from '../../actions/index'
import Head from 'next/head'
import DashboardLayout from '../../components/dashboard/layouts'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.props.initDashboard()
    }

    render() {
        return (
            <DashboardLayout>
                <Head>
                    <title>Dashboard | Promptli</title>
                </Head>
            </DashboardLayout>
        )
    }
}

Dashboard.getInitialProps = async ctx => {
    return {
        hello: 'world',
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        initDashboard: () => dispatch(dashboardActions.initDashboardRequest()),
    }
}
export default connect(
    null,
    mapDispatchToProps
)(withAuth(Dashboard))
