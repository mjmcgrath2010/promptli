import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { connect } from 'react-redux'
import { loginActions } from '../actions/index'
import Cookies from 'js-cookie'

import Nav from '../components/nav'
import Form from '../components/common/Form'

class CreateAccount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      name: '',
      confirmPassword: '',
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.getFormFields = this.getFormFields.bind(this)
    this.login = this.login.bind(this)
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
        name: 'name',
        label: 'Name',
        value: this.state.name,
        type: 'email',
      },
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
      {
        name: 'confirmPassword',
        label: 'Confirm Password',
        value: this.state.confirmPassword,
        type: 'password',
      },
    ]
  }

  login() {
    Router.push('/login')
  }

  async onSubmit(e) {
    e && e.preventDefault()
    const { email, password, name, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert('passwords must match')
    } else {
      this.props.createAccount({ email, password, name })
    }
  }
  render() {
    return (
      <div>
        <Head>
          <title>Create Account</title>
        </Head>
        <Nav />
        <img
          style={{ margin: '8em auto 4em', width: '225px', display: 'block', position: 'relative' }}
          alt="logo"
          src="../static/logos/promptli-color.png"
        />
        <Form
          onSubmit={this.onSubmit}
          submitBtnText="Create Account"
          fields={this.getFormFields()}
          onChange={this.onChange}
          title="Create an Account"
        />

        <div>
          <p style={{ textAlign: 'center', width: '100%' }}>
            Already have an account?{' '}
            <a style={{ cursor: 'pointer', color: '#2a45ff' }} role="button" onClick={this.login}>
              Click here to sign in.
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
    createAccount: payload => {
      dispatch(loginActions.createUserRequest(payload))
    },
    checkAuth: () => dispatch(loginActions.checkAuthRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
