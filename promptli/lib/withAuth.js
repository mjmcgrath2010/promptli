import React from 'react'
import Cookies from 'js-cookie'
import Router from 'next/router'

const withAuth = Page => {
    return class extends React.Component {
        componentDidMount() {
            const token = Cookies.get('token')

            if (token) {
                return {
                    token: token,
                    isLoggedIn: true,
                }
            } else {
                Router.push('/login')
            }
        }
        render() {
            return <Page {...this.props} />
        }
    }
}

export default withAuth
