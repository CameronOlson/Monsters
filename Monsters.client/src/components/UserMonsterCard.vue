<template>
  <div
    class="selectable bg-yellow m-1"
    data-bs-toggle="modal"
    :data-bs-target="'#userMonster' + userMonster.id"
  >
    <div
      v-if="!userMonster.slug"
      class="col-12 card-body monster-card change-text text-light"
    >
      <div class="col-3">
        {{ userMonster.name }}
      </div>
      <div class="col-3">CR: {{ userMonster.challenge_rating }}</div>

      <div class="col-3">AC: {{ userMonster.armor_class }}</div>
      <div class="col-3">HP: {{ userMonster.hit_points }}</div>
      <router-link
        @click.stop
        :to="{ name: 'Profile', params: { id: userMonster.creatorId } }"
      >
        <img class="small-pic" :src="userMonster.creator.picture" alt="" />
      </router-link>
    </div>
  </div>
  <Modal :id="'userMonster' + userMonster.id">
    <template #modal-title>
      <div>
        <div>
          <h1 style="font-family: kings">{{ userMonster.name }}</h1>
        </div>
        <div>CR:{{ userMonster.challenge_rating }}</div>
        <div>
          {{ userMonster.speed }}
        </div>
        <div>
          {{ userMonster.size }}
        </div>
        <div>{{ userMonster.senses }}</div>
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
            <EncounterItem
              v-for="e in encounters"
              :key="e.id"
              :encounter="e"
              :userMonster="userMonster"
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
              <div>{{ userMonster.type }}</div>
              <div class="ps-2">{{ userMonster.subtype }}</div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div><strong> AC: </strong> {{ userMonster.armor_class }}</div>
            </div>
            <div class="col-6">
              <div><strong>HP:</strong> {{ userMonster.hit_points }}</div>
              <!-- <div>Speed: {{ userMonster.speed }}</div> -->
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-2">
                  <strong><u>STR</u></strong> {{ userMonster.strength }}
                </div>
                <div class="col-2">
                  <strong><u>DEX</u></strong> {{ userMonster.dexterity }}
                </div>
                <div class="col-2">
                  <strong><u>CON</u></strong> {{ userMonster.constitution }}
                </div>
                <div class="col-2">
                  <strong><u>INT</u></strong> {{ userMonster.intelligence }}
                </div>
                <div class="col-2">
                  <strong><u>WIS</u></strong> {{ userMonster.wisdom }}
                </div>
                <div class="col-2">
                  <strong><u>CHA</u></strong> {{ userMonster.charisma }}
                </div>
              </div>
            </div>
            <div class="row">
              <div class="row">
                <div class="col-12"></div>
                <div v-if="userMonster.damage_immunities == ''"></div>
                <div v-else>
                  <strong> Damage Immunities </strong> <br />
                  {{ userMonster.damage_immunities }}
                </div>
              </div>
              <div class="col-12">
                <div v-if="userMonster.damage_resistances == ''"></div>
                <div v-else>
                  <strong>Damage Resistance</strong> <br />
                  {{ userMonster.damage_resistances }}
                </div>
              </div>
              <div class="col-12">
                <div v-if="userMonster.damage_vulnerabilities == ''"></div>
                <div v-else>
                  <strong>Damage Vulnerabilities</strong> <br />
                  {{ userMonster.damage_vulnerabilities }}
                </div>
              </div>
              <div class="col-12">
                <div v-if="userMonster.condition_immunities == ''"></div>
                <div v-else>
                  <strong>Conditional Immunities</strong> <br />
                  {{ userMonster.condition_immunities }}
                </div>
              </div>
              <div class="col-12">
                <strong>Senses</strong> <br />
                {{ userMonster.senses }}
              </div>
              <div class="col-12">
                <strong>Languages</strong> <br />
                {{ userMonster.languages }}
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
                v-for="special_abilities in userMonster.special_abilities"
                :key="special_abilities.name"
              >
                <b>{{ special_abilities.name }}</b> -
                {{ special_abilities.desc }}
              </div>
              <strong>Actions</strong> <br />
              <div v-for="actions in userMonster.actions" :key="actions.name">
                <b>{{ actions.name }}</b> - {{ actions.desc }}
              </div>
              <strong>Legendary Actions</strong> <br />
              <p>{{ userMonster.legendary_desc }}</p>
              <div
                v-for="legendary_actions in userMonster.legendary_actions"
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
import { computed } from "@vue/reactivity"
import { encountersService } from "../services/EncountersService"
import { AppState } from "../AppState"
export default {
  props: {
    userMonster: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      async getEncountersByProfileId(accountId) {
        await encountersService.getEncountersByProfile(accountId)
      },
      account: computed(() => AppState.account),
      encounters: computed(() => AppState.encounters),
      profile: computed(() => AppState.profile)
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
