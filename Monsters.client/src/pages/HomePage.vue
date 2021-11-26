<template>
  <div class="container">
    <div class="row">
      <button class="m-1 btn btn-primary" @click.prevent="getMonsters()">
        Get Monsters
      </button>
      <button class="m-1 btn btn-primary" @click="toggleAscending()">
        Toggle by AC
      </button>
      <button class="m-1 btn btn-primary">"0 - 1"</button>
      <button class="m-1 btn btn-primary">2 - 5</button>
      <button class="m-1 btn btn-primary">6 - 10</button>
      <button class="m-1 btn btn-primary">10 - 15</button>
      <button class="m-1 btn btn-primary">15 - 20</button>

      <!-- <button class="m-1 btn btn-primary" @click="lowFilter = !lowFilter">
        ScoreSorter
      </button> -->
      <button
        v-if="nextPage"
        class="btn btn-primary m-1"
        @click.prevent="changePage(nextPage)"
      >
        next page
      </button>
      <button
        v-if="previousPage"
        class="btn btn-primary m-1"
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
import { computed, ref } from "@vue/reactivity"
import { monstersService } from "../services/MonstersService"
import Pop from "../utils/Pop"
import { AppState } from "../AppState"
export default {
  setup() {
    const ascending = ref(true)

    function scoreSorter(a, b) {
      if (ascending.value) {
        return b.armor_class - a.armor_class
      }
      return a.armor_class - b.armor_class
    }
    return {
      ascending,
      monsters: computed(() => AppState.monsters.sort(scoreSorter)),
      toggleAscending() {
        ascending.value = !ascending.value
      },
      previousPage: computed(() => AppState.previousPage),
      nextPage: computed(() => AppState.nextPage),
      async getMonsters() {
        try {
          await monstersService.getMonsters()
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      async sortMonsters() {
        try {
          AppState.monsters.sort()
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
