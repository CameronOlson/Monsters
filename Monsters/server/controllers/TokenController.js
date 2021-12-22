import { Auth0Provider } from '@bcwdev/auth0provider'
import { tokensService } from '../services/TokensService'
import BaseController from '../utils/BaseController'

export class TokenController extends BaseController {
  constructor() {
    super('api/tokens')
    this.router
      .get('', this.getTokens)
      .get('/:tokenId', this.getById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createToken)
      .delete('/:tokenId', this.removeToken)
      // .delete('', this.removeAll)
  }

  async getTokens(req, res, next) {
    try {
      const tokens = await tokensService.getTokens(req.query)
      res.send(tokens)
    } catch (error) {
      next(error)
    }
  }

  async createToken(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const token = await tokensService.createToken(req.body)
      res.send(token)
    } catch (error) {
      next(error)
    }
  }

  async removeToken(req, res, next) {
    try {
      const token = await tokensService.removeToken(req.params.tokenId)
      res.send(token)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const token = await tokensService.getById(req.params.tokenId)
      res.send(token)
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
