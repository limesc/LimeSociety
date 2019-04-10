import NextSeo from 'next-seo'
import React from 'react'

import AppBar from '../../../components/AppBar'
import ContainerGoTo from '../../../components/ContainerGoTo'
import Header from '../../components/Header'

const pageTitle = 'Board/Post - Lime Society'

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
      <ContainerGoTo href='/board/posts'>Go to Posts</ContainerGoTo>
    </>
  )
}

export default Page
