import NextSeo from 'next-seo'
import React from 'react'

import AppBar from '../../components/AppBar'
import Header from '../components/Header'
import Posts from './posts'

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
    </>
  )
}

export default Page
