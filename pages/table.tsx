import {
  createStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import NextSeo from 'next-seo'
import React from 'react'

import { withLayout } from './components/layout'

const simpleTableStyles = createStyles({
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
})

let id = 0
function createData (name, calories, fat, carbs, protein) {
  id += 1
  return { id, name, calories, fat, carbs, protein }
}
const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
]

interface SimpleTableProps extends WithStyles<typeof simpleTableStyles> {}

const SimpleTable = withStyles(simpleTableStyles)(
  class extends React.Component<SimpleTableProps> {
    render () {
      const { classes } = this.props

      return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align='right'>Calories</TableCell>
                <TableCell align='right'>Fat (g)</TableCell>
                <TableCell align='right'>Carbs (g)</TableCell>
                <TableCell align='right'>Protein (g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(n => (
                <TableRow key={n.id}>
                  <TableCell component='th' scope='row'>
                    {n.name}
                  </TableCell>
                  <TableCell align='right'>{n.calories}</TableCell>
                  <TableCell align='right'>{n.fat}</TableCell>
                  <TableCell align='right'>{n.carbs}</TableCell>
                  <TableCell align='right'>{n.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )
    }
  }
)

const styles = theme =>
  createStyles({
    h4: {
      marginBottom: theme.spacing.unit * 2
    },
    tableContainer: {
      height: 320
    }
  })

const pageTitle = 'Table'

interface PageProps extends WithStyles<typeof styles> {}

class Page extends React.Component<PageProps> {
  render () {
    const { classes } = this.props
    
    return (
      <>
        <NextSeo
          config={{
            title: pageTitle
          }}
        />
        <Typography
          variant='h4'
          gutterBottom
          component={'h2' as any}
          className={classes.h4}
        >
          Products
        </Typography>
        <div className={classes.tableContainer}>
          <SimpleTable />
        </div>
      </>
    )
  }
}

export default withLayout({ title: pageTitle })(withStyles(styles)(Page))
