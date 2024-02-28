<template>
    <div class="loader-component">
        <BicycleSVG class="bicycle-svg"></BicycleSVG>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BicycleSVG from '../assets/bicycle.svg?component'


onMounted(() => {
})
</script>

<style scoped>
.bicycle-svg {
    width: 100%;
    height: 100%;
}

.bicycle-svg :deep(#front-wheel-group) {
    transform-origin: center center;
    animation: rotating 1.5s linear infinite;

}
.bicycle-svg :deep(#rear-wheel-group) {
    transform-origin: center center;
    animation: rotating 1.5s linear infinite;
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>