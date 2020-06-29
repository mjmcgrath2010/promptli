import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Form from '../common/Form'
import { dashboardActions } from '../../actions'
import zIndex from '@material-ui/core/styles/zIndex'

class CreateCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      image: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
    }
  }
  getFormFields = () => {
    return [
      {
        name: 'title',
        label: 'Title',
        value: this.state.title,
        type: 'text',
      },
      {
        name: 'description',
        label: 'Description',
        multiline: true,
        value: this.state.description,
        type: 'text',
      },
      {
        name: 'image',
        label: 'Image',
        value: this.state.image,
        type: 'text',
      },
      {
        name: 'streetAddress',
        label: 'Street',
        value: this.state.streetAddress,
        type: 'text',
      },
      {
        name: 'city',
        label: 'City',
        value: this.state.city,
        type: 'text',
      },
      {
        name: 'state',
        label: 'State',
        value: this.state.state,
        type: 'text',
      },
      {
        name: 'zipCode',
        label: 'Zip',
        value: this.state.zipCode,
        type: 'text',
      },
    ]
  }

  onSubmit = () => {
    const { accountId, createCategory } = this.props
    const { title, description, image, zipCode, ...rest } = this.state
    createCategory({ title, description, image, accountId, location: { ...rest, zipCode: parseInt(zipCode) } })
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
          submitBtnText="Create Category"
          fields={this.getFormFields()}
          onChange={this.onChange}
        />
      </Fragment>
    )
  }
}

CreateCategory.defaultProps = {
  onSubmit: () => {},
}
CreateCategory.propTypes = {
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
    createCategory: payload => dispatch(dashboardActions.createCategoryRequest(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCategory)
