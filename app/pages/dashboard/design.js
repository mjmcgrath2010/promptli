import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Head from 'next/head'
import styled from 'styled-components'
import withAuth from '../../lib/withAuth'
import { dashboardActions } from '../../actions/index'
import DashboardLayout from '../../components/dashboard/layouts'
import WidgetEditor from '../../components/dashboard/WidgetEditor'

class Design extends Component {
  static defaultProps = {}
  static propTypes = {}
  componentDidMount() {}

  render() {
    return (
      <DashboardLayout>
        <Head>
          <title>Dashboard</title>
        </Head>
        <div>Design</div>
        {this.props.displays && this.props.displays.map(display => <div>{display.title}</div>)}
      </DashboardLayout>
    )
  }
}

const mapStateToProps = ({ dashboard }) => {
  return {
    displays: dashboard.displays,
  }
}

const mapDispatchToProps = dispactch => {
  return {
    dispatch: action => dispatch(action),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Design))
