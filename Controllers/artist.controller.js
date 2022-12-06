/// Importer dependencies
import { request, response } from 'express';
import db from '../Config/mysql.config.js'

/**
 * Controller for songs
 */
class ArtistController {
	constructor() {
		console.log("Artist Controller is fired");
	}

	list = (request, response) => {
		let { sortkey, sortdir, limit, attributes } = request.query
		sortkey = sortkey ? sortkey : 'id'
		sortdir = sortdir ? sortdir : 'ASC'
		limit = limit ? `LIMIT ${limit}` : ''
		attributes = attributes ? attributes : 'id, name'

		const sql = `SELECT ${attributes} 
						FROM artist 
						ORDER BY ${sortkey} ${sortdir} 
						${limit}`
		console.log(sql);
		db.query(sql, (err, result) => {
			if(err) {
				console.error(err)
			} else {
				response.json(result)
			}
		})
	}
	get = async (req, res) => {
          const result = await model.get(req, res);
          res.send(result);
     }
	create = (request, response) => {
		let { name } = request.body;
  
		const sql = `INSERT INTO 
					 artist (name) 
					 VALUES (?)`
		db.query(sql, [name], (err, result) => {
		  if(err) {
		    console.error(err)
		  } else {
		    console.log('Artist oprettet')
		    response.json(result);
		  }
	   })
	 }
	 update = (req, res) => {
		let { name, id } = req.body;

          const sql = `UPDATE artist SET 
		            name = ?
		            WHERE id = ?`
		db.query(sql, [name,id], (err, result) => {
			if(err) {
				console.error(err)
			}else{
				console.log('Artist update')
				res.json(result);
			}
		})
         
     }
	delete = (req, res) => {
		const id = (req.params.id || 0)
          const sql = `DELETE  FROM artist WHERE id = ?`
		db.query(sql, [id], (err, result) => {
			if(err) {
				console.error(err)
			}else{
				res.sendStatus(200);
			}
		})
         
     }
	
	 }
	
	 




export default  ArtistController