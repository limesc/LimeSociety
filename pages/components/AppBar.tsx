import {
  AppBar as MuiAppBar,
  createStyles,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import classNames from 'classnames'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { appBarHeight } from 'consts/layout'
import { round } from 'lib'

const styles = theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    invisible: {
      background: 'transparent',
      boxShadow: 'none',
      [theme.breakpoints.up('md')]: {
        // transform: 'translateY(5%)',
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
      height: appBarHeight,
      width: 'auto',
      [theme.breakpoints.up('md')]: {
        width: 880,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit
      },
      [theme.breakpoints.up(round(880 / 0.7777))]: {
        width: '77.7777%'
      },
      [theme.breakpoints.up(round(1400 / 0.7777))]: {
        width: 1400
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
    rightFolded: {
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    rightExpanded: {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    rightMenu: {
      color: theme.palette.common.white
    },
    rightLink: {
      marginLeft: theme.spacing.unit * 3
    },
    rightLinkTypo: {
      fontSize: 14,
      color: theme.palette.common.white
    },
    drawerList: {
      width: 250
    }
  })

interface AppBarOwnProps {
  home?: boolean
}

type AppBarProps = AppBarOwnProps & WithStyles<typeof styles>

interface AppBarState {
  drawer: boolean
  shouldShow: boolean
}

class AppBar extends React.PureComponent<AppBarProps, AppBarState> {
  state: AppBarState = {
    drawer: false,
    shouldShow: true
  }

  componentDidMount () {
    if (this.props.home) {
      window.addEventListener('scroll', this.handleScroll)
      this.handleScroll()
    }
  }

  componentWillUnmount () {
    if (this.props.home) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  handleScroll = () => {
    if (this.props.home) {
      const shouldShow = window.scrollY >= 80

      if (shouldShow !== this.state.shouldShow) {
        this.setState(prevState => ({
          ...prevState,
          shouldShow
        }))
      }
    }
  }

  getScrollClassName () {
    return !this.props.home || this.state.shouldShow
      ? this.props.classes.show
      : this.props.classes.invisible
  }

  toggleDrawer = (open: boolean) => () => {
    this.setState({
      drawer: open
    })
  }

  render () {
    const { classes, home } = this.props

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
              {...(home
                ? {
                    component: linkProps => (
                      <AnchorLink {...linkProps} href='#top' variant='button' />
                    )
                  }
                : {
                    href: '/'
                  })}
            >
              <img
                className={classes.leftLinkImg}
                src='/static/components/appbar-logo.png'
              />
            </Link>
          </div>
          <div className={classNames(classes.right, classes.rightFolded)}>
            <IconButton
              className={classes.rightMenu}
              aria-label='Menu'
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div className={classNames(classes.right, classes.rightExpanded)}>
            <Link
              className={classes.rightLink}
              underline='none'
              {...(home
                ? {
                    component: linkProps => (
                      <AnchorLink
                        {...linkProps}
                        offset={appBarHeight}
                        href='#products'
                        variant='button'
                      />
                    )
                  }
                : {
                    href: '/#products'
                  })}
            >
              <Typography className={classes.rightLinkTypo} variant='body1'>
                PRODUCTS
              </Typography>
            </Link>
            <Link
              className={classes.rightLink}
              underline='none'
              {...(home
                ? {
                    component: linkProps => (
                      <AnchorLink
                        {...linkProps}
                        offset={appBarHeight}
                        href='#company'
                        variant='button'
                      />
                    )
                  }
                : {
                    href: '/#company'
                  })}
            >
              <Typography className={classes.rightLinkTypo} variant='body1'>
                COMPANY
              </Typography>
            </Link>
            <Link className={classes.rightLink} href='/blog' underline='none'>
              <Typography className={classes.rightLinkTypo} variant='body1'>
                BLOG
              </Typography>
            </Link>
          </div>
        </Toolbar>
        <Drawer
          anchor='right'
          open={this.state.drawer}
          onClose={this.toggleDrawer(false)}
        >
          <div
            tabIndex={0}
            role='button'
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <div className={classes.drawerList}>
              <List>
                <Link
                  underline='none'
                  {...(home
                    ? {
                        component: linkProps => (
                          <AnchorLink {...linkProps} href='#top' />
                        )
                      }
                    : {
                        href: '/'
                      })}
                >
                  <ListItem button>
                    <ListItemText primary='Home' />
                  </ListItem>
                </Link>
                <Link
                  underline='none'
                  {...(home
                    ? {
                        component: linkProps => (
                          <AnchorLink
                            {...linkProps}
                            offset={appBarHeight}
                            href='#products'
                          />
                        )
                      }
                    : {
                        href: '/#products'
                      })}
                >
                  <ListItem button>
                    <ListItemText primary='Products' />
                  </ListItem>
                </Link>
                <Link
                  underline='none'
                  {...(home
                    ? {
                        component: linkProps => (
                          <AnchorLink
                            {...linkProps}
                            offset={appBarHeight}
                            href='#company'
                          />
                        )
                      }
                    : {
                        href: '/#company'
                      })}
                >
                  <ListItem button>
                    <ListItemText primary='Company' />
                  </ListItem>
                </Link>
                <Link href='/blog' underline='none'>
                  <ListItem button>
                    <ListItemText primary='Blog' />
                  </ListItem>
                </Link>
              </List>
            </div>
          </div>
        </Drawer>
      </MuiAppBar>
    )
  }
}

export default withStyles(styles)(AppBar)
