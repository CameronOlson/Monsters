<template>
  <div class="component">hello from the encounter page</div>
  <div>
    <h1>{{ encounter.name }}</h1>
    <div>
      <EncounterMonsterCard
        v-for="e in encounterMonsters"
        :key="e.id"
        :encounterMonster="e"
      />
    </div>
  </div>
</template>


<script>
import { computed, onMounted, watchEffect } from "@vue/runtime-core"
import { useRoute } from "vue-router"
import { encountersService } from "../services/EncountersService"
import { AppState } from "../AppState"
export default {
  setup() {
    const route = useRoute()
    watchEffect(async () => {
      try {
        await encountersService.getEncounterById(route.params.id)
        await encountersService.getMonstersByEncounterId(route.params.id)
      } catch (error) {

      }
    })
    return {
      encounter: computed(() => AppState.encounter),
      encounterMonsters: computed(() => AppState.encounterMonsters)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>