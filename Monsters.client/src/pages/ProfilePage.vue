<template>
  <div class="container-fluid profile-bg-pic">
    <div class="row">
      <div class="col-4 p-1">
        <img class="profile-pic" :src="profile.picture" alt="" />
        <div class="move-text glass">
          {{ profile.name }}
        </div>
      </div>
      <div class="col-4 profile-buttons">
        <div v-if="account.id === route.params.profileId" class="col">
          <button
            data-bs-toggle="modal"
            data-bs-target="#create-encounter"
            class="glow m-1"
          >
            Create Encounter
          </button>
        </div>
        <div v-if="account.id === route.params.profileId" class="col">
          <button
            data-bs-toggle="modal"
            data-bs-target="#create-monster"
            class="glow m-1"
          >
            Create Monster
          </button>
        </div>
      </div>
      <div class="col-4"></div>
    </div>

    <div class="row center-this">
      <div>
        <h1>Encounters</h1>
      </div>
    </div>
    <div class="row">
      <EncounterCard v-for="e in encounters" :key="e.id" :encounter="e" />
    </div>

    <!-- bottom portion -->
    <div class="row">
      <h1>Monsters</h1>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <UserMonsterCard
          v-for="u in userMonsters"
          :key="u.id"
          :userMonster="u"
        />
      </div>
      <div class="col-1"></div>
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
import { profileService } from "../services/ProfileService"
import { userMonstersService } from "../services/UserMonstersService"
export default {
  name: 'Profile',
  setup() {
    const route = useRoute()
    watchEffect(async () => {
      if (route.params.profileId)
        try {
          await encountersService.getEncountersByProfile(route.params.profileId)
          await userMonstersService.getUserMonstersByProfileId(route.params.profileId)
          await profileService.getProfileById(route.params.profileId)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
    })

    return {
      route,
      account: computed(() => AppState.account),
      encounters: computed(() => AppState.encounters),
      userMonsters: computed(() => AppState.userMonsters),
      profile: computed(() => AppState.profile)
    }
  }
}
</script>


<style lang="scss" scoped>
.profile-pic {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
.move-text {
  transform: translate(-50px, 35px);
  font-size: 12px;
}
.glass {
  position: relative;
  display: inline-block;
  padding: 4px 4px;
  background-color: black;
  background-image: linear-gradient(45deg, #ad0909, #014b91, #585601);
  text-decoration: none;
  color: #fff;
  border-radius: 20px;
  font-family: sans-serif;
  font-weight: 100;
}
.profile-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
.profile-bg-pic {
  background-image: url("https://cdn.mos.cms.futurecdn.net/eTx9sbhVFC6BXNUrEcSniL-1200-80.jpeg");
  height: 50rem;
}
.center-this {
}
</style>