import * as compression from 'compression'
import * as dotenv from 'dotenv'
import * as express from 'express'
import * as morgan from 'morgan'
import * as next from 'next'

dotenv.config()

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const forbiddenDirs = ['components', 'containers', 'templates']

const nextApp = next({ dev })
const nextRequestHandler = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  // express

  const expressApp = express()

  if (!dev) {
    expressApp.use(compression())
  } else {
    expressApp.use(morgan('dev', {
      skip: (req) => {
        if (req.url.startsWith('/_next/on-demand-entries-ping') ||
            req.url.startsWith('/_next/webpack')) {
          return true
        }
        return false
      }
    }))
  }

  expressApp.set('trust proxy', 'loopback')

  // pages

  expressApp.all('*', async (req, res) => {
    for (const forbiddenDir of forbiddenDirs) {
      if (req.originalUrl.includes(`/${forbiddenDir}/`) || req.originalUrl.endsWith(`/${forbiddenDir}`)) {
        res.statusCode = 404
        return nextApp.render(req, res, '/_error', {})
      }
    }

    return nextRequestHandler(req, res)
  })

  expressApp.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
}).catch(err => {
  console.log('An error occurred, unable to start the server')
  console.log(err)
})
