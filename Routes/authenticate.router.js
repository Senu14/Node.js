import express from 'express'
import AuthenticateController from '../Controllers/authenticate.conroller.js';
const router = express.Router()

const controller = new AuthenticateController();

router.post('/login', (req, res) => { controller.login(req, res)})
router.get('/protected',(req, res) => {
     
})

export { router }