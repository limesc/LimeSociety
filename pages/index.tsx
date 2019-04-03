import NextSeo from 'next-seo'
import React from 'react'

import Blog from './blog/components/Blog'
import AppBar from './index/components/AppBar'
import Company from './index/components/Company'
import Header from './index/components/Header'
import Products from './index/components/Products'

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
      <Products />
      <Company />
      <Blog />
    </>
  )
}

export default Page
