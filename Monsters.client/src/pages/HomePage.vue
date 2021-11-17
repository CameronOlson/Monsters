<template>
  <div class="component">
    <button class="btn btn-primary" @click.prevent="getMonsters()">
      Get Monsters
    </button>
    <button
      v-if="nextPage"
      class="btn btn-primary"
      @click.prevent="changePage(nextPage)"
    >
      change page
    </button>
    <button
      v-if="previousPage"
      class="btn btn-primary"
      @click.prevent="changePage(previousPage)"
    >
      change page
    </button>
    <h1>Yo</h1>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { monstersService } from "../services/MonstersService"
import Pop from "../utils/Pop"
import { AppState } from "../AppState"
export default {
  setup() {
    return {
      previousPage: computed(() => AppState.previousPage),
      nextPage: computed(() => AppState.nextPage),
      async getMonsters() {
        try {
          await monstersService.getMonsters()
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      async changePage(page) {
        try {
          await monstersService.changePage(page)
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
