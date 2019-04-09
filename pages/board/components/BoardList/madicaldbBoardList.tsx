import {
  createStyles,
  IconButton,
  // Link,
  // ListItem,
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
import {
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage
} from '@material-ui/icons'

import React from 'react'

// const styles = theme =>
//   createStyles({
//     root: {
//       width: '100%',
//       marginTop: theme.spacing.unit * 3,
//       overflowX: 'auto'
//     },
//     table: {
//       minWidth: 700
//     }
//   })

// type MedicalDBBoardListProps = WithStyles<typeof styles>

// let id = 0
// function createData (name, uploader, date) {
//   id += 1
//   return { id, name, uploader, date }
// }

// const rows = [
//   createData('MedicalDB 게시판 입니다.', '작성자1', '19.04.09'),
//   createData('게시글 1', '작성자2', '19.04.09'),
//   createData('게시글 2', '작성자3', '19.04.09'),
//   createData('게시글 3', '작성자4', '19.04.08'),
//   createData('게시글 4', '작성자5', '19.04.06')
// ]

// class MedicalDBBoardList extends React.Component<MedicalDBBoardListProps> {
//   render () {
//     const { classes } = this.props

//     return (
//       <Paper className={classes.root}>
//         <Table className={classes.table}>
//           <TableHead>
//             <TableRow>
//               <TableCell>제목</TableCell>
//               <TableCell align='right'>작성자</TableCell>
//               <TableCell align='right'>작성일</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map(row => (
//               <TableRow key={row.id}>
//                 <TableCell component='th' scope='row'>
//                   {row.name}
//                 </TableCell>
//                 <TableCell align='right'>{row.uploader}</TableCell>
//                 <TableCell align='right'>{row.date}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Paper>
//     )
//   }
// }

// export default withStyles(styles)(MedicalDBBoardList)

const actionsStyles = theme =>
  createStyles({
    buttonClick: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing.unit * 1
    }
  })

class ActionTableList extends React.Component<any> {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0)
  }

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1)
  }

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1)
  }

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
    )
  }

  render () {
    const { classes, count, page, rowsPerPage, theme } = this.props

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label='First Page'
        >
          {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label='Previous Page'
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label='Next Page'
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label='Last Page'
        >
          {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
        </IconButton>
      </div>
    )
  }
}

const ActionTableListWrapped = withStyles(actionsStyles, { withTheme: true })(
  ActionTableList
)

let counter = 0
function createData (name, calories, fat) {
  counter += 1
  return { id: counter, name, calories, fat }
}

const styles = theme =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3
    },
    table: {
      minWidth: 500
    },
    tableWrapper: {
      overflowX: 'auto'
    },
    buttonClick: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing.unit * 2.5
    }
  })

type TableListProps = WithStyles<typeof styles>

class TableList extends React.Component<TableListProps> {
  state = {
    rows: [
      createData('Medical DB 게시판 입니다.', '작성자1', '19.04.09'),
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
    ].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
    page: 0,
    rowsPerPage: 10
  }

  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value })
  }

  render () {
    const { classes } = this.props
    const { rows, rowsPerPage, page } = this.state
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>제목</TableCell>
                <TableCell align='right'>작성자</TableCell>
                <TableCell align='right'>작성일</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => (
                  <TableRow key={row.id}>
                    <TableCell component='th' scope='row'>
                      {row.name}
                    </TableCell>
                    <TableCell align='right'>{row.calories}</TableCell>
                    <TableCell align='right'>{row.fat}</TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    native: true
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={ActionTableListWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(TableList)
