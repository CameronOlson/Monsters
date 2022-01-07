import axios from "axios"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

const userMonstersApi = axios.create({
  baseURL: 'http://localhost:3000/api/monsters'
})
class UserMonsterService {
  async getUserMonsters(){
    debugger
    const res = await api.get('api/monsters')
    logger.log('this is the userMonsters', res.data)
    AppState.userMonsters = res.data
    logger.log('this is appState', AppState.userMonsters)
  }
  async createUserMonster(monsterData, profileId) {
    const res = await api.post('api/profiles/' + profileId + '/monsters', monsterData)
    logger.log('This is the created monster', res.data)
    AppState.userMonsters.push(res.data)

  }
  async getUserMonstersByProfileId(profileId){
    logger.log(AppState.userMonsters)
    const res = await api.get('api/profiles/' + profileId + '/monsters')
    logger.log('This is the profile monsters', res.data)
    AppState.userMonsters = res.data
  }
}
export const userMonstersService = new UserMonsterService()