<template>
    <div id="container">
        <div id="map"></div>
        <canvas id="deck-canvas"></canvas>
    </div>
</template>

<script setup lang="ts">
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
</script>
<script lang="ts">

const INITIAL_VIEW_STATE = {
    latitude: 48.8566,
    longitude: 2.3522,
    zoom: 12,
    minZoom: 10,
    // maxZoom: 15,
    pitch: 40.5,
    bearing: 30
}

export default {
    name: 'Deck',
    mounted() {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/nayrrod/ck5o57cn71g3z1ioai8gebzj7',
            // Note: deck.gl will be in charge of interaction and event handling
            interactive: false,
            center: [INITIAL_VIEW_STATE.longitude, INITIAL_VIEW_STATE.latitude],
            zoom: INITIAL_VIEW_STATE.zoom,
            bearing: INITIAL_VIEW_STATE.bearing,
            pitch: INITIAL_VIEW_STATE.pitch
        })
    }
}
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