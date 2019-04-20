import {
  Button,
  createStyles,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { appBarHeight } from 'consts/layout'
import HeaderButton from './HeaderButton'
import HeaderLayout from './HeaderLayout'

const styles = theme =>
  createStyles({
    background: {
      backgroundImage: 'url("/static/index/components/header-bg.jpg")',
      backgroundColor: '#7fc7d9',
      backgroundPosition: 'center'
    },
    button: {
      borderRadius: 5,
      boxShadow: 'none',
      '&:active, &:focus': {
        boxShadow: 'none'
      },
      fontSize: theme.typography.pxToRem(20),
      fontWeight: 700,
      minWidth: 250,
      padding: `${theme.spacing.unit * 3 - 3}px ${theme.spacing.unit * 6}px`,
      [theme.breakpoints.down('sm')]: {
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`,
        fontSize: theme.typography.pxToRem(15),
        minWidth: 200
      }
    },
    motto1: {
      marginTop: 75,
      marginBottom: 25,
      fontSize: 60,
      fontWeight: 700,
      [theme.breakpoints.down('sm')]: {
        fontSize: 45
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 30
      }
    },
    motto2: {
      marginBottom: 75,
      fontSize: 42,
      fontWeight: 700,
      [theme.breakpoints.down('sm')]: {
        fontSize: 31
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 21
      }
    }
  })

type HeaderProps = WithStyles<typeof styles>

class Header extends React.Component<HeaderProps> {
  render () {
    const { classes } = this.props

    return (
      <HeaderLayout backgroundClassName={classes.background}>
        <Typography
          align='center'
          className={classes.motto1}
          component={'h2' as any}
          color='inherit'
          variant='h1'
        >
          Challenge the Future
        </Typography>
        <Typography
          align='center'
          className={classes.motto2}
          component={'h2' as any}
          color='inherit'
          variant='h3'
        >
          with Commitment and Passion
        </Typography>
        <Button
          className={classes.button}
          color='primary'
          component={linkProps => (
            <AnchorLink
              {...linkProps}
              offset={appBarHeight}
              href='#products'
              variant='button'
            />
          )}
          size='large'
          variant='contained'
        >
          Tell Me More
        </Button>
      </HeaderLayout>
    )
  }
}

export default withStyles(styles)(Header)
