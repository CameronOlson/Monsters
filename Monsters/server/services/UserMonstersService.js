import { dbContext } from '../db/DbContext'

class UserMonstersService {
  async getMonsterById(id) {
    const monster = await dbContext.UserMonsters.findById(id)
    return monster
  }

  async getMonsters(query) {
    const monsters = await dbContext.UserMonsters.find(query)
    return monsters
  }

  async getMonstersBySearch(query) {
    const monsters = await dbContext.UserMonsters.find(query)
    return monsters
  }
}
export const userMonstersService = new UserMonstersService()
