import dotenv from 'dotenv'
dotenv.config()
import { Sequelize } from 'sequelize'

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_SERVER = process.env.DB_SERVER
const DB_NAME = process.env.DB_NAME
const DB_PORT = process.env.DB_PORT
const DB_INSTANCE = process.env.DB_INSTANCE

const sequelize = new Sequelize({
    username: DB_USERNAME,
    password: DB_PASSWORD,
    server: DB_SERVER,
    database: DB_NAME,
    port: DB_PORT,
    dialect: 'mssql',
    dialectOptions: {
        instanceName: DB_INSTANCE
    },
    logging: false
})

export default sequelize