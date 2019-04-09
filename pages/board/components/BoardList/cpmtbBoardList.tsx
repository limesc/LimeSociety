import {
  createStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  WithStyles,
  withStyles
} from '@material-ui/core'

import React from 'react'

const styles = theme =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto'
    },
    table: {
      minWidth: 700
    }
  })

type CPMTBBoardListProps = WithStyles<typeof styles>

let id = 0
function createData (name, uploader, date) {
  id += 1
  return { id, name, uploader, date }
}

const rows = [
  createData('cpmtb 게시판 입니다.', '작성자1', '19.04.09'),
  createData('게시글 1', '작성자2', '19.04.09'),
  createData('게시글 2', '작성자3', '19.04.09'),
  createData('게시글 3', '작성자4', '19.04.08'),
  createData('게시글 4', '작성자5', '19.04.06')
]

class CPMTBBoardList extends React.Component<CPMTBBoardListProps> {
  render () {
    const { classes } = this.props

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>제목</TableCell>
              <TableCell align='right'>작성자</TableCell>
              <TableCell align='right'>작성일</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.uploader}</TableCell>
                <TableCell align='right'>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(CPMTBBoardList)
