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

import Container from './Container'

const styles = theme =>
  createStyles({
    background: {
      backgroundColor: '#EFFBEF',
      overflow: 'hidden'
    },
    root: {
      overflow: 'hidden',
      marginTop: theme.spacing.unit * 10 + 80,
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing.unit * 10 + 100
      },
      marginBottom: theme.spacing.unit * 10
    },
    title: {
      marginBottom: theme.spacing.unit * 10
    },
    card: {
      position: 'relative',
      margin: theme.spacing.unit,
      maxWidth: 'auto'
    }
  })

type ProductsProps = WithStyles<typeof styles>

class Products extends React.Component<ProductsProps> {
  render () {
    const { classes } = this.props
    return (
      <Container
        className={classes.background}
        component='section'
        id='products'
        width='full'
      >
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
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component={'img' as any}
                    image='/static/img/index/products-medical-db.jpg'
                    title='Medical DB'
                    {...{ alt: 'Medical DB', height: 400 }}
                  />
                  <CardContent>
                    <Typography
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
              <Card className={classes.card}>
                <CardActionArea
                  href='https://vitaldb.net/'
                  target='_blank'
                  rel='noopener'
                >
                  <CardMedia
                    component={'img' as any}
                    image='/static/img/index/products-vital-db.png'
                    title='Vital DB'
                    {...{ alt: 'Vital DB', height: 400 }}
                  />
                  <CardContent>
                    <Typography
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
              <Card className={classes.card}>
                <CardActionArea
                  href='http://nextmedicine.com/'
                  target='_blank'
                  rel='noopener'
                >
                  <CardMedia
                    component={'img' as any}
                    image='/static/img/index/products-next-medicine.jpg'
                    title='Next Medicine'
                    {...{ alt: 'Next Medicine', height: 400 }}
                  />
                  <CardContent>
                    <Typography
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
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component={'img' as any}
                    image='/static/img/index/products-cpmtb.jpg'
                    title='cPMTb'
                    {...{ alt: 'cPMTb', height: 400 }}
                  />
                  <CardContent>
                    <Typography
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