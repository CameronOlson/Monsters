<template>
  <div class="col-md-3">
    <div class="card border-dark mb-3" style="max-width: 18rem">
      <h5 class="card-header">{{ encounter.name }}</h5>
      <div class="card-body text-dark">
        <p class="card-text">{{ encounter.desc }}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    encounter: {
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