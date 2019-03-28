import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import LayoutBody from '../components/LayoutBody'
import Typography from '../components/Typography'
import { Link, Button } from '@material-ui/core'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const styles = theme => ({
  background: {
    backgroundColor: '#FBFBEF',
    overflow: 'hidden'
  },
  root: {
    overflow: 'hidden',
    marginTop: theme.spacing.unit * 20,
    marginBottom: theme.spacing.unit * 10
  },
  images: {
    marginTop: theme.spacing.unit * 10,
    display: 'flex',
    flexWrap: 'wrap'
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100
    },
    '&:hover': {
      zIndex: 1
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15
    },
    '&:hover $imageMarked': {
      opacity: 0
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor'
    }
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
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px 14px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  },
  card: {
    position: 'relative',
    // marginTop: theme.spacing.unit * 5,
    // marginBottom: theme.spacing.unit * 5,
    margin: theme.spacing.unit * 3,
    maxWidth: 'auto'
  },
  media: {
    objectFit: 'cover'
  }
})

function ProductCategories(props) {
  const { classes } = props
  return (
    <LayoutBody
      className={classes.background}
      component='section'
      width='full'
      id={'ProductCategories'}
    >
      <LayoutBody className={classes.root} component='section' width='large'>
        <Typography variant='h4' align='center' component='h6' style={{marginBottom: '90px'}}>
          products
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  className={classes.imageBackdrop.media}
                  height='400'
                  image='../static/ProductCategories/medicalDB.jpg'
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='h2' align='center'>
                    Medical DB
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={7}>
            <Card className={classes.card}>
              <CardActionArea
                component={linkProps => (
                  <Link {...linkProps} href='https://vitaldb.net/' />
                )}
                target="_blank"
                rel="noopener"
              >
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  className={classes.media.imageBackdrop}
                  height='400'
                  image='../static/ProductCategories/vitalDB.png'
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='h2' align='center'>
                    Vital DB
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={7}>
            <Card className={classes.card}>
              <CardActionArea
                component={linkProps => (
                  <Link {...linkProps} href='http://nextmedicine.com/' />
                )}
                target="_blank"
                rel="noopener"
              >
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  className={classes.media.imageBackdrop}
                  height='400'
                  image='../static/ProductCategories/nextMedicine.jpg'
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='h2' align='center'>
                    Next Medicine
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  className={classes.media.imageBackdrop}
                  height='400'
                  image='../static/ProductCategories/cpmtb.jpg'
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='h2' align='center'>
                    cPMTB
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </LayoutBody>
    </LayoutBody>
  )
}

//   const images = [
//     {
//       url: '../static/ProductCategories/medicalDB.jpg',
//       title: 'Medical DB',
//       width: '40%'
//     },
//     {
//       url: '../static/ProductCategories/vitalDB.png',
//       title: 'Vital DB',
//       width: '60%',
//       id: 'vitaldb'
//     },
//     {
//       url: '../static/ProductCategories/nextMedicine.jpg',
//       title: 'Next Medicine',
//       width: '60%',
//       id: 'nextmedicine'
//     },
//     {
//       url: '../static/ProductCategories/cpmtb.jpg',
//       title: 'cPMTB',
//       width: '40%'
//     }
//   ]

//   return (
//     <LayoutBody
//       className={classes.background}
//       component='section'
//       width='full'
//       id={'ProductCategories'}
//     >
//       <LayoutBody className={classes.root} component='section' width='large'>
//         <Typography variant='h4' align='center' component='h6'>
//           products
//         </Typography>
//         <div className={classes.images}>
//           {images.map(image => (
//             <ButtonBase
//               key={image.title}
//               className={classes.imageWrapper}
//               style={{
//                 width: image.width
//               }}
//               title="Vital DB"
//               href="https://vitaldb.net/"
//               target="_blank"
//               rel="noopener"
//               title="Next Medicine"
//               href="http://nextmedicine.com/signin"
//               target="_blank"
//               rel="noopener"
//             >
//               <div
//                 className={classes.imageSrc}
//                 style={{
//                   backgroundImage: `url(${image.url})`
//                 }}
//               />
//               <div className={classes.imageBackdrop} />
//               <div className={classes.imageButton}>
//                 <Typography
//                   component='h3'
//                   variant='h6'
//                   color='inherit'
//                   className={classes.imageTitle}
//                 >
//                   {image.title}
//                   <div className={classes.imageMarked} />
//                 </Typography>
//               </div>
//             </ButtonBase>
//           ))}
//         </div>
//       </LayoutBody>
//     </LayoutBody>
//   )
// }

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProductCategories)
