import React from 'react';
import PropTypes from 'prop-types'
import {
  makeStyles
} from '@material-ui/core';
import clsx from 'clsx'
import SettingsContext from '../contexts/SettingsContext'
import { THEMES } from '../constants'

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

const Logo = ({className, size, white, ...rest}) => {
  const classes = useStyles();

  return (
    <SettingsContext.Consumer>
      {(context) => {
        const { settings } = context || {}

        if (settings.theme === THEMES.ONE_DARK && !white) {
         return  <img
            alt="Logo"
            className={clsx(classes[size], className)}
            src='/static/logo-white.svg'
            {...rest}
          />
        }

        if (settings.theme !== THEMES.ONE_DARK && !white) {
          return  <img
            alt="Logo"
            className={clsx(classes[size], className)}
            src='/static/logo-color.svg'
            {...rest}
          />
        }

        return <img
          alt="Logo"
          className={clsx(classes[size], className)}
          src={`/static/logo-${white ? 'white' : 'color'}.svg`}
          {...rest}
        />
      }}
    </SettingsContext.Consumer>

  );
}

Logo.defaultProps = {
  className: {},
  white: false,
  size: 'sm'
}

Logo.propTypes = {
  className: PropTypes.object,
  white: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),

}

export default Logo;
