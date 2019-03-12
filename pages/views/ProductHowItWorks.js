import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import LayoutBody from '../components/LayoutBody'
import Button from '../components/Button'
import Typography from '../components/Typography'
import { Icon, withBaseIcon } from 'react-icons-kit'
import {personStalker} from 'react-icons-kit/ionicons/personStalker'
import {androidPin} from 'react-icons-kit/ionicons/androidPin'
import {ic_phone} from 'react-icons-kit/md/ic_phone'

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#FBFBEF',
    overflow: 'hidden',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 15,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing.unit * (0, 5),
  },
  title: {
    marginBottom: theme.spacing.unit * 7,
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing.unit * 8,
  },
})

function ProductHowItWorks(props) {
  const { classes } = props
  
  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">        
        <Typography variant="h3" className={classes.title} component="h6">
          company
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
              <div style={{ color: '#D8F781' }}>
                <Icon size={64} icon={personStalker}/>
              </div>
                <Typography variant="h6" align="center">
                  team
                </Typography>
                <container xs={12} style={{ height: '15px' }}></container>
                <Typography variant="h5" align="center">
                  February 14, 2012
                </Typography>
                <Typography variant="h5" align="center">
                  Number of Members 8
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div style={{ color: '#D8F781' }}>
                  <Icon size={64} icon={androidPin}/>
                </div>
                <Typography variant="h6" align="center">
                  location
                </Typography>
                <container xs={12} style={{ height: '15px' }}></container>
                <Typography variant="h5" align="center">
                  Room 803 - 8F, 311
                </Typography>
                <Typography variant="h5" align="center">
                  Teheran-ro   Gangnam-gu Seoul
                </Typography>
                <Typography variant="h5" align="center">
                  Republic of Korea
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div style={{ color: '#D8F781' }}>
                  <Icon size={64} icon={ic_phone}/>
                </div>
                <Typography variant="h6" align="center">
                  contact
                </Typography>
                <container xs={12} style={{ height: '15px' }}></container>
                <Typography variant="h5" align="center">
                  contact@limesociety.com
                </Typography>
                <Typography variant="h5" align="center">
                  +82-70-4129-0214
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </LayoutBody>
    </section>
  )
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductHowItWorks)
