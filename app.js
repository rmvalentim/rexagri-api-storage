import getYesterdayDatetimeRange from './tools/GetYesterdayDatetimeRange.js'
import getRexSnapshotsByDateRange from './api/GetRexSnapshotsByDateRange.js'
import Snapshot from './db/Snapshot.js'
import log from 'log-to-file'

export default async function fetchApiSnapshotsAndRegisterInDatabase() {
    log('*** INITIALIZING REX API BUSINESS INTELIGENCE APP ***')
    const apiSnapshotsData = await getApiSnapshotData(getYesterdayDatetimeRange())
    await iterateOverEquipmentsSnapshots(apiSnapshotsData)
    log('*** FINISHING REX API BUSINESS INTELIGENCE APP ***')
}

async function getApiSnapshotData(yesterdayDatetimeRange) {
    try {
        log('getApiSnapshotData - Initializing Rex API fetch.')
        const apiSnapshotsData = await getRexSnapshotsByDateRange({
            beginDatetime: yesterdayDatetimeRange.beginDatetime,
            endDatetime: yesterdayDatetimeRange.endDatetime
        })
        log(`getApiSnapshotData - Data of ${Object.keys(apiSnapshotsData).length} equipments found.`)
        return apiSnapshotsData
    } catch (error) {
        log(`getApiSnapshotData - Error on fetch api: ${error}`)
    }
}

async function iterateOverEquipmentsSnapshots(apiSnapshotsData) {
    log('iterateOverEquipmentsSnapshots - Getting every equipment snapshots list')
    for (let key in apiSnapshotsData) {
        const equipamentData = apiSnapshotsData[key]
        try {
            log(`iterateOverEquipmentsSnapshots - Persisting Equipment ${key} data`)
            await persistEquipmentSnapshots(equipamentData)
        } catch (error) {
            log(`Error on persist equipment data: ${error}`);
        }

    }
}

async function persistEquipmentSnapshots(equipmentData) {
    for (let snapshot of equipmentData) {
        try {
            const snapshotDatetime = convertTimestampToISOString(snapshot.ts)
            await createSnapshotInDatabase(snapshot, snapshotDatetime)
        } catch (error) {
            log(`Error on create snapshot: ${error}`);
        }
    }
}

function convertTimestampToISOString(timestamp) {
    const snapshot_datetime = new Date(timestamp)
    return new Date(snapshot_datetime).toISOString()
}

async function createSnapshotInDatabase(snapshot, snapshotDatetime) {
    try {
        await Snapshot.create({
            ...snapshot,
            equipment_id: snapshot['equipment-id'],
            to_os: snapshot.to,
            snapshot_datetime: snapshotDatetime
        })
    } catch (error) {
        log(`createSnapshotInDatabase - Error on registes snapshot in database: ${error}`)
    }
}