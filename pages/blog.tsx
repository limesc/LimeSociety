import NextSeo from 'next-seo'
import React from 'react'

import AppBar from './blog/components/AppBar'
import GoToTop from './blog/components/GoToTop'
// import BlogFooter from './index/components/BlogFooter'
import Main from './blog/components/Main'

const pageTitle = 'Lime Society Blog'

function Page () {
  return (
    <>
      <NextSeo
        config={{
          title: pageTitle
        }}
      />
      <AppBar />
      <Main />
      <GoToTop />
    </>
  )
}

export default Page
