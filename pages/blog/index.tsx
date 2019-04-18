import {
  createStyles,
  Grid,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import NextSeo from 'next-seo'
import React from 'react'

import { posts } from 'consts/posts'
import AppBar from 'pages/components/AppBar'
import ContainerGoTo from 'pages/components/ContainerGoTo'
import Container from '../components/Container'
import Header from '../components/Header'
import FeaturedPosts from './components/FeaturedPosts'
import Post from './components/Post'
import Sidebar from './components/Sidebar'

const styles = theme =>
  createStyles({
    main: {
      marginTop: theme.spacing.unit * 4,
      marginBottom: theme.spacing.unit * 4
    }
  })

const headerName = "Lime's Blog"
const sub = 'News about us.'

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
        {!postId && (
          <>
            <Header name={headerName} subname={sub} />
            <FeaturedPosts />
          </>
        )}
        <Container className={classes.main} component='main'>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              {post ? <Post post={post} /> : <Typography>No post</Typography>}
            </Grid>
          </Grid>
        </Container>
        <ContainerGoTo href='#top'>Back to top</ContainerGoTo>
      </>
    )
  }
}

export default withStyles(styles)(Page)
