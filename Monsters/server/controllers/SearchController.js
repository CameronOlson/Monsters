import { monstersService } from '../services/MonstersService'
import BaseController from '../utils/BaseController'
export class SearchController extends BaseController {
  constructor() {
    super('https://api.open5e.com/monsters/?challenge_rating=&armor_class=&type=')
    this.router
      .get('', this.getMonstersByType)
  }

  async getMonstersByTyp(req, res, next) {
    try {
      const monsters = await monstersService.getMonstersBySearch(req.query)
      res.send(monsters)
    } catch (error) {
      next(error)
    }
  }

  async getMonstersByType(req, res, next) {
    try {
      const regex = new RegExp(req.query.search, 'i')
      console.log(regex)
      const projects = await monstersService.getMonstersBySearch(regex)

      res.send(projects)
    } catch (error) {
      next(error)
    }
  }
}
