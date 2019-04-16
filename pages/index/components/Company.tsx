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

import Container from '../../components/Container'

const styles = theme =>
  createStyles({
    background: {
      backgroundColor: 'white',
      overflow: 'hidden'
    },
    root: {
      marginTop: theme.spacing.unit * 10,
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing.unit * 4,
        marginBottom: theme.spacing.unit * 2
      },
      marginBottom: theme.spacing.unit * 10,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    title: {
      fontSize: 30,
      fontWeight: 700,
      marginBottom: theme.spacing.unit * 10,
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing.unit * 4
      }
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: theme.spacing.unit * 5,
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing.unit * 3
      }
    },
    itemIcon: {
      marginBottom: theme.spacing.unit * 2,
      padding: '18px',
      backgroundColor: theme.palette.primary.main,
      borderRadius: '50%',
      textAlign: 'center',
      color: '#ffffff'
    },
    itemTitle: {
      fontSize: 18,
      fontWeight: 700
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
                <Typography
                  align='center'
                  className={classes.itemTitle}
                  component={'h3' as any}
                  gutterBottom
                  variant='h6'
                >
                  Team
                </Typography>
                <Typography align='center' variant='body1'>
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
                <Typography
                  align='center'
                  className={classes.itemTitle}
                  component={'h3' as any}
                  gutterBottom
                  variant='h6'
                >
                  Location
                </Typography>
                <Typography align='center' variant='body1'>
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
                <Typography
                  align='center'
                  className={classes.itemTitle}
                  component={'h3' as any}
                  gutterBottom
                  variant='h6'
                >
                  Contact
                </Typography>
                <Typography align='center' variant='body1'>
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
