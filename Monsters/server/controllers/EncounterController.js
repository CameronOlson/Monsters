import { encountersService } from '../services/EncountersService'
import BaseController from '../utils/BaseController'

export class EncounterController extends BaseController {
  constructor() {
    super('api')
    this.router
      .get('/encounters', this.getEncounters)
      .get('/profiles/:profileId/encounters/', this.getEncountersByProfile)
      .get('/profiles/:profileId/encounters/:encounterId', this.getEncounterById)
      .put('/profiles/:profileId/encounters/:encounterId', this.editEncounter)
      .post('/profiles/:profileId/encounters', this.createEncounter)
      .delete('/profiles/:profileId/encounters/:encounterId', this.removeEncounter)
  }

  async getEncounters(req, res, next) {
    try {
      const encounters = await encountersService.getEncounters(req.query)
      res.send(encounters)
    } catch (error) {
      next(error)
    }
  }

  async getEncountersByProfile(req, res, next) {
    try {
      const encounters = await encountersService.getEncountersByProfileId(req.params.id)
      res.send(encounters)
    } catch (error) {
      next(error)
    }
  }

  async getEncounterById(req, res, next) {
    try {
      const encounter = await encountersService.getEncountersById(req.params.encounterId)
      res.send(encounter)
    } catch (error) {
      next(error)
    }
  }

  async editEncounter(req, res, next) {
    try {
      const encounter = await encountersService.editEncounter(req.params.encounterId, req.userInfo.id, req.body)
      res.send(encounter)
    } catch (error) {
      next(error)
    }
  }

  async createEncounter(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const encounter = await encountersService.createEncounter(req.body)
      res.send(encounter)
    } catch (error) {
      next(error)
    }
  }

  async removeEncounter(req, res, next) {
    try {
      const encounter = await encountersService.removeEncounter(req.params.encounterId, req.userInfo.id)
      res.send(encounter)
    } catch (error) {
      next(error)
    }
  }
}
