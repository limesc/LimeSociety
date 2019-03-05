import { inject } from 'mobx-react'
import NextSeo from 'next-seo'
import React from 'react'

import { Store } from 'stores'
import { withLayout } from './components/layout'

const pageTitle = 'Mobx Store'

@inject((allStores: any) => ({
  store: allStores.store as Store
}))
class Page extends React.Component<{ store?: Store }> {
  render () {
    const data = this.props.store
    return (
      <>
        <NextSeo
          config={{
            title: pageTitle
          }}
        />
        <pre>{JSON.stringify(data, null, '  ')}</pre>
      </>
    )
  }
}

export default withLayout({ title: pageTitle })(Page)
