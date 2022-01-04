import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
import { userMonstersService } from './UserMonstersService'

class EncountersService {
  async getEncounters(query = {}) {
    const encounters = await dbContext.Encounters.find(query)
    if (!encounters) {
      throw new BadRequest('no encounters')
    }
    return encounters
  }

  async createEncounterMonster(body) {
    const foundEncounterMonster = await dbContext.EncounterMonsters.findOne({ monsterId: body.monsterId, encounterId: body.encounterId })
    if (!foundEncounterMonster) {
      const encounterMonster = await dbContext.EncounterMonsters.create(body)
      await encounterMonster.populate('monster')
      await encounterMonster.populate('encounter')
      return encounterMonster
    }
    throw new BadRequest('already taken')
  }

  async getMonstersById(monsterId) {
    const monster = await userMonstersService.getMonsterById(monsterId)
    return monster
  }

  async removeEncounter(encounterId, userId) {
    const encounter = await this.getEncountersById(encounterId)
    if (userId !== encounter.userId.toString()) {
      throw new Forbidden("you aren't allowed to do that")
    }
    await encounter.delete()
    return encounter
  }

  async getMonstersByEncounterId(encounterId) {
    const monsters = await dbContext.EncounterMonsters.find({ encounterId })
    return monsters
  }

  async createEncounter(encounterData) {
    const encounter = await dbContext.Encounters.create(encounterData)
    return encounter
  }

  async editEncounter(encounterId, userId, encounterData) {
    const encounter = await this.getEncountersById(encounterId)
    if (userId !== encounter.creatorId.toString()) {
      throw new Forbidden("you can't dp that")
    }
    encounter.name = encounterData.name || encounter.name
    encounter.desc = encounterData.desc || encounter.desc
    await encounter.save()
    return encounter
  }

  async getEncountersById(encounterId) {
    const encounter = await dbContext.Encounters.findById(encounterId)
    return encounter
  }

  async getEncountersByProfileId(id) {
    const encounters = await dbContext.Encounters.find({ creatorId: id })
    return encounters
  }
}
export const encountersService = new EncountersService()
