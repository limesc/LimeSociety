import { prepareClientPortals } from '@jesstelford/react-portal-universal'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Provider as MobXProvider } from 'mobx-react'
import NextSeo from 'next-seo'
import App, { Container } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import React from 'react'
import JssProvider from 'react-jss/lib/JssProvider'

import getPageContext from 'lib/get-page-context'
import SEO from 'next-seo.config'
import { initializeStore } from 'stores'

if (process.browser) {
  // On the client, we have to run this once before React attempts a render.
  // Here in _app is a great place to do it as this file is only required once,
  // and right now (outside the constructor) is before React is invoked.
  prepareClientPortals()
}

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

interface IMyAppProps {
  initialNow: any
  locale: any
  messages: any
}

/** overrides Next.js's default App component */
class MyApp extends App<IMyAppProps> {
  mobxStore
  pageContext: any

  constructor (props) {
    super(props)
    this.pageContext = getPageContext()
    const isServer = !process.browser
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState)
  }

  static async getInitialProps (appContext) {
    const initialData: any = {}
    if (appContext.ctx.req) {
      const viewer =
        appContext.ctx.req &&
        appContext.ctx.req.session &&
        appContext.ctx.req.session.passport &&
        appContext.ctx.req.session.passport.user

      initialData.viewer = viewer
    }
    // Get or Create the store with `undefined` as initialState
    // This allows you to set a custom default initialState
    const mobxStore = initializeStore(initialData)
    // Provide the store to getInitialProps of pages
    appContext.ctx.mobxStore = mobxStore

    const appProps = await App.getInitialProps(appContext)

    return {
      ...appProps,
      initialMobxState: mobxStore
    }
  }

  componentDidMount () {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <MobXProvider store={this.mobxStore}>
          <JssProvider
            registry={this.pageContext.sheetsRegistry}
            generateClassName={this.pageContext.generateClassName}
          >
            <MuiThemeProvider
              theme={this.pageContext.theme}
              sheetsManager={this.pageContext.sheetsManager}
            >
              <>
                <NextSeo config={SEO} />
                <CssBaseline />
                {/* This is where we'll render one of our universal portals */}
                <div id='modal' />
                <Component pageContext={this.pageContext} {...pageProps} />
              </>
            </MuiThemeProvider>
          </JssProvider>
        </MobXProvider>
      </Container>
    )
  }
}

export default MyApp
