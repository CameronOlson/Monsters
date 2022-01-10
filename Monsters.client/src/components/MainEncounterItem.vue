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
export default {
  props: {
    encounter: {
      type: Object,
      required: true
    },
    monster: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const editable = ref({ userMonsterId: props.monster._id, encounterId: props.encounter.id })
    return {
      editable,
      account: computed(() => AppState.account),
      userMonster: computed(() => AppState.userMonster),
      encounters: computed(() => AppState.encounters)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>