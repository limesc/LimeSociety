import AppAppBar from './views/AppAppBar'
import ProductCategories from './views/ProductCategories'
import ProductHero from './views/ProductHero'
import ProductHowItWorks from './views/ProductHowItWorks'
import ProductSmokingHero from './views/ProductSmokingHero'
import withRoot from './withRoot'
// import Layout from './components/layout'

import React from 'react'

function Index () {
  return (
    <React.Fragment>
      {/* <Layout> */}
        <AppAppBar />
        <ProductHero />
        <ProductCategories />
        <ProductSmokingHero />
        <ProductHowItWorks />
      {/* </Layout> */}
    </React.Fragment>
  )
}

export default withRoot(Index)
