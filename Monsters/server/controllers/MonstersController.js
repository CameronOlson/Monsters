import { monstersService } from '../services/MonstersService'
import BaseController from '../utils/BaseController'
export class MonstersController extends BaseController {
  constructor() {
    super('https://api.open5e.com/monsters/')
    this.router
      .get('', this.getMonsters)
  }

  async getMonsters(req, res, next) {
    try {
      const monsters = await monstersService.getMonsters(req.query)
      res.send(monsters)
    } catch (error) {
      next(error)
    }
  }
}
