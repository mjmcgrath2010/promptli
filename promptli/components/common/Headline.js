import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
})

const Headline = props => {
    const classes = useStyles()
    const { text, variant, align, gutterBottom, paragraph, display } = props
    const displayType =
        (['caption', 'overline'].includes(variant) && 'block') || display
    return (
        <div className={classes.root}>
            <Typography
                variant={variant}
                display={displayType}
                align={align || 'left'}
                gutterBottom={gutterBottom}
                paragraph={paragraph}
            >
                {text}
            </Typography>
        </div>
    )
}

Headline.defaultProps = {
    variant: 'h2',
    align: 'left',
    display: 'initial',
    gutterBottom: true,
    paragraph: false,
    color: 'inherit',
}

Headline.propTypes = {
    text: PropTypes.string.isRequired,
    variant: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'overline',
    ]),
    align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
    display: PropTypes.oneOf(['initial', 'block', 'inline']),
    gutterBottom: PropTypes.bool,
    paragraph: PropTypes.bool,
    color: PropTypes.oneOf([
        'inherit',
        'primary',
        'secondary',
        'textPrimary',
        'textSecondary',
        'error',
    ]),
}

export default Headline
