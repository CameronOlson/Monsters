import { dbContext } from '../db/DbContext'

class UserMonstersService {
  async createMonster(monsterData) {
    const monster = await dbContext.UserMonsters.create(monsterData)
    return monster
  }

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

  async editMonster(monsterId, userId, monsterData) {
    const monster = await this.getMonsterById(monsterId)
    monster.name = monsterData.name || monster.name
    monster.size = monsterData.size || monster.size
    monster.type = monsterData.type || monster.type
    monster.armor_class = monsterData.armor_class || monster.armor_class
    monster.hp = monsterData.hp || monster.hp
    await monster.save()
    return monster
  }
}
export const userMonstersService = new UserMonstersService()
