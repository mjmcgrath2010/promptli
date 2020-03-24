import React, { useState, useEffect } from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Router from 'next/router'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  breadcrumb: {
    color: '#fff',
  },
}))

const NavigationBreadCrumbs = props => {
  const [breadcrumbs, setBreadcrumbs] = useState([])
  const classes = useStyles()
  useEffect(() => {
    const handleBreadcrumbs = url => {
      const breadcrumbs = url
        .split('/')
        .filter(el => !!el)
        .map(bc => ({
          text: bc.toUpperCase(),
        }))
      setBreadcrumbs(breadcrumbs)
    }
    Router.events.on('routeChangeComplete', handleBreadcrumbs)
    handleBreadcrumbs(window.location.pathname)
    return function cleanup() {
      Router.events.off('routeChangeComplete', handleBreadcrumbs)
    }
  }, [])
  return (
    <Breadcrumbs className={classes.breadcrumb} aria-label="breadcrumb">
      {breadcrumbs.map(breadcrumb => {
        return (
          <span className={classes.breadcrumb} key={breadcrumb.text}>
            {breadcrumb.text}
          </span>
        )
      })}
    </Breadcrumbs>
  )
}

export default NavigationBreadCrumbs
