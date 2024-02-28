<template>
    <div id="container">
        <div id="map"></div>
        <canvas id="deck-canvas"></canvas>

    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import mapboxgl from 'mapbox-gl'
import { useSnapshotStore } from '../stores/Snapshot'
import type { Ref } from 'vue'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

const snapshotStore = useSnapshotStore()

const INITIAL_VIEW_STATE = {
    latitude: 48.8566,
    longitude: 2.3522,
    zoom: 12,
    minZoom: 10,
    // maxZoom: 15,
    pitch: 40.5,
    bearing: 30
}

let map: Ref<mapboxgl.Map | null> = ref(null)

const loadMap = () => {
    const { longitude, latitude, zoom, bearing, pitch } = INITIAL_VIEW_STATE
    map.value = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/nayrrod/ck5o57cn71g3z1ioai8gebzj7',
        // Note: deck.gl will be in charge of interaction and event handling
        interactive: false,
        center: [longitude, latitude],
        zoom: zoom,
        bearing: bearing,
        pitch: pitch
    })
}



onMounted(() => {
    loadMap()
})


</script>

<script lang="ts">


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