import knex from '../database/connection'
import { Request, Response} from 'express'

class ItemsController {
  async index(request: Request, response: Response) {
    const trx = await knex.transaction()

    const items = await trx('items').select('*')
  
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.1.11:3333/uploads/${item.image}`,
      }
    })

    trx.commit()
    return response.json(serializedItems)
  }

  async create(request: Request, response: Response) {
    
  }
}

export default ItemsController