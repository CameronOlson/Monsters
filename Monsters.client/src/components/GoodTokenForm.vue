<template>
  <form @submit.prevent="postGoodToken()">
    <div class="mb-3">
      <label for="tokenName" class="form-label">Token Name</label>
      <input
        type="string"
        class="form-control"
        id="tokenName"
        v-model="editable.name"
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