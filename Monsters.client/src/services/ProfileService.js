import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ProfileService {
async getProfileById(profileId){
  
  const res = await api.get('api/profiles/' + profileId)
  logger.log('this the profile', res.data)
  AppState.profile = res.data
}
}
export const profileService = new ProfileService()