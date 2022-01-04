import { userMonstersService } from '../services/UserMonstersService'
import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController'
export class UserMonsterController extends BaseController {
  constructor() {
    super('api')
    this.router
      .get('/monsters', this.getMonsters)
      .get('/monsters/:monsterId', this.getMonsterById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/profiles/:profileId/monsters', this.getMonstersByProfileId)
      .post('/profiles/:profileId/monsters', this.createMonster)
      .put('/monsters/:monsterId', this.editMonster)
      .delete('/monsters/:monsterId', this.deleteMonster)
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
      req.body.creatorId = req.userInfo.id
      const monster = await userMonstersService.createMonster(req.body)
      res.send(monster)
    } catch (error) {
      next(error)
    }
  }

  async editMonster(req, res, next) {
    try {
      const monster = await userMonstersService.editMonster(req.params.monsterId, req.userInfo.id, req.body)
      res.send(monster
      )
    } catch (error) {
      next(error)
    }
  }

  async getMonstersByProfileId(req, res, next) {
    try {
      const monsters = await userMonstersService.getMonstersByProfileId(req.params.profileId)
      res.send(monsters)
    } catch (error) {
      next(error)
    }
  }

  async deleteMonster(monsterId, userId) {

  }
}
