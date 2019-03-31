import { createStyles, WithStyles, withStyles } from '@material-ui/core'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Button from '../components/Button'
import Typography from '../components/Typography'
import ProductHeroLayout from './ProductHeroLayout'

const styles = theme =>
  createStyles({
    background: {
      backgroundImage: 'url("/static/img/index/header-bg.jpg")',
      backgroundColor: '#7fc7d9',
      backgroundPosition: 'center'
    },
    button: {
      minWidth: 250
    },
    h5: {
      marginBottom: theme.spacing.unit * 4,
      marginTop: theme.spacing.unit * 4,
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing.unit * 10
      }
    },
    more: {
      marginTop: theme.spacing.unit * 2
    }
  })

type ProductHeroProps = WithStyles<typeof styles>

class ProductHero extends React.Component<ProductHeroProps> {
  render () {
    const { classes } = this.props

    return (
      <ProductHeroLayout backgroundClassName={classes.background}>
        <Typography
          color='inherit'
          align='center'
          variant='h1'
          style={{ marginBottom: 25 }}
        >
          Challenge the Future
        </Typography>
        <Typography color='inherit' align='center' variant='h3'>
          with Commitment and Passion
        </Typography>
        <div style={{ height: 75 }} />
        <Button
          color='primary'
          variant='contained'
          size='large'
          className={classes.button}
          component={linkProps => (
            <AnchorLink
              {...linkProps}
              href='#ProductCategories'
              variant='button'
            />
          )}
        >
          Tell Me More
        </Button>
      </ProductHeroLayout>
    )
  }
}

export default withStyles(styles)(ProductHero)
