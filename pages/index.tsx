import NextSeo from 'next-seo'
import React from 'react'

import AppAppBar from './views/AppAppBar'
import ProductCategories from './views/ProductCategories'
import ProductHero from './views/ProductHero'
import ProductHowItWorks from './views/ProductHowItWorks'
import ProductSmokingHero from './views/ProductSmokingHero'

const pageTitle = 'Lime Society'

function Page () {
  return (
    <>
      <NextSeo
        config={{
          title: pageTitle
        }}
      />
      <AppAppBar />
      <ProductHero />
      <ProductCategories />
      <ProductSmokingHero />
      <ProductHowItWorks />
    </>
  )
}

export default Page
