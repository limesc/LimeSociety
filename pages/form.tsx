import {
  Button,
  createStyles,
  Paper,
  TextField,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import { inject, Observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import NextSeo from 'next-seo'
import React from 'react'

import { Form } from 'lib/mobx-react-form'
import { Store } from 'stores'
import { withLayout } from './components/layout'

class EditProfileForm extends Form {
  hooks () {
    return {
      async onSuccess (form) {
        console.log(form)
        alert('저장되었습니다.')
      }
    }
  }

  setup () {
    return {
      fields: [
        {
          name: 'name',
          label: '이름',
          rules: 'required|string|min:2',
          bindings: 'TextField'
        },
        {
          name: 'email',
          label: '이메일',
          rules: 'required|email|string',
          bindings: 'TextField'
        },
        {
          name: 'password',
          label: '새 비밀번호 (변경 시에만 입력)',
          rules: 'string|min:4',
          bindings: 'TextField'
        },
        {
          name: 'passwordConfirm',
          label: '새 비밀번호 확인 (변경 시에만 입력)',
          rules: 'string|required_with:password|same:password',
          bindings: 'TextField'
        }
      ]
    }
  }
}

const maxMainWidth = 960

const styles = theme =>
  createStyles({
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit
    },
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      marginTop: 0,
      [theme.breakpoints.up(maxMainWidth + theme.spacing.unit * 3 * 2)]: {
        width: maxMainWidth,
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    },
    paper: {
      padding: theme.spacing.unit * 3
    },
    button: {
      marginTop: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit
    }
  })

const pageTitle = 'Form'

interface PageProps extends WithStyles<typeof styles> {}

@inject((allStores: any) => ({
  store: allStores.store as Store
}))
class Page extends React.Component<PageProps & { store?: Store }> {
  form

  constructor (props: any) {
    super(props)

    const { viewer } = props.store
    const values = {
      email: viewer ? viewer.email : 'member@example.com',
      name: viewer ? viewer.name : 'Foo',
      password: '',
      passwordConfirm: ''
    }
    this.form = new EditProfileForm({ values })
  }

  render () {
    const { classes } = this.props
    const form = this.form

    return (
      <>
        <NextSeo
          config={{
            title: pageTitle
          }}
        />
        <div className={classes.main}>
          <Paper className={classes.paper}>
            <Typography component={'h1' as any} variant='h6'>
              {pageTitle}
            </Typography>
            <form className={classes.form} onSubmit={form.onSubmit}>
              <Observer>
                {() => (
                  <TextField
                    autoComplete='name'
                    autoFocus
                    fullWidth
                    margin='normal'
                    required
                    {...form.$('name').bind()}
                  />
                )}
              </Observer>
              <Observer>
                {() => (
                  <TextField
                    autoComplete='email'
                    fullWidth
                    margin='normal'
                    required
                    {...form.$('email').bind()}
                  />
                )}
              </Observer>
              <Observer>
                {() => (
                  <TextField
                    autoComplete='new-password'
                    fullWidth
                    margin='normal'
                    type='password'
                    {...form.$('password').bind()}
                  />
                )}
              </Observer>
              <Observer>
                {() => (
                  <TextField
                    autoComplete='new-password'
                    fullWidth
                    margin='normal'
                    type='password'
                    {...form.$('passwordConfirm').bind()}
                  />
                )}
              </Observer>

              <Observer>
                {() => (
                  <Button
                    className={classes.button}
                    color='primary'
                    disabled={form.check('hasError')}
                    onClick={form.onSubmit}
                    type='submit'
                    variant='contained'
                  >
                    저장하기
                  </Button>
                )}
              </Observer>
              <Button
                className={classes.button}
                onClick={form.onClear}
                type='button'
                variant='contained'
              >
                지우기
              </Button>
              <Button
                className={classes.button}
                onClick={form.onReset}
                type='button'
                variant='contained'
              >
                초기화
              </Button>
            </form>
          </Paper>
        </div>
        {process.env.NODE_ENV === 'development' && <DevTools />}
      </>
    )
  }
}

export default withLayout({ title: pageTitle })(withStyles(styles)(Page))
