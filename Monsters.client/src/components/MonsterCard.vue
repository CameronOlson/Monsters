<template>
  <button
    class="card"
    data-bs-toggle="modal"
    :data-bs-target="'#monster' + monster.slug"
  >
    <div class="card-body">
      {{ monster.name }}
    </div>
  </button>
  <Modal :id="'monster' + monster.slug">
    <template #modal-title>
      <h6>This is your monster</h6>
    </template>
    <template #modal-body>
      <h1>{{ monster.name }}</h1>
    </template>
  </Modal>
</template>


<script>
export default {
  props: {
    monster: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>