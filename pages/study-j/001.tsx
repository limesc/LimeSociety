import NextSeo from 'next-seo'
import React from 'react'

import ButtonAppBar from './components/ButtonAppBar'

const pageTitle = '001 - 학습 - 성진'

function Page () {
  return (
    <>
      <NextSeo
        config={{
          title: pageTitle
        }}
      />
      <ButtonAppBar />
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  )
}

export default Page
