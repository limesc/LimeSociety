/**
 * https://material-ui.com/demos/app-bar/#app-bar-with-buttons
 */

import {
  AppBar,
  Button,
  createStyles,
  IconButton,
  Toolbar,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'

const styles = theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    }
  })

type ButtonAppBarProps = WithStyles<typeof styles>

function ButtonAppBar (props: ButtonAppBarProps) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color='inherit'
            aria-label='Menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' color='inherit' className={classes.grow}>
            News
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(ButtonAppBar)
