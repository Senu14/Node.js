import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

mysql.createConnection({
     host: process.env.DBHOST, 
})