<template>
  <div
    @click.prevent="addUserMonsterToEncounter()"
    class="component selectable"
  >
    {{ encounter.name }}
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import { AppState } from "../AppState"
import Pop from "../utils/Pop"
import { userMonstersService } from "../services/UserMonstersService"
import { monstersService } from "../services/MonstersService"
import { encountersService } from "../services/EncountersService"
import { logger } from "../utils/Logger"
import { watchEffect } from "@vue/runtime-core"
export default {
  props: {
    encounter: {
      type: Object,
      required: true
    },
    // userMonster: {
    //   type: Object,
    //   required: true
    // }
  },
  setup(props) {
    const editable = ref({ userMonsterId: AppState.userMonster.id, encounterId: props.encounter.id })
    return {
      editable,
      async addUserMonsterToEncounter() {
        try {
          logger.log("this is what you are looking for", AppState.userMonster.id)
          logger.log(editable.value)
          await encountersService.createEncounterMonster(editable.value)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      },
      account: computed(() => AppState.account),
      // userMonsters: computed(() => AppState.userMonsters),
      encounters: computed(() => AppState.encounters),
      monster: computed(() => AppState.monster),
      userMonster: computed(() => AppState.userMonster)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>