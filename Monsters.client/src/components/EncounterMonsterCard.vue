<template>
  <div
    class="selectable bg-yellow m-1"
    data-bs-toggle="modal"
    :data-bs-target="'#encounterMonster' + encounterMonster.userMonsterId"
  >
    <div class="col-10 m-auto card-body monster-card change-text text-light">
      <div class="col-3">
        {{ encounterMonster.userMonster.name }}
      </div>
      <div class="col-3">
        CR: {{ encounterMonster.userMonster.challenge_rating }}
      </div>

      <div class="col-3">
        AC: {{ encounterMonster.userMonster.armor_class }}
      </div>
      <div class="col-3">HP: {{ encounterMonster.userMonster.hit_points }}</div>
    </div>
  </div>
  <Modal :id="'encounterMonster' + encounterMonster.userMonster.id">
    <template #modal-title>
      <div>
        <div>
          <h1 style="font-family: kings">
            {{ encounterMonster.userMonster.name }}
          </h1>
        </div>
        <div>CR:{{ encounterMonster.userMonster.challenge_rating }}</div>
        <div>
          {{ encounterMonster.userMonster.speed }}
        </div>
        <div>
          {{ encounterMonster.userMonster.size }}
        </div>
        <div>{{ encounterMonster.userMonster.senses }}</div>
      </div>
    </template>
    <template #modal-body>
      <div class="row">
        <div class="col-6">
          <div class="row">
            <div class="col-12 d-flex">
              <div>{{ encounterMonster.userMonster.type }}</div>
              <div class="ps-2">{{ encounterMonster.userMonster.subtype }}</div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div>
                <strong> AC: </strong>
                {{ encounterMonster.userMonster.armor_class }}
              </div>
            </div>
            <div class="col-6">
              <div>
                <strong>HP:</strong>
                {{ encounterMonster.userMonster.hit_points }}
              </div>
              <!-- <div>Speed: {{ encounterMonster.userMonster.speed }}</div> -->
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-2">
                  <strong><u>STR</u></strong>
                  {{ encounterMonster.userMonster.strength }}
                </div>
                <div class="col-2">
                  <strong><u>DEX</u></strong>
                  {{ encounterMonster.userMonster.dexterity }}
                </div>
                <div class="col-2">
                  <strong><u>CON</u></strong>
                  {{ encounterMonster.userMonster.constitution }}
                </div>
                <div class="col-2">
                  <strong><u>INT</u></strong>
                  {{ encounterMonster.userMonster.intelligence }}
                </div>
                <div class="col-2">
                  <strong><u>WIS</u></strong>
                  {{ encounterMonster.userMonster.wisdom }}
                </div>
                <div class="col-2">
                  <strong><u>CHA</u></strong>
                  {{ encounterMonster.userMonster.charisma }}
                </div>
              </div>
            </div>
            <div class="row">
              <div class="row">
                <div class="col-12"></div>
                <div
                  v-if="encounterMonster.userMonster.damage_immunities == ''"
                ></div>
                <div v-else>
                  <strong> Damage Immunities </strong> <br />
                  {{ encounterMonster.userMonster.damage_immunities }}
                </div>
              </div>
              <div class="col-12">
                <div
                  v-if="encounterMonster.userMonster.damage_resistances == ''"
                ></div>
                <div v-else>
                  <strong>Damage Resistance</strong> <br />
                  {{ encounterMonster.userMonster.damage_resistances }}
                </div>
              </div>
              <div class="col-12">
                <div
                  v-if="
                    encounterMonster.userMonster.damage_vulnerabilities == ''
                  "
                ></div>
                <div v-else>
                  <strong>Damage Vulnerabilities</strong> <br />
                  {{ encounterMonster.userMonster.damage_vulnerabilities }}
                </div>
              </div>
              <div class="col-12">
                <div
                  v-if="encounterMonster.userMonster.condition_immunities == ''"
                ></div>
                <div v-else>
                  <strong>Conditional Immunities</strong> <br />
                  {{ encounterMonster.userMonster.condition_immunities }}
                </div>
              </div>
              <div class="col-12">
                <strong>Senses</strong> <br />
                {{ encounterMonster.userMonster.senses }}
              </div>
              <div class="col-12">
                <strong>Languages</strong> <br />
                {{ encounterMonster.userMonster.languages }}
              </div>
              <div class="col-12">
                <div>
                  <strong> Spells </strong>
                </div>
                <br />
                <!-- <div>
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
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col-12">
              <strong>Special Abilities</strong> <br />
              <div
                v-for="special_abilities in encounterMonster.userMonster
                  .special_abilities"
                :key="special_abilities.name"
              >
                <b>{{ special_abilities.name }}</b> -
                {{ special_abilities.desc }}
              </div>
              <strong>Actions</strong> <br />
              <div
                v-for="actions in encounterMonster.userMonster.actions"
                :key="actions.name"
              >
                <b>{{ actions.name }}</b> - {{ actions.desc }}
              </div>
              <strong>Legendary Actions</strong> <br />
              <p>{{ encounterMonster.userMonster.legendary_desc }}</p>
              <div
                v-for="legendary_actions in encounterMonster.userMonster
                  .legendary_actions"
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
export default {
  props: {
    encounterMonster: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
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