<template>
  <app-header></app-header>
  <app-game-mode></app-game-mode>
</template>

<script>
import Header from './Header.vue'
import GameMode from '../GameMode/GameMode.vue'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-game-mode': GameMode
  }
}
</script>

<style scoped>

</style>