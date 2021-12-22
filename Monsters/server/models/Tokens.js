import mongoose from 'mongoose'

const Schema = mongoose.Schema
export const TokenSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
  tokenId: { type: String, required: false },
  name: { type: String, required: true },
  img: { type: String, required: true }
},
{
  timestamps: true,
  toJSON: { virtuals: true }
})
