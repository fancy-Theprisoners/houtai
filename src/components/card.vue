<template>
    <div class="main">
        <div class="card">
            <img src="../assets/image/1.png" alt="封面">
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .main {
        width: 100%;
        height: 100%;
    }

    .card {
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    .card>img {
        width: 30%;
        height: 30%;
        z-index: 20;
    }

    .card>img:hover {
        transform: scale(1.05);
    }
</style>