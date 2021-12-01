import axios from "axios"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"

const monstersApi = axios.create({
  baseURL: 'https://api.open5e.com/monsters/'
})

const searchApi = axios.create({
  baseURL: 'https://api.open5e.com/monsters'
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

  async getMonstersBySearch(query) {
    const res = await searchApi.get('?type=' + query)
    logger.log('this is the res query', res)
    AppState.monsters = res.data.results
  }
  async getMonstersByName(query) {
    const mySentence = query;
    const words = mySentence.split(" ");
    
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
    }



   

    
    const res = await searchApi.get('?name=' + words.join('+'))
    logger.log(res.request.responseURL)
    AppState.monsters = res.data.results
  }


  async changePage(page){
    AppState.monsters = []
    page.slice(32)
    const res = await monstersApi.get(page)
    logger.log('change page res', res.data)
    AppState.monsters = res.data.results
    AppState.nextPage = res.data.next
    AppState.previousPage = res.data.previous
  }
}
export const monstersService = new MonstersService()