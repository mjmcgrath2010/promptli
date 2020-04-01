import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from '@material-ui/core'
import * as Sentry from '@sentry/browser'
import styled from 'styled-components'
import TopNav from '../topNav'

const DashboardContainer = styled(Container)`
  margin-top: 24px;
`

class DashboardLayout extends Component {
  componentDidMount() {
    const { profile } = this.props
    if (profile && profile.email) {
      Sentry.configureScope(function(scope) {
        scope.setUser({ email: profile.email })
      })
      switch (window.location.pathname) {
        case '/dashboard/design':
          return
        default:
          return this.initDrift(profile)
      }
    }
  }

  initDrift = profile => {
    'use strict'
    const { email, name } = profile

    !(function() {
      var t = (window.driftt = window.drift = window.driftt || [])
      if (!t.init) {
        if (t.invoked) return void (window.console && console.error && console.error('Drift snippet included twice.'))
        ;(t.invoked = !0),
          (t.methods = ['identify', 'config', 'track', 'reset', 'debug', 'show', 'ping', 'page', 'hide', 'off', 'on']),
          (t.factory = function(e) {
            return function() {
              var n = Array.prototype.slice.call(arguments)
              return n.unshift(e), t.push(n), t
            }
          }),
          t.methods.forEach(function(e) {
            t[e] = t.factory(e)
          }),
          (t.load = function(t) {
            var e = 3e5,
              n = Math.ceil(new Date() / e) * e,
              o = document.createElement('script')
            ;(o.type = 'text/javascript'),
              (o.async = !0),
              (o.crossorigin = 'anonymous'),
              (o.src = 'https://js.driftt.com/include/' + n + '/' + t + '.js')
            var i = document.getElementsByTagName('script')[0]
            i.parentNode.insertBefore(o, i)
          })
      }
    })()
    drift.SNIPPET_VERSION = '0.3.1'
    drift.load('86kungi7t23i')
    drift.identify(name, {
      email,
    })
  }

  render() {
    return (
      <div>
        <TopNav />
        <DashboardContainer fixed>{this.props.children}</DashboardContainer>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.dashboard.profile,
})
export default connect(mapStateToProps, null)(DashboardLayout)
