import * as bodyParser from 'body-parser'
import * as compression from 'compression'
import * as cookieParser from 'cookie-parser'
// @ts-ignore
import * as cookieSession from 'cookie-session'
import * as cors from 'cors'
import * as dotenv from 'dotenv'
import * as express from 'express'
import * as helmet from 'helmet'
import * as morgan from 'morgan'

dotenv.config()

const port = (parseInt(process.env.API_PORT, 10) || 3001)
const dev = process.env.NODE_ENV !== 'production'

const sessionSecret = process.env.SESSION_SECRET || 'development'
const sessionMaxAge = Number(process.env.SESSION_MAX_AGE || 60000 * 60 * 24 * 7)

// express

const expressApp = express()

if (!dev) {
  expressApp.use(compression())
} else {
  expressApp.use(morgan('dev'))
}

expressApp.use(cors({ credentials: true, origin: true }))
expressApp.use(helmet())

expressApp.use(cookieParser())

expressApp.use(bodyParser.json())
expressApp.use(bodyParser.urlencoded({ extended: true }))

expressApp.use(cookieSession({
  name: 'session',
  secret: sessionSecret,
  secure: false,
  httpOnly: false,
  maxAge: sessionMaxAge
}))

expressApp.set('trust proxy', 'loopback')

// static

expressApp.use('/uploads', express.static('./uploads'))

expressApp.listen(port, (err) => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})
