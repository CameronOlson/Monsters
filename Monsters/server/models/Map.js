import mongoose from 'mongoose'

const Schema = mongoose.Schema
export const MapSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String, required: true }
},
{
  timestamps: true,
  toJSON: { virtuals: true }
})
