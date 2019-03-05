import ProductCategories from './views/ProductCategories'
import ProductHero from './views/ProductHero'
import ProductHowItWorks from './views/ProductHowItWorks'
import ProductSmokingHero from './views/ProductSmokingHero'
import withRoot from './withRoot'

import Layout from './components/layout'

import React from 'react'
import ProductValues from './views/ProductValues'

function Index () {
  return (
    <React.Fragment>
      <Layout>
        <ProductHero />
        <ProductValues />
        <ProductCategories />
        <ProductHowItWorks />
        <ProductSmokingHero />
      </Layout>
    </React.Fragment>
  );
}

export default withRoot(Index);
