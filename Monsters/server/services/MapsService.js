import { dbContext } from '../db/DbContext'

class MapsService {
  // async removeAll() {
  //   const tokens = await dbContext.Tokens.
  // }

  async removeMap(mapId) {
    const map = await dbContext.Maps.findById(mapId)
    await map.delete()
    return map
  }

  async createMap(mapData) {
    const map = await dbContext.Maps.create(mapData)
    return map
  }

  async getMaps(query = {}) {
    const Maps = await dbContext.Maps.find(query)
    return Maps
  }
}
export const mapsService = new MapsService()
