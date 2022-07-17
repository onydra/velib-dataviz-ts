import { defineStore } from 'pinia'

export interface SnapshotEntry {
    data: any,
    default: any,
    lastUpdatedOther: number,
    ttl: number
}

export type SnapshotsMap = {
    [timestamp: string]: SnapshotEntry
}

const snapshotPath = '../assets/velib_data/station_status_snapshots_processed/'
const snapshotsContext = import.meta.glob(`../assets/velib_data/station_status_snapshots_processed/*.json`)

const getSnapShotMap = async (): Promise<SnapshotsMap> => {
    let snapshots: SnapshotsMap = {}
    Object.keys(snapshotsContext).forEach(async function (key: string) {
        const timestampKey = key
            .replace(snapshotPath, '')
            .replace('.json', '')
        snapshots[timestampKey] = await snapshotsContext[key]() as SnapshotEntry
    })
    return snapshots
}

export const useSnapshotStore = defineStore('SnapshotStore', {
    state() {
        return {
            snapshots: {} as SnapshotsMap,
            isLoading: false
        }
    },
    actions: {
        async loadSnapshots() {
            this.isLoading = true
            const snapshots: SnapshotsMap = await getSnapShotMap()
            this.isLoading = false
        }
    }
})
