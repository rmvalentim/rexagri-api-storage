import getRexDailyProduction from '../api/GetRexDailyProduction.js'
import DailyProduction from '../db/DailyProduction.js'
import log from 'log-to-file'
import convertStringToDate from '../tools/ConvertStringToDate.js'
import getYesterdayStringDate from '../tools/GetYesterdayStringDate.js'

export default async function fetchApiDailyProductionAndRegisterInDatabase() {
    log('*** INITIALIZING REX API BUSINESS INTELIGENCE APP - DAILY PRODUCTIONS ***')
    const yesterday = getYesterdayStringDate()
    const dailyProduction = await getApiDailyProductionData(yesterday)
    await iterateOverEquipmentsDailyProductions(dailyProduction)
    log('*** FINISHING REX API BUSINESS INTELIGENCE APP - DAILY PRODUCTIONS ***')
}

async function getApiDailyProductionData(yesterday) {

    try {
        log('getApiDailyProductionData - Initializing Rex API fetch.')
        const apiDailyProductionData = await getRexDailyProduction(yesterday)
        log(`getApiDailyProductionData - Data of ${Object.keys(apiDailyProductionData).length} equipments found.`)
        return apiDailyProductionData
    } catch (error) {
        log(`getApiDailyProductionData - Error on fetch api: ${error}`)
    }
}

async function iterateOverEquipmentsDailyProductions(apiDailyProductionData) {
    log('iterateOverEquipmentsDailyProductions - Getting every equipment daily production list')
    for (let key in apiDailyProductionData) {
        const equipamentData = apiDailyProductionData[key]
        try {
            log(`iterateOverEquipmentsDailyProductions - Persisting Equipment ${key} data`)
            await persistEquipmentDailyProductions(equipamentData)
        } catch (error) {
            log(`Error on persist equipment data: ${error}`);
        }
    }
}

async function persistEquipmentDailyProductions(dailyProductions) {
    for (let dailyProduction of dailyProductions) {
        try {
            await createDailyProductionInDatabase(dailyProduction)
        } catch (error) {
            log(`Error on create snapshot: ${error}`);
        }
    }
}

async function createDailyProductionInDatabase(dailyProduction) {
    try {
        await DailyProduction.create(parseDailyProductionData(dailyProduction))
    } catch (error) {
        log(`createDailyProductionInDatabase - Error on registes Daily Production in database: ${error}`)
    }
}

function parseDailyProductionData(dp) {
    return {
        ...dp,
        shiftCode: dp.shift.code,
        shiftName: dp.shift.name,
        siteCode: dp.site.code,
        siteName: dp.site.name,
        operationCode: dp.operation.code,
        operationName: dp.operation.name,
        operationClass: dp.operation.class,
        operationType: dp.operation.type,
        equipmentCode: dp.equipment.code,
        equipmentModelCode: dp.equipment.model.code,
        equipmentModelName: dp.equipment.model.name,
        costCenter: dp['cost-center'].code,
        costCenterName: dp['cost-center'].name,
        operatorCode: dp.operator.code,
        operatorName: dp.operator.name,
        hoursWorking: dp.hours.working,
        hoursMoving: dp.hours.moving,
        hoursEngineIdle: dp.hours['engine-idle'],
        hoursStopped: dp.hours.stopped,
        hoursOff: dp.hours.off,
        hoursTotal: dp.hours.total,
        production_date: convertStringToDate(dp.date)
    }
}
