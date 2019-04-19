import NextSeo from 'next-seo'
import React from 'react'

import AppBar from '../../components/AppBar'
import Header from '../../components/Header'
import Posts from './posts'

const pageTitle = 'Board/Posts - Lime Society'
const headerName = '라임 게시판'
const sub = '라임 소사이어티 게시판 목록입니다.'

function Page () {
  return (
    <>
      <NextSeo
        config={{
          title: pageTitle
        }}
      />
      <AppBar />
      <Header title={headerName} content={sub} />
      <Posts />
    </>
  )
}

export default Page
