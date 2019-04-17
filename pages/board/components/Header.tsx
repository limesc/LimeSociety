import {
  createStyles,
  Grid,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import Container from '../../components/Container'

const styles = theme =>
  createStyles({
    background: {
      backgroundImage: 'url("/static/index/components/header-bg.jpg")',
      overflow: 'hidden'
    },
    root: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    layout: {
      color: theme.palette.common.white,
      marginTop: theme.spacing.unit * 2,
      [theme.breakpoints.up('md')]: {
        width: 'auto',
        marginTop: theme.spacing.unit * 9,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing.unit * 8
      }
    },
    mainFeaturedPostContent: {
      padding: `${theme.spacing.unit * 5}px`,
      [theme.breakpoints.up('md')]: {
        padding: `${theme.spacing.unit * 3}px`,
        paddingRight: 0
      }
    }
  })

type HeaderProps = WithStyles<typeof styles>

class Header extends React.Component<HeaderProps> {
  render () {
    const { classes } = this.props

    return (
      <Container className={classes.background} id='top' width='full'>
        <Container className={classes.root}>
          <Grid className={classes.layout}>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography
                  component={'h1' as any}
                  variant='h3'
                  color='inherit'
                  gutterBottom
                >
                  라임 게시판
                </Typography>
                <Typography variant='body1' color='inherit' paragraph>
                  Multiple lines of text that form the lede, informing new
                  readers quickly and efficiently about what&apos;s most
                  interesting in this post&apos;s contents…
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Container>
    )
  }
}

export default withStyles(styles)(Header)
