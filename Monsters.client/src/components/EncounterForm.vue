<template>
  <form @submit.prevent="createEncounter()">
    <div class="mb-3">
      <label for="name" class="form-label">Encounter Name</label>
      <input
        type="string"
        class="form-control"
        id="name"
        v-model="editable.name"
      />
    </div>
    <div class="mb-3">
      <label for="desc" class="form-label">Encounter Description</label>
      <input
        type="string"
        class="form-control"
        id="desc"
        v-model="editable.desc"
      />
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>


<script>
import Pop from '../utils/Pop'
import { encountersService } from '../services/EncountersService'
import { computed, ref } from '@vue/reactivity'
import { AppState } from '../AppState'
import { Modal } from 'bootstrap'
export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      account: computed(() => AppState.account),
      async createEncounter() {
        try {
          await encountersService.createEncounter(editable.value, this.account.id)
          const modal = Modal.getInstance(document.getElementById('create-encounter'))
          modal.hide()
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>