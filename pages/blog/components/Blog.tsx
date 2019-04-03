import {
  Button,
  createStyles,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import Container from '../../index/components/Container'

const styles = theme =>
  createStyles({
    background: {
      backgroundColor: '#EFFBEF',
      overflow: 'hidden'
    },
    root: {
      marginTop: theme.spacing.unit * 10,
      marginBottom: theme.spacing.unit * 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    button: {
      border: '4px solid currentColor',
      borderRadius: 0,
      height: 'auto',
      paddingLeft: theme.spacing.unit * 5,
      paddingRight: theme.spacing.unit * 5,
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
    }
  })

type BlogProps = WithStyles<typeof styles>

class Blog extends React.Component<BlogProps> {
  render () {
    const { classes } = this.props

    return (
      <Container className={classes.background} id='blog' width='full'>
        <Container className={classes.root} component='section'>
          <Button className={classes.button} href='/blog'>
            <Typography variant='h6' component='span'>
              go to blog
            </Typography>
          </Button>
        </Container>
      </Container>
    )
  }
}

export default withStyles(styles)(Blog)
