import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class EncountersService{

  async getEncountersByProfile(profileId){
    const res = await api.get('api/profiles/' + profileId + '/encounters/')
    logger.log('get encounters by profile id res,', res.data)
    AppState.encounters = res.data
  }

  async createEncounter(data){
    const res = await api.post('api/encounters', data)
    logger.log('create encounter res,', res.data)
    AppState.encounters.push(res.data)
  }
  async createEncounterMonster(body) {

    const res = await api.post('api/encounterMonsters', body)
    AppState.encounterMonsters = res.data
    logger.log("This is the APPSTATE.encounterMonsters",AppState.encounterMonsters )
  }
  async getEncounterById(profileId){
    const res = await api.get('api/encounters/' + profileId)
    logger.log('this is the encounter', res.data)
    AppState.encounter = res.data
  }
  async getMonstersByEncounterId(encounterId){
    
    const res = await api.get('api/encounters/'+ encounterId + '/monsters')
    logger.log('encounter monsters res', res.data)
    AppState.encounterMonsters = res.data
  }

}

export const encountersService = new EncountersService()