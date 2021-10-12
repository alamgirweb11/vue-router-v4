<template>
<Navigation/>
    <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navigation from './components/pages/Navigation.vue';

export default {
  name: 'App',
  components: {
         Navigation,
  }
}
</script>

<style>

</style>
