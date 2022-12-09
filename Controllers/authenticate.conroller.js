 import UserModel from "../Models/user.model.js"
 import dotenv from 'dotenv'
 dotenv.config()
//  import { router } from "../Routes/authenticate.router.js"
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'


// /**
//  * Authenticate Controller
//  * Klasse til godkendelse af login
//  */
 class AuthenticateController {
     const { username, password } = req.body
     if(username && password) {
    
     } eles {
          res.sendStatues(403)
     }
}


// 		// Destructure assignment af brugernavn og password fra request body
// 		
// 		// Hvis form data er sat
// 		
// 			// Henter id og password fra bruger i user db
// 			const userdata = await UserModel.findOne({
// 				attributes: ['id','password'],
// 				where: { email: username }
// 			})

// 			// Sammenligner krypteret version af form password med db password
// 			bcrypt.compare(password, userdata.password, (err, result) => {
// 				if(result) {
// 					// Generer json web token hvis bruger er godkendt
// 					const token = jwt.sign(userdata.id,process.env.PRIVATE_KEY)
// 					// Returnerer token til browser
// 					res.json({access_token: token})
// 				} else {
// 					// Sender status unauthorized
// 					res.sendStatus(401)
// 				}
// 			})
// 		} else {
// 			// Sender status forbidden
// 			res.sendStatus(403)
// 		}
// 	}
// }


 export default AuthenticateController