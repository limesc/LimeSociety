import {
  createStyles,
  Divider,
  Grid,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import Container from '../../../components/Container'

let counter = 0
function createData (title, uploader, date, text) {
  counter += 1
  return { id: counter, title, uploader, date, text }
}

const styles = theme =>
  createStyles({
    root: {
      marginTop: theme.spacing.unit * 10,
      marginBottom: theme.spacing.unit * 10,
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing.unit * 4,
        marginBottom: theme.spacing.unit * 4
      }
    },
    mainGrid: {
      width: 1400,
      marginTop: theme.spacing.unit,
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 10,
      lineHeight: 1.6
    },
    commentGrid: {
      width: 'auto',
      marginTop: theme.spacing.unit * 5,
      marginLeft: 16,
      marginRight: 16,
      marginBottom: theme.spacing.unit * 4,
      [theme.breakpoints.up('sm')]: {
        width: 1400,
        marginTop: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 10
      },
      lineHeight: 1.6
    },
    boardTitle: {
      paddingTop: theme.spacing.unit * 5,
      marginBottom: theme.spacing.unit * 5
    },
    uploaderText: {
      marginBottom: theme.spacing.unit * 2
    },
    dateText: {
      paddingBottom: theme.spacing.unit * 5
    },
    textArea: {
      padding: '10px',
      display: 'flex',
      margin: theme.spacing.unit
    },
    DividerBottom: {
      width: 'full',
      marginBottom: theme.spacing.unit * 3
    }
  })

type PostProps = WithStyles<typeof styles>

class Post extends React.Component<PostProps> {
  state = {
    rows: [
      createData('게시글 1', '작성자', '19.04.09', '게시글 1의 내용입니다.')
    ]
  }

  render () {
    const { classes } = this.props
    const { rows } = this.state

    return (
      <Container className={classes.root}>
        <Grid container spacing={40}>
          {rows.map(row => (
            <div key={row.id} className={classes.mainGrid}>
              <div className={classes.boardTitle}>
                <Typography variant='h4'>{row.title}</Typography>
              </div>
              <div className={classes.uploaderText}>
                <Typography variant='subtitle1'>{row.uploader}</Typography>
              </div>
              <div className={classes.dateText}>
                <Typography variant='subtitle2'>{row.date}</Typography>
              </div>
              <Divider className={classes.DividerBottom} />
              <div className={classes.textArea}>
                <Typography variant='h5'>{row.text}</Typography>
              </div>
            </div>
          ))}
        </Grid>
        <Divider className={classes.DividerBottom} />
      </Container>
    )
  }
}

export default withStyles(styles)(Post)
