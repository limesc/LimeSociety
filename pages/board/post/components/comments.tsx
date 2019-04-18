import {
  createStyles,
  Divider,
  Grid,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import { contentComments } from '../../../../consts/contentComments'
import Container from '../../../components/Container'
import Comment from './comment'

// let comments = 0
// function commentsData (username, date, comment) {
//   comments += 1
//   return { id: comments, username, date, comment }
// }

const styles = theme =>
  createStyles({
    root: {
      marginTop: theme.spacing.unit * 10,
      marginBottom: theme.spacing.unit * 10,
      padding: `${theme.spacing.unit * 2}px`,
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing.unit,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: theme.spacing.unit,
        padding: 0
      }
    },
    mainGrid: {
      widht: 1400,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    commentGrid: {
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 8,
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing.unit * 5
      },
      lineHeight: 1.6
    },
    userName: {
      marginBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 2
    },
    dateText: {
      marginBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 3
    },
    comment: {
      paddingBottom: theme.spacing.unit * 3,
      paddingLeft: theme.spacing.unit * 3
    },
    DividerBottom: {
      marginBottom: theme.spacing.unit * 2
    }
  })

type CommentsProps = WithStyles<typeof styles>

class Comments extends React.Component<CommentsProps> {
  render () {
    const { classes } = this.props

    return (
      <Container className={classes.root}>
        <Grid container spacing={40} className={classes.mainGrid}>
          <div className={classes.commentGrid}>
            <div>
              <Typography variant='h6'>댓글</Typography>
            </div>
          </div>
        </Grid>
        {contentComments.map(comment => (
          <Grid item xs={12} key={comment.id}>
            <div className={classes.userName}>
              <Typography variant='subtitle1'>{comment.nickname}</Typography>
            </div>
            <div className={classes.dateText}>
              <Typography variant='subtitle2'>{comment.date}</Typography>
            </div>
            <div className={classes.comment}>
              <Typography variant='inherit'>{comment.comment}</Typography>
            </div>
            <Divider className={classes.DividerBottom} />
          </Grid>
        ))}
        <Comment />
      </Container>
    )
  }
}

export default withStyles(styles)(Comments)
