<template>
  <div class="container-fluid encounter-pic">
    <h1>{{ encounter.name }}</h1>
    <div class="col-10 m-auto">
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
    onMounted(async () => {
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
.encounter-pic {
  background-image: url("https://childcare2020.ca/wp-content/uploads/2020/04/40-406825_dungeons-dragons-monster-magician-wolves-artwork-dungeons-and.jpg");

  height: 50rem;
}
</style>