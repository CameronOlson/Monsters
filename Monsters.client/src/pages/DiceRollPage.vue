<template>
  <div class="component">
    <button class="btn-primary" @click.prevent="rollDamageDice('3d6')">
      Roll Dice
    </button>
    <form @submit.prevent="updateDsix()">
      <div class="form-group">
        <label for="d6">Example multiple select</label>
        <select multiple class="d6" id="d6" v-model="editable.d6">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
        </select>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import { monstersService } from "../services/MonstersService"
import { AppState } from "../AppState"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async rollDamageDice(dice) {
        try {
          await monstersService.rollDamageDice(dice)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      updateDsix() {
        logger.log('this is the number', editable.value)

      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>