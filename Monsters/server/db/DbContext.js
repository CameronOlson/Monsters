import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { UserMonsterSchema } from '../models/UserMonster'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  UserMonsters = mongoose.model('Monster', UserMonsterSchema);
}

export const dbContext = new DbContext()
