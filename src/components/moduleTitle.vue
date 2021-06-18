<template>
    <div id="main">
        <div id="title">{{count}}</div>
        <div id="img"><img src="../assets/image/page001/moduleTitle.png" alt="title"></div>
    </div>
</template>

<script>
    export default {
  props: {
    count: String,
  },
    }
</script>

<style>
    #main {
        display: flex;
        flex-direction: row;
    }

    #title {
        color: aliceblue;
    }

    #img img {
        width: 30%;
        height: 2%;
        margin-top: 0.4%;
    }
</style>