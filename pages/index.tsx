import NextSeo from 'next-seo'
import React from 'react'

import AppBar from './index/components/AppBar'
import Header from './index/components/Header'
import ProductCategories from './views/ProductCategories'
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
      <AppBar />
      <Header />
      <ProductCategories />
      <ProductSmokingHero />
      <ProductHowItWorks />
    </>
  )
}

export default Page
