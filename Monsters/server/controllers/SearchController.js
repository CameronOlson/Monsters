import { userMonstersService } from '../services/UserMonstersService'
import BaseController from '../utils/BaseController'
export class SearchController extends BaseController {
  constructor() {
    super('https://api.open5e.com/monsters/?type=')
    this.router
      .get('', this.getMonstersByType)
  }

  async getMonstersByTyp(req, res, next) {
    try {
      const monsters = await userMonstersService.getMonstersBySearch(req.query)
      res.send(monsters)
    } catch (error) {
      next(error)
    }
  }

  async getMonstersByType(req, res, next) {
    try {
      const regex = new RegExp(req.query.search, 'i')

      const projects = await userMonstersService.getMonstersBySearch(regex)

      res.send(projects)
    } catch (error) {
      next(error)
    }
  }
}
