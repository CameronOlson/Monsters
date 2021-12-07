import { userMonstersService } from '../services/UserMonstersService'
import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController'
export class UserMonsterController extends BaseController {
  constructor() {
    super('api/monsters')
    this.router
      .get('', this.getMonsters)
      .get('/:monsterId', this.getMonsterById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createMonster)
      .put('/:monsterId', this.editMonster)
      .delete('/:monsterId', this.deleteMonster)
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
      // req.body.creatorId = userInfo.id
      const monster = await userMonstersService.createMonster(req.body)
      res.send(monster)
    } catch (error) {
      next(error)
    }
  }

  async editMonster(req, res, next) {
    try {
      const monster = await userMonstersService.editMonster(req.params.bugId, req.userInfo.id, req.body)
      res.send(monster
      )
    } catch (error) {
      next(error)
    }
  }

  async deleteMonster(monsterId, userId) {

  }
}
