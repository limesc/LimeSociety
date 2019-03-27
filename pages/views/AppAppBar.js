import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import AppBar from '../components/AppBar'
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  invisible: {
    background: 'transparent',
    boxShadow: 'none',
    transform: 'translatrY(0)',
    transition: 'transform .5s'
  },
  show: {
    transform: 'translateY(0)',
    transition: 'transform .5s'
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
  },
})

class AppAppBar extends React.PureComponent {
  constructor(props) {
    super(props) 

    this.state = {
      shouldShow:null
    }

    this.lastScroll = null
    this.handlwScroll = this.handlwScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handlwScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlwScroll)
  }

  handlwScroll() {
    const lastScroll = window.scrollY
    if(lastScroll === this.state.lastScroll) {
      return
    }

    const shouldShow = this.lastScroll !== null ? lastScroll < this.lastScroll : null

    if (shouldShow !== this.state.shouldShow) {
      this.setState(prevState => ({
        ...prevState,
        shouldShow
      }))
    }

    this.lastScroll = lastScroll
  }

  getScrollClassName() {
    if (this.state.shouldShow === null) {
      return
    }

    return this.state.shouldShow
      ? this.props.classes.invisible
      : this.props.classes.show
  }

  render() {
    const { classes } = this.props
    return (
      <AppBar
        position="fixed"
        className={`${classes.root} ${this.getScrollClassName()}`}
      >
        <Toolbar className={classes.toolbar}>
          <Link href='/'>
            <img
              src='../../static/AppbarLogo.png'
              className='rounded float-left'
              alt='aligment'
            >
            </img>
          </Link>
          <div className={classes.right}>
            <Link
              color='default'
              variant='h5'
              underline='none'
              className={classes.rightLink}
            >
              {'PRODUCT'}
            </Link>
            <Link
              color='default'
              variant='h5'
              underline='none'
              className={classes.rightLink}
              href='/blog'
            >
              {'BLOG'}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

// function AppAppBar(props) {
//   const { classes } = props
//   return (
//     <div>
//       <AppBar
//         position='fixed'
//         color='default'
//         // className={
//         //   `${classes.root} ${
//         //     this.getScrollClassName}
//         //   }`
//         // }
//         // style={{ background: 'transparent',
//         // boxShadow: 'none'}}
//       >
//         <Toolbar className={classes.toolbar}>
//           <Link href='/'>
//             <img
//               src='../../static/AppbarLogo.png'
//               className='rounded float-left'
//               alt='aligment'
//             />
//           </Link>
//           <div className={classes.right}>
//             <Link
//               color='default'
//               variant='h5'
//               underline='none'
//               className={classes.rightLink}
//             >
//               {'PRODUCT'}
//             </Link>
//             <Link
//               color='default'
//               variant='h5'
//               underline='none'
//               className={classes.rightLink}
//               href='/blog'
//             >
//               {'BLOG'}
//             </Link>
//           </div>
//         </Toolbar>
//       </AppBar>
//       <div className={classes.placeholder} />
//     </div>
//   )
// }

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppAppBar)
