import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const FullScreenModal = props => {
  const { btnText, title, saveText, children, onSave } = props
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleSave = () => {
    onSave()
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {btnText}
      </Button>
      <Dialog fullScreen open={open} onClose={handleSave} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              {saveText}
            </Button>
          </Toolbar>
        </AppBar>
        {children}
      </Dialog>
    </div>
  )
}

FullScreenModal.defaultProps = {
  saveText: 'Save',
  onSave: () => {},
}

FullScreenModal.propTypes = {
  title: PropTypes.string.isRequired,
  saveText: PropTypes.string,
  onSave: PropTypes.func,
  children: PropTypes.node.isRequired,
  btnText: PropTypes.string.isRequired,
}

export default FullScreenModal