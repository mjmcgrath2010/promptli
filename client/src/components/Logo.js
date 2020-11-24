import React from 'react';
import PropTypes from 'prop-types'
import {
  makeStyles
} from '@material-ui/core';
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(2),
  },
  sm: {
    height: '35px'
  },
  md: {
    height: '45px'
  },
  lg: {
    height: '55px'
  },
  xl: {
    height: '65px'
  }
}));

const Logo = ({className, size, colored, ...rest}) => {
  const classes = useStyles();
  return (
    <span className={classes.root}>
      <img
          alt="Logo"
          className={clsx(classes[size], className)}
          src={`/static/logo-${colored ? 'color' : 'white'}.svg`}
          {...rest}
        />
    </span>

  );
}

Logo.defaultProps = {
  className: {},
  colored: false,
  size: 'sm'
}

Logo.propTypes = {
  className: PropTypes.string,
  color: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),

}

export default Logo;
