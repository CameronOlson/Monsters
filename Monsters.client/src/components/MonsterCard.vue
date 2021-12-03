<template>
  <button
    class="card"
    data-bs-toggle="modal"
    :data-bs-target="'#monster' + monster.slug"
  >
    <div class="col-12 card-body monster-card">
      <div class="col-3">
        {{ monster.name }}
      </div>
      <div class="col-3">CR: {{ monster.challenge_rating }}</div>
      <div class="col-3">AC: {{ monster.armor_class }}</div>
      <div class="col-3">HP: {{ monster.hit_points }}</div>
    </div>
  </button>
  <Modal :id="'monster' + monster.slug">
    <template #modal-title>
      <h1>{{ monster.name }}</h1>
      <div>CR:{{ monster.challenge_rating }}</div></template
    >
    <template #modal-body>
      <div class="row">
        <div class="col-6">
          <div class="row">
            <div class="col-6">
              <div>AC:{{ monster.armor_class }}</div>
            </div>
            <div class="col-6">
              <div>HP: {{ monster.hit_points }}</div>
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-2">STR {{ monster.strength }}</div>
                <div class="col-2">DEX {{ monster.dexterity }}</div>
                <div class="col-2">CON {{ monster.constitution }}</div>
                <div class="col-2">INT {{ monster.intelligence }}</div>
                <div class="col-2">WIS {{ monster.wisdom }}</div>
                <div class="col-2">CHA {{ monster.charisma }}</div>
                <div class="col-12">
                  <div v-if="monster.damage_immunities == ''"></div>
                  <div v-else>
                    <strong> Damage Immunities </strong> <br />
                    {{ monster.damage_immunities }}
                  </div>
                </div>
                <div class="col-12">
                  <div v-if="monster.damage_resistances == ''"></div>
                  <div v-else>
                    <strong>Damage Resistance</strong> <br />
                    {{ monster.damage_resistances }}
                  </div>
                </div>
                <div class="col-12">
                  <div v-if="monster.damage_vulnerabilities == ''"></div>
                  <div v-else>
                    <strong>Damage Vulnerabilities</strong> <br />
                    {{ monster.damage_vulnerabilities }}
                  </div>
                </div>
                <div class="col-12">
                  <div v-if="monster.condition_immunities == ''"></div>
                  <div v-else>
                    <strong>Conditional Immunities</strong> <br />
                    {{ monster.condition_immunities }}
                  </div>
                </div>
                <div class="col-12">
                  <strong>Senses</strong> <br />
                  {{ monster.senses }}
                </div>
                <div class="col-12">
                  <strong>Languages</strong> <br />
                  {{ monster.languages }}
                </div>
                <div class="col-12">
                  <button
                    class="btn btn-primary"
                    @click.prevent="
                      monster.spell_list.forEach((element) =>
                        getSpells(element)
                      )
                    "
                  >
                    Spells
                  </button>
                  <br />
                  <!-- <div
                    v-for="spell_list in monster.spell_list"
                    :key="spell_list"
                  >
                    <div>
                      <b>{{ spell_list }}</b> -
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col-12">
              <strong>Special Abilities</strong> <br />
              <div
                v-for="special_abilities in monster.special_abilities"
                :key="special_abilities.name"
              >
                <b>{{ special_abilities.name }}</b> -
                {{ special_abilities.desc }}
              </div>
              <strong>Actions</strong> <br />
              <div v-for="actions in monster.actions" :key="actions.name">
                <b>{{ actions.name }}</b> - {{ actions.desc }}
              </div>
              <strong>Legendary Actions</strong> <br />
              <div
                v-for="legendary_actions in monster.legendary_actions"
                :key="legendary_actions.name"
              >
                <b>{{ legendary_actions.name }}</b> -
                {{ legendary_actions.desc }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>


<script>
import { monstersService } from "../services/MonstersService"
import Pop from "../utils/Pop"
export default {
  props: {
    monster: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      async getSpells(spells) {
        try {

          await monstersService.getMonsterSpells(spells)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.monster-card {
  display: flex;
  justify-content: space-between;
}
</style>