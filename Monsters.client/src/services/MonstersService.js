import axios from "axios"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"

const monstersApi = axios.create({
  baseURL: 'https://api.open5e.com/monsters/'
})
const spellsApi = axios.create({
  baseURL: ''
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
    AppState.monsters = []
    const res = await monstersApi.get('?type=' + query)
    logger.log('this is the res query', res)
    AppState.monsters = res.data.results
  }
  async getMonstersByName(query) {
    AppState.monsters = []
    const words = query.split(" ");
    
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
    }
    
    const res = await monstersApi.get('?name=' + words.join('+'))
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
  async getMonstersByChallengeRating(rating){
    AppState.monsters = []
    const res = await monstersApi.get('?challenge_rating=' + rating)
    logger.log('challenge rating res', res.data.results)
    AppState.monsters = res.data.results
    AppState.nextPage = res.data.next
  }

  async getHighChallengeRatingMonsters(){
    AppState.monsters = []
    for (let rating = 21; rating <= 30; rating++){
      const res = await monstersApi.get('?challenge_rating=' + rating)
      logger.log('high CR monsters res', res.data.results)
      AppState.monsters.push(...res.data.results)
    }
  }
  async filterByType(type){
    AppState.monsters = []
    const res = await monstersApi.get('?type=' + type)
    logger.log('filter by type res', res.data)
    AppState.monsters = res.data.results
    AppState.nextPage = res.data.next
  }

  async getMonsterSpells(spells){
  
  
  AppState.spells = []
   for(let i = 0; i< spells.length; i++){
     let word = spells[i]
     const res = await spellsApi.get(word)
     logger.log(res)
     AppState.spells.push(res.data)
    }
  
  
  }
}
export const monstersService = new MonstersService()