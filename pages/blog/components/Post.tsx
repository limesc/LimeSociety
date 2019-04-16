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
      marginBottom: theme.spacing.unit * 3
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
          className={classes.title}
          component={'h2' as any}
          variant='h4'
        >
          {post.title}
        </Typography>

        <Markdown>{post.description}</Markdown>
      </div>
    )
  }
}

export default withStyles(styles)(Post)
