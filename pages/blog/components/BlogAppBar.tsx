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

const styles = theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    icon: {
      margin: theme.spacing.unit * 2
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
      width: 'auto',
      height: '80px',
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        height: 100
      }
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
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    rightExpanded: {
      [theme.breakpoints.down('xs')]: {
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
              component={linkProps => (
                <AnchorLink {...linkProps} href='#products' variant='button' />
              )}
              underline='none'
            >
              <Typography variant='body2'>MAIN</Typography>
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
            <Link className={classes.rightLink} href='/' underline='none'>
              <Typography variant='body2'>HOME</Typography>
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
                  component={linkProps => (
                    <AnchorLink {...linkProps} href='#top' />
                  )}
                  underline='none'
                >
                  <ListItem button>
                    <ListItemText primary={'Go to Top'} />
                  </ListItem>
                </Link>
                <Link
                  component={linkProps => (
                    <AnchorLink {...linkProps} href='#products' />
                  )}
                  underline='none'
                >
                  <ListItem button>
                    <ListItemText primary={'Main'} />
                  </ListItem>
                </Link>
                <Link
                  component={linkProps => (
                    <AnchorLink {...linkProps} href='#company' />
                  )}
                  underline='none'
                >
                  <ListItem button>
                    <ListItemText primary={'Company'} />
                  </ListItem>
                </Link>
                <Link href='/blog' underline='none'>
                  <ListItem button>
                    <ListItemText primary={'Home'} />
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

// import {
//   Button,
//   Divider,
//   IconButton,
//   Toolbar,
//   Typography,
//   withStyles
// } from '@material-ui/core'
// import SearchIcon from '@material-ui/icons/Search'
// import React from 'react'

// const styles = theme => ({
//   layout: {
//     width: 'auto',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
//       width: 1100
//     }
//   },

//   toolbarTitle: {
//     flex: 1
//   },
//   toolbarSecondary: {
//     justifyContent: 'space-between'
//   }
// })
// console.log(styles)

// const sections = [
//   'Technology',
//   'Design',
//   'Culture',
//   'Business',
//   'Politics',
//   'Opinion',
//   'Science',
//   'Health',
//   'Style',
//   'Travel'
// ]

// function BlogToolbar (props) {
//   const { classes } = props

//   return (
//     <div className={classes.layout}>
//       <Toolbar>
//         <Button size='small'>Home</Button>
//         <Typography
//           component={'h2' as any}
//           variant='subtitle1'
//           color='inherit'
//           align='center'
//           noWrap
//           className={classes.toolbarTitle}
//         >
//           Lime Society
//         </Typography>
//         <IconButton>
//           <SearchIcon />
//         </IconButton>
//         <Button variant='outlined' size='small'>
//           sign up
//         </Button>
//       </Toolbar>
//       <Divider />
//       <Toolbar variant='dense' className={classes.toolbarSecondary}>
//         {sections.map(sections => (
//           <Typography color='inherit' noWrap key={sections}>
//             {sections}
//           </Typography>
//         ))}
//       </Toolbar>
//     </div>
//   )
// }

// export default withStyles(styles)(BlogToolbar)
