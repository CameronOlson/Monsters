<template>
  <li>Hi</li>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
export default {
  props: {
    encounter: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      encounters: computed(() => AppState.encounters)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>