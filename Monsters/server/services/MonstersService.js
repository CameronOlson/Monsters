import { dbContext } from '../db/DbContext'

class MonstersService {
  async getMonsters(query) {
    const monsters = await dbContext.Monsters.find(query)
    return monsters
  }

  async getMonstersBySearch(query) {
    const monsters = await dbContext.Monsters.find(query)
    return monsters
  }
}
export const monstersService = new MonstersService()
