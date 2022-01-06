<template>
  <div class="container-fluid">
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
            class="glow-on-hover m-1"
          >
            Create Encounter
          </button>
        </div>
        <div v-if="account.id === route.params.profileId" class="col">
          <button
            data-bs-toggle="modal"
            data-bs-target="#create-monster"
            class="glow-on-hover m-1"
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
.center-this {
}
</style>