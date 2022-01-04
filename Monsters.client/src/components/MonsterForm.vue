<template>
  <form @submit.prevent="createMonster()">
    <div class="mb-3">
      <label for="monsterName" class="form-label">Monster Name</label>
      <input
        type="string"
        class="form-control"
        id="monsterName"
        v-model="editable.name"
      />
    </div>
    <!-- Need to put actions here -->
    <div class="mb-3">
      <label for="monsterAlignment" class="form-label">Alignment</label>
      <input
        type="string"
        class="form-control"
        id="monsterAlignment"
        v-model="editable.alignment"
      />
    </div>
    <div class="mb-3">
      <label for="armor_class" class="form-label">Armor Class</label>
      <input
        type="number"
        class="form-control"
        id="armor_class"
        v-model="editable.armor_class"
      />
    </div>
    <div class="mb-3">
      <label for="armor_desc" class="form-label">Armor Description</label>
      <input
        type="string"
        class="form-control"
        id="armor_desc"
        v-model="editable.armor_desc"
      />
    </div>
    <div class="mb-3">
      <label for="challenge_rating" class="form-label">Challenge Rating</label>
      <input
        type="string"
        class="form-control"
        id="challenge_rating"
        v-model="editable.challenge_rating"
      />
    </div>
    <div class="mb-3">
      <label for="charisma" class="form-label">Charisma</label>
      <input
        type="number"
        class="form-control"
        id="charisma"
        v-model="editable.charisma"
      />
    </div>
    <div class="mb-3">
      <label for="charisma_save" class="form-label">Charisma Save</label>
      <input
        type="number"
        class="form-control"
        id="charisma_save"
        v-model="editable.charisma_save"
      />
    </div>
    <div class="mb-3">
      <label for="condition_immunities" class="form-label"
        >Condition Immunities</label
      >
      <input
        type="string"
        class="form-control"
        id="condition_immunities"
        v-model="editable.condition_immunities"
      />
    </div>
    <div class="mb-3">
      <label for="constitution" class="form-label">Constitution</label>
      <input
        type="number"
        class="form-control"
        id="constitution"
        v-model="editable.constitution"
      />
    </div>
    <div class="mb-3">
      <label for="constitution_save" class="form-label"
        >Constitution Save</label
      >
      <input
        type="number"
        class="form-control"
        id="constitution_save"
        v-model="editable.constitution_save"
      />
    </div>
    <div class="mb-3">
      <label for="damage_immunities" class="form-label"
        >Damage Immunities</label
      >
      <input
        type="string"
        class="form-control"
        id="damage_immunities"
        v-model="editable.damage_immunities"
      />
    </div>
    <div class="mb-3">
      <label for="damage_resistances" class="form-label"
        >Damage Resistance</label
      >
      <input
        type="string"
        class="form-control"
        id="damage_resistances"
        v-model="editable.damage_resistances"
      />
    </div>
    <div class="mb-3">
      <label for="damage_vulnerabilities" class="form-label"
        >Damage Vulnerabilities</label
      >
      <input
        type="string"
        class="form-control"
        id="damage_vulnerabilities"
        v-model="editable.damage_vulnerabilities"
      />
    </div>
    <div class="mb-3">
      <label for="dexterity" class="form-label">Dexterity</label>
      <input
        type="number"
        class="form-control"
        id="dexterity"
        v-model="editable.dexterity"
      />
    </div>
    <div class="mb-3">
      <label for="dexterity_save" class="form-label">Dexterity Save</label>
      <input
        type="number"
        class="form-control"
        id="dexterity_save"
        v-model="editable.dexterity_save"
      />
    </div>
    <div class="mb-3">
      <label for="hit_points" class="form-label">HP</label>
      <input
        type="number"
        class="form-control"
        id="hit_points"
        v-model="editable.hit_points"
      />
    </div>
    <div class="mb-3">
      <label for="intelligence" class="form-label">Intelligence</label>
      <input
        type="number"
        class="form-control"
        id="intelligence"
        v-model="editable.intelligence"
      />
    </div>
    <div class="mb-3">
      <label for="intelligence_save" class="form-label"
        >Intelligence Save</label
      >
      <input
        type="number"
        class="form-control"
        id="intelligence_save"
        v-model="editable.intelligence_save"
      />
    </div>
    <div class="mb-3">
      <label for="languages" class="form-label">Languages</label>
      <input
        type="string"
        class="form-control"
        id="languages"
        v-model="editable.languages"
      />
    </div>
    <!-- Need to put legendary actions here -->
    <div class="mb-3">
      <label for="legendary_desc" class="form-label"
        >Legendary Description</label
      >
      <input
        type="string"
        class="form-control"
        id="legendary_desc"
        v-model="editable.legendary_desc"
      />
    </div>
    <div class="mb-3">
      <label for="perception" class="form-label">Perception</label>
      <input
        type="number"
        class="form-control"
        id="perception"
        v-model="editable.perception"
      />
    </div>
    <div class="mb-3">
      <label for="reactions" class="form-label">Reactions</label>
      <input
        type="string"
        class="form-control"
        id="reactions"
        v-model="editable.reactions"
      />
    </div>
    <div class="mb-3">
      <label for="senses" class="form-label">Senses</label>
      <input
        type="string"
        class="form-control"
        id="senses"
        v-model="editable.senses"
      />
    </div>
    <div class="mb-3">
      <label for="size" class="form-label">Size</label>
      <input
        type="string"
        class="form-control"
        id="size"
        v-model="editable.size"
      />
    </div>
    <div class="mb-3">
      <label for="speed" class="form-label">Speed</label>
      <input
        type="string"
        class="form-control"
        id="speed"
        v-model="editable.speed"
      />
    </div>
    <div class="mb-3">
      <label for="strength" class="form-label">Strength</label>
      <input
        type="number"
        class="form-control"
        id="strength"
        v-model="editable.strength"
      />
    </div>
    <div class="mb-3">
      <label for="strength_save" class="form-label">Strength Save</label>
      <input
        type="number"
        class="form-control"
        id="strength_save"
        v-model="editable.strength_save"
      />
    </div>
    <div class="mb-3">
      <label for="subtype" class="form-label">Subtype</label>
      <input
        type="string"
        class="form-control"
        id="subtype"
        v-model="editable.subtype"
      />
    </div>
    <div class="mb-3">
      <label for="type" class="form-label">Type</label>
      <input
        type="string"
        class="form-control"
        id="type"
        v-model="editable.type"
      />
    </div>
    <div class="mb-3">
      <label for="wisdom" class="form-label">Wisdom</label>
      <input
        type="number"
        class="form-control"
        id="wisdom"
        v-model="editable.wisdom"
      />
    </div>
    <div class="mb-3">
      <label for="wisdom_save" class="form-label">Wisdom Save</label>
      <input
        type="number"
        class="form-control"
        id="wisdom_save"
        v-model="editable.wisdom_save"
      />
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import { AppState } from "../AppState"
import { userMonstersService } from "../services/UserMonstersService"
import { Modal } from "bootstrap"
import Pop from "../utils/Pop"
export default {
  setup() {
    const editable = ref({})

    return {
      editable,
      account: computed(() => AppState.account),
      async createMonster() {
        try {
          await userMonstersService.createUserMonster(editable.value, this.account.id)
          const modal = Modal.getInstance(document.getElementById('create-monster'))
          modal.hide()
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>