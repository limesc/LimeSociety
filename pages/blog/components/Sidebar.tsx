import {
  createStyles,
  Grid,
  Link,
  ListItem,
  Paper,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

const archives = [
  'March 2020',
  'February 2020',
  'January 2020',
  'December 2019',
  'November 2019',
  'October 2019',
  'September 2019',
  'August 2019',
  'July 2019',
  'June 2019',
  'May 2019',
  'April 2019'
]

const social = ['GitHub', 'Twitter', 'Facebook']

const styles = theme =>
  createStyles({
    sidebarAboutBox: {
      padding: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 4,
      backgroundColor: theme.palette.grey[200],
      lineHeight: 1.6
    },
    sidebarSection: {
      padding: theme.spacing.unit * 2,
      lineHeight: 1.6
    }
  })

type SidebarProps = WithStyles<typeof styles>

class Sidebar extends React.Component<SidebarProps> {
  render () {
    const { classes } = this.props

    return (
      <>
        <Paper elevation={0} className={classes.sidebarAboutBox}>
          <Typography variant='h6' gutterBottom>
            About
          </Typography>
          <Typography>
            Etiam porta sem malesuada magna mollis euismod. Cras mattis
            consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
            sed consectetur.
          </Typography>
        </Paper>
        <div style={{ position: 'sticky', top: '100px' }}>
          <Grid className={classes.sidebarSection}>
            <Typography variant='h6' gutterBottom>
              Archives
            </Typography>
            {archives.map((archive, i) => (
              <Link underline='none' key={i}>
                <ListItem button>
                  <Typography key={archive}>{archive}</Typography>
                </ListItem>
              </Link>
            ))}
          </Grid>
          <Grid className={classes.sidebarSection}>
            <Typography variant='h6' gutterBottom>
              Social
            </Typography>
            {social.map((network, i) => (
              <Link underline='none' key={i}>
                <ListItem button>
                  <Typography key={network}>{network}</Typography>
                </ListItem>
              </Link>
            ))}
          </Grid>
        </div>
      </>
    )
  }
}

export default withStyles(styles)(Sidebar)
