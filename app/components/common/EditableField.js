import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}))

const EditableField = ({ options, onChange, editable }) => {
  const { value, label } = options
  const classes = useStyles()
  return (
    <Fragment>
      <TextField
        id="standard-read-only-input"
        label={label}
        defaultValue={value}
        className={classes.textField}
        margin="normal"
        onChange={editable ? onChange : () => {}}
        InputProps={{
          readOnly: !editable,
        }}
      />
    </Fragment>
  )
}

EditableField.defaultProps = {
  editable: true,
  onChange: () => {},
  options: PropTypes.shape({
    value: 'Hello',
    label: 'Hello',
  }).isRequired,
}

EditableField.propTypes = {
  editable: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
}

export default EditableField
