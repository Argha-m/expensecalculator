<template>
  <div class="et_main_content">
    <Header />
    <ScrollPanel style="width: 100%; height: calc(100% - 60px)">
      <router-view></router-view>
    </ScrollPanel>
    <BottomNavigation />
  </div>
</template>

<script>
import BottomNavigation from './components/views/bottomNavigation/BottomNavigation.vue';
import Header from './components/views/header/Header.vue'

export default {
  name: 'App',
  components:{
    BottomNavigation,
    Header
  }
}
</script>

<style>
</style>
