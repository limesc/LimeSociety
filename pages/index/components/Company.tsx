import {
  createStyles,
  Grid,
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
    root: {
      display: 'flex',
      // backgroundColor: '#FBFBEF',
      overflow: 'hidden'
    },
    layoutBody: {
      marginTop: theme.spacing.unit * 15,
      marginBottom: theme.spacing.unit * 15,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing.unit * (0, 5)
    },
    title: {
      marginBottom: theme.spacing.unit * 7
    },
    number: {
      fontSize: 24,
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightMedium
    },
    image: {
      height: 55,
      marginTop: theme.spacing.unit * 4,
      marginBottom: theme.spacing.unit * 4
    },
    curvyLines: {
      pointerEvents: 'none',
      position: 'absolute',
      top: -180,
      opacity: 0.7
    },
    button: {
      marginTop: theme.spacing.unit * 8
    }
  })

type CompanyProps = WithStyles<typeof styles>

class Company extends React.Component<CompanyProps> {
  render () {
    const { classes } = this.props

    return (
      <section className={classes.root} id='company'>
        <Container className={classes.layoutBody}>
          <Typography
            variant='h4'
            className={classes.title}
            component={'h6' as any}
            style={{ marginBottom: '80px' }}
          >
            company
          </Typography>
          <div>
            <Grid container spacing={32}>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <div
                    style={{
                      width: '64',
                      margin: '30px auto',
                      padding: '10px 10px',
                      backgroundColor: '#fed136',
                      borderRadius: '50%',
                      textAlign: 'center',
                      color: '#ffffff'
                    }}
                  >
                    <Icon size={64} icon={personStalker} />
                  </div>
                  <Typography variant='subtitle1' align='center'>
                    Team
                  </Typography>
                  <container xs={12} style={{ height: '15px' }} />
                  <Typography variant='h5' align='center'>
                    February 14, 2012
                  </Typography>
                  <Typography variant='h5' align='center'>
                    Number of Members 8
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <div
                    style={{
                      width: '64',
                      margin: '30px auto',
                      padding: '10px 10px',
                      backgroundColor: '#fed136',
                      borderRadius: '50%',
                      textAlign: 'center',
                      color: '#ffffff'
                    }}
                  >
                    <Icon size={64} icon={iosPaperplane} />
                  </div>
                  <Typography variant='subtitle1' align='center'>
                    Location
                  </Typography>
                  <container xs={12} style={{ height: '15px' }} />
                  <Typography variant='h5' align='center'>
                    Room 803 - 8F, 311
                  </Typography>
                  <Typography variant='h5' align='center'>
                    Teheran-ro Gangnam-gu Seoul
                  </Typography>
                  <Typography variant='h5' align='center'>
                    Republic of Korea
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <div
                    style={{
                      width: '64',
                      margin: '30px auto',
                      padding: '10px 10px',
                      backgroundColor: '#fed136',
                      borderRadius: '50%',
                      textAlign: 'center',
                      color: '#ffffff'
                    }}
                  >
                    <Icon size={64} icon={mail} />
                  </div>
                  <Typography variant='subtitle1' align='center'>
                    Contact
                  </Typography>
                  <container xs={12} style={{ height: '15px' }} />
                  <Typography variant='h5' align='center'>
                    contact@limesociety.com
                  </Typography>
                  <Typography variant='h5' align='center'>
                    +82-70-4129-0214
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
    )
  }
}

export default withStyles(styles)(Company)
