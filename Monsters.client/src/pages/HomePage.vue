<template>
  <div class="container">
    <div class="row">
      <button class="btn btn-primary" @click.prevent="getMonsters()">
        Get Monsters
      </button>
      <button
        v-if="nextPage"
        class="btn btn-primary"
        @click.prevent="changePage(nextPage)"
      >
        next page
      </button>
      <button
        v-if="previousPage"
        class="btn btn-primary"
        @click.prevent="changePage(previousPage)"
      >
        previous page
      </button>
    </div>
    <div class="row">
      <MonsterCard v-for="m in monsters" :key="m.slug" :monster="m" />
    </div>
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
      monsters: computed(() => AppState.monsters),
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
