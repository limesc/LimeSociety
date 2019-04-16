import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  createStyles,
  Hidden,
  Link,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import NextLink from 'next/link'
import React from 'react'

const styles = theme =>
  createStyles({
    root: {
      display: 'flex'
    },
    container: {
      flex: 1
    },
    media: {
      width: 160
    },
    title: {
      fontSize: theme.typography.h6.fontSize,
      fontWeight: 700
    },
    content: {
      fontSize: theme.typography.fontSize,
      height: theme.typography.fontSize * 1.5 * 3,
      overflow: 'hidden'
    }
  })

interface FeaturedPostOwnProps {
  post?: any
}

type FeaturedPostProps = FeaturedPostOwnProps & WithStyles<typeof styles>

class FeaturedPost extends React.Component<FeaturedPostProps> {
  render () {
    const { classes, post } = this.props

    return (
      <NextLink
        as={`/blog/${post.id}`}
        href={{ pathname: '/blog', query: { postId: post.id } }}
      >
        <Link underline='none'>
          <CardActionArea>
            <Card className={classes.root}>
              <CardContent className={classes.container}>
                <Typography
                  className={classes.title}
                  component={'h2' as any}
                  variant='subtitle1'
                >
                  {post.title}
                </Typography>
                <Typography color='textSecondary' paragraph variant='subtitle2'>
                  {post.createdAt} by {post.writer}
                </Typography>
                <Typography
                  className={classes.content}
                  paragraph
                  variant='body1'
                >
                  {post.content}
                </Typography>
                <Typography color='primary' variant='body2'>
                  Continue reading...
                </Typography>
              </CardContent>
              <Hidden xsDown>
                <CardMedia
                  className={classes.media}
                  image='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
                  title={post.title}
                />
              </Hidden>
            </Card>
          </CardActionArea>
        </Link>
      </NextLink>
    )
  }
}

export default withStyles(styles)(FeaturedPost)
