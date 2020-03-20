import React, { Fragment, useCallback } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CommonButton from './CommonButton'
import { dashboardActions } from '../../actions'

const GoogleAuthComponent = props => {
  const { accountId, connectGoogleAccount } = props
  const connectGoogle = () => {
    connectGoogleAccount({ accountId })
  }
  return (
    <Fragment>
      <CommonButton text="Connect Google" onClick={connectGoogle} />
    </Fragment>
  )
}

GoogleAuthComponent.defaultProps = {}
GoogleAuthComponent.propTypes = {}

const mapStateToProps = state => ({
  googleConnected: state.dashboard.profile,
  accountId: state.dashboard.accountId,
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  connectGoogleAccount: payload => dispatch(dashboardActions.connectGoogleAccount(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuthComponent)
