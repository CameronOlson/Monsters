import axios from "axios"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"

const monstersApi = axios.create({
  baseURL: 'https://api.open5e.com/monsters/'
})

class MonstersService {

  async getMonsters() {
    const res = await monstersApi.get('')
    logger.log('this is Monsters for the project', res.data
    )
    AppState.monsters = res.data.results
    AppState.nextPage = res.data.next.slice(32)
    logger.log(AppState.nextPage)
  }

  async changePage(page){
    const res = await monstersApi.get('' + page)
    logger.log('change page res', res.data)
    AppState.monsters = res.data.results
    AppState.nextPage = res.data.next.slice(32)
    AppState.previousPage = res.data.previous.slice(32)
  }
}
export const monstersService = new MonstersService()