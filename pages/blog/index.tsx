import {
  createStyles,
  Grid,
  Icon,
  Link,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import NextSeo from 'next-seo'
import NextLink from 'next/link'
import React from 'react'

import { posts } from 'consts/posts'
import AppBar from 'pages/components/AppBar'
import Container from '../components/Container'
import Header from '../components/Header'
import ListedPost from './components/ListedPost'
import Post from './components/Post'

const styles = theme =>
  createStyles({
    main: {
      marginTop: theme.spacing.unit * 4,
      marginBottom: theme.spacing.unit * 4
    },
    postAppend: {
      marginTop: theme.spacing.unit * 4
    },
    backToBlogIcon: {
      verticalAlign: 'middle'
    }
  })

interface PageOwnProps {
  pageTitle?: string
  post?: any
  postId?: number
}

type PageProps = PageOwnProps & WithStyles<typeof styles>

class Page extends React.Component<PageProps> {
  static defaultProps: PageOwnProps = {
    pageTitle: 'Blog - Lime Society'
  }

  static async getInitialProps (ctx) {
    let props: PageOwnProps = {}

    const postId = parseInt(ctx.query.postId, 10)
    if (postId) {
      const found = posts.filter(x => x.id === postId)
      if (found.length) {
        const post = found[0]
        props = {
          ...props,
          pageTitle: `${post.title} - Blog`,
          post,
          postId
        }
      }
    } else if (posts.length) {
      const post = posts[0]
      props = {
        ...props,
        post
      }
    }

    return props
  }

  render () {
    const { classes, pageTitle, post, postId } = this.props

    return (
      <>
        <NextSeo
          config={{
            title: pageTitle
          }}
        />
        <a id='top' />
        <AppBar />
        <NextLink href='/blog'>
          <Link href='#' underline='none'>
            <Header title={"Lime's Blog"} content='News about us.' />
          </Link>
        </NextLink>
        <Container className={classes.main} component='main'>
          {!postId ? (
            <Grid container spacing={16}>
              {posts.map(post => (
                <Grid item xs={12} key={post.id}>
                  <ListedPost post={post} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <>
              {post ? <Post post={post} /> : <Typography>No post</Typography>}
              <div className={classes.postAppend}>
                <NextLink href='/blog'>
                  <Link href='#'>
                    <Typography color='primary' variant='body2'>
                      <Icon
                        fontSize='inherit'
                        className={classes.backToBlogIcon}
                      >
                        arrow_left_alt
                      </Icon>{' '}
                      Back to Blog
                    </Typography>
                  </Link>
                </NextLink>
              </div>
            </>
          )}
        </Container>
      </>
    )
  }
}

export default withStyles(styles)(Page)
