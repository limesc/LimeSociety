import NextSeo from 'next-seo'
import React from 'react'

import ContainerGoTo from 'pages/components/ContainerGoTo'
import Header from './blog/components/Header'
import Main from './blog/components/Main'
import AppBar from './components/AppBar'

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
      <main>
        <Main />
      </main>
      <ContainerGoTo href='#top'>Back to top</ContainerGoTo>
    </>
  )
}

export default Page
