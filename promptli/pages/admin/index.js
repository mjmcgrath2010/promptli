import React, { Component } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import withAuth from '../../lib/withAuth'
import AdminLayout from '../../components/admin'
import DataTable from '../../components/common/DataTable'

class Admin extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Admin</title>
                </Head>
                <AdminLayout>
                    <DataTable
                        resource="user"
                        columnsHeaders={['name', 'email', 'admin']}
                    />
                </AdminLayout>

                <style jsx>{``}</style>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    admin: state.admin,
})

export default connect(
    mapStateToProps,
    null
)(withAuth(Admin))
