import express from 'express'
import SongController from '../Controllers/song.controller.js'

const router = express.Router()
const controller = new SongController()

// List
router.get('/song', (req, res) => {
	console.log('Liste: Kalder /song med GET')
	// res.send('Hello World')
     controller.list(req, res)
})

// Details
router.get('/song/:id([0-9]*)', (req, res) => {
	console.log('Detaljer: Kalder /song med GET')
	controller.details(req, res)
})

// Create
router.post('/song', (req, res) => {
	console.log('Opret: Kalder /song med POST')
	controller.create(req, res)
})

// Update
router.put('/song', (req, res) => {
	console.log('Opdater: Kalder /song med PUT')
})

// Delete
router.delete('/song/:id([0-9]*)', (req, res) => {
	console.log('Slet: Kalder /song med DELETE')
})

export { router }