import { Typography } from '@material-ui/core'
import MarkdownJsx from 'markdown-to-jsx'
import React from 'react'

const options = {
  overrides: {
    h1: {
      component: props => <Typography gutterBottom variant='h5' {...props} />
    },
    h2: {
      component: props => <Typography gutterBottom variant='h6' {...props} />
    },
    h3: {
      component: props => (
        <Typography gutterBottom variant='subtitle1' {...props} />
      )
    },
    h4: {
      component: props => (
        <Typography gutterBottom variant='caption' paragraph {...props} />
      )
    },
    p: { component: props => <Typography paragraph {...props} /> },
    li: {
      component: props => (
        <li>
          <Typography component='span' {...props} />
        </li>
      )
    }
  }
}

class Markdown extends React.Component {
  render () {
    return <MarkdownJsx options={options} {...this.props} />
  }
}

export default Markdown
