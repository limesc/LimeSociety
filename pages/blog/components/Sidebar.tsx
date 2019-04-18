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

const tags = ['All', 'Medical DB', 'Vital DB', 'Next Medicine', 'cPMTb']

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
            Challenge the Future with Commitment and Passion
          </Typography>
        </Paper>
        <div className={classes.sticky}>
          <div className={classes.section}>
            <Typography
              variant='h6'
              gutterBottom
              className={classes.sectionTitle}
            >
              Tags
            </Typography>
            <List component='nav'>
              {tags.map((tag, i) => (
                <Link underline='none' key={i}>
                  <ListItem button className={classes.sectionListItem}>
                    <Typography key={tag}>{tag}</Typography>
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
