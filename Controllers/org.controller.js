import OrgModel from '../model/org.model.js'
import db from '../Config/mysql.config.js'
 
class OrgController {
    list = async  (req, res) => {
        console.log(req.query);
        let { sortkey, sortdir, limit, attributes } = req.query
        const order = [sortkey ? sortkey : 'id']
        order.push(sortdir || 'ASC')
        limit = parseInt(limit) || 1000
        const attr = attributes ? attributes.split(',') : new Array('id', 'title')
        console.log(attr);
 
 
        const result = await OrgModel.findAll({
            attributes: attr,
            orderby: [order],
            limit: limit
        })
        res.json(result)
    }
 
    details = async (req, res) => {
        const { id } = req.params || 0
        const result = await OrgModel.findOne({
            attributes: ['id', 'title', 'address', 'zipcode', 'city', 'country', 'updatedAt', 'createdAt'],
            where: { id: id }
        })
        res.json(result)
    }
    create = async  (req, res) => {
        console.log(req.query);
        const {title, address, zipcode, city, country } = req.body

        // Tjekker felt data
        if (title && address && zipcode && city) {

            // Opretter record
            const model = await OrgModel.create(req.body)
            // Sender nyt id json object
            res.json({ newId: model.id})
        }else{
             res.sedStatus(418)
        }
    }
    update = async (req, res) => {
        const { id } = req.params || 0
        
        const {title, address, zipcode, city, country } = req.body

        // Tjekker felt data
        if (id && title && address && zipcode && city && country) {

            // Opretter record
            const model = await OrgModel.update(req.body, {
                where:{ id: id },
                individualHooks: true
            })
            // Sender nyt id json object
            res.json({ 
                msg:'record update'
            })
        }else{
             res.sendStatus(418)
        }
    } 
    delete = (req, res) => {
		const id = (req.params.id || 0)
          const sql = `DELETE FROM org WHERE id = ${ id }`
		db.query(sql, [id], (err, result) => {
			if(err) {
				console.error(err)
			}else{
				res.sendStatus(200);
			}
       })
    } 
    
} 

 
export default OrgController