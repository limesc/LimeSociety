import {
  Avatar,
  Button,
  Checkbox,
  createStyles,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { inject } from 'mobx-react'
import NextSeo from 'next-seo'
import Router from 'next/router'
import React from 'react'

import { getViewer, nextReplace } from 'lib'
import { Store } from 'stores'

const styles = theme =>
  createStyles({
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit
    },
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
        .spacing.unit * 3}px`
    },
    recaptcha: {
      width: 304,
      margin: '0 auto'
    },
    submit: {
      marginTop: theme.spacing.unit * 3
    }
  })

const pageTitle = 'Login'

interface PageProps extends WithStyles<typeof styles> {
  next?: string
}

@inject((allStores: any) => ({
  store: allStores.store as Store
}))
class Page extends React.Component<PageProps & { store?: Store }> {
  /*
  대부분의 브라우저가 login 페이지 한정으로 암호 관리에서 autocomplete 옵션을 무시하고 autofill함
  autofill 시기가 불명확하여, state, mobx 무관하게 이벤트를 랜덤하게 잡아냈다 못잡아냈다 함
  고로 controlled component로 쓸 수가 없어, uncontrolled component로 작성함
  */

  emailRef: React.RefObject<any>
  passwordRef: React.RefObject<any>
  recaptchaRef: React.RefObject<any>
  rememberRef: React.RefObject<any>

  constructor (props: any) {
    super(props)

    this.emailRef = React.createRef()
    this.passwordRef = React.createRef()
    this.recaptchaRef = React.createRef()
    this.rememberRef = React.createRef()
  }

  static async getInitialProps (ctx) {
    const {
      query: { next }
    } = ctx
    const viewer = getViewer(ctx)

    if (viewer) {
      const url =
        next || (viewer && viewer.homepage) || process.env.HOMEPAGE || '/'
      nextReplace(ctx, url)
    }
    return {
      next
    }
  }

  handleSubmit = async e => {
    e.preventDefault()

    const email = this.emailRef.current.value
    const password = this.passwordRef.current.value
    const remember = this.rememberRef.current.checked

    const data = {
      email,
      password,
      remember
    }

    const viewer = {
      email: data.email,
      name: 'Foo',
      homepage: '/'
    }

    this.props.store.login(viewer)
    const url =
      this.props.next || viewer.homepage || process.env.HOMEPAGE || '/'
    await Router.push(url)
  }

  render () {
    const { classes } = this.props

    return (
      <>
        <NextSeo
          config={{
            title: pageTitle
          }}
        />
        <main className={classes.main}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component={'h1' as any} variant='h5'>
              {pageTitle}
            </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <TextField
                autoComplete='email'
                autoFocus
                fullWidth
                inputRef={this.emailRef}
                label='Email'
                margin='normal'
                name='email'
                required
              />
              <TextField
                autoComplete='current-password'
                fullWidth
                inputRef={this.passwordRef}
                label='Password'
                margin='normal'
                name='password'
                required
                type='password'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color='primary'
                    defaultChecked
                    inputRef={this.rememberRef}
                    value='remember'
                  />
                }
                label='Remember'
              />
              <Button
                className={classes.submit}
                color='primary'
                fullWidth
                type='submit'
                variant='contained'
              >
                Login
              </Button>
            </form>
          </Paper>
        </main>
      </>
    )
  }
}

export default withStyles(styles)(Page)
