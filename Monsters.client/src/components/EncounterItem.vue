<template>
  <div class="component">{{ encounter.name }}</div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import { AppState } from "../AppState"
export default {
  props: {
    encounter: {
      type: Object,
      required: true
    },
    userMonster: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const editable = ref({ userMonsterId: props.userMonster.id, encounterId: props.encounter.id })
    return {
      account: computed(() => AppState.account),
      userMonster: computed(() => AppState.userMonster),
      encounters: computed(() => AppState.encounters)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>