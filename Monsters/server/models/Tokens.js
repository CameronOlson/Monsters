import mongoose from 'mongoose'

const Schema = mongoose.Schema
export const TokenSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String, required: true }
},
{
  timestamps: true,
  toJSON: { virtuals: true }
})
