import {
  AppBar,
  Tab,
  Tabs,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import CPMTBBoardList from './BoardList/cpmtbBoardList'
import MedicalDBBoardList from './BoardList/madicaldbBoardList'
import NextMedicineBoardList from './BoardList/nextmedicineBoardList'
import VitalDBBoardList from './BoardList/vitaldbBoardList'

function TabContainer (props) {
  return (
    <Typography
      variant='h5'
      component={'div' as any}
      style={{ padding: 8 * 3 }}
    >
      {props.children}
    </Typography>
  )
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: 'auto',
    marginTop: theme.spacing.unit * 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('md')]: {
      marginLeft: '10%',
      marginRight: '10%',
      marginBottom: theme.spacing.unit * 17
    }
  }
})
type PostsProps = WithStyles<typeof styles>

class Posts extends React.Component<PostsProps> {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render () {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <AppBar position='static'>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label='Medical DB 게시판' />
            <Tab label='Vital DB 게시판' />
            <Tab label='Next Medicine 게시판' />
            <Tab label='cPMTb 게시판' />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <>
              <MedicalDBBoardList />
            </>
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <>
              <VitalDBBoardList />
            </>
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <>
              <NextMedicineBoardList />
            </>
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <>
              <CPMTBBoardList />
            </>
          </TabContainer>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(Posts)
