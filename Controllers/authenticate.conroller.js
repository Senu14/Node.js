 import UserModel from '../model/user.model.js'
 import dotenv from 'dotenv'
 dotenv.config()
 import { router } from "../Routes/authenticate.router.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



//Authenticate Controller
 class AuthenticateController {
     login = async (req, res) => {
      const { username, password } = req.body
          if(username && password) {
             const userdata = await UserModel.findOne({
               attributes: ['id','password'],
               where: { email: username }
             })

     bcrypt.compare(password, userdata.password, (err, result) => {
          if(result) {
               // Generate json web token
               const token = jwt.sign(userdata.id,process.env.PRIVATE_KEY)
                res.json({access_token: token});
          } else { 
          res.sendStatus(401)
                
          }
     })

} else {
     res.sendStatus(403)
     }
}      

} 

 export default AuthenticateController