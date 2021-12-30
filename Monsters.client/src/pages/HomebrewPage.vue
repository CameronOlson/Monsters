<template>
  <div class="component">
    <div>
      <UserMonsterCard v-for="u in userMonsters" :key="u.id" :userMonster="u" />
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
</style>