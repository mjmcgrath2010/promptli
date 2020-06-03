import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Form from '../common/Form'
import { dashboardActions } from '../../actions'

class CreateItem extends Component {
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
      services: [],
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
        name: 'services',
        label: 'Applicable Services',
        value: this.state.services,
        type: 'select',
        values: [], // TODO: Hook up to services
        onChange: this.onSelectChange,
      },
    ]
  }
  onSubmit = () => {
    const { accountId, createItem } = this.props
    createItem({ ...this.state, accountId })
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
          submitBtnText="Create Package"
          fields={this.getFormFields()}
          onChange={this.onChange}
        />
      </Fragment>
    )
  }
}

CreateItem.defaultProps = {
  onSubmit: () => {},
}
CreateItem.propTypes = {
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
    createItem: payload => dispatch(dashboardActions.createItemRequest(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem)
