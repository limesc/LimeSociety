import {
  AppBar as MuiAppBar,
  createStyles,
  WithStyles,
  withStyles
} from '@material-ui/core'
import { AppBarProps as MuiAppBarProps } from '@material-ui/core/AppBar'
import React from 'react'

const styles = theme =>
  createStyles({
    root: {
      color: theme.palette.common.white
    }
  })

type AppBarProps = MuiAppBarProps & WithStyles<typeof styles>

class AppBar extends React.Component<AppBarProps> {
  render () {
    return (
      <MuiAppBar
        elevation={0}
        color='inherit'
        position='static'
        {...this.props}
      />
    )
  }
}

export default withStyles(styles)(AppBar)
