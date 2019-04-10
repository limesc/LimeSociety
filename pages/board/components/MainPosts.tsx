import {
  Card,
  CardContent,
  CardMedia,
  createStyles,
  Grid,
  Hidden,
  Link,
  ListItem,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import Container from '../../components/Container'

const featuredPosts = [
  {
    id: 1,
    title: 'Medical DB 게시판'
  },
  {
    id: 2,
    title: 'Vital DB 게시판'
  },
  {
    id: 3,
    title: 'Next Medicine 게시판'
  },
  {
    id: 4,
    title: 'cPMTb 게시판'
  }
]

const styles = theme =>
  createStyles({
    background: {
      backgroundColor: '#EFFBEF',
      overflow: 'hidden'
    },
    root: {
      width: 1270,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    mainBoard: {
      width: 'auto',
      margin: theme.spacing.unit * 2,
      marginLeft: '16px',
      marginRight: '16px',
      [theme.breakpoints.up('md')]: {
        width: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    },
    card: {
      display: 'flex'
    },
    cardDetails: {
      flex: 1
    },
    cardposts: {
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
      lineHeight: 1.6
    },
    title: {
      marginTop: theme.spacing.unit * 14,
      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing.unit * 1
      }
    },
    cardMedia: {
      width: 300,
      [theme.breakpoints.down('lg')]: {}
    }
  })

type MainPostsProps = WithStyles<typeof styles>

class MainPosts extends React.Component<MainPostsProps> {
  render () {
    const { classes } = this.props

    return (
      <Container className={classes.background} width='full'>
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
            {featuredPosts.map(post => (
              <Grid item key={post.id} xs={12} md={6}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component={'h2' as any} variant='subtitle1'>
                        {post.title}
                      </Typography>
                      <Grid className={classes.cardposts}>
                        <Link underline='none'>
                          <ListItem button>
                            <li>1</li>
                          </ListItem>
                          <ListItem button>
                            <li>2</li>
                          </ListItem>
                          <ListItem button>
                            <li>3</li>
                          </ListItem>
                        </Link>
                      </Grid>
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia className={classes.cardMedia} />
                  </Hidden>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    )
  }
}

export default withStyles(styles)(MainPosts)
