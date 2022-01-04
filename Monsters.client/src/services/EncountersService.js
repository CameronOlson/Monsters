import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class EncountersService{

  async getEncountersByProfile(profileId){
    const res = await api.get('api/profiles/' + profileId + '/encounters/')
    logger.log('get encounters by profile id res,', res.data)
    AppState.encounters = res.data
  }

  async createEncounter(data, profileId){
    const res = await api.post('api/profiles/' + profileId + '/encounters', data)
    logger.log('create encounter res,', res.data)
    AppState.encounters.push(res.data)
  }

}

export const encountersService = new EncountersService()