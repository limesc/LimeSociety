import {
  createStyles,
  Toolbar as MuiToolbar,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

export const styles = theme =>
  createStyles({
    root: {
      height: 64,
      [theme.breakpoints.up('sm')]: {
        height: 100
      }
    }
  })

interface ToolbarProps extends WithStyles<typeof styles> {}

class Toolbar extends React.Component<ToolbarProps> {
  render () {
    return <MuiToolbar {...this.props} />
  }
}

export default withStyles(styles)(Toolbar)
