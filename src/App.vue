<template>
  <div class="home">
    <div class="loader-container" v-if="snapshotStore.isLoading">
      <Loader class="loader"></Loader>
    </div>
    <div class="ui-overlay" v-else>
      <Deck></Deck>
      <div class="timeline-container p-10">
        <Timeline class="timeline"></Timeline>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Deck from './components/Deck.vue'
import Timeline from './components/Timeline.vue'
import { useSnapshotStore } from './stores/Snapshot'
import Loader from './components/Loader.vue'

const snapshotStore = useSnapshotStore()
snapshotStore.loadSnapshots()
</script>


<style lang="css">
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg-color: #1d202a;
  --text-color: white;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

.home {
  position: relative;
}

.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ui-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
}

.timeline-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 3;
}

.loader {
  width: 200px;
  height: 200px;
}

/* Makes transform origin work as intended */
svg * {
  transform-box: fill-box;
}
</style>
