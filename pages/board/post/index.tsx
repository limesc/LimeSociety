import NextSeo from 'next-seo'
import React from 'react'

import AppBar from '../../components/AppBar'
import Header from '../../components/Header'

import Comments from './components/comments'
import Post from './components/post'

const pageTitle = 'Board/Post - Lime Society'
const headerName = '라임 게시판'
const sub = '라임 소사이어티 게시판 본문입니다.'

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
      <Post />
      <Comments />
    </>
  )
}

export default Page
