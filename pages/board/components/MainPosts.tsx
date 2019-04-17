import {
  Card,
  CardContent,
  createStyles,
  Grid,
  Link,
  ListItem,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import { boardCategory } from '.../../../consts/boardCategory'
import Container from '../../components/Container'

const featuredboard = boardCategory

const styles = theme =>
  createStyles({
    root: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    mainBoard: {
      width: 'auto',
      margin: theme.spacing.unit * 2,
      marginLeft: 16,
      marginRight: 16,
      [theme.breakpoints.up('md')]: {
        width: 'auto',
        marginTop: theme.spacing.unit * 7,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing.unit * 10
      }
    },
    card: {
      display: 'flex'
    },
    cardDetails: {
      flex: 1,
      padding: theme.spacing.unit * 2
    },
    cardposts: {
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
      lineHeight: 1.6
    },
    title: {
      marginTop: theme.spacing.unit * 10,
      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing.unit * 1
      }
    }
  })

type MainPostsProps = WithStyles<typeof styles>

class MainPosts extends React.Component<MainPostsProps> {
  render () {
    const { classes } = this.props

    // console.log(ListItem)
    return (
      <Container className={classes.root}>
        <Typography
          align='center'
          className={classes.title}
          component={'h2' as any}
          variant='h4'
        >
          최신 업데이트
        </Typography>
        <Grid container spacing={40} className={classes.mainBoard}>
          {featuredboard.map(board => (
            <Grid item key={board.id} xs={12} md={6}>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component={'h2' as any} variant='h6'>
                      <Link
                        href='/board/posts'
                        color='inherit'
                        underline='none'
                      >
                        {board.category}
                      </Link>
                    </Typography>
                    <Grid className={classes.cardposts}>
                      {board.contents.slice(0, 3).map(post => (
                        <Link
                          key={post.id}
                          href='/board/post'
                          color='inherit'
                          underline='none'
                        >
                          <ListItem button>{post.title}</ListItem>
                        </Link>
                      ))}
                    </Grid>
                  </CardContent>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
  }
}

export default withStyles(styles)(MainPosts)
