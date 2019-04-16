import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  createStyles,
  Grid,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import Container from '../../components/Container'

const styles = theme =>
  createStyles({
    background: {
      backgroundColor: '#EFFBEF',
      overflow: 'hidden'
    },
    root: {
      marginTop: theme.spacing.unit * 10,
      marginBottom: theme.spacing.unit * 10,
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing.unit * 4,
        marginBottom: theme.spacing.unit * 4
      }
    },
    title: {
      fontSize: 30,
      fontWeight: 700,
      marginBottom: theme.spacing.unit * 10,
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing.unit * 4
      }
    },
    product: {
      position: 'relative',
      margin: theme.spacing.unit,
      maxWidth: 'auto'
    },
    productTitle: {
      fontSize: 18,
      fontWeight: 700
    },
    productImage: {
      [theme.breakpoints.down('sm')]: {
        height: '250px'
      }
    }
  })

type ProductsProps = WithStyles<typeof styles>

class Products extends React.Component<ProductsProps> {
  render () {
    const { classes } = this.props

    return (
      <Container className={classes.background} id='products' width='full'>
        <Container className={classes.root} component='section'>
          <Typography
            align='center'
            className={classes.title}
            component={'h2' as any}
            variant='h4'
          >
            PRODUCTS
          </Typography>
          <Grid container spacing={0}>
            <Grid item xs={12} md={5}>
              <Card className={classes.product}>
                <CardActionArea>
                  <CardMedia
                    className={classes.productImage}
                    component={'img' as any}
                    image='/static/index/components/products-medical-db.jpg'
                    title='Medical DB'
                    {...{ alt: 'Medical DB', height: 400 }}
                  />
                  <CardContent>
                    <Typography
                      className={classes.productTitle}
                      gutterBottom
                      variant='h6'
                      component={'h3' as any}
                      align='center'
                    >
                      Medical DB
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={7}>
              <Card className={classes.product}>
                <CardActionArea
                  href='https://vitaldb.net/'
                  target='_blank'
                  rel='noopener'
                >
                  <CardMedia
                    className={classes.productImage}
                    component={'img' as any}
                    image='/static/index/components/products-vital-db.png'
                    title='Vital DB'
                    {...{ alt: 'Vital DB', height: 400 }}
                  />
                  <CardContent>
                    <Typography
                      className={classes.productTitle}
                      gutterBottom
                      variant='h6'
                      component={'h3' as any}
                      align='center'
                    >
                      Vital DB
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={7}>
              <Card className={classes.product}>
                <CardActionArea
                  href='http://nextmedicine.com/'
                  target='_blank'
                  rel='noopener'
                >
                  <CardMedia
                    className={classes.productImage}
                    component={'img' as any}
                    image='/static/index/components/products-next-medicine.jpg'
                    title='Next Medicine'
                    {...{ alt: 'Next Medicine', height: 400 }}
                  />
                  <CardContent>
                    <Typography
                      className={classes.productTitle}
                      gutterBottom
                      variant='h6'
                      component={'h3' as any}
                      align='center'
                    >
                      Next Medicine
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card className={classes.product}>
                <CardActionArea>
                  <CardMedia
                    className={classes.productImage}
                    component={'img' as any}
                    image='/static/index/components/products-cpmtb.jpg'
                    title='cPMTb'
                    {...{ alt: 'cPMTb', height: 400 }}
                  />
                  <CardContent>
                    <Typography
                      className={classes.productTitle}
                      gutterBottom
                      variant='h6'
                      component={'h3' as any}
                      align='center'
                    >
                      cPMTb
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Container>
    )
  }
}

export default withStyles(styles)(Products)
