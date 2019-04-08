import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  createStyles,
  Grid,
  Hidden,
  Link,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import Container from '../../components/Container'

const featuredPosts = [
  {
    id: 1,
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.'
  },
  {
    id: 2,
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.'
  }
]

const styles = theme =>
  createStyles({
    background: {
      backgroundColor: '#EFFBEF',
      overflow: 'hidden'
    },
    layout: {
      backgroundImage: 'url("/static/index/components/header-bg.jpg")',
      color: theme.palette.common.white,
      width: 'auto',
      marginTop: theme.spacing.unit * 10,
      marginLeft: 'auto',
      marginRight: 'auto',
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1060,
        marginTop: theme.spacing.unit * 17,
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    },
    mainFeaturedPostContent: {
      padding: `${theme.spacing.unit * 6}px`,
      [theme.breakpoints.up('md')]: {
        paddingRight: 0
      }
    },
    card: {
      display: 'flex'
    },
    cardDetails: {
      flex: 1
    },
    cardGrid: {
      width: 'auto',
      margin: theme.spacing.unit * 2,
      marginLeft: '16px',
      marginRight: '16px',
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    },
    cardMedia: {
      width: 160
    },
    cardposts: {
      marginTop: theme.spacing.unit * 2,
      lineHeight: 1.6
    }
  })

type HeaderProps = WithStyles<typeof styles>

class Header extends React.Component<HeaderProps> {
  render () {
    const { classes } = this.props

    return (
      <Container className={classes.background} id='top' width='full'>
        <Grid className={classes.layout}>
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography
                  component={'h1' as any}
                  variant='h3'
                  color='inherit'
                  gutterBottom
                >
                  Lime's Blog
                </Typography>
                <Typography variant='body1' color='inherit' paragraph>
                  Multiple lines of text that form the lede, informing new
                  readers quickly and efficiently about what&apos;s most
                  interesting in this post&apos;s contents…
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={40} className={classes.cardGrid}>
          {featuredPosts.map(post => (
            <Grid item key={post.id} xs={12} md={6}>
              <Link underline='none'>
                <CardActionArea>
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component={'h2' as any} variant='subtitle1'>
                          {post.title}
                        </Typography>
                        <Typography
                          variant='subtitle2'
                          color='textSecondary'
                          className={classes.cardposts}
                        >
                          {post.date}
                        </Typography>
                        <Typography
                          variant='h5'
                          paragraph
                          className={classes.cardposts}
                        >
                          {post.description}
                        </Typography>
                        <Typography variant='h6' color='primary'>
                          Continue reading...
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
                        title='Image title'
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
  }
}

export default withStyles(styles)(Header)
