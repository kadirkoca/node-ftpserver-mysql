const fs = require("fs")
const path = require("path")
const Sequelize = require("sequelize")
const config = require("../config/database")
const db = {}

const sequelize = new Sequelize(config.database, config.username, config.password, config)

// Loading Models
const modelsPath = path.join(__dirname, "..", "app/models")
fs.readdirSync(modelsPath)
    .filter((file) => {
        return file.indexOf(".") !== 0 && file.slice(-3) === ".js"
    })
    .forEach((file) => {
        const model = require(path.join(modelsPath, file))(sequelize, Sequelize.DataTypes)
        db[model.name] = model
    })

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db)
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
