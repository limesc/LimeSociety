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
    header: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8)
    },
    title: {
      fontWeight: 'bold'
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
      <>
        <div className={classes.header}>
          <Typography
            align='center'
            className={classes.title}
            component={'h2' as any}
            paragraph
            variant='h4'
          >
            {post.title}
          </Typography>
          <Typography align='center' color='textSecondary' variant='subtitle1'>
            {post.createdAt}
          </Typography>
        </div>
        <Markdown>{post.content || ''}</Markdown>
      </>
    )
  }
}

export default withStyles(styles)(Post)
