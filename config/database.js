const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") })

const configs = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        dialect: process.env.DB_CONNECTION,
        pool: {
            max: 1000,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    },
    test: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        dialect: process.env.DB_CONNECTION,
        pool: {
            max: 1000,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        dialect: process.env.DB_CONNECTION,
        pool: {
            max: 1000,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    },
}

module.exports = configs[process.env.MODE]