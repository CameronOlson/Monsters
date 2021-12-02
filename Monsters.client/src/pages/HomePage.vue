<template>
  <div class="container">
    <div class="row">
      <form
        @submit.prevent="findMonstersByQuery()"
        class="bg-white rounded elevation-1"
      >
        <div class="form-group d-flex align-items-center">
          <label for="search" class="sr-only"></label>
          <input
            v-model="query"
            type="text"
            name="search"
            required
            class="form-control bg-white border-0"
            placeholder="search"
          />
          <button class="btn px-2 py-0 selectable">
            <i class="mdi mdi-magnify"></i>
          </button>
        </div>
      </form>

      <button class="m-1 btn btn-primary" @click.prevent="getMonsters()">
        Get Monsters
      </button>
      <button class="m-1 btn btn-primary" @click="toggleAscending()">
        Toggle by AC
      </button>
      <button
        class="btn btn-primary m-1 dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter by Type
      </button>
      <ul class="dropdown-menu">
        <li
          @click.prevent="filterByType('beast')"
          class="dropdown-item selectable"
        >
          Beast
        </li>
        <li
          @click.prevent="filterByType('construct')"
          class="dropdown-item selectable"
        >
          Celestial
        </li>
        <li
          @click.prevent="filterByType('celestial')"
          class="dropdown-item selectable"
        >
          Construct
        </li>
        <li
          @click.prevent="filterByType('dragon')"
          class="dropdown-item selectable"
        >
          Dragon
        </li>
        <li
          @click.prevent="filterByType('elemental')"
          class="dropdown-item selectable"
        >
          Elemental
        </li>
        <li
          @click.prevent="filterByType('fey')"
          class="dropdown-item selectable"
        >
          Fey
        </li>
        <li
          @click.prevent="filterByType('fiend')"
          class="dropdown-item selectable"
        >
          Fiend
        </li>
        <li
          @click.prevent="filterByType('giant')"
          class="dropdown-item selectable"
        >
          Giant
        </li>
        <li
          @click.prevent="filterByType('humanoid')"
          class="dropdown-item selectable"
        >
          Humanoid
        </li>
        <li
          @click.prevent="filterByType('monstrosity')"
          class="dropdown-item selectable"
        >
          Monstrosity
        </li>
        <li
          @click.prevent="filterByType('ooze')"
          class="dropdown-item selectable"
        >
          Ooze
        </li>
        <li
          @click.prevent="filterByType('plant')"
          class="dropdown-item selectable"
        >
          Plant
        </li>
        <li
          @click.prevent="filterByType('undead')"
          class="dropdown-item selectable"
        >
          Undead
        </li>
      </ul>
      <div class="btn-group">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter Challenge Rating
        </button>
        <ul class="dropdown-menu">
          <li
            @click.prevent="filterByChallengeRating('1%2F8')"
            class="dropdown-item selectable"
          >
            1/8
          </li>
          <li
            @click.prevent="filterByChallengeRating('1%2F4')"
            class="dropdown-item selectable"
          >
            1/4
          </li>
          <li
            @click.prevent="filterByChallengeRating('1%2F2')"
            class="dropdown-item selectable"
          >
            1/2
          </li>
          <li
            @click.prevent="filterByChallengeRating('1')"
            class="dropdown-item selectable"
          >
            1
          </li>
          <li
            @click.prevent="filterByChallengeRating('2')"
            class="dropdown-item selectable"
          >
            2
          </li>
          <li
            @click.prevent="filterByChallengeRating('3')"
            class="dropdown-item selectable"
          >
            3
          </li>
          <li
            @click.prevent="filterByChallengeRating('4')"
            class="dropdown-item selectable"
          >
            4
          </li>
          <li
            @click.prevent="filterByChallengeRating('5')"
            class="dropdown-item selectable"
          >
            5
          </li>
          <li
            @click.prevent="filterByChallengeRating('6')"
            class="dropdown-item selectable"
          >
            6
          </li>
          <li
            @click.prevent="filterByChallengeRating('7')"
            class="dropdown-item selectable"
          >
            7
          </li>
          <li
            @click.prevent="filterByChallengeRating('8')"
            class="dropdown-item selectable"
          >
            8
          </li>
          <li
            @click.prevent="filterByChallengeRating('9')"
            class="dropdown-item selectable"
          >
            9
          </li>
          <li
            @click.prevent="filterByChallengeRating('10')"
            class="dropdown-item selectable"
          >
            10
          </li>
          <li
            @click.prevent="filterByChallengeRating('11')"
            class="dropdown-item selectable"
          >
            11
          </li>
          <li
            @click.prevent="filterByChallengeRating('12')"
            class="dropdown-item selectable"
          >
            12
          </li>
          <li
            @click.prevent="filterByChallengeRating('13')"
            class="dropdown-item selectable"
          >
            13
          </li>
          <li
            @click.prevent="filterByChallengeRating('14')"
            class="dropdown-item selectable"
          >
            14
          </li>
          <li
            @click.prevent="filterByChallengeRating('15')"
            class="dropdown-item selectable"
          >
            15
          </li>
          <li
            @click.prevent="filterByChallengeRating('16')"
            class="dropdown-item selectable"
          >
            16
          </li>
          <li
            @click.prevent="filterByChallengeRating('17')"
            class="dropdown-item selectable"
          >
            17
          </li>
          <li
            @click.prevent="filterByChallengeRating('18')"
            class="dropdown-item selectable"
          >
            18
          </li>
          <li
            @click.prevent="filterByChallengeRating('19')"
            class="dropdown-item selectable"
          >
            19
          </li>
          <li
            @click.prevent="filterByChallengeRating('20')"
            class="dropdown-item selectable"
          >
            20
          </li>
          <li
            @click.prevent="getHighChallengeRatingMonsters()"
            class="dropdown-item selectable"
          >
            21+
          </li>
        </ul>
      </div>

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
    const query = ref('')
    const ascending = ref(true)

    function scoreSorter(a, b) {
      if (ascending.value) {
        return b.armor_class - a.armor_class
      }
      return a.armor_class - b.armor_class
    }
    return {
      query,
      ascending,
      monsters: computed(() => AppState.monsters.sort(scoreSorter)),
      previousPage: computed(() => AppState.previousPage),
      nextPage: computed(() => AppState.nextPage),
      toggleAscending() {
        ascending.value = !ascending.value
      },
      async filterByChallengeRating(rating) {
        await monstersService.getMonstersByChallengeRating(rating)
      },
      async getHighChallengeRatingMonsters() {
        await monstersService.getHighChallengeRatingMonsters()
      },
      async filterByType(type) {
        await monstersService.filterByType(type)
      },
      async getMonsters() {
        try {
          await monstersService.getMonsters()
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      async findMonstersByQuery() {
        try {

          // await monstersService.getMonstersBySearch(query.value)
          await monstersService.getMonstersByName(query.value)
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
