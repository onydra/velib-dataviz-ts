<template>
    <div id="container">
        <div id="map"></div>
        <canvas id="deck-canvas"></canvas>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

</script>

<style scoped lang="postcss">
#container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

#container>* {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>