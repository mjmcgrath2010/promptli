import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { connect } from 'react-redux'
import { loginActions } from '../actions/index'
import Cookies from 'js-cookie'

import Nav from '../components/nav'
import Form from '../components/common/Form'
import { withTranslation } from '../lib/i18n'

class Login extends React.Component {
  static getInitialProps() {
    const token = Cookies.get('token')
    return {
      loggedIn: !!token,
      namespacesRequired: ['login'],
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.getFormFields = this.getFormFields.bind(this)
    this.createAccount = this.createAccount.bind(this)
  }

  componentDidMount() {
    this.props.checkAuth()
  }

  onChange({ target: { value, name } }) {
    this.setState({ [name]: value })
  }

  getFormFields() {
    return [
      {
        name: 'email',
        label: 'Email',
        value: this.state.email,
        type: 'email',
      },
      {
        name: 'password',
        label: 'Password',
        value: this.state.password,
        type: 'password',
      },
    ]
  }

  createAccount() {
    Router.push('/create-account')
  }

  forgotPassword = e => {
    e && e.preventDefault()
    Router.push('/forgot-password')
  }

  async onSubmit(e) {
    e && e.preventDefault()
    this.props.loginRequest(this.state)
  }
  render() {
    const { t } = this.props
    return (
      <div>
        <Head>
          <title>Login</title>
        </Head>
        <Nav />
        <img
          style={{ margin: '8em auto 4em', width: '225px', display: 'block', position: 'relative' }}
          alt="logo"
          src="../static/logos/promptli-color.png"
        />
        <Form
          onSubmit={this.onSubmit}
          submitBtnText="Login"
          fields={this.getFormFields()}
          onChange={this.onChange}
          title={t('title')}
        />
        <div>
          <p style={{ textAlign: 'center', width: '100%' }}>
            {this.props.t('noAccount')}{' '}
            <a style={{ cursor: 'pointer', color: '#2a45ff' }} role="button" onClick={this.createAccount}>
              {t('createAccount')}
            </a>{' '}
          </p>
          <p style={{ textAlign: 'center', width: '100%' }}>
            Forgot Password?{' '}
            <a style={{ cursor: 'pointer', color: '#2a45ff' }} role="button" onClick={this.forgotPassword}>
              Click here to reset.
            </a>{' '}
          </p>
        </div>
        <style jsx>{``}</style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: payload => {
      dispatch(loginActions.makeLoginRequest(payload))
    },
    checkAuth: () => dispatch(loginActions.checkAuthRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('login')(Login))
