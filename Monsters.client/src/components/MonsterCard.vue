<template>
  <div
    @click.prevent="getSpells(monster.spell_list), createUserMonster(monster)"
    class="selectable bg-yellow m-1"
    data-bs-toggle="modal"
    :data-bs-target="'#monster' + monster.slug"
  >
    <div class="col-12 card-body monster-card change-text text-light">
      <div class="col-3">
        {{ monster.name }}
      </div>
      <div class="col-3">CR: {{ monster.challenge_rating }}</div>

      <div class="col-3">AC: {{ monster.armor_class }}</div>
      <div class="col-3">HP: {{ monster.hit_points }}</div>
    </div>
  </div>
  <Modal :id="'monster' + monster.slug">
    <template #modal-title>
      <div>
        <div>
          <h1 style="font-family: kings">{{ monster.name }}</h1>
        </div>
        <div>CR:{{ monster.challenge_rating }}</div>
        <div>
          {{ monster.speed }}
        </div>
        <div>
          {{ monster.size }}
        </div>
        <div>{{ monster.senses }}</div>
        <div class="dropdown">
          <button
            @click.prevent="getEncountersByProfileId(account.id)"
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Add To Encounter
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <MainEncounterItem
              v-for="e in encounters"
              :key="e.id"
              :encounter="e"
              :monster="userMonster"
            />
          </ul>
        </div>
      </div>
    </template>
    <template #modal-body>
      <div class="row">
        <div class="col-6">
          <div class="row">
            <div class="col-12 d-flex">
              <div>{{ monster.type }}</div>
              <div class="ps-2">{{ monster.subtype }}</div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div><strong> AC: </strong> {{ monster.armor_class }}</div>
            </div>
            <div class="col-6">
              <div><strong>HP:</strong> {{ monster.hit_points }}</div>
              <!-- <div>Speed: {{ monster.speed }}</div> -->
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-2">
                  <strong><u>STR</u></strong> {{ monster.strength }}
                </div>
                <div class="col-2">
                  <strong><u>DEX</u></strong> {{ monster.dexterity }}
                </div>
                <div class="col-2">
                  <strong><u>CON</u></strong> {{ monster.constitution }}
                </div>
                <div class="col-2">
                  <strong><u>INT</u></strong> {{ monster.intelligence }}
                </div>
                <div class="col-2">
                  <strong><u>WIS</u></strong> {{ monster.wisdom }}
                </div>
                <div class="col-2">
                  <strong><u>CHA</u></strong> {{ monster.charisma }}
                </div>
              </div>
            </div>
            <div class="row">
              <div class="row">
                <div class="col-12"></div>
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
                <div>
                  <strong> Spells </strong>
                </div>
                <br />
                <div>
                  <div v-for="spells in spells" :key="spells.name">
                    <div class="card">
                      <div class="card-body">
                        <div class="card-header">
                          <b>{{ spells.name }}</b>
                        </div>
                        <div>Components: {{ spells.components }}</div>
                        <div>Concentration: {{ spells.concentration }}</div>
                        <div>Casting Time: {{ spells.casting_time }}</div>
                        <div>Duration: {{ spells.duration }}</div>
                        <div>Range: {{ spells.range }}</div>
                        <div>
                          {{ spells.desc }}
                        </div>
                      </div>
                    </div>
                  </div>
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
              <p>{{ monster.legendary_desc }}</p>
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
import { computed, onMounted } from "@vue/runtime-core"
import { monstersService } from "../services/MonstersService"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { userMonstersService } from "../services/UserMonstersService"
import { encountersService } from "../services/EncountersService"
export default {
  props: {
    monster: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    AppState.spells = []



    // onMounted(async () => {
    //   props.monster.spell_list.forEach((element) =>
    //     getSpells(element)
    //   )
    //   try {
    //     await monstersService.getMonsterSpells(spells)
    //   } catch (error) {
    //     Pop.toast(error.message, 'error')
    //     logger.log(error)
    //   }
    // })
    return {
      async getSpells(spells) {
        try {
          await monstersService.getMonsterSpells(spells)

        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      async getEncountersByProfileId(accountId) {
        await encountersService.getEncountersByProfile(accountId)
      },

      async createUserMonster() {
        try {
          AppState.monster.alignment = props.monster.alignment
          AppState.monster.slug = props.monster.slug
          AppState.monster.armor_class = props.monster.armor_class
          AppState.monster.alignment = props.monster.alignment
          AppState.monster.charisma = props.monster.charisma
          AppState.monster.constitution = props.monster.constitution
          AppState.monster.damage_vulnerabilities = "props.monster.damage_vulnerabilities"
          AppState.monster.dexterity = props.monster.dexterity
          AppState.monster.hit_points = props.monster.hit_points
          AppState.monster.intelligence = props.monster.intelligence
          AppState.monster.languages = props.monster.languages
          AppState.monster.name = props.monster.name
          AppState.monster.perception = 6
          AppState.monster.size = props.monster.size
          AppState.monster.speed = props.monster.speed
          AppState.monster.strength = props.monster.strength
          AppState.monster.type = props.monster.type
          AppState.monster.wisdom = props.monster.wisdom




          logger.log(AppState.monster)
          const data = AppState.monster
          await userMonstersService.createUserMonster(data, this.account.id)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      account: computed(() => AppState.account),
      encounters: computed(() => AppState.encounters),
      spells: computed(() => AppState.spells)
    }
  }
}
</script>


<style lang="scss" scoped>
.monster-card {
  display: flex;
  justify-content: space-between;
}
.monster-card2 {
  display: flex;
  justify-content: space-around;
}

.change-text:hover {
  background-image: linear-gradient(45deg, #ff0000, #48ff00, #002bff, #7a00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: translateX(10px);
}
.bg-yellow {
  background-color: rgba(0, 0, 0, 0.37);
}
.monster-pic {
  background-image: url("https://media.istockphoto.com/photos/black-brick-wall-background-texture-dark-masonry-picture-id915097804?b=1&k=20&m=915097804&s=170667a&w=0&h=tWu_L3KysRE2q63VYx0LVkPojHmTKTj5TITlh2wMI7g=");
}
</style>