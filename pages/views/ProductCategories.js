import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import LayoutBody from '../components/LayoutBody'
import Typography from '../components/Typography'
import { Link, Button } from '@material-ui/core';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4,
  },
  images: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  hrefs: {

  }
})

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://cdn.pixabay.com/photo/2013/07/18/10/59/heartbeat-163709_960_720.jpg',
      title: 'Medical DB',
      width: '40%',
    },
    {
      url:
        'https://vitaldb.net/static/img/home/splash-1.png',
      title: 'Vital DB',
      width: '60%',
    },
    {
      url:
        'https://cdn.pixabay.com/photo/2019/01/28/10/22/america-3960037_960_720.jpg',
      title: 'Next Medicine',
      width: '60%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400&q=80',
      title: 'cPMTB',
      width: '40%',
    }
  ]

  const hrefs = [
    {
      title: 'Medical DB',
      href: ''
    },
    {
      title: 'Vital DB',
      href: 'https://vitaldb.net/'
    },
    {
      title: 'Next Medicine',
      href: 'http://nextmedicine.com/signin'
    },
    {
      title: 'cPMTB',
      href: ''
    }
  ]
  
  return (
    <LayoutBody className={classes.root} component="section" width="large">
      <Typography variant="h3" align="center" component="h6">
        products
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
            href={hrefs}
            // title="Vital DB"
            // href="https://vitaldb.net/"
            // target="_blank"
            // rel="noopener"
            // title="Next Medicine"
            // href="http://nextmedicine.com/signin"
            // target="_blank"
            // rel="noopener"
          >            
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </LayoutBody>
  )
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductCategories)
