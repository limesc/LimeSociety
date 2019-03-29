import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Button from '../components/Button'
import Typography from '../components/Typography'
import ProductHeroLayout from './ProductHeroLayout'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const backgroundImage = './static/ProductHero/header-bg.jpg'

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
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

function ProductHero(props) {
  const { classes } = props

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <img style={{ display: 'none' }} src={backgroundImage} alt='' />
      <img
        src='../../static/ProductHero/MainLogo3.png'
        className='rounded float-left'
        alt='aligment'
        marginBottom='theme.spacing.unit *4'
      />
      <div style={{ height: '50px' }} />
      <Typography
        color='inherit'
        align='center'
        variant='h1'
        style={{ marginBottom: '25px' }}
      >
        Challenge the Future
      </Typography>
      <Typography color='inherit' align='center' variant='h3'>
        with Commitment and Passion
      </Typography>

      <div style={{ height: '75px' }} />
      <Button
        color='error'
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

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProductHero)
