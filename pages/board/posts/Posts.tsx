import {
  createStyles,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
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

import Container from '../../components/Container'

const actionsStyles = theme =>
  createStyles({
    root: {
      flexShrink: 0
      // marginLeft: theme.spacing.unit * 2.5
    },
    buttonhide: {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
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
          className={classes.buttonhide}
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label='first Page'
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
          className={classes.buttonhide}
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
function createData (name, uploader, date) {
  counter += 1
  return { id: counter, name, uploader, date }
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
    boardstyle: {
      width: 'full',
      marginTop: theme.spacing.unit * 3,
      overflowx: 'auto'
    },
    table: {
      minWidth: 350
    },
    tableWrapper: {
      overflowX: 'auto'
    },
    tableCursor: {
      cursor: 'pointer'
    },
    title: {
      marginTop: theme.spacing.unit * 8,
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 8,
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 4
      }
    },

    hide: {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    tablefooter: {
      marginRight: theme.spacin
    }
    // buttonClick: {
    //   flexShrink: 0,
    //   color: theme.palette.text.secondary
    // }
  })

type PostsProps = WithStyles<typeof styles>

class Posts extends React.Component<PostsProps> {
  state = {
    rows: [
      createData('게시글 1', '작성자1', '19.04.09'),
      createData('게시글 2', '작성자2', '19.04.09'),
      createData('게시글 3', '작성자3', '19.04.09'),
      createData('게시글 4', '작성자4', '19.04.08'),
      createData('게시글 5', '작성자5', '19.04.06'),
      createData('게시글 6', '작성자6', '19.04.06'),
      createData('게시글 7', '작성자7', '19.04.05'),
      createData('게시글 8', '작성자8', '19.04.05'),
      createData('게시글 9', '작성자9', '19.04.05'),
      createData('게시글 10', '작성자10', '19.04.03'),
      createData('게시글 11', '작성자11', '19.04.02'),
      createData('게시글 12', '작성자12', '19.04.01'),
      createData('게시글 13', '작성자13', '19.04.01'),
      createData('게시글 14', '작성자14', '19.04.01')
    ].sort((a, b) => (a.date > b.date ? 1 : 1)),
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
      <Container className={classes.root}>
        <Typography
          align='left'
          className={classes.title}
          component={'h2' as any}
          variant='h4'
        >
          Lime Society 게시판
        </Typography>
        <Paper className={classes.boardstyle}>
          <div className={classes.tableWrapper}>
            <Grid>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant='subtitle2'>제목</Typography>
                    </TableCell>
                    <TableCell className={classes.hide} align='right'>
                      <Typography variant='subtitle2'>작성자</Typography>
                    </TableCell>
                    <TableCell className={classes.hide} align='right'>
                      <Typography variant='subtitle2'>작성일</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(row => (
                      <TableRow key={row.id}>
                        <TableCell padding='none' component='th' scope='row'>
                          <Typography variant='body2'>{row.name}</Typography>
                        </TableCell>
                        <TableCell className={classes.hide} align='right'>
                          <Typography variant='body2'>
                            {row.uploader}
                          </Typography>
                        </TableCell>
                        <TableCell className={classes.hide} align='right'>
                          <Typography variant='body2'>{row.date}</Typography>
                        </TableCell>
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
                      className={classes.tablefooter}
                      labelDisplayedRows={({}) => ``}
                      labelRowsPerPage=''
                      rowsPerPageOptions={[]}
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
            </Grid>
          </div>
        </Paper>
      </Container>
    )
  }
}

export default withStyles(styles)(Posts)