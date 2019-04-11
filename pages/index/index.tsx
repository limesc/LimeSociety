import NextSeo from 'next-seo'
import React from 'react'

import AppBar from '../components/AppBar'
import ContainerGoTo from '../components/ContainerGoTo'
import Company from './components/Company'
import Header from './components/Header'
import Products from './components/Products'

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
