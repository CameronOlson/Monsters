import { encountersService } from '../services/EncountersService'
import BaseController from '../utils/BaseController'

export class EncounterMonsterController extends BaseController {
  constructor() {
    super('api')
    this.router
      .get('/profiles/:id/encounters/:encounterId/monsters', this.getMonstersByEncounterId)
      .get('/profiles/:id/encounters/:encounterId/monsters/:monsterId', this.getMonsterById)
      .post('/encounterMonsters', this.createEncounterMonster)
  }

  async getMonstersByEncounterId(req, res, next) {
    try {
      const monsters = await encountersService.getMonstersByEncounterId(req.params.encounterId)
      res.send(monsters)
    } catch (error) {
      next(error)
    }
  }

  async getMonsterById(req, res, next) {
    try {
      const monster = await encountersService.getMonstersById(req.params.monsterId)
      res.send(monster)
    } catch (error) {
      next(error)
    }
  }

  async createEncounterMonster(req, res, next) {
    try {
      // req.body.encounterId = req.userInfo.encounterId
      const encounterMonster = await encountersService.createEncounterMonster(req.body)
      res.send(encounterMonster)
    } catch (error) {
      next(error)
    }
  }
}
