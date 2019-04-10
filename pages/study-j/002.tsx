import NextSeo from 'next-seo'
import React from 'react'

import ButtonAppBar from './components/ButtonAppBar'
import ContainedButtons from './components/ContainedButtons'

const pageTitle = '002 - 학습 - 성진'

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
        <ContainedButtons />
      </main>
    </>
  )
}

export default Page
