<template>
  <div class="component">
    <button class="btn btn-primary" @click.prevent="getMonsters()">
      Get Monsters
    </button>
    <h1>Yo</h1>
  </div>
</template>


<script>
import { monstersService } from "../services/MonstersService"
import Pop from "../utils/Pop"
export default {
  setup() {
    return {
      async getMonsters() {
        try {
          await monstersService.getMonsters()
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
