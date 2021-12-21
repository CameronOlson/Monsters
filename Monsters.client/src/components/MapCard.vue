<template>
  <div class="component">
    <p>{{ map.name }}</p>
  </div>
</template>


<script>
export default {
  props: {
    map: {
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