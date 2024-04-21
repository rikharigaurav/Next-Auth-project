import { ExpressAuth } from '@auth/express'
import GitHub from '@auth/express/providers/github'
import express from 'express'

const app = express()

// If app is served through a proxy, trust the proxy to allow HTTPS protocol to be detected
app.set('trust proxy', true)
app.use('/auth/*', ExpressAuth({ providers: [GitHub] }))
