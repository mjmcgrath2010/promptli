import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import PropTypes from 'prop-types'
import Head from 'next/head'

import { loginActions } from '../actions'

import Nav from '../components/nav'
import Form from '../components/common/Form'

class ForgotPassword extends Component {
  static defaultProps = {}
  static propTypes = {}
  constructor(props) {
    super(props)
    this.state = {
      email: '',
    }
  }

  getFormFields = () => {
    return [
      {
        name: 'email',
        label: 'email',
        value: this.state.email,
      },
    ]
  }

  onChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
  }

  onSubmit = e => {
    e && e.preventDefault()
    this.props.forgotPasswordRequest(this.state)
  }

  login = e => {
    e && e.preventDefault()
    Router.push('/login')
  }

  createAccount = e => {
    e && e.preventDefault()
    Router.push('/create-account')
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
          title="Forgot Password"
        />

        <p style={{ textAlign: 'center', width: '100%' }}>
          Already have an account?{' '}
          <a style={{ cursor: 'pointer', color: '#2a45ff' }} role="button" onClick={this.login}>
            Click here to sign in.
          </a>{' '}
        </p>
        <p style={{ textAlign: 'center', width: '100%' }}>
          Don't have an account yet?{' '}
          <a style={{ cursor: 'pointer', color: '#2a45ff' }} role="button" onClick={this.createAccount}>
            Click here to create an account.
          </a>{' '}
        </p>

        <style jsx>{``}</style>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  forgotPasswordRequest: payload => dispatch(loginActions.forgotPasswordRequest(payload)),
})

export default connect(null, mapDispatchToProps)(ForgotPassword)
