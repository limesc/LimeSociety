import { createStyles, Grid, WithStyles, withStyles } from '@material-ui/core'
import React from 'react'

import { lightLimeColor } from 'consts/layout'
import { featuredPosts } from 'consts/posts'
import Container from '../../components/Container'
import FeaturedPost from './FeaturedPost'

const styles = theme =>
  createStyles({
    background: {
      backgroundColor: lightLimeColor,
      overflow: 'hidden'
    },
    root: {
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 4,
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing.unit * 2
      }
    }
  })

type FeaturedPostsProps = WithStyles<typeof styles>

class FeaturedPosts extends React.Component<FeaturedPostsProps> {
  render () {
    const { classes } = this.props

    return (
      <Container className={classes.background} width='full'>
        <Container className={classes.root} component='section'>
          <Grid container spacing={16}>
            {featuredPosts.map(post => (
              <Grid item xs={12} md={6} key={post.id}>
                <FeaturedPost post={post} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    )
  }
}

export default withStyles(styles)(FeaturedPosts)
