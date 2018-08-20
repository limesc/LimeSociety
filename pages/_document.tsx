import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    // @ts-ignore
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    const { lang, bodyClass, bodyId } = this.props.__NEXT_DATA__.props.pageProps
    return (
      <html lang={lang || 'en'}>
        <Head>
          <link rel='stylesheet' href='/_next/static/style.css' />
        </Head>
        <body id={bodyId} className={bodyClass}>
          <Main />
          <div id='__modal' />
          <NextScript />
        </body>
      </html>
    )
  }
}
