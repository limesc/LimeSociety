import { Typography, withStyles } from '@material-ui/core/'
import React from 'react'

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`
  }
})

function BlogFooter (props) {
  const { classes } = props

  return (
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        Footer
      </Typography>
      <Typography
        variant='h5'
        align='center'
        color='textSecondary'
        component={'h6' as any}
      >
        Something here to give the footer a purpose!
      </Typography>
    </footer>
  )
}

export default withStyles(styles)(BlogFooter)
