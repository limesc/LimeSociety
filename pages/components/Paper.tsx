import {
  createStyles,
  Paper as MuiPaper,
  WithStyles,
  withStyles
} from '@material-ui/core'
import { capitalize } from '@material-ui/core/utils/helpers'
import clsx from 'clsx'
import React from 'react'

const styles = theme =>
  createStyles({
    backgroundLight: {
      backgroundColor: theme.palette.secondary.light
    },
    backgroundMain: {
      backgroundColor: theme.palette.secondary.main
    },
    backgroundDark: {
      backgroundColor: theme.palette.secondary.dark
    },
    padding: {
      padding: theme.spacing(1)
    }
  })

interface PaperProps extends WithStyles<typeof styles> {
  background?: string | 'light' | 'main' | 'dark'
  className?: string
  padding?: boolean
}

class Paper extends React.Component<PaperProps> {
  static defaultProps = {
    background: 'light',
    padding: false
  }

  render () {
    const { background, classes, className, padding, ...other } = this.props
    return (
      <MuiPaper
        elevation={0}
        square
        className={clsx(
          classes[`background${capitalize(background)}`],
          {
            [classes.padding]: padding
          },
          className
        )}
        {...other}
      />
    )
  }
}

export default withStyles(styles)(Paper)
