import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const EncounterSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
  name: { type: String, required: true },
  desc: { type: String, required: true }
},
{
  timestamps: true,
  toJSON: { virtuals: true }
}
)
EncounterSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
