import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const EncounterMonsterSchema = new Schema({
  userMonsterId: { type: Schema.Types.ObjectId, ref: 'UserMonster', required: true },
  encounterId: { type: Schema.Types.ObjectId, ref: 'Encounter', required: true }
}, { timestamps: true, toJSON: { virtuals: true } }
)

EncounterMonsterSchema.virtual('userMonster', {
  localField: 'userMonsterId',
  foreignField: '_id',
  ref: 'UserMonster',
  justOne: true
})
EncounterMonsterSchema.virtual('encounter', {
  localField: 'encounterId',
  foreignField: '_id',
  ref: 'Encounter',
  justOne: true
})
