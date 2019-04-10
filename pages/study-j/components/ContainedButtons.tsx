/**
 * https://material-ui.com/demos/buttons/#contained-buttons
 */

import { Button, createStyles, WithStyles, withStyles } from '@material-ui/core'
import React from 'react'

const styles = theme =>
  createStyles({
    button: {
      margin: theme.spacing.unit
    },
    input: {
      display: 'none'
    }
  })

type ContainedButtonsProps = WithStyles<typeof styles>

function ContainedButtons (props: ContainedButtonsProps) {
  const { classes } = props

  return (
    <div>
      <Button variant='contained' className={classes.button}>
        Default
      </Button>
      <Button variant='contained' color='primary' className={classes.button}>
        Primary
      </Button>
      <Button variant='contained' color='secondary' className={classes.button}>
        Secondary
      </Button>
      <Button
        variant='contained'
        color='secondary'
        disabled
        className={classes.button}
      >
        Disabled
      </Button>
      <Button
        variant='contained'
        href='#contained-buttons'
        className={classes.button}
      >
        Link
      </Button>
      <input
        accept='image/*'
        className={classes.input}
        id='contained-button-file'
        multiple
        type='file'
      />
      <label htmlFor='contained-button-file'>
        <Button variant='contained' component='span' className={classes.button}>
          Upload
        </Button>
      </label>
    </div>
  )
}

export default withStyles(styles)(ContainedButtons)
