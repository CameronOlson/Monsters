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
import { Modal } from "bootstrap"
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
    return {
      async addUserMonsterToEncounter() {
        try {
          const editable = { userMonsterId: AppState.userMonster.id, encounterId: props.encounter.id }

          await encountersService.createEncounterMonster(editable)
          Pop.toast("This has been added to your encounter")
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