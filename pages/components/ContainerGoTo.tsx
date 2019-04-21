import {
  Button,
  createStyles,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { lightLimeColor } from 'consts/layout'
import Container from './Container'

const styles = theme =>
  createStyles({
    background: {
      backgroundColor: lightLimeColor,
      overflow: 'hidden'
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing.unit * 4,
        marginBottom: theme.spacing.unit * 4
      }
    },
    button: {
      border: '4px solid currentColor',
      borderRadius: 0,
      height: 'auto',
      paddingLeft: theme.spacing.unit * 5,
      paddingRight: theme.spacing.unit * 5,
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 1
      }
    },
    buttonTypo: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  })

interface ContainerGoToOwnProps {
  href?: string
}

type ContainerGoToProps = ContainerGoToOwnProps & WithStyles<typeof styles>

class ContainerGoTo extends React.Component<ContainerGoToProps> {
  render () {
    const { children, classes, href } = this.props

    let buttonProps: any = {}
    if (href.startsWith('#')) {
      buttonProps = {
        ...buttonProps,
        component: linkProps => (
          <AnchorLink {...linkProps} href={href} variant='button' />
        )
      }
    } else {
      buttonProps = {
        ...buttonProps,
        href
      }
    }

    return (
      <Container className={classes.background} width='full'>
        <Container className={classes.root} component='section'>
          <Button className={classes.button} {...buttonProps}>
            <Typography className={classes.buttonTypo} component='span'>
              {children}
            </Typography>
          </Button>
        </Container>
      </Container>
    )
  }
}

export default withStyles(styles)(ContainerGoTo)
