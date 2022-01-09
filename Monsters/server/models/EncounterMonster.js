import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const EncounterMonsterSchema = new Schema({
  userMonsterId: { type: Schema.Types.ObjectId, ref: 'UserMonsters' },
  encounterId: { type: Schema.Types.ObjectId, ref: 'Encounters', required: true }
}, { timestamps: true, toJSON: { virtuals: true } }
)

EncounterMonsterSchema.virtual('userMonster', {
  localField: 'userMonsterId',
  foreignField: '_id',
  justOne: true,
  ref: 'UserMonster'
})
EncounterMonsterSchema.virtual('encounter', {
  localField: 'encounterId',
  foreignField: '_id',
  justOne: true,
  ref: 'Encounter'
})
