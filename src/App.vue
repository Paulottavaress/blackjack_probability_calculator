<template>
  <app-header></app-header>
  <app-game-mode></app-game-mode>
  <app-footer></app-footer>
</template>

<script>
import Header from './components/Shared/Header.vue'
import GameMode from './components/GameMode/GameMode.vue'
import Footer from './components/Shared/Footer.vue'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-game-mode': GameMode
  }
}
</script>
