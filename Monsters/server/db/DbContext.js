import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { EncounterSchema } from '../models/Encounter'
import { EncounterMonsterSchema } from '../models/EncounterMonster'
import { UserMonsterSchema } from '../models/UserMonster'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  UserMonsters = mongoose.model('Monster', UserMonsterSchema);
  Encounters = mongoose.model('Encounter', EncounterSchema);

  EncounterMonsters = mongoose.model('EncounterMonster', EncounterMonsterSchema)
}

export const dbContext = new DbContext()
