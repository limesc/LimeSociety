import React from 'react'

//import profileController from 'controllers/profile'
import rootReducer from 'reducers'
import { configureStore } from 'store'

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

const getOrCreateStore = (initialState = {}) => {
  if (isServer) {
    return configureStore(rootReducer, initialState)
  }

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = configureStore(rootReducer, initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}

export interface WithReduxStoreProps {
  reduxStore?: any
}

const withReduxStore = (App) => {
  return class AppWithRedux extends React.Component {
    reduxStore: any

    static async getInitialProps (appContext) {
      let initialState: any = {}
      if (appContext.ctx.req) {
        initialState = {
          viewer: null // (await profileController.retrieve({ ctx: appContext.ctx }) || { profile: null }).profile
        }
      }

      const reduxStore = getOrCreateStore(initialState)
      appContext.ctx.reduxStore = reduxStore

      let appProps: any = {}
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps.call(App, appContext)
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      }
    }

    constructor (props) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }

    render () {
      return React.createElement(App, {
        ...this.props,
        reduxStore: this.reduxStore
      })
    }
  }
}

export default withReduxStore
