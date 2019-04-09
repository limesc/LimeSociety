import {
  createStyles,
  Link,
  ListItem,
  // IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  WithStyles,
  withStyles
} from '@material-ui/core'
// import {
//   FirstPage,
//   KeyboardArrowLeft,
//   KeyboardArrowRight,
//   LastPage
// } from '@material-ui/icons'

import React from 'react'

let id = 0
function createData (name, uploader, date) {
  id += 1
  return { id, name, uploader, date }
}

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

type VitalDBBoardListProps = WithStyles<typeof styles>

class VitalDBBoardList extends React.Component<VitalDBBoardListProps> {
  state = {
    rows: [
      createData('VitalDB 게시판 입니다.', '작성자1', '19.04.09'),
      createData('게시글 1', '작성자2', '19.04.09'),
      createData('게시글 2', '작성자3', '19.04.09'),
      createData('게시글 3', '작성자4', '19.04.08'),
      createData('게시글 4', '작성자5', '19.04.06'),
      createData('게시글 5', '작성자6', '19.04.06'),
      createData('게시글 6', '작성자7', '19.04.05'),
      createData('게시글 7', '작성자8', '19.04.05'),
      createData('게시글 8', '작성자9', '19.04.05'),
      createData('게시글 9', '작성자10', '19.04.03'),
      createData('게시글 10', '작성자11', '19.04.02'),
      createData('게시글 11', '작성자12', '19.04.01'),
      createData('게시글 12', '작성자13', '19.04.01'),
      createData('게시글 13', '작성자14', '19.04.01')
    ].sort((a, b) => (a.date > b.date ? -1 : 1))
  }

  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  render () {
    const { classes } = this.props
    const { rows, page } = this.state

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
          <TableFooter>
            <TableRow>
              <TablePagination
                page={page}
                SelectProps={{
                  native: true
                }}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(VitalDBBoardList)
