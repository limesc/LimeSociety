import {
  createStyles,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import HeaderButton from './HeaderButton'
import HeaderLayout from './HeaderLayout'

const styles = theme =>
  createStyles({
    background: {
      backgroundImage: 'url("/static/img/index/header-bg.jpg")',
      backgroundColor: '#7fc7d9',
      backgroundPosition: 'center'
    },
    button: {
      minWidth: 250,
      [theme.breakpoints.down('sm')]: {
        minWidth: 200
      }
    },
    motto1: {
      marginTop: 75,
      marginBottom: 25,
      [theme.breakpoints.down('sm')]: {
        fontSize: 45
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 30
      }
    },
    motto2: {
      marginBottom: 75,
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
        <HeaderButton
          className={classes.button}
          color='primary'
          component={linkProps => (
            <AnchorLink {...linkProps} href='#products' variant='button' />
          )}
          size='large'
          variant='contained'
        >
          Tell Me More
        </HeaderButton>
      </HeaderLayout>
    )
  }
}

export default withStyles(styles)(Header)
