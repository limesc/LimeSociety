import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  createStyles,
  Divider,
  Grid,
  Hidden,
  Link,
  ListItem,
  Paper,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import Container from '../../components/Container'
import Markdown from './Markdown'

// post1 ~ 3 까지는 별도의 md파일이 있어 import 하는 것이였습니다. 찬일님께 질문한 결과 당장 고치긴 어려우니 임시방편으로 const post1 ~ 3을 사용하여 글을 넣어라 하여 밑에와 같이 했습니다.

const posts = [
  {
    id: 1,
    title: `Posts Title`,
    description: `
Sample blog post
April 1, 2020 by Olivier
This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.

Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.

Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.

Heading
Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Sub-heading
Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Example code block
Aenean lacinia bibendum nulla sed consectetur.
Etiam porta sem malesuada magna mollis euismod.
Fusce dapibus, tellus ac cursus commodo.
Tortor mauris condimentum nibh, ut fermentum massa.
Sub-heading
Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
Donec id elit non mi porta gravida at eget metus.
Nulla vitae elit libero, a pharetra augue.
Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.

Vestibulum id ligula porta felis euismod semper.
Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
Maecenas sed diam eget risus varius blandit sit amet non magna.
Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.
`
  },
  {
    id: 2,
    title: `Posts Title`,
    description: `
Another blog post
March 23, 2020 by Matt
Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.

Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.

Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.

Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
`
  },
  {
    id: 3,
    title: `Posts Title`,
    description: `
New feature
March 14, 2020 by Tom
Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
Donec id elit non mi porta gravida at eget metus.
Nulla vitae elit libero, a pharetra augue.
Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.

Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
`
  }
]

//

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

const archives = [
  'March 2020',
  'February 2020',
  'January 2020',
  'December 2019',
  'November 2019',
  'October 2019',
  'September 2019',
  'August 2019',
  'July 2019',
  'June 2019',
  'May 2019',
  'April 2019'
]

const social = ['GitHub', 'Twitter', 'Facebook']

const styles = theme =>
  createStyles({
    background: {
      backgroundColor: '#EFFBEF',
      overflow: 'hidden'
    },
    layout: {
      backgroundImage: 'url("/static/index/components/header-bg.jpg")',
      // backgroundColor: theme.palette.grey[800],
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
    mainGrid: {
      width: 'auto',
      marginTop: theme.spacing.unit * 5,
      marginLeft: 16,
      marginRight: 16,
      marginBottom: theme.spacing.unit * 4,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginTop: theme.spacing.unit * 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing.unit * 20
      },
      lineHeight: 1.6
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
    textcard: {
      padding: theme.spacing.unit * 2,
      lineHeight: 1.6
    },
    sidebarAboutBox: {
      padding: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 4,
      backgroundColor: theme.palette.grey[200],
      lineHeight: 1.6
    },
    sidebarSection: {
      padding: theme.spacing.unit * 2,
      lineHeight: 1.6
    },
    cardposts: {
      marginTop: theme.spacing.unit * 2,
      lineHeight: 1.6
    },
    mainpoststitle: {
      marginBottom: theme.spacing.unit * 5
    }
  })

type MainProps = WithStyles<typeof styles>

class Main extends React.Component<MainProps> {
  render () {
    const { classes } = this.props

    return (
      <main>
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
                    Lime Society
                    <br />
                    Blog
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
                          <Typography
                            component={'h2' as any}
                            variant='subtitle1'
                          >
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
        <Grid container spacing={40} className={classes.mainGrid}>
          <Grid item xs={12} md={8}>
            <Typography
              component={'h2' as any}
              variant='h3'
              className={classes.mainpoststitle}
            >
              Posts
            </Typography>

            <Divider />
            {posts.map(post => (
              <Grid item key={post.id} xs={12} md={9}>
                <Link underline='none'>
                  <div style={{ marginTop: '40px' }}>
                    <Link underline='none'>
                      <ListItem button>
                        <Typography component={'h2' as any} variant='h4'>
                          {post.title}
                        </Typography>
                      </ListItem>
                    </Link>
                    <ListItem dense>
                      <Typography
                        variant='h5'
                        paragraph
                        className={classes.cardposts}
                      >
                        <Markdown>{post.description}</Markdown>
                      </Typography>
                    </ListItem>
                  </div>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} className={classes.sidebarAboutBox}>
              <Typography variant='h6' gutterBottom>
                About
              </Typography>
              <Typography>
                Etiam porta sem malesuada magna mollis euismod. Cras mattis
                consectetur purus sit amet fermentum. Aenean lacinia bibendum
                nulla sed consectetur.
              </Typography>
            </Paper>
            <div style={{ position: 'sticky', top: '100px' }}>
              <Grid className={classes.sidebarSection}>
                <Typography variant='h6' gutterBottom>
                  Archives
                </Typography>
                {archives.map((archive, i) => (
                  <Link underline='none' key={i}>
                    <ListItem button>
                      <Typography key={archive}>{archive}</Typography>
                    </ListItem>
                  </Link>
                ))}
              </Grid>
              <Grid className={classes.sidebarSection}>
                <Typography variant='h6' gutterBottom>
                  Social
                </Typography>
                {social.map((network, i) => (
                  <Link underline='none' key={i}>
                    <ListItem button>
                      <Typography key={network}>{network}</Typography>
                    </ListItem>
                  </Link>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </main>
    )
  }
}

export default withStyles(styles)(Main)
