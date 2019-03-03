import {
  Button,
  createStyles,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  TextField,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import NextSeo from 'next-seo'
import React from 'react'

import { withLayout } from './components/layout'

const styles = ({ spacing: { unit } }) =>
  createStyles({
    root: {
      margin: unit,
      padding: unit * 3,
      maxWidth: 400
    },
    form: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-evenly'
    }
  })

const pageTitle = 'Exercises'

interface PageProps extends WithStyles<typeof styles> {}

interface PageState {
  exercises: Array<any>
  title: string
}

class Page extends React.Component<PageProps, PageState> {
  state: PageState = {
    exercises: [
      { id: 1, title: 'Bench Press' },
      { id: 2, title: 'Deadlift' },
      { id: 3, title: 'Squats' }
    ],
    title: ''
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    } as any)
  }

  handleCreate = e => {
    e.preventDefault()

    if (this.state.title) {
      this.setState(({ exercises, title }) => ({
        exercises: [
          ...exercises,
          {
            title,
            id: Date.now()
          }
        ],
        title: ''
      }))
    }
  }

  handleDelete = id => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }))
  }

  render () {
    const { classes } = this.props
    const { exercises, title } = this.state

    return (
      <>
        <NextSeo
          config={{
            title: pageTitle
          }}
        />
        <Paper className={classes.root}>
          <Typography variant='h4' align='center' gutterBottom>
            Exercises
          </Typography>
          <form className={classes.form} onSubmit={this.handleCreate}>
            <TextField
              name='title'
              label='Exercise'
              value={title}
              onChange={this.handleChange}
              margin='normal'
            />
            <Button type='submit' color='primary' variant='contained'>
              Create
            </Button>
          </form>
          <List>
            {exercises.map(({ id, title }) => (
              <ListItem key={id}>
                <ListItemText primary={title} />
                <ListItemSecondaryAction>
                  <IconButton
                    color='primary'
                    onClick={() => this.handleDelete(id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
      </>
    )
  }
}

export default withLayout({ title: pageTitle })(withStyles(styles)(Page))
