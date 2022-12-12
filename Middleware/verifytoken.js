import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

/**
 * Function constant to check the token with
 * @param {*} req Request Object
 * @param {*} res Response Object
 * @param {*} next Next Method - used to forward a request with
 */

const verifyToken = (req, res, next) => {
// Gets the authorization header

     const bearerHeder = req.headers['authorization']
// If header exists...

     if (bearerHeder) {
// Separates token from Bearer string

     const access_token = bearerHeder.substring(7)
// Verifies token with jwt and private key

        jwt.verify(access_token, process.env.PRIVET_KEY, (err, result) => {
if (!err) {
     // Call next method if true
     next()
}else{ 
     // Report unauthorized if false
     res.sendStatus(403)
      }
   })

}else{
     res.sendStatus(401)
  }
}
export default verifyToken
