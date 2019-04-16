import NextSeo from 'next-seo'
import React from 'react'

import AppBar from 'pages/components/AppBar'
import ContainerGoTo from 'pages/components/ContainerGoTo'
import FeaturedPosts from './components/FeaturedPosts'
import Header from './components/Header'
import Main from './components/Main'

const pageTitle = 'Blog - Lime Society'

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
      <FeaturedPosts />
      <main>
        <Main />
      </main>
      <ContainerGoTo href='#top'>Back to top</ContainerGoTo>
    </>
  )
}

export default Page
