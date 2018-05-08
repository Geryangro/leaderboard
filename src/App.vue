<template>
  <div id="app">
    <leaderboard/>
  </div>
</template>

<script>
import leaderboard from './components/leaderboard'
import test from './components/test'
import alert from './components/alert'

export default {
  name: 'app',
  components: {
    leaderboard,
  },
  metaInfo: {
      title: 'Leaderboard Agen Afrakids',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'favicon', href: 'favicon1.png', type: 'image/png' }
      ]
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
