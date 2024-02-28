<template>
    <div class="timeline-component rounded-lg flex flex-row px-10 py-5">
        <div class="snapshots-container flex flex-row flex-1 justify-between">
            <div class="snapshot-line rounded-lg" v-for="index in snapshotLines"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSnapshotStore } from '../stores/Snapshot'
import { useWindowSize } from '@vueuse/core'
import { computed} from 'vue'

const snapshotStore = useSnapshotStore()
const { width } = useWindowSize()

const snapshotLines = computed(() => {
    return Math.round(width.value * 0.06)
})

</script>

<style scoped>

.timeline-component {
    backdrop-filter: blur(10px) saturate(180%);
}
.snapshot-line {
    width: 2px;
    height: 30px;
    background: white;
}

.snapshots-container {
}
</style>