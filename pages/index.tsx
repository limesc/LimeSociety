import NextSeo from 'next-seo'
import React from 'react'

import ContainerGoTo from 'pages/components/ContainerGoTo'
import AppBar from './components/AppBar'
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
      <AppBar home />
      <Header />
      <main>
        <Products />
        <Company />
      </main>
      <ContainerGoTo href='/blog'>Go to blog</ContainerGoTo>
    </>
  )
}

export default Page
