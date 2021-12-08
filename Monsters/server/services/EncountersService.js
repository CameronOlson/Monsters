import { dbContext } from '../db/DbContext'
import { Forbidden } from '../utils/Errors'

class EncountersService {
  async removeEncounter(encounterId, userId) {
    const encounter = await this.getEncountersById(encounterId)
    if (userId !== encounter.userId.toString()) {
      throw new Forbidden("you aren't allowed to do that")
    }
    await encounter.delete()
    return encounter
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
    const encounters = await dbContext.Encounters.find({ id })
    return encounters
  }
}
export const encountersService = new EncountersService()
