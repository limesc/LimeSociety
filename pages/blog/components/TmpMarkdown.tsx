import {
  createStyles,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import ReactMarkdown from 'markdown-to-jsx'
import React from 'react'

const markdownListItemStyles = theme =>
  createStyles({
    listItem: {
      marginTop: theme.spacing.unit
    }
  })

type MarkdownListItemProps = WithStyles<typeof markdownListItemStyles>

const MarkdownListItem = withStyles(markdownListItemStyles)(
  class extends React.Component<MarkdownListItemProps> {
    render () {
      const { classes, ...props } = this.props

      return (
        <li className={classes.listItem}>
          <Typography component='span' {...props} />
        </li>
      )
    }
  }
)

const options = {
  overrides: {
    h1: {
      component: props => <Typography gutterBottom variant='h4' {...props} />
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
      component: props => <MarkdownListItem {...props} />
    }
  }
}

class Markdown extends React.Component {
  render () {
    return <ReactMarkdown options={options} {...this.props} />
  }
}

export default Markdown
