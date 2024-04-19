import { Router, Request, Response } from 'express'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import config from './config'

import userRouter from './route/user.route'

const app = express()

app.use(
  cors({
    credentials: true,
    origin: config.CLIENT_URL,
  })
)
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

app.use('/', userRouter)

export { app }
