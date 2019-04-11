import NextSeo from 'next-seo'
import React from 'react'

function Page () {
  return (
    <>
      <NextSeo
        config={{
          title: '학습 - 성진'
        }}
      />
      <h1>hello world</h1>
      <ul>
        <li>
          <a href='./study-j/001'>001</a>
        </li>
        <li>
          <a href='./study-j/002'>002</a>
        </li>
      </ul>
    </>
  )
}

export default Page
