import NextSeo from 'next-seo'
import React from 'react'

import AppBar from '../components/AppBar'
import ContainerGoTo from '../components/ContainerGoTo'
import Header from './components/Header'
import MainPosts from './components/MainPosts'

const pageTitle = 'Board - Lime Society'

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
      <MainPosts />
      <ContainerGoTo href='/board/posts'>Go to Posts</ContainerGoTo>
    </>
  )
}

export default Page
