<template>
  <div class="component">
    <div :title="token.name">
      <img
        class="token-plug img-fluid"
        :src="token.picture"
        alt=""
        draggable="true"
        ondragstart="drag(event)"
      />
    </div>
  </div>
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
.token-plug {
  height: 25px;
  width: 25px;
  border-radius: 50%;
}
</style>