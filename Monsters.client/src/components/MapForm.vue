<template>
  <form @submit.prevent="postMap()">
    <div class="mb-3">
      <label for="mapName" class="form-label">Map Name</label>
      <input
        type="string"
        class="form-control"
        id="mapName"
        v-model="editable.name"
      />
    </div>
    <div class="mb-3">
      <label for="mapUrl" class="form-label">Map URL</label>
      <input
        type="string"
        class="form-control"
        id="mapUrl"
        v-model="editable.img"
      />
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>


<script>
import { ref } from "@vue/reactivity"
import { watchEffect } from "@vue/runtime-core"
import { AppState } from "../AppState"
import { Modal } from "bootstrap"
import Pop from "../utils/Pop"
import { mapsService } from "../services/MapsService"
import { logger } from "../utils/Logger"
export default {
  setup() {
    const editable = ref({})
    watchEffect(() => {
      editable.value = { ...AppState.map }
    })
    return {
      editable,
      async postMap() {
        try {
          await mapsService.postMap(editable.value)
          const modal = Modal.getOrCreateInstance(document.getElementById("add-map"))
          modal.hide()
          Pop.toast("here is your map")
        } catch (error) {
          Pop.toast(error.message, 'error')
          logger.log(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>