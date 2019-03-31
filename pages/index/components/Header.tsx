import { createStyles, WithStyles, withStyles } from '@material-ui/core'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Typography from '../../components/Typography'
import HeaderButton from './HeaderButton'
import HeaderLayout from './HeaderLayout'

const styles = () =>
  createStyles({
    background: {
      backgroundImage: 'url("/static/img/index/header-bg.jpg")',
      backgroundColor: '#7fc7d9',
      backgroundPosition: 'center'
    },
    button: {
      minWidth: 250
    }
  })

type HeaderProps = WithStyles<typeof styles>

class Header extends React.Component<HeaderProps> {
  render () {
    const { classes } = this.props

    return (
      <HeaderLayout backgroundClassName={classes.background}>
        <div style={{ height: 75 }} />
        <Typography align='center' color='inherit' variant='h1'>
          Challenge the Future
        </Typography>
        <div style={{ height: 25 }} />
        <Typography align='center' color='inherit' variant='h3'>
          with Commitment and Passion
        </Typography>
        <div style={{ height: 75 }} />
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
