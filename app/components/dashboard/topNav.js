import React, { Component } from 'react'
import { connect } from 'react-redux'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Link from 'next/link'

import { withStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Icon from '@material-ui/core/Icon'
import { loginActions } from '../../actions'
import NavigationBreadCrumbs from '../common/NavigationBreadCrumbs'

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: '1em',
  },
  iconListItem: {
    marginRight: '.5em',
  },
  breadcrumbs: {
    justifyContent: 'space-evenly',
    flex: 1,
    textAlign: 'left',
  },
  list: {
    width: 250,
  },
  appName: {
    position: 'absolute',
    left: 'calc(50% - 75px)',
    width: '150px',
    textAlign: 'center',
    zIndex: -1,
  },
  drawerLogo: {
    width: '100px',
    margin: '.5em auto',
  },
  logo: {
    width: '150px',
    margin: '.5em auto 0',
  },
  navTitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: '18px',
    display: 'block',
    position: 'relative',
    margin: '.5em auto 0',
  },
}

class TopNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    this.onNavToggle = this.onNavToggle.bind(this)
  }

  logOut = () => {
    this.props.logout()
  }

  onNavToggle() {
    const nextState = !this.state.open
    this.setState({
      open: nextState,
    })
  }

  renderPrimaryList() {
    const { classes } = this.props
    return (
      <List>
        {[
          {
            text: 'Dashboard',
            path: '/dashboard',
            icon: 'home',
          },
          {
            text: 'Reservations',
            path: '/dashboard/reservations',
            icon: 'insert_invitation',
          },
          {
            text: 'Services',
            path: '/dashboard/services',
            icon: 'schedule',
          },
          {
            text: 'Items',
            path: '/dashboard/items',
            icon: 'local_offer',
          },
          {
            text: 'Design + Publish',
            path: '/dashboard/design',
            icon: 'build',
          },
        ].map(li => (
          <Link href={li.path} key={li.path}>
            <ListItem button>
              <Icon className={classes.iconListItem}>{li.icon}</Icon>
              <ListItemText primary={li.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    )
  }

  renderSecondaryList() {
    const { classes } = this.props
    return (
      <List>
        {[
          {
            text: 'Profile',
            path: '/dashboard/profile',
            icon: 'account_box',
          },
          {
            text: 'Settings',
            path: '/dashboard/settings',
            icon: 'settings_applications',
          },
        ].map(li => (
          <Link href={li.path} key={li.path}>
            <ListItem button>
              <Icon className={classes.iconListItem}>{li.icon}</Icon>
              <ListItemText primary={li.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    )
  }

  render() {
    const { profile, isLoggedIn, classes } = this.props
    const { open } = this.state
    return (
      <div className={classes.root}>
        <Drawer open={open} onClose={this.onNavToggle}>
          <div className={classes.list} role="presentation" onClick={this.onNavToggle} onKeyDown={this.onNavToggle}>
            <div className={classes.navTitle}>
              <img alt="logo" className={classes.drawerLogo} src="../../static/logos/promptli-color.png" />
            </div>
            <Divider />
            {this.renderPrimaryList()}
            <Divider />
            {this.renderSecondaryList()}
          </div>
        </Drawer>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={this.onNavToggle}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.breadcrumbs}>
              <NavigationBreadCrumbs />
            </div>
            <div className={classes.appName}>
              <img alt="logo" className={classes.logo} src="../../static/logos/promptli-white.png" />
            </div>
            <Button color="inherit" onClick={this.logOut}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.dashboard.profile,
    isLoggedIn: state.auth.isLoggedIn,
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  logout: () => dispatch(loginActions.makeLogoutRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TopNav))
