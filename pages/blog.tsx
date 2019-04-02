import NextSeo from 'next-seo'
import React from 'react'

import BlogFooter from './index/components/BlogFooter'
import BlogMain from './index/components/BlogMain'
import BlogToolbar from './index/components/BlogToolbar'

const pageTitle = 'Lime Society Blog'

function Page () {
  return (
    <>
      <NextSeo
        config={{
          title: pageTitle
        }}
      />
      <BlogToolbar />
      <BlogMain />
      <BlogFooter />
    </>
  )
}

export default Page
