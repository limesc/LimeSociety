import {
  createStyles,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import Container from '../../../../components/Container'

let counter = 0
function createData (title, uploader, date, text) {
  counter += 1
  return { id: counter, title, uploader, date, text }
}

const styles = theme =>
  createStyles({
    root: {
      marginTop: theme.spacing.unit * 10,
      marginBottom: theme.spacing.unit * 10,
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing.unit * 4,
        marginBottom: theme.spacing.unit * 4
      }
    },
    mainGrid: {
      width: 'auto',
      marginTop: theme.spacing.unit * 5,
      marginLeft: 16,
      marginRight: 16,
      marginBottom: theme.spacing.unit * 4,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginTop: theme.spacing.unit * 10,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 20
      },
      lineHeight: 1.6
    },
    boardTitle: {
      paddingTop: theme.spacing.unit * 5,
      marginBottom: theme.spacing.unit * 5
    },
    uploaderText: {
      marginBottom: theme.spacing.unit * 2
    },
    dateText: {
      paddingBottom: theme.spacing.unit * 5
    },
    textArea: {
      display: 'flex',
      margin: theme.spacing.unit
    },
    DividerBottom: {
      marginBottom: theme.spacing.unit * 3
    }
  })

type PostProps = WithStyles<typeof styles>

class Post extends React.Component<PostProps> {
  state = {
    rows: [
      createData('게시글 1', '작성자', '19.04.09', '게시글 1의 내용입니다.')
    ]
  }

  render () {
    const { classes } = this.props
    const { rows } = this.state

    return (
      <Container className={classes.root}>
        <Paper>
          <Grid>
            {rows.map(row => (
              <Grid key={row.id} className={classes.mainGrid}>
                <Grid className={classes.boardTitle}>
                  <Typography className={classes.boardTitle} variant='h4'>
                    {row.title}
                  </Typography>
                </Grid>
                <Grid className={classes.uploaderText}>
                  <Typography variant='subtitle1'>{row.uploader}</Typography>
                </Grid>
                <Grid className={classes.dateText}>
                  <Typography variant='subtitle2'>{row.date}</Typography>
                </Grid>
                <Divider className={classes.DividerBottom} />
                <Grid className={classes.textArea}>
                  <Typography variant='h5'>{row.text}</Typography>
                </Grid>
              </Grid>
            ))}
            <Divider className={classes.DividerBottom} />
            <Table>
              <TableRow>
                <TableHead>
                  <TableCell>댓글</TableCell>
                </TableHead>
              </TableRow>
            </Table>
          </Grid>
        </Paper>
      </Container>
    )
  }
}

export default withStyles(styles)(Post)
