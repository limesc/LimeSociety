import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  createStyles,
  Grid,
  Link,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import LayoutBody from '../components/LayoutBody'
import Typography from '../components/Typography'

const styles = theme =>
  createStyles({
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

type ProductCategoriesProps = WithStyles<typeof styles>

class ProductCategories extends React.Component<ProductCategoriesProps> {
  render () {
    const { classes } = this.props
    return (
      <LayoutBody
        className={classes.background}
        component='section'
        width='full'
        {...{ id: 'ProductCategories' }}
      >
        <LayoutBody className={classes.root} component='section' width='large'>
          <Typography
            variant='h4'
            align='center'
            component={'h6' as any}
            style={{ marginBottom: '90px' }}
          >
            products
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component={'img' as any}
                    className={classes.imageBackdrop.media}
                    image='../static/img/index/products-medical-db.jpg'
                    title='Contemplative Reptile'
                    {...{ alt: 'Contemplative Reptile', height: 400 }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h6'
                      component={'h2' as any}
                      align='center'
                    >
                      Medical DB
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={7}>
              <Card className={classes.card}>
                <CardActionArea
                  component={(linkProps: any) => (
                    <Link {...linkProps} href='https://vitaldb.net/' />
                  )}
                  target='_blank'
                  rel='noopener'
                >
                  <CardMedia
                    component={'img' as any}
                    className={classes.media.imageBackdrop}
                    image='../static/img/index/products-vital-db.png'
                    title='Contemplative Reptile'
                    {...{ alt: 'Contemplative Reptile', height: 400 }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h6'
                      component={'h2' as any}
                      align='center'
                    >
                      Vital DB
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={7}>
              <Card className={classes.card}>
                <CardActionArea
                  component={(linkProps: any) => (
                    <Link {...linkProps} href='http://nextmedicine.com/' />
                  )}
                  target='_blank'
                  rel='noopener'
                >
                  <CardMedia
                    component={'img' as any}
                    className={classes.media.imageBackdrop}
                    image='../static/img/index/products-next-medicine.jpg'
                    title='Contemplative Reptile'
                    {...{ alt: 'Contemplative Reptile', height: 400 }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h6'
                      component={'h2' as any}
                      align='center'
                    >
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
                    component={'img' as any}
                    className={classes.media.imageBackdrop}
                    image='../static/img/index/products-cpmtb.jpg'
                    title='Contemplative Reptile'
                    {...{ alt: 'Contemplative Reptile', height: 400 }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h6'
                      component={'h2' as any}
                      align='center'
                    >
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
}

export default withStyles(styles)(ProductCategories)
