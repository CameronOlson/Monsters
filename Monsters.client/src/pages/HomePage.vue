<template>
  <div class="component">
    <div class="row p-1">
      <div class="col-3 m-auto">
        <router-link :to="{ name: 'Home.fifthEdition' }">
          <button class="m-2 btn btn-secondary text-uppercase text-light">
            5e
          </button>
        </router-link>
        <router-link :to="{ name: 'Home.homebrew' }">
          <button class="btn btn-secondary text-uppercase text-light">
            Homebrew
          </button>
        </router-link>
        <button class="btn btn-primary" @click.prevent="rollDamageDice('3d6')">
          Roll Dice
        </button>
      </div>
    </div>
    <router-view />
  </div>
</template>


<script>
import { monstersService } from '../services/MonstersService'
export default {
  setup() {
    return {
      async rollDamageDice(dice) {
        await monstersService.rollDamageDice(dice)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>