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
import NextLink from 'next/link'
import React from 'react'

import { lightLimeColor } from 'consts/layout'
import Container from '../../components/Container'

const styles = theme =>
  createStyles({
    background: {
      backgroundColor: lightLimeColor,
      overflow: 'hidden'
    },
    root: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing.unit * 4,
        marginBottom: theme.spacing.unit * 4
      }
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: theme.spacing.unit * 6,
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
      fontSize: 16,
      fontWeight: 'bold'
    },
    productMedia: {
      height: 250
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
            <Grid item xs={12}>
              <NextLink
                as='/blog/13'
                href={{ pathname: '/blog', query: { postId: 13 } }}
              >
                <Card className={classes.product}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.productMedia}
                      image='/static/blog/post-13-1.jpg'
                      title='Medical DB'
                    />
                    <CardContent>
                      <Typography
                        className={classes.productTitle}
                        gutterBottom
                        variant='h6'
                        component={'h3' as any}
                        align='center'
                      >
                        Medical DB 2018
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NextLink>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className={classes.product}>
                <CardActionArea
                  href='https://vitaldb.net/'
                  target='_blank'
                  rel='noopener'
                >
                  <CardMedia
                    className={classes.productMedia}
                    image='/static/index/components/products-vital-db.png'
                    title='Vital DB'
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
            <Grid item xs={12} md={6}>
              <Card className={classes.product}>
                <CardActionArea
                  href='http://nextmedicine.com/'
                  target='_blank'
                  rel='noopener'
                >
                  <CardMedia
                    className={classes.productMedia}
                    image='/static/index/components/products-next-medicine.jpg'
                    title='Next Medicine'
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
          </Grid>
        </Container>
      </Container>
    )
  }
}

export default withStyles(styles)(Products)
