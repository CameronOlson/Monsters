<template>
  <div class="container-fluid home-brew-pic">
    <div class="component">
      <div class="row">
        <div class="col-6 m-auto">
          <!-- <form
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
          </form> -->
        </div>
      </div>
    </div>

    <div class="row m-3">
      <div class="col-12 button-layout">
        <button class="m-1 glow-on-hover" @click.prevent="getUserMonsters()">
          Get Monsters
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
    // watchEffect(async () => {
    //   try {
    //     AppState.userMonsters = []
    //     await userMonstersService.getUserMonsters()
    //   } catch (error) {
    //     Pop.toast(error)
    //   }
    // })
    return {
      userMonsters: computed(() => AppState.userMonsters),
      async getUserMonsters() {
        await userMonstersService.getUserMonsters()
      }
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
  background-image: url("https://mocah.org/uploads/posts/1105873-fantasy-art-artwork-dragon-mythology-Dungeons-Dragons-Drizzt-Do-Urden-screenshot-pc-game.jpg");
  height: 50rem;
}
</style>