import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import bodyParser from 'body-parser'
import router from './routes'

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
)

app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static('public'))
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

//routes import
import userRouter from './routes/user.routes.js'


//routes declaration
app.use('/', router)


// http://localhost:8000/api/v1/users/register

export { app }
