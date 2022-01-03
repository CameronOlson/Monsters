<template>
  <div class="component">
    <button class="btn-primary" @click.prevent="rollDamageDice('3d6')">
      Roll Dice
    </button>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { monstersService } from "../services/MonstersService"
import { AppState } from "../AppState"
import Pop from "../utils/Pop"
export default {
  setup() {
    return {
      async rollDamageDice(dice) {
        try {
          await monstersService.rollDamageDice(dice)
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