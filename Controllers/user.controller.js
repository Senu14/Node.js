import UserModel from '../model/user.model.js'
 
class UserController {
    list = async  (req, res) => {
        console.log(req.query);
        let { sortkey, sortdir, limit, attributes } = req.query
        const order = [sortkey ? sortkey : 'id']
        order.push(sortdir || 'ASC')
        limit = parseInt(limit) || 1000
        const attr = attributes ? attributes.split(',') : new Array('id', 'firstname', 'lastname', 'email')
        console.log(attr);
 
 
        const result = await UserModel.findAll({
            attributes: attr,
            orderby: [order],
            limit: limit
        })
        res.json(result)
    }
 
    details = async (req, res) => {
        const { id } = req.params || 0
        const result = await UserModel.findOne({
            attributes: ['id', 'firstname', 'lastname', 'email', 'is_active', 'updatedAt', 'createdAt'],
            where: { id: id }
        })
        res.json(result)
    }
    create = async  (req, res) => {
        console.log(req.query);
        const {firstname, lastname, email, password } = req.body

        // Tjekker felt data
        if (firstname && lastname && email && password) {

            // Opretter record
            const model = await UserModel.create(req.body)
            // Sender nyt id json object
            res.json({ newId: model.id})
        }else{
             res.sedStatus(418)
        }
    }
      
}
 
export default UserController