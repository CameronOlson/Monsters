<template>
  <div class="container-fluid home-brew-pic">
    <div class="component">
      <div class="row">
        <div class="col-6 m-auto">
          <form
            @submit.prevent="findMonstersByQuery()"
            class="rounded elevation-1 m-1"
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
        </div>
      </div>
    </div>

    <div class="row m-3">
      <div class="col-12 button-layout">
        <button class="m-1 glow-on-hover" @click.prevent="getMonsters()">
          Get Monsters
        </button>

        <button class="m-1 glow-on-hover" @click="toggleAscending()">
          Toggle by AC
        </button>

        <button
          class="glow-on-hover"
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

        <button
          class="glow-on-hover"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter by Challenge Rating
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

        <button
          v-if="nextPage"
          class="glow-on-hover"
          @click.prevent="changePage(nextPage)"
        >
          next page
        </button>

        <button
          v-if="previousPage"
          class="glow-on-hover"
          @click.prevent="changePage(previousPage)"
        >
          previous page
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10 scroll-div">
        <UserMonsterCard
          v-for="u in userMonsters"
          :key="u.id"
          :userMonster="u"
        />
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>



<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { userMonstersService } from "../services/UserMonstersService"
import Pop from "../utils/Pop"
import { watchEffect } from "@vue/runtime-core"
export default {
  setup() {
    watchEffect(async () => {
      try {
        AppState.userMonsters = []
        await userMonstersService.getUserMonsters()
      } catch (error) {
        Pop.toast(error)
      }
    })
    return {
      userMonsters: computed(() => AppState.userMonsters)
    }
  }
}
</script>


<style lang="scss" scoped>
.button-layout {
  display: flex;
  justify-content: space-evenly;
}

.glow-on-hover {
  width: 220px;
  height: 50px;
  color: rgb(255, 255, 255);
  border: none;
  outline: none;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

.glow-on-hover:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:active {
  color: rgba(199, 17, 17, 0);
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(17, 17, 17);
  left: 0;
  top: 0;
  border-radius: 10px;
}
.scroll-div {
  height: 41rem;
  overflow: scroll;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
.bg-black {
  background-color: #000;
}
.home-brew-pic {
  background-image: url("https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/349460/092ed99ce7a4222877032b1162a9ee0fdc69fd4e.jpg");
  height: 50rem;
}
</style>