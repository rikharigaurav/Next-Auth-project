
import express from 'express'
import { RegisterUser } from '../controllers/user.controllers'


export default (router: express.Router) => {
  router.post('/register', RegisterUser)
}