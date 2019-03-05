import {
  Button,
  createStyles,
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

const pageTitle = 'About'

interface PageProps extends WithStyles<typeof styles> {}

class Page extends React.Component<PageProps> {
  render () {
    const { classes } = this.props

    return (
      <>
        <NextSeo
          config={{
            title: pageTitle
          }}
        />
        {/* <div className={classes.root}>
          <Typography variant='h4' gutterBottom>
            Material-UI
          </Typography>
          <Typography variant='subtitle1' gutterBottom>
            orders page
          </Typography>
          <Typography gutterBottom>
            <Link href='/'>
              <a>Go to the main page</a>
            </Link>
          </Typography>
          <Button variant='contained' color='primary'>
            Do nothing button
          </Button>
        </div> */}
      </>
    )
  }
}

export default withLayout({ title: pageTitle })(withStyles(styles)(Page))
