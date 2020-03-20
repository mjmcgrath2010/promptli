import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import PropTypes from 'prop-types'
import Head from 'next/head'

import { loginActions } from '../actions'

import Nav from '../components/nav'
import Form from '../components/common/Form'

class ResetPassword extends Component {
  static async getInitialProps({ query }) {
    return {
      resetPasswordToken: query.token,
    }
  }
  static defaultProps = {}
  static propTypes = {}
  constructor(props) {
    super(props)
    this.state = {
      newPassword: null,
      verifyPassword: null,
    }
  }
  componentDidMount() {
    if (!this.props.resetPasswordToken) {
      Router.push('/forgot-password')
    }
  }

  getFormFields = () => {
    return [
      {
        name: 'newPassword',
        label: 'New Password',
        value: this.state.newPassword,
        type: 'password',
      },
      {
        name: 'verifyPassword',
        label: 'Confirm New Password',
        value: this.state.verifyPassword,
        type: 'password',
      },
    ]
  }

  onChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
  }

  onSubmit = e => {
    e && e.preventDefault()
    const { resetPasswordToken } = this.props
    this.props.resetPassword({ ...this.state, resetPasswordToken })
  }

  render() {
    return (
      <div>
        <Head>
          <title>Reset Password</title>
        </Head>
        <Nav />
        <img
          style={{ margin: '8em auto 4em', width: '225px', display: 'block', position: 'relative' }}
          alt="logo"
          src="../static/logos/promptli-color.png"
        />
        <Form
          onSubmit={this.onSubmit}
          submitBtnText="Reset Password"
          fields={this.getFormFields()}
          onChange={this.onChange}
          title="Reset Password"
        />

        <style jsx>{``}</style>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  resetPassword: payload => dispatch(loginActions.resetPasswordRequest(payload)),
})

export default connect(null, mapDispatchToProps)(ResetPassword)
