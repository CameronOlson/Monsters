<template>
  <form @submit.prevent="postGoodToken()">
    <div class="mb-3">
      <label for="tokenName" class="form-label">Name</label>
      <input
        type="string"
        class="form-control"
        id="tokenName"
        v-model="editable.name"
      />
      <label for="tokenImg" class="form-label">Image</label>
      <input
        type="string"
        class="form-control"
        id="tokenImg"
        v-model="editable.picture"
      />
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>


<script>
import { ref } from "@vue/reactivity"
import { watchEffect } from "@vue/runtime-core"
import { AppState } from "../AppState"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { Modal } from "bootstrap"
import { tokensService } from "../services/TokensService"
export default {
  setup() {
    const editable = ref({})
    watchEffect(() => {
      editable.value = { ...AppState.token }
    })
    return {
      editable,
      async postGoodToken() {
        try {
          await tokensService.postGoodToken(editable.value)
          const modal = Modal.getOrCreateInstance(document.getElementById("add-goodToken"))
          modal.hide()
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