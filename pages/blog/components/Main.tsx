import { createStyles, Grid, WithStyles, withStyles } from '@material-ui/core'
import React from 'react'

import { posts } from 'consts/posts'
import Post from './Post'
import Sidebar from './Sidebar'

const styles = theme =>
  createStyles({
    mainGrid: {
      width: 'auto',
      marginTop: theme.spacing.unit * 5,
      marginLeft: 16,
      marginRight: 16,
      marginBottom: theme.spacing.unit * 4,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginTop: theme.spacing.unit * 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing.unit * 20
      },
      lineHeight: 1.6
    }
  })

type MainProps = WithStyles<typeof styles>

class Main extends React.Component<MainProps> {
  render () {
    const { classes } = this.props

    return (
      <Grid container spacing={40} className={classes.mainGrid}>
        <Grid item xs={12} md={8}>
          <Post post={posts.filter(x => x.id === 1)[0]} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Sidebar />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Main)
