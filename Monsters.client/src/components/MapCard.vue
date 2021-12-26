<template>
  <div class="component">
    <button @click-prevent="makeThisTheMap(map.data)">
      {{ map.name }}
    </button>
  </div>
</template>


<script>
import { AppState } from "../AppState"
import { mapsService } from "../services/MapsService"
import Pop from "../utils/Pop"
export default {
  props: {
    map: {
      type: Object,
      required: true
    }
  },
  setup() {
    AppState.map = []


    return {
      async makeThisTheMap(mapData) {
        debugger
        try {
          await mapsService.makeThisTheMap(mapData)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>