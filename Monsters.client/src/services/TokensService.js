const { AppState } = require("../AppState");
const { logger } = require("../utils/Logger");
const { api } = require("./AxiosService");

class TokensService {
  async postGoodToken(tokenData){
    logger.log(tokenData)
    const res = await api.post('api/tokens', tokenData)
    logger.log('this is the token res', res.data)
    AppState.maps.push(res.data)
  }
}