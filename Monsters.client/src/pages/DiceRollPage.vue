<template>
  <div class="component">
    <button class="btn-primary" @click.prevent="rollDamageDice('3d6')">
      Roll Dice
    </button>
    <form @submit.prevent="updateDsix('d4')">
      <div class="form-group">
        <label for="d4">
          <h1>D4</h1>
        </label>
        <select multiple class="d4" id="d4" v-model="editable.d6">
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
    <form @submit.prevent="updateDsix('d6')">
      <div class="form-group">
        <label for="d6">
          <h1>D6</h1>
        </label>
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
    <form @submit.prevent="updateDsix('d8')">
      <div class="form-group">
        <label for="d8">
          <h1>D8</h1>
        </label>
        <select multiple class="d8" id="d8" v-model="editable.d6">
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
    <form @submit.prevent="updateDsix('d10')">
      <div class="form-group">
        <label for="d10">
          <h1>D10</h1>
        </label>
        <select multiple class="d10" id="d10" v-model="editable.d6">
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
    <form @submit.prevent="updateDsix('d12')">
      <div class="form-group">
        <label for="d12">
          <h1>D12</h1>
        </label>
        <select multiple class="d12" id="d12" v-model="editable.d6">
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
    <form @submit.prevent="updateDsix('d20')">
      <div class="form-group">
        <label for="d20">
          <h1>D20</h1>
        </label>
        <select multiple class="d20" id="d20" v-model="editable.d6">
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
      async updateDsix(diceSides) {
        let chosenDice = editable.value.d6[0]
        let dice = chosenDice + diceSides
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