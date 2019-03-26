import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import LayoutBody from '../components/LayoutBody'
import Typography from '../components/Typography'
import { Icon } from '@material-ui/core'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 15,
    marginBottom: theme.spacing.unit * 9,
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing.unit * (2, 5),
  },
  link: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  },
  buoy: {
    width: 60,
  },
});

function ProductSmokingHero(props) {
  const { classes } = props;

  return (
    <LayoutBody className={classes.root} component="section">
      <Button className={classes.button}>
        <Typography variant="h6" component="span">
          go to blog
        </Typography>
      </Button> 
    </LayoutBody>
  );
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductSmokingHero)
