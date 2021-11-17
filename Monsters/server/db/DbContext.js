import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { MonsterSchema } from '../models/Monster'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  Monsters = mongoose.model('Monster', MonsterSchema);
}

export const dbContext = new DbContext()
