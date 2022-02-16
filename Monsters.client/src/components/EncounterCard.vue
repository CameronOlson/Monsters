<template>
  <div class="col-md-3">
    <router-link :to="{ name: 'Encounter', params: { id: encounter.id } }">
      <div class="card border-dark mb-3" style="max-width: 18rem">
        <h5 class="card-header">{{ encounter.name }}</h5>
        <div class="card-body text-dark">
          <p class="card-text">{{ encounter.desc }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core"
import Pop from "../utils/Pop"
import { AppState } from "../AppState"
import { encountersService } from "../services/EncountersService"
export default {
  props: {
    encounter: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    onMounted(async () => {
      try {
        AppState.encounterMonsters = []
        await encountersService.getMonstersByEncounterId(props.encounter.id)
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      encounterMonsters: computed(() => AppState.encounterMonsters)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>