import {
  createStyles,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import Markdown from './markdown'

const styles = theme =>
  createStyles({
    mainpoststitle: {
      marginBottom: theme.spacing.unit * 5
    }
  })

interface PostOwnProps {
  post?: any
}

type PostProps = PostOwnProps & WithStyles<typeof styles>

class Post extends React.Component<PostProps> {
  render () {
    const { classes, post } = this.props

    return (
      <div style={{ marginTop: '40px' }}>
        <Typography
          component={'h2' as any}
          variant='h3'
          className={classes.mainpoststitle}
        >
          {post.title}
        </Typography>

        <Markdown>{post.description}</Markdown>
      </div>
    )
  }
}

export default withStyles(styles)(Post)
