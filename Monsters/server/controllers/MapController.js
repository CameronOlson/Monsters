import { mapsService } from '../services/MapsService'
import BaseController from '../utils/BaseController'

export class MapController extends BaseController {
  constructor() {
    super('api/maps')
    this.router
      .get('', this.getMaps)
      .post('', this.createMap)
      .delete('/:mapId', this.removeMap)
      // .delete('', this.removeAll)
  }

  async getMaps(req, res, next) {
    try {
      const maps = await mapsService.getMaps(req.query)
      res.send(maps)
    } catch (error) {
      next(error)
    }
  }

  async createMap(req, res, next) {
    try {
      const map = await mapsService.createMap(req.body)
      res.send(map)
    } catch (error) {
      next(error)
    }
  }

  async removeMap(req, res, next) {
    try {
      const map = await mapsService.removeMap(req.params.mapId)
      res.send(map)
    } catch (error) {
      next(error)
    }
  }
  // async removeAll(req, res, next) {
  //   try {
  //     const tokens = await tokensService.removeAll()
  //     res.send(tokens)
  //   } catch (error) {
  //     next(error)
  //   }
  // }
}
