import { dbContext } from '../db/DbContext'

class TokensService {
  // async removeAll() {
  //   const tokens = await dbContext.Tokens.
  // }

  async removeToken(tokenId) {
    const token = await dbContext.Tokens.findById(tokenId)
    await token.delete()
    return token
  }

  async createToken(tokenData) {
    const token = await dbContext.Tokens.create(tokenData)
    return token
  }

  async getTokens(query = {}) {
    const tokens = await dbContext.Tokens.find(query)
    return tokens
  }
}
export const tokensService = new TokensService()
