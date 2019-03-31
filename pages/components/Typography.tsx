import {
  createStyles,
  Typography as MuiTypography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import { TypographyProps as MuiTypographyProps } from '@material-ui/core/Typography'
import { capitalize } from '@material-ui/core/utils/helpers'
import React from 'react'

const styles = theme =>
  createStyles({
    markedH2Center: {
      height: 4,
      width: 73,
      display: 'block',
      margin: `${theme.spacing.unit * 1}px auto 0`,
      backgroundColor: theme.palette.secondary.main
    },
    markedH3Center: {
      height: 4,
      width: 55,
      display: 'block',
      margin: `${theme.spacing.unit * 1}px auto 0`,
      backgroundColor: theme.palette.secondary.main
    },
    markedH4Center: {
      height: 4,
      width: 55,
      display: 'block',
      margin: `${theme.spacing.unit * 1}px auto 0`,
      backgroundColor: theme.palette.secondary.main
    },
    markedH6Left: {
      height: 2,
      width: 28,
      display: 'block',
      marginTop: theme.spacing.unit * 0.5,
      background: 'currentColor'
    }
  })

interface TypographyOwnProps {
  marked?: boolean | 'center' | 'left'
  variant?: any
}
type TypographyProps = MuiTypographyProps &
  TypographyOwnProps &
  WithStyles<typeof styles>

class Typography extends React.Component<TypographyProps> {
  static defaultProps = {
    marked: false
  }

  render () {
    const { children, classes, marked, variant, ...other } = this.props

    return (
      <MuiTypography variant={variant} {...other}>
        {children}
        {marked ? (
          <span
            className={
              classes[
                `marked${capitalize(variant) +
                  capitalize(typeof marked === 'string' ? marked : '')}`
              ]
            }
          />
        ) : null}
      </MuiTypography>
    )
  }
}

export default withStyles(styles)(Typography)
