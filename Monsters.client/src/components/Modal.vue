<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content monster-pic">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <slot name="modal-title"></slot>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <slot name="modal-body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.monster-pic {
  background-image: url("https://media.istockphoto.com/photos/black-brick-wall-background-texture-dark-masonry-picture-id915097804?b=1&k=20&m=915097804&s=170667a&w=0&h=tWu_L3KysRE2q63VYx0LVkPojHmTKTj5TITlh2wMI7g=");
  color: aliceblue;
}
</style>