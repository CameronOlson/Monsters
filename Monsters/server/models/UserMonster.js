import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const UserMonsterSchema = new Schema(
  {
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    slug: { type: String, required: false },
    actions: { type: [{ name: { type: String, required: false }, desc: { type: String, required: false } }], required: false },
    alignment: { type: String, required: false },
    armor_class: { type: Number, required: false },
    armor_desc: { type: Number, required: false },
    challenge_rating: { type: String, required: false },
    charisma: { type: Number, required: false },
    charisma_save: { type: Number, required: false },
    condition_immunities: { type: String, required: false },
    constitution: { type: Number, required: false },
    constitution_save: { type: Number, required: false },
    damage_immunities: { type: String, required: false },
    damage_resistance: { type: String, required: false },
    damage_vulnerabilities: { type: String, required: false },
    dexterity: { type: Number, required: false },
    dexterity_save: { type: Number, required: false },
    hit_points: { type: Number, required: false },
    intelligence: { type: Number, required: false },
    intelligence_save: { type: Number, required: false },
    languages: { type: String, required: false },
    legendary_actions: { type: [{ name: { type: String, required: false }, desc: { type: String, required: false } }], required: false },
    legendary_desc: { type: String, required: false },
    name: { type: String, required: false },
    perception: { type: String, required: false },
    reactions: { type: String, required: false },
    senses: { type: String, required: false },
    size: { type: String, required: false },
    special_abilities: { type: [{ name: { type: String, required: false }, desc: { type: String, required: false } }], required: false },
    speed: { type: {} },
    new_spells: { type: [{ name: { type: String, required: false }, desc: { type: String, required: false } }], required: false },
    spell_list: { type: [String], required: false },
    strength: { type: Number, required: false },
    strength_save: { type: Number, required: false },
    subtype: { type: String, required: false },
    type: { type: String, required: false },
    wisdom: { type: Number, required: false },
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
