import NextSeo from 'next-seo'
import React from 'react'

import BlogAppBar from './blog/components/BlogAppBar'
// import BlogFooter from './index/components/BlogFooter'
import BlogMain from './blog/components/BlogMain'
import Company from './index/components/Company'
import Header from './index/components/Header'
import Home from './index/components/Home'

const pageTitle = 'Lime Society Blog'

function Page () {
  return (
    <>
      <NextSeo
        config={{
          title: pageTitle
        }}
      />
      <BlogAppBar />
      <Header />
      <BlogMain />
      <Company />
      {/* <BlogFooter /> */}
      <Home />
    </>
  )
}

export default Page
