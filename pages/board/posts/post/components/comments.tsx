import {
  createStyles,
  Divider,
  Grid,
  TextField,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import classNames from 'classnames'

import Container from '../../../../components/Container'

let comments = 0
function commentsData (username, date, comment) {
  comments += 1
  return { id: comments, username, date, comment }
}

const styles = theme =>
  createStyles({
    root: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit * 10,
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing.unit * 4,
        marginBottom: theme.spacing.unit * 4
      }
    },
    mainGrid: {
      width: 1400,
      marginTop: theme.spacing.unit * 5,
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 5,
      lineHeight: 1.6
    },
    commentGrid: {
      width: 1400,
      marginTop: theme.spacing.unit * 2,
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 8,

      lineHeight: 1.6
    },
    userName: {
      marginBottom: theme.spacing.unit
    },
    dateText: {
      marginBottom: theme.spacing.unit
    },
    comment: {
      paddingBottom: theme.spacing.unit * 3
    },
    DividerBottom: {
      marginBottom: theme.spacing.unit * 3
    },
    textField: {
      width: 1170,
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    dense: {
      marginTop: 16
    }
  })

type CommentsProps = WithStyles<typeof styles>

class Comments extends React.Component<CommentsProps> {
  state = {
    comments: [
      commentsData('유저1', '19.04.09', '게시글 확인 했습니다.'),
      commentsData('유저2', '19.04.09', '게시판 본문 댓글 달았습니다.'),
      commentsData('유저3', '19.04.09', '안녕하세요.'),
      commentsData('유저4', '19.04.10', 'material ui로 작업 하는건가요?.'),
      commentsData('유저5', '19.04.10', 'Vital DB 관련 글 없습니까?.'),
      commentsData('유저6', '19.04.11', '질문해도 될까요?'),
      commentsData('유저7', '19.04.11', '하지 마세요.')
    ]
  }

  render () {
    const { classes } = this.props
    const { comments } = this.state

    return (
      <Container className={classes.root}>
        <Grid container spacing={40}>
          <div className={classes.commentGrid}>
            <div>
              <Typography variant='h6'>댓글</Typography>
            </div>
          </div>
        </Grid>
        {comments.map(comment => (
          <Grid item xs={12} key={comment.id}>
            <div className={classes.userName}>
              <Typography variant='subtitle1'>{comment.username}</Typography>
            </div>
            <div className={classes.dateText}>
              <Typography variant='subtitle2'>{comment.date}</Typography>
            </div>
            <div className={classes.comment}>
              <Typography variant='h5'>{comment.comment}</Typography>
            </div>
            <Divider className={classes.DividerBottom} />
          </Grid>
        ))}
        <TextField
          id='outlined-dense'
          label='댓글달기'
          className={classNames(classes.textField, classes.dense)}
          margin='dense'
          variant='outlined'
        />
      </Container>
    )
  }
}

export default withStyles(styles)(Comments)
