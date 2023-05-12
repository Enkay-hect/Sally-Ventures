<template>
 <div>
    <navbar />
    <router-view></router-view>
    <newsletter />
    <bottom />

 </div>
</template>

<script>
  import home from './views/homepage.vue'
  import navbar from './components/navbar.vue'
  import newsletter from './components/newsletter.vue';
  import bottom from './components/bottom.vue'

  export default {
    name: 'App',
    components: {navbar, home, newsletter, bottom}
  }
</script>

<style scoped>

  @media (max-width: 800px) {
    #happ{
      width: 100%;
      margin: 0;
      padding: 0;
    }
  }

</style>