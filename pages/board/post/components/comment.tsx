import {
  Button,
  createStyles,
  Grid,
  TextField,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import Container from '../../../components/Container'

const styles = theme =>
  createStyles({
    root: {
      width: 'auto',
      display: 'flex'
    },
    container: {
      flex: 1
    },
    textField: {
      width: '100%',
      marginTop: 16
    },
    buttonGrid: {
      width: 'auto'
    },
    button: {
      marginTop: 22,
      paddingTop: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit
    }
  })

type CommentsProps = WithStyles<typeof styles>

class Comments extends React.Component<CommentsProps> {
  render () {
    const { classes } = this.props

    return (
      <Container className={classes.root}>
        <Grid container spacing={8} className={classes.container}>
          <Grid item xs={12} md={11}>
            <TextField
              className={classes.textField}
              id='outline-multiline'
              label='댓글달기'
              multiline
              rowsMax='8'
              margin='dense'
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} md={1} className={classes.buttonGrid}>
            <Button
              fullWidth
              variant='outlined'
              component='span'
              className={classes.button}
            >
              등록
            </Button>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default withStyles(styles)(Comments)
