import axios from "axios"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"

const userMonstersApi = axios.create({
  baseURL: 'http://localhost:3000/api/monsters'
})
class UserMonsterService {
  async getUserMonsters(){
    const res = await userMonstersApi.get('')
    logger.log('this is the userMonsters', res.data)
    AppState.userMonsters = res.data
    logger.log('this is appState', AppState.userMonsters)
  }
}
export const userMonstersService = new UserMonsterService()