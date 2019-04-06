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

import { appbarHeight } from 'consts/layout'

const styles = theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    icon: {
      margin: theme.spacing.unit * 2
    },
    invisible: {
      background: 'black',
      boxShadow: 'none',
      [theme.breakpoints.up('md')]: {
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
      width: 'auto',
      height: appbarHeight
    },
    toolbarTitle: {
      flex: 1
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
    rightButton: {
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
      fontSize: 23,
      color: theme.palette.common.white,
      marginLeft: theme.spacing.unit * 3
    },
    drawerList: {
      width: 250
    }
  })

type AppBarProps = WithStyles<typeof styles>

interface AppBarState {
  drawer: boolean
  shouldShow: boolean
}

class BlogAppBar extends React.PureComponent<AppBarProps, AppBarState> {
  state: AppBarState = {
    drawer: false,
    shouldShow: false
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const shouldShow = window.scrollY >= 80

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

  toggleDrawer = (open: boolean) => () => {
    this.setState({
      drawer: open
    })
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
          <div className={classes.toolbarTitle}>
            <Link href='/'>
              <img
                className={classes.leftLinkImg}
                src='/static/img/index/appbar-logo.png'
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
              href='/#products'
              underline='none'
            >
              <Typography variant='body2'>PRODUCTS</Typography>
            </Link>
            <Link
              className={classes.rightLink}
              href='/#company'
              underline='none'
            >
              <Typography variant='body2'>COMPANY</Typography>
            </Link>
            <Link className={classes.rightLink} href='/blog' underline='none'>
              <Typography variant='body2'>BLOG</Typography>
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
                <Link href='/' underline='none'>
                  <ListItem button>
                    <ListItemText primary={'Home'} />
                  </ListItem>
                </Link>
                <Link href='/#products' underline='none'>
                  <ListItem button>
                    <ListItemText primary={'Products'} />
                  </ListItem>
                </Link>
                <Link href='/#company' underline='none'>
                  <ListItem button>
                    <ListItemText primary={'Company'} />
                  </ListItem>
                </Link>
                <Link href='/blog' underline='none'>
                  <ListItem button>
                    <ListItemText primary={'Blog'} />
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

export default withStyles(styles)(BlogAppBar)
