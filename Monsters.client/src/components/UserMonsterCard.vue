<template>
  <div class="component">{{ userMonster.name }}</div>
</template>


<script>
export default {
  props: {
    userMonster: {
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