import { inject } from 'mobx-react'
import Router from 'next/router'
import React from 'react'

import { Store } from 'stores'

interface PageProps {
  next?: string
}

@inject((allStores: any) => ({
  store: allStores.store as Store
}))
class Page extends React.Component<PageProps & { store?: Store }> {
  static async getInitialProps (ctx) {
    const {
      query: { next }
    } = ctx

    return {
      next
    }
  }

  componentDidMount () {
    this.props.store.logout()
    const url = this.props.next || process.env.HOMEPAGE || '/'
    Router.push(url).catch()
  }

  render () {
    return null
  }
}

export default Page
