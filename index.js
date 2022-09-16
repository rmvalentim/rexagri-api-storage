import dotenv from 'dotenv'
dotenv.config()
import fetchApiSnapshotsAndRegisterInDatabase from './services/snapshotsService.js'
import fetchApiDailyProductionAndRegisterInDatabase from './services/dailyProductionService.js'

async function runApp() {
    await fetchApiSnapshotsAndRegisterInDatabase()
    await fetchApiDailyProductionAndRegisterInDatabase()
}

runApp()