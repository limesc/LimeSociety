import { SingletonRouter, withRouter } from 'next/router'
import React from 'react'
import { Container } from 'reactstrap'

import 'styles/limesociety/limesociety.scss'

interface ErrorProps {
  router?: SingletonRouter,
  statusCode: number
}

// @ts-ignore
const Error = withRouter(class extends React.Component<ErrorProps> {
  static getInitialProps ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  componentWillMount () {
    if (typeof document !== 'undefined') {
      document.body.className = ''
    }
  }

  render () {
    const { router, statusCode } = this.props
    let response

    switch (statusCode) {
      case 200: // Also display a 404 if someone requests /_error explicitly
      case 404:
        response = (
          <div>
            <Container className='pt-5 text-center'>
              <h1 className='display-4'>Page Not Found</h1>
              <p>The page <strong>{ router.pathname }</strong> does not exist.</p>
              <p><a href='/'>Home</a></p>
            </Container>
          </div>
        )
        break
      case 500:
        response = (
          <div>
            <Container className='pt-5 text-center'>
              <h1 className='display-4'>Internal Server Error</h1>
              <p>An internal server error occurred.</p>
            </Container>
          </div>
        )
        break
      default:
        response = (
          <div>
            <Container className='pt-5 text-center'>
              <h1 className='display-4'>HTTP { statusCode } Error</h1>
              <p>
                An <strong>HTTP { statusCode }</strong> error occurred while
                trying to access <strong>{ router.pathname }</strong>
              </p>
            </Container>
          </div>
        )
    }

    return response
  }
})

export default Error
