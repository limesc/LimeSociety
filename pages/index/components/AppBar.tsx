import {
  AppBar as MuiAppBar,
  createStyles,
  Link,
  Toolbar,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const styles = theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    invisible: {
      background: 'transparent',
      boxShadow: 'none',
      [theme.breakpoints.up('sm')]: {
        transform: 'translateY(5%)',
        transition: 'all .5s'
      }
    },
    show: {
      background: 'black',
      [theme.breakpoints.up('sm')]: {
        transition: 'all .5s'
      }
    },
    title: {
      fontSize: 25
    },
    toolbar: {
      justifyContent: 'space-between',
      height: 80,
      [theme.breakpoints.up('sm')]: {
        height: 100
      }
    },
    left: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start'
    },
    leftLinkImg: {
      verticalAlign: 'middle'
    },
    right: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end'
    },
    rightLink: {
      fontSize: 23,
      color: theme.palette.common.white,
      marginLeft: theme.spacing.unit * 3
    }
  })

type AppBarProps = WithStyles<typeof styles>

interface AppBarState {
  shouldShow: boolean
}

class AppBar extends React.PureComponent<AppBarProps, AppBarState> {
  state: AppBarState = {
    shouldShow: false
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const shouldShow = window.scrollY >= 500

    if (shouldShow !== this.state.shouldShow) {
      this.setState(prevState => ({
        ...prevState,
        shouldShow
      }))
    }
  }

  getScrollClassName () {
    return this.state.shouldShow
      ? this.props.classes.show
      : this.props.classes.invisible
  }

  render () {
    const { classes } = this.props
    return (
      <MuiAppBar
        className={`${classes.root} ${this.getScrollClassName()}`}
        color='inherit'
        elevation={0}
        position='fixed'
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.left}>
            <Link
              component={linkProps => (
                <AnchorLink {...linkProps} href='#top' variant='button' />
              )}
            >
              <img
                className={classes.leftLinkImg}
                src='/static/img/index/appbar-logo.png'
              />
            </Link>
          </div>
          <div className={classes.right}>
            <Link
              className={classes.rightLink}
              component={linkProps => (
                <AnchorLink {...linkProps} href='#products' variant='button' />
              )}
              underline='none'
            >
              <Typography variant='body2'>PRODUCTS</Typography>
            </Link>
            <Link
              className={classes.rightLink}
              component={linkProps => (
                <AnchorLink {...linkProps} href='#company' variant='button' />
              )}
              underline='none'
            >
              <Typography variant='body2'>COMPANY</Typography>
            </Link>
            <Link className={classes.rightLink} href='/blog' underline='none'>
              <Typography variant='body2'>BLOG</Typography>
            </Link>
          </div>
        </Toolbar>
      </MuiAppBar>
    )
  }
}

export default withStyles(styles)(AppBar)
