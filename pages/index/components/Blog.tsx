import {
  Button,
  createStyles,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import Container from './Container'

const styles = theme =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: theme.spacing.unit * 20,
      marginBottom: theme.spacing.unit * 10
    },
    button: {
      border: '4px solid currentColor',
      borderRadius: 0,
      height: 'auto',
      padding: theme.spacing.unit * (2, 5)
    },
    link: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3
    },
    buoy: {
      width: 60
    }
  })

type BlogProps = WithStyles<typeof styles>

class Blog extends React.Component<BlogProps> {
  render () {
    const { classes } = this.props

    return (
      <Container className={classes.root} component='section'>
        <Button className={classes.button} href='/blog'>
          <Typography variant='h6' component='span'>
            go to blog
          </Typography>
        </Button>
      </Container>
    )
  }
}

export default withStyles(styles)(Blog)
