import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}))

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const SelectWrapper = props => {
  const classes = useStyles()
  const { value, onChange, values, label } = props
  return (
    <Fragment>
      <FormControl className={classes.formControl}>
        <InputLabel id="mutiple-checkbox-label">{label}</InputLabel>
        <Select
          labelId="mutiple-checkbox-label"
          id="mutiple-checkbox"
          multiple
          value={value}
          onChange={onChange}
          input={<Input />}
          fullWidth
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {values.map(val => (
            <MenuItem key={val} value={val}>
              <Checkbox checked={value.indexOf(val) > -1} />
              <ListItemText primary={val} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Fragment>
  )
}

SelectWrapper.propTypes = {
  value: PropTypes.array.isRequired,
  values: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export default SelectWrapper
