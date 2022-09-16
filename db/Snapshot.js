import sequelize from 'sequelize'
import connection from './Connection.js'

const Snapshot = connection.define('snapshot', {

    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ni: {
        type: sequelize.INTEGER,
        allowNull: true
    },
    l1: {
        type: sequelize.STRING,
        allowNull: true
    },
    odo: {
        type: sequelize.INTEGER,
        allowNull: true
    },
    eq: {
        type: sequelize.STRING,
        allowNull: true
    },
    n: {
        type: sequelize.INTEGER,
        allowNull: true
    },
    equipment_id: {
        type: sequelize.INTEGER,
        allowNull: true
    },
    op: {
        type: sequelize.INTEGER,
        allowNull: true
    },
    eop: {
        type: sequelize.INTEGER,
        allowNull: true
    },
    ts: {
        type: sequelize.BIGINT,
        allowNull: true
    },
    opr: {
        type: sequelize.STRING,
        allowNull: true
    },
    efr: {
        type: sequelize.FLOAT,
        allowNull: true
    },
    st: {
        type: sequelize.STRING,
        allowNull: true
    },
    implw: {
        type: sequelize.STRING,
        allowNull: true
    },
    l2: {
        type: sequelize.STRING,
        allowNull: true
    },
    app: {
        type: sequelize.STRING,
        allowNull: true
    },
    spd: {
        type: sequelize.FLOAT,
        allowNull: true
    },
    ect: {
        type: sequelize.FLOAT,
        allowNull: true
    },
    l3: {
        type: sequelize.STRING,
        allowNull: true
    },
    d: {
        type: sequelize.INTEGER,
        allowNull: true
    },
    hm: {
        type: sequelize.FLOAT,
        allowNull: true
    },
    impl: {
        type: sequelize.STRING,
        allowNull: true
    },
    etf: {
        type: sequelize.FLOAT,
        allowNull: true
    },
    latlng: {
        type: sequelize.STRING,
        allowNull: true
    },
    rpm: {
        type: sequelize.INTEGER,
        allowNull: true
    },
    to_os: {
        type: sequelize.STRING,
        allowNull: true
    },
    snapshot_datetime: {
        type: sequelize.DATE,
        allowNull: true
    },

}, {
    timestamps: false
})

export default Snapshot