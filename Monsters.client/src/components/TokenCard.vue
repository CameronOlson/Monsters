<template>
  <div class="component">{{ token.name }}</div>
</template>


<script>
export default {
  props: {
    token: {
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