import React, { Component, Fragment } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'

import { Container } from '@material-ui/core'

class AdminLayout extends Component {
    redirect = () => Router.push('/dashboard')
    render() {
        const { children, isAdmin } = this.props
        if (!isAdmin) {
            this.redirect()
            return <Fragment />
        } else {
            return <Container>{children}</Container>
        }
    }
}

const mapStateToProps = state => ({
    isAdmin: state.dashboard.profile.admin,
})
export default connect(
    mapStateToProps,
    null
)(AdminLayout)
