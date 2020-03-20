import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}))

const CommonButton = props => {
    const { variant, color, onClick, text, ...rest } = props
    const classes = useStyles()
    return (
        <Button
            variant={variant || 'outlined'}
            color={color || 'primary'}
            className={classes.button}
            onClick={onClick}
            {...rest}
        >
            {text}
        </Button>
    )
}

CommonButton.propTypes = {
    variant: PropTypes.oneOf(['outlined', 'contained']),
    color: PropTypes.oneOf(['primary', 'secondary']),
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default CommonButton
