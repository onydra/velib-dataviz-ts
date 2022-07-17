<template>
  <div class="home">
    <div class="loader-container" v-if="snapshotStore.isLoading">
      <span>Loading that sweet sweet data ...</span>
    </div>
    <div id="ui-overlay" v-else>
      <Deck></Deck>
    </div>
  </div>
</template>

<script setup lang="ts">
import Deck from './components/Deck.vue'
import { useSnapshotStore } from './stores/Snapshot'

const snapshotStore = useSnapshotStore()
snapshotStore.loadSnapshots()
</script>


<style lang="css">
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
</style>
