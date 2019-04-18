import NextSeo from 'next-seo'
import React from 'react'

import AppBar from '../components/AppBar'
import Header from '../components/Header'
import MainPosts from './components/MainPosts'

const pageTitle = 'Board - Lime Society'
const headerName = '라임 게시판'
const sub = '라임 소사이어티 게시판 입니다.'

function Page () {
  return (
    <>
      <NextSeo
        config={{
          title: pageTitle
        }}
      />
      <AppBar />
      <Header name={headerName} subname={sub} />
      <MainPosts />
    </>
  )
}

export default Page
