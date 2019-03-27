import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import AppBar from '../components/AppBar'
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar'
import { Container } from 'next/app'
import Typography from '../components/Typography'
import { values } from 'mobx';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  invisible: {
    background: 'transparent',
    boxShadow: 'none',
    transform: 'translateY(10%)',
    transition: 'transform .5s'
  },
  show: {
    transform: 'translateY(-10%)',
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
  }
})

const theme = {
  spacing: values => values ** 2
}

class AppAppBar extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      shouldShow: null
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
    if (lastScroll === this.state.lastScroll) {
      return
    }

    const shouldShow =
      this.lastScroll !== null ? lastScroll < this.lastScroll : null

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
        position='fixed'
        className={`${classes.root} ${this.getScrollClassName()}`}
      >
        <Toolbar className={classes.toolbar}>
          <Link href='/'>
            <img
              src='../../static/AppbarLogo.png'
              className='rounded float-left'
              alt='aligment'
            />
          </Link>
          <div className={classes.right}>
            <Link              
              underline='none'
              className={classes.rightLink}
              href='/'
            >
              <Typography
                variant='body2'
                // color='inherit'
              >
              PRODUCT
              </Typography>
            </Link>
            <Link
              underline='none'
              className={classes.rightLink}
              href='/blog'
            >
              <Typography
                variant='body2'
                // color='inherit'
              >
              BLOG
              </Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppAppBar)
