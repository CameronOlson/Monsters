<template>
  <button
    class="card"
    data-bs-toggle="modal"
    :data-bs-target="'#monster' + monster.slug"
  >
    <div class="col-12 card-body monster-card">
      <div class="col-3">
        {{ monster.name }}
      </div>
      <div class="col-3">CR:{{ monster.challenge_rating }}</div>
      <div class="col-3">AC:{{ monster.armor_class }}</div>
      <div class="col-3">HP: {{ monster.hit_points }}</div>
    </div>
  </button>
  <Modal :id="'monster' + monster.slug">
    <template #modal-title>
      <h6>This is your monster</h6>
    </template>
    <template #modal-body>
      <h1>{{ monster.name }}</h1>
      <div>AC:{{ monster.armor_class }}</div>
      <div>HP: {{ monster.hit_points }}</div>
      <div>CR:{{ monster.challenge_rating }}</div>
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
.monster-card {
  display: flex;
  justify-content: space-between;
}
</style>