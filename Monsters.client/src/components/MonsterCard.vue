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
      <div class="col-3">CR: {{ monster.challenge_rating }}</div>
      <div class="col-3">AC: {{ monster.armor_class }}</div>
      <div class="col-3">HP: {{ monster.hit_points }}</div>
    </div>
  </button>
  <Modal :id="'monster' + monster.slug">
    <template #modal-title>
      <h1>{{ monster.name }}</h1>
      <div>CR:{{ monster.challenge_rating }}</div></template
    >
    <template #modal-body>
      <div class="row">
        <div class="col-6">
          <div class="row">
            <div class="col-6">
              <div>AC:{{ monster.armor_class }}</div>
            </div>
            <div class="col-6">
              <div>HP: {{ monster.hit_points }}</div>
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-2">STR {{ monster.strength }}</div>
                <div class="col-2">DEX {{ monster.dexterity }}</div>
                <div class="col-2">CON {{ monster.constitution }}</div>
                <div class="col-2">INT {{ monster.intelligence }}</div>
                <div class="col-2">WIS {{ monster.wisdom }}</div>
                <div class="col-2">CHA {{ monster.charisma }}</div>
                <div class="col-12">
                  <strong> Damage Immunities </strong> <br />
                  {{ monster.damage_immunities }}
                </div>
                <div class="col-12">
                  <strong>Conditional Immunities</strong> <br />
                  {{ monster.condition_immunities }}
                </div>
                <div class="col-12">
                  <strong>Senses</strong> <br />
                  {{ monster.senses }}
                </div>
                <div class="col-12">
                  <strong>Languages</strong> <br />
                  {{ monster.languages }}
                </div>
                <div class="col-12">
                  <strong>Actions</strong> <br />
                  {{ monster.actions }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">Trascore</div>
      </div>
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