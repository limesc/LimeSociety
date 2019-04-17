import {
  createStyles,
  Divider,
  Grid,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import { boardCategory } from '.../../../consts/boardCategory'

import Container from '../../../components/Container'

const featuredboard = boardCategory

const styles = theme =>
  createStyles({
    root: {
      marginTop: theme.spacing.unit * 10,
      marginBottom: theme.spacing.unit * 10,
      padding: `${theme.spacing.unit * 2}px`,
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        padding: 0
      }
    },
    gridRoot: {
      width: 1400,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    mainGrid: {
      width: 'full',
      marginTop: theme.spacing.unit,
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
      lineHeight: 1.6
    },
    textArea: {
      width: 'auto',
      marginTop: theme.spacing.unit,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: theme.spacing.unit * 10,
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing.unit,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 10
      },
      lineHeight: 1.6
    },
    boardTitle: {
      width: 'auto',
      paddingTop: theme.spacing.unit * 5,
      marginBottom: theme.spacing.unit * 5
    },
    uploaderText: {
      marginBottom: theme.spacing.unit * 2
    },
    dateText: {
      paddingBottom: theme.spacing.unit * 5
    },
    contentArea: {
      padding: '10px',
      display: 'flex',
      margin: theme.spacing.unit
    },
    DividerBottom: {
      width: 'auto',
      marginBottom: theme.spacing.unit * 3
    }
  })

type PostProps = WithStyles<typeof styles>

class Post extends React.Component<PostProps> {
  render () {
    const { classes } = this.props

    return (
      <Container className={classes.root}>
        <Grid container spacing={40}>
          {featuredboard.slice(0, 1).map(posts => (
            <div key={posts.id} className={classes.gridRoot}>
              {posts.contents.slice(0, 1).map(post => (
                <div key={post.id} className={classes.mainGrid}>
                  <div className={classes.boardTitle}>
                    <Typography variant='body1'>{post.title}</Typography>
                  </div>
                  <div className={classes.uploaderText}>
                    <Typography variant='subtitle1'>{post.uploader}</Typography>
                  </div>
                  <div className={classes.dateText}>
                    <Typography variant='subtitle2'>{post.date}</Typography>
                  </div>
                </div>
              ))}
              <Divider className={classes.DividerBottom} />
              {posts.contents.slice(0, 1).map(post => (
                <div key={post.id} className={classes.mainGrid}>
                  <div className={classes.textArea}>
                    <Typography variant='inherit'>{post.content}</Typography>
                  </div>
                </div>
              ))}
              <Divider className={classes.DividerBottom} />
            </div>
          ))}
        </Grid>
      </Container>
    )
  }
}

export default withStyles(styles)(Post)
