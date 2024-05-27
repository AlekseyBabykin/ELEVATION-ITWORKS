import { Router } from 'express'
import AuthController from './authController'

const router = Router()
const authController = new AuthController()

router.post('/registration', authController.registration)
router.post('/login', authController.login)
router.get('/builds', authController.getBuilds)
router.get('/a', (req, res) => {
  console.log('kdshjd'), res.json('hello')
})

export default router
