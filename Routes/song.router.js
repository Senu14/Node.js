// Importerer dependencies
import express from 'express'
import SongController from '../Controllers/song.controller.js'

// Deklarerer Express Router Object
const SongRouter = express.Router()
// Deklarerer controller instans
const controller = new SongController()

// Endpoint - List 
SongRouter.get('/song', (req, res) => {controller.list(req, res)
	console.log('Liste: Kalder /song med GET')
	
})

// Endpoint - Details 
SongRouter.get('/song/:id([0-9]*)', (req, res) => {controller.details(req, res)
	console.log('Detaljer: Kalder /song med GET')
	
})

// Endpoint - Create
SongRouter.post('/song', (req, res) => {controller.create(req, res)
	console.log('Opret: Kalder /song med POST')
	
})

// Endpoint - Update
SongRouter.put('/song', (req, res) => {controller.update(req, res)
	console.log('Opdater: Kalder /song med PUT')
	
})

// Endpoint - Delete
SongRouter.delete('/song/:id([0-9]*)', (req, res) => {controller.delete(req, res)
	console.log('Slet: Kalder /song med DELETE')
	
})

export default SongRouter