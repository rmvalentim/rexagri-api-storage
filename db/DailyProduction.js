import sequelize, { DataTypes } from 'sequelize'
import connection from './Connection.js'

const DailyProduction = connection.define('daily-production', {

    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    horimeter: {
        type: sequelize.STRING,
        allowNull: true
    },
    shiftCode: {
        type: sequelize.STRING,
        allowNull: true
    },
    shiftName: {
        type: sequelize.STRING,
        allowNull: true
    },
    offline: {
        type: sequelize.BOOLEAN,
        allowNull: true
    },
    date: {
        type: sequelize.STRING,
        allowNull: true
    },
    siteCode: {
        type: sequelize.STRING,
        allowNull: true
    },
    siteName: {
        type: sequelize.STRING,
        allowNull: true
    },
    operationCode: {
        type: sequelize.STRING,
        allowNull: true
    },
    operationName: {
        type: sequelize.STRING,
        allowNull: true
    },
    operationClass: {
        type: sequelize.STRING,
        allowNull: true
    },
    operationType: {
        type: sequelize.STRING,
        allowNull: true
    },
    equipmentCode: {
        type: sequelize.STRING,
        allowNull: true
    },
    equipmentModelCode: {
        type: sequelize.STRING,
        allowNull: true
    },
    equipmentModelName: {
        type: sequelize.STRING,
        allowNull: true
    },
    costCenter: {
        type: sequelize.STRING,
        allowNull: true
    },
    costCenterName: {
        type: sequelize.STRING,
        allowNull: true
    },
    fuel: {
        type: sequelize.STRING,
        allowNull: true
    },
    snapshots: {
        type: sequelize.INTEGER,
        allowNull: true
    },
    operatorCode: {
        type: sequelize.STRING,
        allowNull: true
    },
    operatorName: {
        type: sequelize.STRING,
        allowNull: true
    },
    hoursWorking: {
        type: sequelize.STRING,
        allowNull: true
    },
    hoursMoving: {
        type: sequelize.STRING,
        allowNull: true
    },
    hoursEngineIdle: {
        type: sequelize.STRING,
        allowNull: true
    },
    hoursStopped: {
        type: sequelize.STRING,
        allowNull: true
    },
    hoursOff: {
        type: sequelize.STRING,
        allowNull: true
    },
    hoursTotal: {
        type: sequelize.STRING,
        allowNull: true
    },
    area: {
        type: sequelize.STRING,
        allowNull: true
    },
    distance: {
        type: sequelize.STRING,
        allowNull: true
    },
    production_date: {
        type: sequelize.DATE,
        allowNull: true
    },

}, {
    tableName: 'daily-production',
    timestamps: false
})

export default DailyProduction