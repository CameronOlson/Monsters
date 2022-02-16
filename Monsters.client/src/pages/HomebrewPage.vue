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
        <button class="m-1 glow" @click.prevent="getUserMonsters()">
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

.glow {
  width: 10rem;
  height: 4rem;
  border: none;
  color: aliceblue;
  background: rgb(0, 0, 0);

  position: relative;
  border-radius: 10px;
  z-index: 0;
}
.glow:hover {
  color: rgb(255, 230, 0);
  transition: color 0.5s ease-in-out;
}
.glow:before {
  content: "";
  background: linear-gradient(red, orange, yellow, brown, rgb(0, 0, 0));
  position: absolute;
  color: red;
  z-index: -1;
  top: -3px;
  left: -5px;
  width: calc(100% + 13px);
  height: calc(100% + 13px);
  filter: blur(5px);

  transition: opacity 0.5s ease-in-out;
  opacity: 0;
  border-radius: 10px;
}
.glow:active:after {
  background: transparent;
}
.glow:hover:before {
  opacity: 1;
}
.glow:after {
  color: aliceblue;
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("https://media.moddb.com/images/mods/1/24/23941/wall2.jpg");
  left: 0;
  top: 0;
  border-radius: 10px;
}
.bg-black {
  background-color: #000;
}
.home-brew-pic {
  background-image: url("https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/dt3zmraefxn1mxp6uhml.png");
  height: 50rem;
}
</style>