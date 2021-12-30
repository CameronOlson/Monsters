import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const UserMonsterSchema = new Schema(
  {
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    monsterId: { type: String, required: false },
    actions: { type: [{ name: { type: String, required: false }, desc: { type: String, required: false } }], required: false },
    alignment: { type: String, required: true },
    armor_class: { type: Number, required: true },
    armor_desc: { type: Number, required: false },
    challenge_rating: { type: String, required: false },
    charisma: { type: Number, required: true },
    charisma_save: { type: Number, required: false },
    condition_immunities: { type: String, required: false },
    constitution: { type: Number, required: true },
    constitution_save: { type: Number, required: false },
    damage_immunities: { type: String, required: false },
    damage_resistance: { type: String, required: false },
    damage_vulnerabilities: { type: String, required: true },
    dexterity: { type: Number, required: true },
    dexterity_save: { type: Number, required: false },
    hit_points: { type: Number, required: true },
    intelligence: { type: Number, required: true },
    intelligence_save: { type: Number, required: false },
    languages: { type: String, required: true },
    legendary_actions: { type: [{ name: { type: String, required: false }, desc: { type: String, required: false } }], required: false },
    legendary_desc: { type: String, required: false },
    name: { type: String, required: true },
    perception: { type: String, required: true },
    reactions: { type: String, required: false },
    senses: { type: String, required: false },
    size: { type: String, required: true },
    special_abilities: { type: [{ name: { type: String, required: false }, desc: { type: String, required: false } }], required: false },
    speed: { type: String, required: true },
    new_spells: { type: [{ name: { type: String, required: false }, desc: { type: String, required: false } }], required: false },
    spell_list: { type: [String], required: false },
    strength: { type: Number, required: true },
    strength_save: { type: Number, required: false },
    subtype: { type: String, required: false },
    type: { type: String, required: true },
    wisdom: { type: Number, required: true },
    wisdom_save: { type: Number, required: false }

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
