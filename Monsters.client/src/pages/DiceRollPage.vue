<template>
  <div class="component">
    <button class="btn-primary" @click.prevent="rollDamageDice('3d6')">
      Roll Dice
    </button>
    <button @click="updateDsix()" id="btn">Click Here!</button>
    <p>Button Clicked <span id="display">0</span> Times</p>
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
      },
      updateDsix() {
        var btn = document.getElementById("btn");
        var disp = document.getElementById("display");


        count++;
        disp.innerHTML = count;

      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>