// Import af dependencies
import express from 'express'
import dotenv from 'dotenv';
import SongRouter from './Routes/song.router.js'
import ArtistRouter from './Routes/artist.router.js'
import UserRouter from './Routes/user.router.js'
import InitRouter from './Routes/init.router.js'


// Kalder dotenv modul
dotenv.config();
// Deklarerer port
const port = process.env.PORT || 3000
// Deklarerer app objekt
const app = express()

// App settings to provide access to request body data
app.use(express.urlencoded({ extended: true }))

// Route til forside
app.get('/', (req, res) => {
	res.send('Hello world')
})

// Router bundles
app.use(SongRouter)
app.use(ArtistRouter)
app.use(UserRouter)
app.use(InitRouter)

// Run server
app.listen(port, () => {
	console.log(`Webserver running on http://localhost:${port}`);
})