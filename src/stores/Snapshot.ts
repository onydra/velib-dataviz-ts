import { defineStore } from 'pinia'
import * as statusDataset from '../assets/velib_data/station_status_snapshots/1579659605.json'
import * as stationInformationDataset from '../assets/velib_data/station_information.json'
import {merge, keyBy} from 'lodash'
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
    const snapshotsMapPromise = new Promise((resolve, reject) => {
        const modulesCount = Object.keys(snapshotsContext).length
        let modulesLoaded = 0
        let snapshots: SnapshotsMap = {}
        Object.keys(snapshotsContext).forEach(async function (key: string) {
            const timestampKey = key
                .replace(snapshotPath, '')
                .replace('.json', '')
            snapshots[timestampKey] = await snapshotsContext[key]() as SnapshotEntry
            modulesLoaded += 1
            if(modulesCount === modulesLoaded) resolve(snapshots)
        })
    })
    return snapshotsMapPromise as Promise<SnapshotsMap>
}

const stationStatuses = statusDataset.default.data.stations
const stationInformation = stationInformationDataset.default.data.stations

function augmentSnapshotWithStationInfo (snapshot) {
  const stationInformation = stationInformationDataset.default.data.stations
  const merged = merge(keyBy(snapshot, 'station_id'), keyBy(stationInformation, 'station_id'))
  let dataSet = Object.values(merged)
  return dataSet
}


export const useSnapshotStore = defineStore('SnapshotStore', {
    state() {
        return {
            snapshots: {} as SnapshotsMap,
            isLoading: false
        }
    },
    getters: {
        snapshotsAsArray: (state) => {
            return Object.values(state.snapshots)
        }
    },
    actions: {
        async loadSnapshots() {
            this.isLoading = true
            const snapshots: SnapshotsMap = await getSnapShotMap()
            this.isLoading = false
            this.snapshots = snapshots
        }
    }
})
