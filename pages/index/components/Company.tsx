import {
  createStyles,
  Grid,
  Link,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'
import { Icon } from 'react-icons-kit'
import { mail } from 'react-icons-kit/entypo/mail'
import { iosPaperplane } from 'react-icons-kit/ionicons/iosPaperplane'
import { personStalker } from 'react-icons-kit/ionicons/personStalker'

import Container from './Container'

const styles = theme =>
  createStyles({
    background: {
      backgroundColor: 'white',
      overflow: 'hidden'
    },
    root: {
      marginTop: theme.spacing.unit * 10 + 80,
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing.unit * 10 + 100
      },
      marginBottom: theme.spacing.unit * 10,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    title: {
      marginBottom: theme.spacing.unit * 10
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing.unit * 10
      }
    },
    itemIcon: {
      marginBottom: 30,
      padding: '18px',
      backgroundColor: '#a2cb0f',
      borderRadius: '50%',
      textAlign: 'center',
      color: '#ffffff'
    },
    itemDesc: {
      marginTop: 15,
      lineHeight: 1.6
    }
  })

type CompanyProps = WithStyles<typeof styles>

class Company extends React.Component<CompanyProps> {
  render () {
    const { classes } = this.props

    return (
      <Container className={classes.background} id='company' width='full'>
        <Container className={classes.root} component='section'>
          <Typography
            align='center'
            className={classes.title}
            component={'h2' as any}
            variant='h4'
          >
            COMPANY
          </Typography>
          <Grid container>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.itemIcon}>
                  <Icon size={48} icon={personStalker} />
                </div>
                <Typography variant='subtitle1' align='center'>
                  Team
                </Typography>
                <Typography
                  className={classes.itemDesc}
                  variant='h5'
                  align='center'
                >
                  Founded in 2012,
                  <br />
                  by passionate and experienced developers
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.itemIcon}>
                  <Icon size={48} icon={iosPaperplane} />
                </div>
                <Typography variant='subtitle1' align='center'>
                  Location
                </Typography>
                <Typography
                  className={classes.itemDesc}
                  variant='h5'
                  align='center'
                >
                  Room 803, 311 Teheran-ro,
                  <br />
                  Gangnam-gu, Seoul
                  <br />
                  Republic of Korea
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.itemIcon}>
                  <Icon size={48} icon={mail} />
                </div>
                <Typography variant='subtitle1' align='center'>
                  Contact
                </Typography>
                <Typography
                  className={classes.itemDesc}
                  variant='h5'
                  align='center'
                >
                  <Link href='mailto:contact@limesociety.com'>
                    contact@limesociety.com
                  </Link>
                  <br />
                  +82-70-4129-0214
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Container>
    )
  }
}

export default withStyles(styles)(Company)
