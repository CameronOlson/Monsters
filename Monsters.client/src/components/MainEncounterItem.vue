<template>
  <div @click.prevent="addUserMonsterToEncounter()" class="component">
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
    const thatMonster = AppState.monster
    const thisMonster = AppState.userMonsters.slice(-1)[0]

    const editable = ref({ userMonsterId: thisMonster.id, encounterId: props.encounter.id })
    return {
      editable,
      async addUserMonsterToEncounter() {
        try {
          debugger
          await encountersService.createEncounterMonster(editable.value)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      },
      account: computed(() => AppState.account),
      userMonsters: computed(() => AppState.userMonsters),
      encounters: computed(() => AppState.encounters),
      monster: computed(() => AppState.monster)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>