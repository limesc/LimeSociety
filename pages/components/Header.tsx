import {
  createStyles,
  Grid,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import { lightLimeColor } from 'consts/layout'
import Container from './Container'

const styles = theme =>
  createStyles({
    background: {
      backgroundColor: lightLimeColor,
      overflow: 'hidden'
    },
    root: {
      marginTop: theme.spacing.unit * 4,
      marginBottom: theme.spacing.unit * 4,
      [theme.breakpoints.down('xs')]: {
        margin: 0
      }
    },
    container: {
      backgroundImage: 'url("/static/index/components/header-bg.jpg")',
      color: theme.palette.common.white
    },
    content: {
      padding: `${theme.spacing.unit * 6}px`,
      [theme.breakpoints.up('md')]: {
        paddingRight: 0
      }
    }
  })

interface HeaderOwnProps {
  name?: any
  subname?: any
}

type HeaderProps = HeaderOwnProps & WithStyles<typeof styles>

class Header extends React.Component<HeaderProps> {
  render () {
    const { classes, name, subname } = this.props

    return (
      <Container className={classes.background} width='full'>
        <Container className={classes.root} component='section'>
          <Grid container className={classes.container}>
            <Grid item md={6} className={classes.content}>
              <Typography
                color='inherit'
                component={'h2' as any}
                gutterBottom
                variant='h3'
              >
                {name}
              </Typography>
              <Typography color='inherit' paragraph variant='body1'>
                {subname}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    )
  }
}

export default withStyles(styles)(Header)
