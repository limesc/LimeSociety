import {
  createStyles,
  Link,
  List,
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
    about: {
      padding: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 4,
      backgroundColor: theme.palette.grey[200],
      lineHeight: 1.6
    },
    sticky: {
      position: 'sticky',
      top: 80 + theme.spacing.unit * 2
    },
    section: {
      marginBottom: theme.spacing.unit * 2
    },
    sectionTitle: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2
    },
    sectionListItem: {
      paddingTop: theme.spacing.unit * 0.75,
      paddingBottom: theme.spacing.unit * 0.75
    }
  })

type SidebarProps = WithStyles<typeof styles>

class Sidebar extends React.Component<SidebarProps> {
  render () {
    const { classes } = this.props

    return (
      <>
        <Paper elevation={0} className={classes.about}>
          <Typography variant='h6' gutterBottom>
            About
          </Typography>
          <Typography>
            Etiam porta sem malesuada magna mollis euismod. Cras mattis
            consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
            sed consectetur.
          </Typography>
        </Paper>
        <div className={classes.sticky}>
          <div className={classes.section}>
            <Typography
              variant='h6'
              gutterBottom
              className={classes.sectionTitle}
            >
              Archives
            </Typography>
            <List component='nav'>
              {archives.map((archive, i) => (
                <Link underline='none' key={i}>
                  <ListItem button className={classes.sectionListItem}>
                    <Typography key={archive}>{archive}</Typography>
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>
          <div className={classes.section}>
            <Typography
              variant='h6'
              gutterBottom
              className={classes.sectionTitle}
            >
              Social
            </Typography>
            <List component='nav'>
              {social.map((network, i) => (
                <Link underline='none' key={i}>
                  <ListItem button className={classes.sectionListItem}>
                    <Typography key={network}>{network}</Typography>
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>
        </div>
      </>
    )
  }
}

export default withStyles(styles)(Sidebar)
