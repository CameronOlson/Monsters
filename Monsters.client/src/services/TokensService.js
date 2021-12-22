import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class TokensService {
  async postGoodToken(tokenData){
    logger.log(tokenData)
    const res = await api.post('api/tokens', tokenData)
    logger.log('this is the token res', res.data)
    AppState.maps.push(res.data)
  }
  async getTokens(){
    const res = await api.get('api/tokens')
    logger.log('this is the tokens res', res.data)
    AppState.tokens = res.data
  }
}
export const tokensService = new TokensService()