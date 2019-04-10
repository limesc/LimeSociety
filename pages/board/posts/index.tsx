import NextSeo from 'next-seo'
import React from 'react'

import AppBar from '../../components/AppBar'
import ContainerGoTo from '../../components/ContainerGoTo'
import Header from '../components/Header'
import Posts from './Posts'

const pageTitle = 'Board/Posts - Lime Society'

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
      <Posts />
      <ContainerGoTo href='#top'>Go To Top</ContainerGoTo>
    </>
  )
}

export default Page
