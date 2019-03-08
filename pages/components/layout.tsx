import {
  AppBar,
  Badge,
  createStyles,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'
import BarChartIcon from '@material-ui/icons/BarChart'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import DashboardIcon from '@material-ui/icons/Dashboard'
import LayersIcon from '@material-ui/icons/Layers'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import PeopleIcon from '@material-ui/icons/People'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import classNames from 'classnames'
import { inject } from 'mobx-react'
import Error from 'next/error'
import Link from 'next/link'
import React from 'react'

import { Store } from 'stores'

const drawerWidth = 240

const styles = theme =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      height: '100vh',
      overflow: 'auto'
    },
    drawerListItemIcon: {
      paddingLeft: theme.spacing.unit * 1
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 9
      }
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36
    },
    menuButtonHidden: {
      display: 'none'
    },
    root: {
      display: 'flex'
    },
    title: {
      flexGrow: 1
    },
    toolbar: {
      paddingRight: 24 // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar
    }
  })

interface LayoutProps extends WithStyles<typeof styles> {
  title?: string
}

interface LayoutState {
  open: boolean
}

@inject((allStores: any) => ({
  store: allStores.store as Store
}))
class Layout extends React.Component<
  LayoutProps & { store?: Store },
  LayoutState
> {
  state: LayoutState = {
    open: true
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  render () {
    const { children, classes, store, title } = this.props

    return (
      <>
        <div className={classes.root}>
          <AppBar
            className={classNames(
              classes.appBar,
              this.state.open && classes.appBarShift
            )}
            position='absolute'
          >
            <Toolbar
              className={classes.toolbar}
              disableGutters={!this.state.open}
            >
              <IconButton
                aria-label='Open drawer'
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.menuButtonHidden
                )}
                color='inherit'
                onClick={this.handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                className={classes.title}
                component={'h1' as any}
                variant='h6'
                color='inherit'
                noWrap
              >
                {title || ''}
              </Typography>
              <IconButton color='inherit'>
                <Badge badgeContent={4} color='secondary'>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !this.state.open && classes.drawerPaperClose
              )
            }}
            open={this.state.open}
            variant='permanent'
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <Link href='/'>
                <ListItem button>
                  <ListItemIcon className={classes.drawerListItemIcon}>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary='Dashboard' />
                </ListItem>
              </Link>
              <Link href='/form'>
                <ListItem button>
                  <ListItemIcon className={classes.drawerListItemIcon}>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary='Form' />
                </ListItem>
              </Link>
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            {children}
          </main>
        </div>
      </>
    )
  }
}

const StyledLayout = withStyles(styles)(Layout)

export const withLayout = (layoutProps: any = {}) => ComposedComponent => {
  interface HOCProps {
    initialProps?: any
  }

  const HOC = class extends React.Component<HOCProps> {
    static async getInitialProps (ctx) {
      let initialProps: any = {}
      if (ComposedComponent.getInitialProps) {
        try {
          initialProps = await ComposedComponent.getInitialProps(ctx)
        } catch (err) {
          throw err
        }
      }
      return {
        ...initialProps,
        initialProps
      }
    }

    render () {
      const { initialProps } = this.props
      const mergedProps: any = {}

      if (this.props) {
        Object.keys(this.props).forEach(p => {
          mergedProps[p] = this.props[p]
        })
      }
      if (initialProps) {
        Object.keys(initialProps).forEach(p => {
          mergedProps[p] = initialProps[p]
        })
      }

      if (
        process.env.NODE_ENV === 'production' &&
        mergedProps.statusCode &&
        mergedProps.statusCode !== 200
      ) {
        return <Error statusCode={mergedProps.statusCode} />
      }

      return (
        <StyledLayout {...layoutProps} {...mergedProps}>
          {React.createElement(ComposedComponent, mergedProps)}
        </StyledLayout>
      )
    }
  }

  return HOC
}

export default withStyles(styles)(Layout);
