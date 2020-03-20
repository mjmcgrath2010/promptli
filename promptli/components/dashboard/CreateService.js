import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Form from '../common/Form'
import { dashboardActions } from '../../actions'

class CreateService extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      pricingUnits: {
        fixed: undefined,
        hourly: undefined,
        deposit: undefined,
        minimum: undefined,
      },
      packages: [],
    }
  }
  getFormFields = () => {
    return [
      {
        name: 'name',
        label: 'Name',
        value: this.state.name,
      },
      {
        name: 'description',
        label: 'Description',
        multiline: true,
        value: this.state.description,
        type: 'text',
      },
      {
        name: 'packages',
        label: 'Available Packages',
        value: this.state.packages,
        type: 'select',
        values: [], // TODO: Hook up to services
        onChange: this.onSelectChange,
      },
    ]
  }
  onSubmit = () => {
    const { accountId, createService } = this.props
    createService({ ...this.state, accountId })
  }
  onChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
  }

  onSelectChange = val => {
    console.log(val)
  }
  render() {
    return (
      <Fragment>
        <Form
          onSubmit={this.onSubmit}
          submitBtnText="Create Service"
          fields={this.getFormFields()}
          onChange={this.onChange}
        />
      </Fragment>
    )
  }
}

CreateService.defaultProps = {
  onSubmit: () => {},
}
CreateService.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    accountId: state.dashboard.accountId,
    services: state.dashboard.services,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: action => dispatch(action),
    createService: payload => dispatch(dashboardActions.createServiceRequest(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateService)