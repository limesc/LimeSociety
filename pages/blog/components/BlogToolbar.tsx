import {
  Button,
  Divider,
  IconButton,
  Toolbar,
  Typography,
  withStyles
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100
    }
  },

  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: 'space-between'
  }
})
console.log(styles)

const sections = [
  'Technology',
  'Design',
  'Culture',
  'Business',
  'Politics',
  'Opinion',
  'Science',
  'Health',
  'Style',
  'Travel'
]

function BlogToolbar (props) {
  const { classes } = props

  return (
    <div className={classes.layout}>
      <Toolbar>
        <Button size='small'>Home</Button>
        <Typography
          component={'h2' as any}
          variant='subtitle1'
          color='inherit'
          align='center'
          noWrap
          className={classes.toolbarTitle}
        >
          Lime Society
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant='outlined' size='small'>
          sign up
        </Button>
      </Toolbar>
      <Divider />
      <Toolbar variant='dense' className={classes.toolbarSecondary}>
        {sections.map(sections => (
          <Typography color='inherit' noWrap key={sections}>
            {sections}
          </Typography>
        ))}
      </Toolbar>
    </div>
  )
}

export default withStyles(styles)(BlogToolbar)
