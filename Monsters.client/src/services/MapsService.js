import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class MapsService {

  async postMap(mapData){
   
    logger.log(mapData)
    const res = await api.post('api/maps', mapData)
    logger.log('this is the map res', res.data)
    AppState.maps.push(res.data)
  }
  async getMaps(){
    const res = await api.get('api/maps')
    logger.log('this the all map res', res.data)
    AppState.maps = res.data
}

}
export const mapsService = new MapsService()