import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import AppBar from '../components/AppBar'
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar'
import { Container } from 'next/app'
import Typography from '../components/Typography'
import { values } from 'mobx'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const styles = theme => ({
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

const theme = {
  spacing: values => values ** 2
}

class AppAppBar extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      shouldShow: false
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const shouldShow = window.scrollY >= 700

    if (shouldShow !== this.state.shouldShow) {
      this.setState(prevState => ({
        ...prevState,
        shouldShow
      }))
    }
  }

  getScrollClassName() {
    return this.state.shouldShow
      ? this.props.classes.show
      : this.props.classes.invisible
  }

  render() {
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

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppAppBar)
