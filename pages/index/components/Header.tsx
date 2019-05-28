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
import Container from '../../components/Container'

const styles = theme =>
  createStyles({
    container: {
      color: theme.palette.common.white,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.up('sm')]: {
        height: '80vh',
        minHeight: 500,
        maxHeight: 1300
      }
    },
    root: {
      marginTop: theme.spacing.unit * 10,
      marginBottom: theme.spacing.unit * 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    motto1: {
      marginTop: 75,
      marginBottom: 25,
      fontSize: 60,
      fontWeight: 'bold',
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
      fontWeight: 'bold',
      [theme.breakpoints.down('sm')]: {
        fontSize: 31
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 21
      }
    },
    button: {
      borderRadius: 5,
      boxShadow: 'none',
      '&:active, &:focus': {
        boxShadow: 'none'
      },
      fontSize: theme.typography.pxToRem(20),
      fontWeight: 'bold',
      minWidth: 250,
      padding: `${theme.spacing.unit * 3 - 3}px ${theme.spacing.unit * 6}px`,
      [theme.breakpoints.down('sm')]: {
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`,
        fontSize: theme.typography.pxToRem(15),
        minWidth: 200
      }
    },
    backdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.5,
      zIndex: -1
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      zIndex: -2,
      backgroundImage: 'url("/static/index/components/header-bg.jpg")',
      backgroundColor: '#7fc7d9',
      backgroundPosition: 'center'
    }
  })

type HeaderProps = WithStyles<typeof styles>

class Header extends React.Component<HeaderProps> {
  render () {
    const { classes } = this.props

    return (
      <section className={classes.container}>
        <Container width='full' className={classes.root}>
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
          <div className={classes.backdrop} />
          <div className={classes.background} />
        </Container>
      </section>
    )
  }
}

export default withStyles(styles)(Header)
