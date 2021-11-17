import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const MonsterSchema = new Schema(
  {
    name: { type: String, required: true },
    size: { type: String, required: true },
    type: { type: String, required: true },
    armor_class: { type: Number, required: true },
    hp: { type: Number, required: true }

  })
