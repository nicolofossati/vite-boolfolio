<template>
  <AppHeader></AppHeader>
  <h1 class="text-center">Che bello dinuovo VUE</h1>
  <router-view></router-view>
</template>


<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader
  }
}
</script>


<style lang="scss">
@use './styles/general.scss';
</style>
