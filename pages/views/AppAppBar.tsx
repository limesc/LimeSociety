import { createStyles, Link, WithStyles, withStyles } from '@material-ui/core'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import AppBar from '../components/AppBar'
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar'
import Typography from '../components/Typography'

const styles = theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    invisible: {
      padding: '15px 0',
      background: 'transparent',
      boxShadow: 'none',
      transform: 'translateY(1%)',
      transition: 'all .5s'
    },
    show: {
      transform: 'translateY(-3%)',
      transition: 'all .5s'
    },
    title: {
      fontSize: 25
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
      justifyContent: 'space-between'
    },
    left: {
      flex: 1
    },
    leftLinkActive: {
      color: theme.palette.common.white
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
    },
    linkSecondary: {
      color: theme.palette.main
    }
  })

type AppAppBarProps = WithStyles<typeof styles>

interface AppAppBarState {
  shouldShow: boolean
}

class AppAppBar extends React.PureComponent<AppAppBarProps, AppAppBarState> {
  state: AppAppBarState = {
    shouldShow: false
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const shouldShow = window.scrollY >= 700

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
      <AppBar
        position='fixed'
        className={`${classes.root} ${this.getScrollClassName()}`}
      >
        <Toolbar className={classes.toolbar}>
          <Link
            className={classes.leftLinkActive}
            component={linkProps => (
              <AnchorLink {...linkProps} href='#top' variant='button' />
            )}
          >
            <img
              src='../../static/AppbarLogo.png'
              className='rounded float-left'
              alt='aligment'
            />
          </Link>
          <div className={classes.right}>
            <Link
              className={classes.rightLink}
              underline='none'
              component={linkProps => (
                <AnchorLink
                  {...linkProps}
                  href='#ProductCategories'
                  variant='button'
                />
              )}
            >
              <Typography variant='body2'>PRODUCT</Typography>
            </Link>
            <Link underline='none' className={classes.rightLink} href='/blog'>
              <Typography variant='body2'>BLOG</Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(AppAppBar)
