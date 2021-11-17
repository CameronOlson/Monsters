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
    AppState.nextPage = res.data.next
    logger.log(AppState.nextPage)
  }

  async changePage(page){
    page.slice(32)
    const res = await monstersApi.get(page)
    logger.log('change page res', res.data)
    AppState.monsters = res.data.results
    AppState.nextPage = res.data.next
    AppState.previousPage = res.data.previous
  }
}
export const monstersService = new MonstersService()