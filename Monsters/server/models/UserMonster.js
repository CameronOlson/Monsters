import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const UserMonsterSchema = new Schema(
  {
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    monsterId: { type: String, required: true },
    name: { type: String, required: true },
    size: { type: String, required: true },
    type: { type: String, required: true },
    armor_class: { type: Number, required: true },
    hp: { type: Number, required: true }

  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  })
UserMonsterSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
