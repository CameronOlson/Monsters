<template>
  <div class="component">hello from the encounter page</div>
  <div>
    <h1>{{ encounter.name }}</h1>
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core"
import { useRoute } from "vue-router"
import { encountersService } from "../services/EncountersService"
import { AppState } from "../AppState"
export default {
  setup() {
    const route = useRoute()
    onMounted(async () => {
      try {
        await encountersService.getEncounterById(route.params.id)
      } catch (error) {

      }
    })
    return {
      encounter: computed(() => AppState.encounter)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>