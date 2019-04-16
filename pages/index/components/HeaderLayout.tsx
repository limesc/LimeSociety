import { createStyles, WithStyles, withStyles } from '@material-ui/core'
import classNames from 'classnames'
import React from 'react'

import Container from '../../components/Container'

const styles = theme =>
  createStyles({
    root: {
      color: theme.palette.common.white,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.up('sm')]: {
        height: '80vh',
        minHeight: 500,
        maxHeight: 1300
      }
    },
    container: {
      marginTop: theme.spacing.unit * 10,
      marginBottom: theme.spacing.unit * 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    backdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.5,
      zIndex: -1
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      zIndex: -2
    }
  })

interface HeaderLayoutOwnProps {
  backgroundClassName: string
}

type HeaderLayoutProps = HeaderLayoutOwnProps & WithStyles<typeof styles>

class HeaderLayout extends React.Component<HeaderLayoutProps> {
  render () {
    const { backgroundClassName, children, classes } = this.props

    return (
      <section className={classes.root}>
        <Container className={classes.container} width='full'>
          {children}
          <div className={classes.backdrop} />
          <div
            className={classNames(classes.background, backgroundClassName)}
          />
        </Container>
      </section>
    )
  }
}

export default withStyles(styles)(HeaderLayout)
