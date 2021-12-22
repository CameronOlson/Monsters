import mongoose from 'mongoose'

const Schema = mongoose.Schema
export const MapSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
  mapId: { type: String, required: false },
  name: { type: String, required: false },
  img: { type: String, required: true }
},
{
  timestamps: true,
  toJSON: { virtuals: true }
})
MapSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
