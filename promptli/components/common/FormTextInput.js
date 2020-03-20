import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}))

const FormTextInput = ({ onChange, value, name, label, type, multiline, disabled }) => {
  const classes = useStyles()
  return (
    <TextField
      id={label}
      label={label}
      className={classes.textField}
      value={value}
      onChange={onChange}
      name={name}
      margin="normal"
      variant="outlined"
      type={type}
      multiline={multiline}
      disabled={disabled}
      rows={multiline ? '4' : '1'}
      fullWidth
    />
  )
}

FormTextInput.defaultProps = {
  type: 'input',
  multiline: false,
  disabled: false,
}

FormTextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  multiline: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default FormTextInput
