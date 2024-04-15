import express from 'express'
import http from 'http'

import { app }  from './app.js'

const PORT = 3000;

const server = http.createServer(app);

app.listen(PORT, () => {
  console.log(`⚙️ Server is running at port : ${PORT}`)
})
  
