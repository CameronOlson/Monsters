<template>
  <div class="card">
    <div class="card-body">
      {{ monster.name }}
    </div>
  </div>
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