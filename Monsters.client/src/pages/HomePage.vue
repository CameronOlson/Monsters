<template>
  <div class="component">
    <div class="row p-1">
      <div class="col-3 m-auto">
        <router-link :to="{ name: 'Home.fifthEdition' }">
          <button class="m-2 btn btn-secondary text-uppercase text-light">
            5e
          </button>
        </router-link>
        <router-link :to="{ name: 'Home.homebrew' }">
          <button class="btn btn-secondary text-uppercase text-light">
            Homebrew
          </button>
        </router-link>
      </div>
    </div>
    <router-view />
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
</style>