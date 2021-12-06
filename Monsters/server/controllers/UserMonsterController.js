import { userMonstersService } from '../services/UserMonstersService'
import BaseController from '../utils/BaseController'
export class UserMonsterController extends BaseController {
  constructor() {
    super('api/monsters')
    this.router
      .get('', this.getMonsters)
      .get('/:monsterId', this.getMonsterById)
      .post('', this.createMonster)
  }

  async getMonsters(req, res, next) {
    try {
      const monsters = await userMonstersService.getMonsters(req.query)
      res.send(monsters)
    } catch (error) {
      next(error)
    }
  }

  async getMonsterById(req, res, next) {
    try {
      const monster = await userMonstersService.getMonsterById(req.params.monsterId)
      res.send(monster)
    } catch (error) {
      next(error)
    }
  }

  async createMonster(req, res, next) {
    try {
      req.body.creatorId
    } catch (error) {
      next(error)
    }
  }
}
