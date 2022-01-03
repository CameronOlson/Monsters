<template>
  <div class="component">MONSTER KEEPER</div>
  <router-view />
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