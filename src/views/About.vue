<template>
  <div class="about_main">
    <div class="about_card">
      <Card @click="page(1)" />
    </div>
  </div>
</template>

<script>
  import router from '../router'
  import Card from '../components/card'
  export default {
    components: {
      Card
    },
    methods: {
      page(order) {
        switch (order) {
          case 1:
            router.push({
              path: '/page001'
            });
            break;
        }
      }
    }
  }
</script>

<style>
  .about_main {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .about_card {
    border: yellow 1px solid;
    overflow: hidden;
    width: 27%;
    height: 30%;
    cursor: pointer;
    margin-left: 2%;
    margin-top: 1%;
  }
</style>