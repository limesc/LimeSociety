import {
  createStyles,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import Markdown from '../../components/Markdown'

const styles = theme =>
  createStyles({
    title: {
      fontSize: theme.typography.h6.fontSize,
      fontWeight: 700
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
      <div>
        <Typography
          className={classes.title}
          component={'h2' as any}
          variant='subtitle1'
        >
          {post.title}
        </Typography>
        <Typography color='textSecondary' paragraph variant='subtitle2'>
          {post.createdAt}
        </Typography>
        <Markdown>{post.content || ''}</Markdown>
      </div>
    )
  }
}

export default withStyles(styles)(Post)
