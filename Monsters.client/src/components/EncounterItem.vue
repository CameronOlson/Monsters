<template>
  <div class="component">{{ encounter.name }}</div>
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