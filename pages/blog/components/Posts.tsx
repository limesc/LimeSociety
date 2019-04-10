import {
  createStyles,
  Divider,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import Post from './Post'

const styles = theme => createStyles({})

interface PostsOwnProps {
  posts?: Array<any>
}

type PostsProps = PostsOwnProps & WithStyles<typeof styles>

class Posts extends React.Component<PostsProps> {
  render () {
    const { classes, posts } = this.props

    return (
      <>
        {posts.map(post => (
          <React.Fragment key={post.id}>
            <Post post={post} />
            <Divider />
          </React.Fragment>
        ))}
      </>
    )
  }
}

export default withStyles(styles)(Posts)
