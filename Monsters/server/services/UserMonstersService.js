import { dbContext } from '../db/DbContext'

class UserMonstersService {
  async createMonster(monsterData) {
    const foundMonster = await dbContext.UserMonsters.findOne({ slug: monsterData.slug })
    if (!foundMonster) {
      const monster = await dbContext.UserMonsters.create(monsterData)
      return monster
    } return foundMonster
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

  async getMonstersByProfileId(profileId) {
    const monsters = await dbContext.UserMonsters.find({ creatorId: profileId })
    return monsters
  }
}
export const userMonstersService = new UserMonstersService()
