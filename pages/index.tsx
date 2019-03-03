import {
  Button,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import NextSeo from 'next-seo'
import Link from 'next/link'
import React from 'react'

import { withLayout } from './components/layout'

const styles = theme =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing.unit * 20
    }
  })

const pageTitle = 'Dashboard'

interface PageProps extends WithStyles<typeof styles> {}

class Page extends React.Component<PageProps> {
  state = {
    open: false
  }

  handleClick = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render () {
    const { classes } = this.props
    const { open } = this.state

    return (
      <>
        <NextSeo
          config={{
            title: pageTitle
          }}
        />
        <div className={classes.root}>
          <Dialog open={open} onClose={this.handleClose}>
            <DialogTitle>Super Secret Password</DialogTitle>
            <DialogContent>
              <DialogContentText>1-2-3-4-5</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color='primary' onClick={this.handleClose}>
                OK
              </Button>
            </DialogActions>
          </Dialog>
          <Typography variant='h4' gutterBottom>
            Material-UI
          </Typography>
          <Typography variant='subtitle1' gutterBottom>
            example project
          </Typography>
          <Typography gutterBottom>
            <Link href='/about'>
              <a>Go to the about page</a>
            </Link>
          </Typography>
          <Button
            variant='contained'
            color='secondary'
            onClick={this.handleClick}
          >
            Super Secret Password
          </Button>
        </div>
      </>
    )
  }
}

export default withLayout({ title: pageTitle })(withStyles(styles)(Page))
