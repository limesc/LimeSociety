import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'

import withReduxStore, { WithReduxStoreProps } from 'lib/with-redux-store'

class MyApp extends App<WithReduxStoreProps> {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return <Container>
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    </Container>
  }
}

export default withReduxStore(MyApp)
