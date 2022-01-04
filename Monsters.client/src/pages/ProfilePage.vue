<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="p-3">Profile Page</h1>
    </div>
    <div class="row">
      <h2 class="p-3">Encounters</h2>
      <div v-if="account.id === route.params.profileId" class="col">
        <button
          data-bs-toggle="modal"
          data-bs-target="#create-encounter"
          class="btn btn-success"
        >
          Create Encounter
        </button>
      </div>
      <div v-if="account.id === route.params.profileId" class="col">
        <button
          data-bs-toggle="modal"
          data-bs-target="#create-monster"
          class="btn btn-success"
        >
          Create Monster
        </button>
      </div>
    </div>
    <div class="row my-3">
      <EncounterCard v-for="e in encounters" :key="e.id" :encounter="e" />
    </div>
    <div class="row my-3">
      <UserMonsterCard v-for="u in userMonsters" :key="u.id" :userMonster="u" />
    </div>
  </div>

  <Modal id="create-encounter">
    <template #modal-title>
      <h6>Encounter</h6>
    </template>
    <template #modal-body>
      <EncounterForm />
    </template>
  </Modal>
  <Modal id="create-monster">
    <template #modal-title>
      <h6>Monster</h6>
    </template>
    <template #modal-body>
      <MonsterForm />
    </template>
  </Modal>
</template>


<script>
import Pop from '../utils/Pop'
import { encountersService } from '../services/EncountersService'
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import { watchEffect } from '@vue/runtime-core'
import { monstersService } from "../services/MonstersService"
import { userMonstersService } from "../services/UserMonstersService"
export default {
  setup() {
    const route = useRoute()
    watchEffect(async () => {
      if (route.params.profileId)
        try {
          await encountersService.getEncountersByProfile(route.params.profileId)
          await userMonstersService.getUserMonstersByProfileId(route.params.profileId)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
    })

    return {
      route,
      account: computed(() => AppState.account),
      encounters: computed(() => AppState.encounters),
      userMonsters: computed(() => AppState.userMonsters)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>